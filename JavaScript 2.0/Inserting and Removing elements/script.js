console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").outerHTML); //shows its HTML and its children's too
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".box").tagName);
console.log(document.querySelector("p").textContent);
console.log(document.querySelector(".container").lastElementChild.innerText);

//Attribute Method
console.log(
  document.querySelector(".container").lastElementChild.hasAttribute("hidden"),
); //true

console.log(document.querySelector(".attr").getAttribute("style"));
document.querySelector(".attr").setAttribute("style", "display:inline");

console.log(document.querySelector(".attr").getAttribute("style"));

document.querySelector(".attr").removeAttribute("style");
console.log(document.querySelector(".attr").getAttribute("style")); //null
//document.desginmode="on" to edit any website
console.log(document.querySelector(".attr").dataset); //createdby Shubh conceptby Shradha
