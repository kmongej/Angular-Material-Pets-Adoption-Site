import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'contacto', component: ContactoComponent },
      { path: 'galeria', component: GaleriaComponent },
      
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )  
  ]
})
export class AuthRoutingModule { }
