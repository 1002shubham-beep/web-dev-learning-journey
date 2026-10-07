let button = document.getElementById("btn");
button.addEventListener("click", () => {
  //   alert("I was clicked");
  document.querySelector(".box").innerHTML = "<b>You were clicked</b>";
});

button.addEventListener("contextmenu", () => {
  alert("Dont hack us by right click");
});

document.addEventListener("keydown", (e) => {
  console.log(e.key, e.keyCode);
});
//keycode=specific number for every key
