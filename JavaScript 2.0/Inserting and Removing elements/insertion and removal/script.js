let div2 = document.createElement("div");
div2.setAttribute("class", "created");
div2.innerHTML = "<span>Shubh</span>";
document.querySelector(".container").prepend(div2); //at the beginning of the note
let div = document.createElement("div");
div.setAttribute("class", "created");
div.innerText = "Shubham";
document.querySelector(".container").append(div); //at the end of the node

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("beforebegin", "<span>Shradha</span>");

// let removeElement = document.getElementsByClassName("remove");
// removeElement.remove();

document.querySelector(".container").classList.add("Shubh");
document.querySelector(".container").classList.remove("Shubh");
// document.querySelector(".container").classList.toggle("Shubh"); //toggle->if open then close and vice versa
