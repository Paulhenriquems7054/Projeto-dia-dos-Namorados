function tocarMusica() {
    document.getElementById("musica").play();
}

function abrirCarta() {

    const carta = document.getElementById("mensagemFinal");

    if(carta.style.display === "block"){
        carta.style.display = "none";
    }else{
        carta.style.display = "block";
    }
}

// ALTERE A DATA
const dataNamoro = new Date("2023-06-12");

function atualizarContador() {

    const hoje = new Date();

    const diferenca = hoje - dataNamoro;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const anos = Math.floor(dias / 365);

    const meses = Math.floor(
        (dias % 365) / 30
    );

    const diasRestantes =
        (dias % 365) % 30;

    document.getElementById("tempo").innerHTML =
        `${anos} anos, ${meses} meses e ${diasRestantes} dias`;
}

setInterval(atualizarContador,1000);

atualizarContador();

// CORAÇÕES

setInterval(() => {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 20 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },8000);

},300);