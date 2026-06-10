// Tela inicial

document
.getElementById("entrar")
.addEventListener("click", () => {

    document
    .getElementById("welcome")
    .style.display = "none";

    document
    .getElementById("musica")
    .play()
    .catch(() =>{});

});

// Contador

const dataNamoro = new Date("2025-09-27");

function atualizarContador(){

    const hoje = new Date();

    const dias = Math.floor(
        (hoje - dataNamoro) /
        (1000 * 60 * 60 * 24)
    );

    document
    .getElementById("contador")
    .innerHTML =
    `❤️ Estamos juntos há ${dias} dias ❤️`;

}

atualizarContador();
setInterval(atualizarContador,  60000);

// Slideshow

const slides = document.querySelectorAll(".slideshow img");
let atual = 0;

slides.forEach((img, i) => {
    img.style.display = i === 0 ? "block" : "none";
});

setInterval(() => {

    slides[atual].style.display = "none";

    atual = (atual + 1) %slides.length;

    slides[atual].style.display = "block";

}, 3000);

// Carta

document
.getElementById("abrirCarta")
.addEventListener("click", () => {

    document
    .getElementById("carta")
    .classList.toggle("aberta");

});

// Timeline animada

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document
.querySelectorAll(".evento").forEach(evento => {
    
    evento.addEventListener("click", () => {

        evento.classList.toggle("aberto");
    });
});

// Corações

function criarCoracao(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
    (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(criarCoracao, 400);