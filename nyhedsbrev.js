/* Variabler */ 
let popup = document.getElementById("nyhedsbrev");
let openBtn = document.getElementById("openNewsletterBtn");
let closeBtn = document.getElementById("lukBtn");
let tilmeldBtn = document.getElementById("tilmeldBtn");
let tilmeldte = [];

/* Event: åbner popup */
openBtn.addEventListener("click", function() {
  popup.classList.remove("hidden");
});

/* Event: lukker popup */
closeBtn.addEventListener("click", function() {
  popup.classList.add("hidden");
});

/* Event: tilmelding */
tilmeldBtn.addEventListener("click", function() {
  let navn = document.getElementById("navn").value;
  let email = document.getElementById("email").value;

  /* If/else kontrol */
  if (navn === "" || email === "") {
    document.getElementById("besked").innerText = "Udfyld venligst begge felter.";
    return;
  }

  /* Objekt */
  let nyTilmelding = { navn: navn, email: email };

  /* Tilføj til array */
  tilmeldte.push(nyTilmelding);

  /* Loop for debug */
  for (let i = 0; i < tilmeldte.length; i++) {
    console.log("Tilmeldt:", tilmeldte[i]);
  }

  /* DOM manipulation */
  document.getElementById("besked").innerText = 
    `Tak for din tilmelding, ${navn}! 💛`;

  /* Nulstil felter */
  document.getElementById("navn").value = "";
  document.getElementById("email").value = "";
});
