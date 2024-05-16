let app = new Typewriter('#app', {
    loop: true
});

app.typeString('<i>Itzel Nicolás</i>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<i>Programadora</i>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<i>Estudiante en Desarrollo y Gestión de Software.</i>')
    .pauseFor(1500)
    .start();