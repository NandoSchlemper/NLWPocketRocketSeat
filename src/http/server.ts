import fastify from 'fastify';

const app = fastify();

app.listen({
    port: 3330
}).then(() => {
    console.log("Server iniciado na porta 3320")
}).catch(() => {
    console.error("Erro ao instanciar o servidor")
})
