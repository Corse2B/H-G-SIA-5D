// Titre normal (celui du HTML)
const titleNormal = document.title;

// Étapes en fonction du temps (en secondes)
const steps = [
  { time: 0,  title: "Lecture en cours — Histoire-Géographie" },
  { time: 15, title: "Notion clé du chapitre en cours" },
  { time: 45, title: "Ce point est important pour le cours" },
  { time: 90, title: "Reprendre la lecture — Histoire-Géographie" }
];

let startTime = null;
let timer = null;

// Détection du changement d’onglet
document.addEventListener("visibilitychange", () => {

  // Quand l’utilisateur quitte l’onglet
  if (document.hidden) {
    startTime = Date.now();

    timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);

      // On prend le message correspondant au temps écoulé
      const step = [...steps].reverse().find(s => elapsed >= s.time);
      if (step) {
        document.title = step.title;
      }
    }, 1000);

  } 
  // Quand l’utilisateur revient
  else {
    clearInterval(timer);
    document.title = titleNormal;
  }

});
