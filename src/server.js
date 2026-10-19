import express from "express";

const port = 8000;

// Tillfällig minnesbaserad "databas"
const tasks = [
  { id: 1, name: "Städa" },
  { id: 2, name: "Betala räkningar" },
  { id: 3, name: "Lära mig JavaScript i webbläsaren" }
];

const app = express();

app.use(express.static("public"));

// GET /api/tasks -> JSON-array av uppgifter
app.get("/api/tasks", (req, res) => {
    // Express kommer att konvertera JavaScript-arrayn till en JSON-array, dvs till följande:
    // [
    //   { "id": 1, "name": "Städa" },
    //   { "id": 2, "name": "Betala räkningar" },
    //   { "id": 3, "name": "Lära mig JavaScript i webbläsaren" }
    // ];
    res.json(tasks);
});

// Här börjar vi lyssna efter inkommande anrop över localhost:8000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});