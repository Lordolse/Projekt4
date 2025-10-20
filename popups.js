const msgs = [
  { t: "Tilmeld dig", x: "De Unge Ravne" }, // overskrift
  
];
const popupboks=document.createElement("div");  // laver en variabel popupboks med et <div> element
const beholder=document.createElement("div"); // laver endnu et <div>
const knap=document.createElement("button"); // laver et <button> element 
popupboks.style="position:fixed;inset:0;background:#f6f6f6;display:flex;align-items:center;justify-content:center";
beholder.style="background:#FFF;padding:20px;border-radius:12px;text-align:center;font-family:sans-serif"; //CSS 
msgs.forEach(m=>{
  if(m&&m.t&&m.x){ // tjekker om objektet (m) har titel (t) og en tekst (x)
      const h=document.createElement("h2"); // laver en overskrift
      const t =document.createElement("beholder"); // laver et afsnit <p> til pop'upen
      h.textContent=m.t; // sætter  tekstindholdet ind fra objektet 
      t.textContent=m.x;
      beholder.append(h,t) // smider dem ind i pop-up boksen (beholder)
  }else console.warn("Fejl")
});
knap.textContent="Luk"; // giver knappen teksten ''luk'' 
knap.onclick=()=>popupboks.remove(); // når man klikker, fjernes pop'upen (popupboks)
beholder.appendChild(knap); //sætter knappen ind i boksen 
popupboks.appendChild(beholder); // lægger boksen ind i overlayet 
document.body.appendChild(popupboks); // sætter hele pop'upen ind i siden, så man kan se den  