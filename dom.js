// exercice 1
const exo1 = () => {
  const premierP = document.getElementById("element-p");
  premierP.textContent = "code toujours ";
};
exo1();

// exercice 2
const exo2 = () => {
  const h1 = document.getElementById("h1");
  h1.style.fontFamily = "Arial";
  h1.style.fontSize = "3rem";
  h1.style.color = "red";
};
exo2();

// exercice 3
const btn = document.getElementById("btn");
const exo3 = () => {
  btn.addEventListener("click", () => {
    btn.classList.add("btnColor");
    // console.log("click");
  });
};
exo3();

// exercice 4

let aaa = document.getElementsByTagName("h4");
for (let i = 0; i < aaa.length; i++) {
    aaa[i].textContent = "Yolololo"
};

exo4(); /// regarder
// exercice 5
const h3 = document.createElement("h3");
const exo5 = () => {
  h3.textContent += "salut c'est amine";
  document.body.appendChild(h3);
};
exo5();
// exercice 6

// exercice 7

const parag = document.getElementById("parag");
parag.innerHTML = `<p>code avant qu'il te code</p>
<ul>
<li>France</li>
<li>Algérie</li>
<li>Liban</li>
</ul>
`;
// exercice 8

// add => true
const add = () => {
  const add = document.getElementById("add");
  add.classList.add("add");
};
// toggle => true and false
const togglee = () => {
  const toggle = document.getElementById("toggle");
  toggle.classList.toggle("add");
};
// remove =< false
const removee = () => {
  const remove = document.getElementById("remove");
  remove.classList.remove("add");
};

// exercice 9

const voyage = document.getElementById("voyage");
voyage.style.backgroundColor += "blue";

// exercice 10

const image = document.getElementById("src");

image.setAttribute("src", "href");
console.log(image.getAttribute("src"));

// exercice 11

const list = document.getElementById("list");
const li = document.createElement("li");

let nvElement = document.createTextNode("France");
li.appendChild(nvElement);

list.appendChild(li);



// c'est jsute un kiff
// let c = document.createElement("div");
// let p = document.createElement("p");

// let nve = (document.body.innerHTML += "youpi");
// p.appendChild(nve);
// c.appendChild(p);
