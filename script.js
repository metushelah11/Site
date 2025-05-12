const powers = [
  "Contrôle du temps",
  "Vision astrale",
  "Télékinésie",
  "Manipulation gravitationnelle",
  "Absorption d'énergie",
  "Résonance dimensionnelle",
  "Clonage spectral"
];

const energyTypes = [
  "énergie noire",
  "lumière stellaire",
  "éther quantique",
  "force du néant",
  "flux ionique"
];

const titles = [
  "du Néant",
  "du Titan",
  "des Anciens",
  "de l'Éclipse",
  "de la Forge cosmique",
  "de l'Ombre céleste"
];

const rarities = [
  { label: "Commun", color: "#bdc3c7", chance: 0.5 },
  { label: "Rare", color: "#2980b9", chance: 0.3 },
  { label: "Légendaire", color: "#9b59b6", chance: 0.15 },
  { label: "Mythique", color: "#f1c40f", chance: 0.05 }
];

function generatePower() {
  const roll = Math.random();
  let rarity = rarities[0];
  let accumulated = 0;

  for (let r of rarities) {
    accumulated += r.chance;
    if (roll <= accumulated) {
      rarity = r;
      break;
    }
  }

  const base = powers[Math.floor(Math.random() * powers.length)];
  const energy = energyTypes[Math.floor(Math.random() * energyTypes.length)];
  const title = titles[Math.floor(Math.random() * titles.length)];
  const fullPower = `${base} à base de ${energy}, pouvoir ${title} [${rarity.label}]`;

  const desc = document.getElementById("power-description");
  desc.textContent = fullPower;
  desc.style.color = rarity.color;
  desc.className = "rarity-flash";

  const icon = document.getElementById("mythic-icon");
  if (rarity.label === "Mythique") {
    icon.style.display = "block";
    icon.className = "mythic-spin";
  } else {
    icon.style.display = "none";
    icon.className = "";
  }
}