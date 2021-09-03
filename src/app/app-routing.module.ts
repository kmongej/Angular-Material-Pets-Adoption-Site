import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './auth/galeria/galeria.component';
import { ContactoComponent } from './auth/contacto/contacto.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { 
    path: '', component: AppComponent
  },
{
  path: 'galeria', component: GaleriaComponent
},
{ 
  path: 'contacto', component: ContactoComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
