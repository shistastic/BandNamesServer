const {io} = require('../index');

// Mensajes de Sockets
io.on("connection", client => {
        
    console.log("CLIENTE conectado");
        client.on("disconnect", () => {
            console.log("CLIENTE DESCONECTADO");
        });

        client.on("mensaje", (payload) => {

            console.log("Mensaje", payload["nombre"]);
            io.emit("mensaje", {admin: "Nuevo mensaje"});
        });
});
