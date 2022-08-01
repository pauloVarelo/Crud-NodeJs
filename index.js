const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['Ciência da Computação', 'Engenharia da Computação', 'Sistemas de Informação', 'Tecnologia da Informação.'];

//Retorna um Curso
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});

//Retorna todos os cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

// Criar novo Curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);
    
    return res.json(cursos);
});

// Atualizar um Curso
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

// Deletar um Curso
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;
    cursos.splice(index, 1);
    return res.json({message: "O curso foi deletado"});
    
})
 




server.listen(3000);
