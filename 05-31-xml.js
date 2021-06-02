// variable global de la pagina
// un array con un elemento por cada usuario del XML
// en realidad será un array de arrays, una matriz bidimensional
let registrados = [];

function leerXML() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cargarArray(this);
    }
  };
  xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados2.xml", true);
  // xhr.open("GET", "registrados2.xml", true);
  xhr.send();
}

function cargarArray(xml) {
  var i;
  var usrNom;
  var usrPsw;
  var usuario = [];
  var xmlDoc = xml.responseXML;

  var x = xmlDoc.getElementsByTagName("usuario");
  // obtenemos algo así como x=[{USR1},{USR2}...,{CANDIDO}]

  // tabla es una variable string que contiene codigo
  // html para poder mostrar en pantalla el XML con formato tabla

  let tabla = "<table><tr><th>EMPLEADO</th><th>CLAVE</th></tr>";
  for (i = 0; i < x.length; i++) {
    // leo las etiquetas que me interesan del objeto
    let usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    let usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
    // actualizo la tabla de visualización
    tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
    // actualizo el array bidimensional con los usuarios registrados
    let usuario = [usrNom, usrPsw];
    registrados.push(usuario);
  }
  tabla += "</table>"
  document.getElementById("mensaje").innerHTML = tabla;

  // muestro en consola el array de usuarios registrados
  // una vez depurado, comentamos el código siguiente
  registrados.forEach((usuario) => {
    usuario.forEach((datos) => {
      console.log(datos);
    });
  });
}

function ascNombre() {
  //Ordeno primero la matriz
  registrados.sort(
    (usuario1, usuario2) =>
      usuario1[0].localeCompare(usuario2[0]),
  );

  mostrar();

}

function mostrar() {
  let tabla = "";
  registrados.forEach((usuario) => {
    usuario.forEach((datos) => {
      tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
      for (i = 0; i < registrados.length; i++) {
        // leo las etiquetas que me interesan del objeto
        usrNom = registrados[i][0];
        usrPsw = registrados[i][1];
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
      }
      tabla += "</table>"
    });
  });
  document.getElementById("ordenado").innerHTML = tabla;
}

function descClave() {
  //simplemente cambiando el orden de los usuarios en los parámetros de la función ya ordena DESC
  registrados.sort(
    (usuario2, usuario1) => usuario1[1].localeCompare(usuario2[1]),
  );

  mostrar();
}

function mostrarClave() {
  let dato = $("#usuario").val().toUpperCase();
  let pwd = null;
  
  for (i = 0; i < registrados.length; i++) {
    if (dato == registrados[i][0]) {
      pwd = registrados[i][1];
      break;
    }
  }
  
  if (pwd == null){
    pwd = `El usuario solicitado no está en la BD`;
  }  
  document.getElementById("claveBuscada").innerHTML = pwd;
}