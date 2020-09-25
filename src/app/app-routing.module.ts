import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./componentes/login/login.component";
import { PrincipalComponent } from "./componentes/principal/principal.component";
import { ErrorComponent } from "./componentes/error/error.component";
import { RegistroComponent } from "./componentes/registro/registro.component";

import { RouterModule } from "@angular/router";


const appRoutes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
{ path: "login", component: LoginComponent, pathMatch: "full" },
{ path: "principal", component: PrincipalComponent, pathMatch: "full" },

{ path: "registro", component: RegistroComponent, pathMatch: "full" },
{ path: "error", component: ErrorComponent, pathMatch: "full" },

];
export const routing = RouterModule.forRoot(appRoutes);