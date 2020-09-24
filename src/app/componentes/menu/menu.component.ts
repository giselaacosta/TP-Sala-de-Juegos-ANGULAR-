import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
        case 'Tateti':
          this.router.navigate(['/Juegos/Tateti']);
          break;
      case 'PPT':
        this.router.navigate(['/Juegos/PPT']);
        break;
        case 'Memotest':
          this.router.navigate(['/Juegos/Memotest']);
          break;
    }
  }

}
