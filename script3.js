function coinCounter() {
    let coins = 0;
    let response;
  
    while (true) {
      response = prompt(`Jūs turite ${coins} monetą(-ų).\nAr norėtumėt monetos? (Taip/Ne)`);
  
      if (response.toLowerCase() === "taip") {
        coins++;
        alert(`Jūs turite ${coins} monetą(-ų).`);
      } else if (response.toLowerCase() === "ne") {
        alert("Iki!");
        break;
      } else {
        alert("Prašome atsakyti tik 'Taip' arba 'Ne'.");
      }
    }
  }
  
  coinCounter();