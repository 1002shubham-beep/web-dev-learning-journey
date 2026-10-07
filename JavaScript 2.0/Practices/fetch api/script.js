let url = "https://dogapi.dog/api/v2/facts?limit=1";
let factPlace = document.querySelector("#facts");
let btn = document.querySelector("button");

async function dogFact() {
  let response = await fetch(url);
  let data = await response.json();
  factPlace.innerText = data.data[0].attributes.body;
}
dogFact();

btn.addEventListener("click", dogFact);
