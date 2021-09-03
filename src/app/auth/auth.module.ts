import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    GaleriaComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
