//proceso ascincrono clase.
/*http = require ('http');

console.log("Hola");
http.get('https://httpstat.us/200', (res) => {
    console.log('La API devolvió: ${res.statusCode}');
});
console.log('Adios');*/

//timepo de espera hilo ascincrono.
setTimeout(function() {
    console.log("me has esperado.");
},2000);