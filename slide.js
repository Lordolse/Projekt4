

console.log("JS kører"); 

let picSlide = [
  { navn: "Asta Jensen", titel: "Odense", billede: "billeder/img1.png" },
  { navn: "Oskar Petersen", titel: "København", billede: "billeder/img2.png" },
  { navn: "Mathilde Alison", titel: "Århus", billede: "billeder/img3.png" },
  { navn: "Malte Skov", titel: "Odense", billede: "billeder/img4.png" },
  { navn: "Jessica Mogensen", titel: "Odense", billede: "billeder/img1.png" }
];

let container = document.getElementById("container");
let followList = [];

for (let i = 0; i < picSlide.length; i++) {
  let person = picSlide[i];

  let html = /*Hjælp fra Chat GPT*/ /*kodeblok */ 
    '<div class="product-card">' + 
    '<div class="product-image">' +
    '<img src="' + person.billede + '" alt="' + person.navn + '" class="product-pic">' +
    '</div>' +
    '<button class="card-btn" onclick="followButton(' + i + ')">Følg</button>' +
    '<div class="product-info">' +
        '<h2 class="product-brand">' + person.navn + '</h2>' +
        '<p class="product-short-description">' + person.titel + '</p>' +
      '</div>' +
    '</div>';

  container.innerHTML += html;
}

// Funktion til følg-knappen / ekstra array
function followButton(index) {
  let person = picSlide[index];

  if (followList.includes(index)) {
    alert("Du følger allerede " + person.navn);
  } else {
    followList.push(index);
    alert("Du følger nu " + person.navn);
    console.log(followList);
  }
}
