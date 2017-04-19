var body = document.getElementsByTagName("body")[0];

// crear elementos para HTML
var tittle = document.createElement("h1");
tittle.innerText = "Nuestras Coders";
var hr = document.createElement("hr");

//insertando elementos al body
body.appendChild(tittle);
body.appendChild(hr);

//nombre de las coders
var infoCoders = ["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado",
"Yessenia Huamán","Grecia Rayme","Janine Vega"];

// un for para mostrar a todas las coders
window.onload = function() {
  for (var i = 1; i <= infoCoders.length; i++) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var span = document.createElement("span");
    var nombreCoder = document.createTextNode(infoCoders[i-1]);

    img.setAttribute("src","assets/img/"+i+".png");
    img.setAttribute("alt",i+".png");
    img.setAttribute("class", "coder");
    div.setAttribute("class", "foto");
    span.setAttribute("class", "nombre");

    div.appendChild(img);
    div.appendChild(span);
    span.appendChild(nombreCoder);
    body.appendChild(div);
  }
}
