/* Ok, este es el Desafio del Amigo Secreto. Un pequeño proyecto de prueba para nosotros los recien iniciados
en programación. Mas especificamente, JavaScript (+HTML y CSS). Sin mas espero que sea de su agrado */
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert('Inserte un nombre, por favor.');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert(`Lo siento. El nombre "${nombreAmigo}" ya está siendo utilizado.`);
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos registrados. Por favor, agrega más. Mínimo: Uno.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
// Individualmente de quien o cuando veas esto; te deseo un bonito dia. Tqm <3