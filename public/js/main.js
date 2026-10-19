// hämta data från någon server
// dynamiskt lägga till element och innehåll på sidan

// 1. DOM API	               Läsa, skapa, ändra och ta bort HTML-element.
// 2. Fetch API	               Kommunicera med backend och andra Web API:er via HTTP.
// 3. Web Storage API	       Lagra data lokalt med localStorage och sessionStorage.
// 4. Events API	           Hantera händelser som klick, tangenttryckningar och formulärinmatning.

// 1, 2, 4

// 1 - Hämta referenser till element i DOM:en
const button = document.querySelector("button");
const ul = document.querySelector("ul");

// 2 - Använd addEventListener för att registrera en händelsehanterare för klickhändelsen på knappen
button.addEventListener("click", (event) => {
  ul.innerHTML = ""; // Rensa listan innan vi lägger till nya uppgifter

  // 3 - När man klickar, hämta data från backend (Fetch API -> fetch())
  // GET /api/tasks -> JSON-array med uppgifter
  fetch("/api/tasks")
    // Responsen från fetch är ett Promise som vi kan hantera med .then()
    // json() är en metod som returnerar ett nytt Promise som löser sig med JSON-data från responsen
    .then((resp) => resp.json())
    .then((tasks) => {
      // data är vår JavaScript-array med uppgifter som vi fick från backend
      // [
      //   { "id": 1, "name": "Städa" },
      //   { "id": 2, "name": "Betala räkningar" },
      //   { "id": 3, "name": "Lära mig JavaScript i webbläsaren" }
      // ];

      // 4 - Iterera över array med uppgifter som vi har
      //     hämtat från backend
      tasks.forEach((task) => {
        // 5 - Skapa ett nytt LI-element för varje uppgift
        const li = document.createElement("li");
        // 6 - Sätt textinnehållet i LI-elementet till uppgiftens namn
        li.textContent = task.name;
        ul.appendChild(li);
      });
    });

  // 2 - skapa element (DOM API -> document.createElement())
});
