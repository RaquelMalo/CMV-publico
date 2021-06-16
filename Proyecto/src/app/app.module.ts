import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PieComponent } from './pie/pie.component';

import { RouterModule, Routes } from '@angular/router';

// Configuración de las rutas:
// Es IMPORTANTE el orden en que se ponen las rutas. SE TIENE que poner LAS MÁS ESPECÍFICAS primero y luego las MÁS GENERALES
 // por que se ejecutan de arriba abajo
 const appRoutes: Routes = [
  // { path: 'masInfo', component: VideoComponent },
  { path: 'inicio', component: GaleriaComponent }, // Sintaxis: { path: 'Nombre_Ruta', component: Nombre_Componente }
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },  // Con REDIRECT para página de Inicio de la Aplicación

];

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
