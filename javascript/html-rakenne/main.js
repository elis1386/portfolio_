const body = document.getElementsByTagName("body")[0];

const header = document.createElement("header");
header.setAttribute("class", "yltunniste");
const title = document.createElement("h1");
const titleText = document.createTextNode("Tämä on artikillin otsikko")
title.appendChild(titleText)
const p = document.createElement("p");
const textP = document.createTextNode("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati dolores earum adipisci! Maxime ipsam eaque dolores, sapiente dicta unde eveniet quasi corporis nobis cupiditate optio accusamus velporro esse?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati dolores earum adipisci! Maxime ipsam eaque dolores, sapiente dicta unde eveniet quasi corporis nobis cupiditate optio accusamus velporro esse?")
p.appendChild(textP)
header.appendChild(title);
header.appendChild(p);

const section = document.createElement("section");
section.setAttribute("id", "rinnakkain");
const p2 = document.createElement("p");
const textP2 = document.createTextNode("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati dolores earum adipisci! Maxime ipsam eaque dolores, sapiente dicta unde eveniet quasi corporis nobis cupiditate optio accusamus velporro esse?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati dolores earum adipisci! Maxime ipsam eaque dolores, sapiente dicta unde eveniet quasi corporis nobis cupiditate optio accusamus velporro esse?")
p2.appendChild(textP2)
const figure = document.createElement("figure");
figure.setAttribute("id", "kuvanpaikka");
const image = document.createElement("img");
image.src ="https://dri.es/files/cache/blog/javascript-powered-multichannel-640w.gif";
figure.appendChild(image)
section.appendChild(p2);
section.appendChild(figure);

const footer = document.createElement("footer");
const p3 = document.createElement("p");
const textP3 = document.createTextNode("© 2022 Elizaveta Pashkovskaya")
p3.appendChild(textP3)
footer.appendChild(p3);

/* const button = document.createElement("button")
button.setAttribute("id", "btn")
button.innerHTML = 'click me';
button.addEventListener("click", () =>  console.log("click!"))
footer.appendChild(button) */

body.appendChild(header);
body.appendChild(section);
body.appendChild(footer);


