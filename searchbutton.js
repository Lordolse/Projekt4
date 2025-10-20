// Find knappen og søge-elementet i HTML'en
const searchButton = document.querySelector('.js-searchToggle');
const searchBox = document.getElementById('search');
const searchInput = document.getElementById('searchInput');
const closeButton = document.querySelector('.js-searchClose');
const resultsList  = document.getElementById('results');

// 1) Datasæt (helt basic)
const pages = [
  { title: 'Forside', url: 'index.html', keys: ['forside','hjem','home','unge ravne','start'] },
  { title: 'Hvem er Unge Ravne', url: 'hvemervi.html', keys: ['hvem er vi','om os','hvem','unge ravne hvem','profil','baggrund'] },
  { title: 'Tilmelding', url: 'tilmelding.html', keys: ['tilmelding','meld dig','bliv frivillig','tilmeld','signup','ansøgning'] },
  { title: 'Fordele som Ung Ravn', url: 'fordele.html', keys: ['fordele','rewards','perks','benefits','hvad får jeg'] },
];

// 2) Hjælpere (kun helt basic streng-opsætning)
function simpleMatch(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return pages.filter(p => {
    const t = p.title.toLowerCase();
    const hitTitle = t.includes(q);
    const hitKeys = (p.keys || []).some(k => k.toLowerCase().includes(q));
    return hitTitle || hitKeys;
  }).slice(0, 6); // begræns antal forslag
}

function renderResults(list) {
  resultsList.innerHTML = '';
  list.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.title;
    li.appendChild(a);
    resultsList.appendChild(li);
  });
}

// 3) Autosuggest (helt basic events)
searchInput.addEventListener('input', () => {
  renderResults(simpleMatch(searchInput.value));
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const first = resultsList.querySelector('a');
    if (first) window.location.href = first.href;
  }
});

resultsList.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (a) window.location.href = a.href;
});



// Når man klikker på søgeknappen → vis søgefeltet
searchButton.addEventListener('click', () => {
  searchBox.hidden = false;
  searchInput.focus();
});

// Når man klikker på luk-knappen → skjul søgefeltet
closeButton.addEventListener('click', () => {
  searchBox.hidden = true;
});

// Hvis man trykker på Escape → skjul søgefeltet
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchBox.hidden = true;
  }
});
