function createCard(title1, cName1, views1, monthsOld1, duration1, thumbnail1) {
  document.querySelector(".title").innerText = title1;
  document.querySelector(".cname").innerText = cName1;
  document.querySelector(".views").innerText = formatNumber(views1) + " views";
  document.querySelector(".month").innerText = monthsOld1 + " months";
  document.querySelector(".dur").innerText = duration1;
  document.querySelector("img").src = thumbnail1;
}
function formatNumber(num) {
  if (num < 1000) {
    return num;
  } else if (1000 <= num && num < 1000000) {
    return `${num / 1000}k`;
  } else if (1000000 <= num && num < 1000000000) {
    return `${num / 1000000}M`;
  } else if (num >= 1000000000) {
    return `${num / 1000000000}B`;
  }
}

// createCard(
//   "I am Batman",
//   "Shubham Prasad",
//   90,
//   "7",
//   "5:00",
//   "	https://i.ytimg.com/vi/fWsjG0NX2II/hqdefault.jpg?s…BACGAY4AUAB&rs=AOn4CLBcInOgI3p4cMoMEZlXFjJloab0kg",
// );

createCard(
  "Michael Jackson - Billie Jean (Official Video)",
  "Michael Jackson",
  "1500000000",
  6,
  "4:55",
  "https://i.ytimg.com/vi/Zi_XLOBDo_Y/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDlvo5RZ3OZDZk4d8cH7h5HAvHRMg",
);
