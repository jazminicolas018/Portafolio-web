var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Itzel Nicolás')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante en Desarrollo y Gestión de Software.</strong>')
    .pauseFor(1500)
    .start();