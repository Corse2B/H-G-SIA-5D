document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");
  if (!form) return;

  const DELAI_ENVOI = 60 * 1000; // 60 secondes
  const CLE_STORAGE = "dernier_envoi_form";

  form.addEventListener("submit", function (e) {

    /* ⏱️ LIMITE D'ENVOIS */
    const maintenant = Date.now();
    const dernierEnvoi = localStorage.getItem(CLE_STORAGE);

    if (dernierEnvoi && maintenant - dernierEnvoi < DELAI_ENVOI) {
      e.preventDefault();
      alert(
        "Please wait before sending another message.\n\n" +
        "Merci d’attendre avant d’envoyer un nouveau message."
      );
      return;
    }

    const champMessage = document.getElementById("Message");
    if (!champMessage) return;

    const message = champMessage.value;

    /* 🧹 NETTOYAGE DU MESSAGE */
    const messagePropre = message
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9 ]/g, "");

    /* 🚫 BLOQUER LES CRIS (MAJUSCULES) */
    const lettres = message.replace(/[^a-zA-Z]/g, "");
    if (lettres.length >= 15) {
      const majuscules = lettres.replace(/[^A-Z]/g, "").length;
      if (majuscules / lettres.length > 0.7) {
        e.preventDefault();
        alert(
          "Please write your message in lowercase.\n\n" +
          "Merci d’écrire votre message en minuscules."
        );
        return;
      }
    }

    /* 🚫 LISTE DES INSULTES */
    const motsInterdits = [
      "idiot","idiote","imbecile","stupide","debile","cretin",
      "con","connard","connasse","salope","salaud","pute","putain",
      "merde","merdique","encule","enfoire",
      "ta gueule","ferme ta gueule","va crever","creve",
      "fuck","fucking","shit","asshole","bitch","bastard",
      "dick","pussy","motherfucker","slut","whore",
      "suicide","kill yourself","die",
      "c0n","fck","sh1t","a$$hole"
    ];

    for (let mot of motsInterdits) {
      if (messagePropre.includes(mot)) {
        e.preventDefault();
        alert(
          "Our filters have detected offensive language.\n" +
          "Please moderate your language.\n\n" +
          "Nos filtres ont détecté un langage offensant.\n" +
          "Merci de modérer votre langage."
        );
        return;
      }
    }

    /* ✅ AUTORISER L'ENVOI */
    localStorage.setItem(CLE_STORAGE, maintenant);

  });

});
