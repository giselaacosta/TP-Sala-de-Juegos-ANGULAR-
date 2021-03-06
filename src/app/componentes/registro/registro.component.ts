import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[AuthService]
})
export class RegistroComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private authSvc: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
 

  async onRegister() {
    const { email, password } = this.registerForm.value;
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.router.navigate(['Principal'])     
      }
       else
       {
         this.router.navigate(['Error'])  

       }
    } catch (error) {
      console.log(error);
    }
  }


}

