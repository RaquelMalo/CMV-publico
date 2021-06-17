import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VIAJANDO POR EL MUNDO';
  diabool = true;

  ngOnInit(): void {
    // seccion de codigo JQuery 
    $("#diaNoche").click(function () {
      $("main").toggleClass("nocheBg");      
    });
  }
  
  // Esto es lo que utilizaba para cambiar la imagen cuando había un botón
  // Ahora el elemento es una imagen por tema de accesibilidad
  defineEstilo(){
    let style = {
      'background-image': this.diabool ? 'url(./assets/luna.jpg)' : 'url(./assets/sol.jpg)'
    }
    return style;
  }

}
