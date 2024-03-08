const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('../frontend/dist'));
app.use(cors());
app.use(express.json());

app.get('/registration', (req, res) => {
    fs.readFile('../frontend/dist/index.html', 'utf8', (err, data) => {
        if (err) {
            console.log('cai no if')
            console.error('Erro ao ler o arquivo index.html:', err);
            res.status(500).send('Erro ao processar o formulário de cadastro');
            return;
        }
        res.send(data);
    });
});

app.post('/registration', (req, res) => {
    const userData = req.body; 
    console.log("====>>> ", userData);
    res.status(200).send('Registro bem-sucedido!');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
});
