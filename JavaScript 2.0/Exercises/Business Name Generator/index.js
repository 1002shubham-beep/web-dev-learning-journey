const adjectives = {
  a1: "Crazy",
  a2: "Amazing",
  a3: "Fire",
};

const names = {
  n1: "Engine",
  n2: "Foods",
  n3: "Garments",
};

const word = {
  w1: "Bros",
  w2: "Limited",
  w3: "HUb",
};
let random1 = Math.random();
if (random1 < 0.3) {
  random_adj = adjectives.a1;
} else if (random1 < 0.6) {
  random_adj = adjectives.a2;
} else {
  random_adj = adjectives.a3;
}
let random2 = Math.random();
if (random2 < 0.3) {
  random_nm = names.n1;
} else if (random2 < 0.6) {
  random_nm = names.n2;
} else {
  random_nm = names.n3;
}
let random3 = Math.random();
if (random3 < 0.3) {
  random_wrd = word.w1;
} else if (random3 < 0.6) {
  random_wrd = word.w2;
} else {
  random_wrd = word.w3;
}

let business_name = random_adj + random_nm + random_wrd;
console.log(`Your Business Name is : ${business_name}`);
