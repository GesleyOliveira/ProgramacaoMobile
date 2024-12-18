const express = require("express");
const bodyParser = require("body-parser");
const tarefaRoutes = require("./ROTAS/tarefaRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Rotas
app.use("/api", tarefaRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
