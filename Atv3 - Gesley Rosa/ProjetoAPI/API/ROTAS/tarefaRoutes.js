const express = require("express");
const router = express.Router();
// Armazenamento em memória (simulando um banco de dados)
let tasks = [];
var criarId = 1;
 
// Rota para cadastro da tarefa
router.post("/tarefas", (req, res) => {
  const { descricao, status } = req.body;
  console.log("descricao:", descricao);
  console.log("status:", status);
 
  // Validando os dados
  if (!descricao || !status) {
    return res
      .status(400)
      .json({ message: "Descricao e estatus são obrigatórios." });
  }
  // Criar novo tarefa e adicionar ao array
  const newTask = { id: criarId, descricao, status };
  tasks.push(newTask);
  criarId++;
 
  res
    .status(201)
    .json({ message: "Tarefa cadastrado com sucesso!", tarefa: newTask });
});
 
// Rota para consulta de tarefas (retornar todos os tarefas cadastrados)
router.get("/tarefas", (req, res) => {
  if (tasks.length === 0) {
    return res.status(404).json({ message: "Nenhuma tarefa encontrada." });
  }
 
  res.status(200).json(tasks); // Retornando o array de tarefas
});
 
// Rota para consultar uma única tarefa pelo ID
router.get("/tarefas/:id", (req, res) => {
  const { id } = req.params;
 
  // Encontrar a tarefa pelo ID
  const task = tasks.find((task) => task.id === parseInt(id));
 
  // Verificar se a tarefa existe
  if (!task) {
    return res.status(404).json({ message: "Tarefa não encontrada." });
  }
 
  res.status(200).json(task); // Retorna a tarefa encontrada
});
 
//Rota para atualizar uma tarefa pelo ID
router.put("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const { descricao, status } = req.body;
 
  //Encontrar o índice da tarefa pelo ID
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
 
  //Verificar se a tarefa existe
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Tarefa não encontrada." });
  }
 
  //Validando os dados
  if (!descricao || !status) {
    return res
      .status(400)
      .json({ message: "Descrição e status são obrigatórios!" });
  }
  //Atualizar a tarefa
  tasks[taskIndex] = { id: parseInt(id), descricao, status };
  res.status(200).json({
    message: "Tarefa atualizada com sucesso!",
    task: tasks[taskIndex],
  });
});
 
//Rota para deletar uma tarefa pelo ID
router.delete("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) {
    return res.status(400).json({ message: "Tarefa não encontrada." });
  }
  //Remover a tarefa do array
  tasks.splice(taskIndex, 1);
  res.status(200).json({ message: "Tarefa deletada com sucesso!" });
});
 
module.exports = router;