
const characters = {
  "saralyssa": {
    description: "Mage mort-vivant · Niveau 90 · Horde",
    equipment: [
      "Heaume du gladiateur tyrannique",
      "Mantelet du gladiateur tyrannique",
      "Robe du gladiateur tyrannique",
      "Garde-mains du gladiateur tyrannique",
      "Jambières du gladiateur tyrannique",
      "Bâton du gladiateur tyrannique"
    ],
    stats: [
      "Intelligence : 8420",
      "Critique : 16.27%",
      "Hâte : 17.22%",
      "Maîtrise : 34.48%",
      "Puissance JcJ : 19035",
      "Résilience : 5280"
    ],
    talents: [
      "Présence de l'esprit",
      "Glaçon",
      "Anneau de givre",
      "Bombe vivante"
    ],
    pvp: [
      "2v2 : 2386",
      "3v3 : 2214",
      "5v5 : 1950"
    ]
  }
};

function searchCharacter() {
  const name = document.getElementById("character").value.trim();
  const character = characters[name.toLowerCase()];

  if (!character) {
    alert("Personnage absent de la démonstration !");
    return;
  }

  document.getElementById("name").textContent = name;
  document.getElementById("description").textContent = character.description;

  showList("equipment", character.equipment);
  showList("stats", character.stats);
  showList("talents", character.talents);
  showList("pvp", character.pvp);
}

function showList(id, items) {
  const element = document.getElementById(id);
  element.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

searchCharacterWithDefault();

function searchCharacterWithDefault() {
  document.getElementById("character").value = "Saralyssa";
  searchCharacter();
}
