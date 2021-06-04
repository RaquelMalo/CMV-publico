// variable global de la pagina
// un array con un elemento por cada foto del XML
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
  xhr.open("GET", "https://raquelmalo.github.io/CMV-publico/mmedia/datos.xml", true);
  //xhr.open("GET", "datos.xml", true); //problema de política de control de acceso HTTP: C0RS (Cross-Origin Resource Sharing)
  xhr.send();
}
function cargarArray(xml) {
  var i;
  var nom;
  var foto;
  var elemento = [];
  var xmlDoc = xml.responseXML;

  var x = xmlDoc.getElementsByTagName("elemento");
  
  // bloque es una variable string que contiene codigo html
  // para poder mostrar en pantalla el XML con formato adecuado
  //let bloque = "<section id=\"galeria\">"; 
  let bloque = "";//bloque de imágenes que mostraremos por pantalla
  
  for (i = 0; i < x.length; i++) {
    // leo las etiquetas que me interesan del objeto
    nom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    foto = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
    pie = x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
    // actualizo el bloque de visualización ( Usar ' o el carácter de escape: \" para las " si voy concatenando el string)
    bloque += `<figure>
              <h3>${nom}</h3>
                <div id="marco">
                  <img alt="${nom}" src=" ${foto}" />
                  <figcaption>${pie}</figcaption>
                </div>
              </figure>`;
    
    // actualizo el array
    elemento = [nom, foto, pie];
    registrados.push(elemento);
  }
  //bloque += "</section>"
  document.getElementById("galeria").innerHTML = bloque;
}