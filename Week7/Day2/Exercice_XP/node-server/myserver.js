// Exercice 1 Http
// Dans ce fichier, utilisez httppour créer un serveur. Vous devez renvoyer au moins trois lignes HTML différentes au navigateur. (N'utilisez que des balises HTML , pas de fichiers HTML)
// Votre serveur doit fonctionner sur http://localhost:3000/

const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('<h1>This is my first response</h1><h2>This is my second response</h2><h3>This is my third response</h3>')
})

server.listen(3000);