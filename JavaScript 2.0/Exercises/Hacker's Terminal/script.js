let text = document.querySelector(".one");
function hack(message) {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 10000);
    setTimeout(() => {
      let p = document.createElement("p");
      p.innerText = message + "Time spent:" + delay / 1000 + "seconds";
      text.appendChild(p);
      resolve(200);
    }, delay);
  });
}

(async () => {
  await hack("Initializing Hacking...");
  await hack("Reading your Files...");
  await hack("Password files Detected...");
  await hack("Sending all passwords and personal files to server...");
  await hack("Cleaning up...");
})();
