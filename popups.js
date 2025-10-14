// Variabler + Array af objekter 
const felter = [
    { label: "Navn", type: "text" },
    { label: "Email", type: "email" }
  ];
  
  // Funktion der laver popup 
  function popup() {
    // DOM-manipulation + Objekter 
    const bg = Object.assign(document.createElement('div'), { style: 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;' });
    const box = Object.assign(document.createElement('div'), { style: 'background:#fff;padding:20px;border-radius:10px;width:300px;position:relative;' });
    const form = document.createElement('form');
    form.innerHTML = "<h2>Tilmeld</h2>";
  
    // Loop: inputfelter 
    felter.forEach(f => {
      form.innerHTML += `<label>${f.label}:</label><input type="${f.type}" required style="width:100%;margin:5px 0;padding:5px"><br>`;
    });
  
    // Luk knap 
    const luk = Object.assign(document.createElement('button'), { innerText:'X', style:'position:absolute;top:5px;right:5px;background:red;color:#fff;border:none;cursor:pointer;' });
    luk.onclick = () => document.body.removeChild(bg);
  
    // If/else + operatorer
    form.onsubmit = e => {
      e.preventDefault();
      const navn = form[0].value, email = form[1].value;
      if (!navn || !email) alert("Udfyld alle felter!");
      else if (!email.includes("@")) alert("Ugyldig email!");
      else { alert(`Tak ${navn}, vi sender til ${email}`); document.body.removeChild(bg); } // $ bruges til at indsætte værdier fra variabler direkte i en tekststreng.
    };
  
    // Saml og vis popup 
    box.append(luk, form);// Tilføjer "luk"knappen og formularen inde i selve popup-boksen
    bg.appendChild(box); // Lægger popup-boksen ovenpå den mørke baggrund
    document.body.appendChild(bg);// Viser hele popup’en (baggrund + boks + indhold) på siden
  }
  
  // Pop'uppen vises først når HTML er færdigindlæst
  document.addEventListener('DOMContentLoaded', popup); 