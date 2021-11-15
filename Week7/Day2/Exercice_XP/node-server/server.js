//Exercice 2 HTTP & JSON

// Créez un fichier serveur, nommez-le - server.js
// Dans ce fichier, utilisez httppour créer un serveur. Envoyez l'objet Javascript ci-dessous au navigateur :
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
// Astuce : utilisez JSON .
// 3. Votre serveur doit fonctionner surhttp://localhost:8080/

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const http2 = require('http');

const server2 = http2.createServer((req,res)=>{
    res.end(JSON.stringify(user))
})

server2.listen(8080)