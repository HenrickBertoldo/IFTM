import carros from "./carro.js";

let carroAtual = 0;
let intervalo = null;

function exibirCarro() {
    const carro = carros[carroAtual];
    const imagem = document.getElementById("imgCarro");

    imagem.src = `imagens/${carro.src}`;
    imagem.alt = carro.nome;
    document.getElementById("nome").textContent = carro.nome;
    document.getElementById("potencia").textContent = carro.potencia;

}

function atualizarCarro() {
    carroAtual = (carroAtual + 1) % carros.length;
    exibirCarro();
}

function playSlideShow() {
    clearInterval(intervalo);
    const tempo = Number(document.getElementById("tempo").value);
    intervalo = setInterval(atualizarCarro, tempo);
}

function pararSlideShow() {
    clearInterval(intervalo);
    intervalo = null;
}

function main() {
    exibirCarro();
    playSlideShow();
}

const imagem = document.getElementById("imgCarro");
const seletorTempo = document.getElementById("tempo");

imagem.addEventListener("mouseenter", pararSlideShow);
imagem.addEventListener("mouseleave", playSlideShow);
seletorTempo.addEventListener("change", () => {
    alert(seletorTempo.value);
    if (intervalo !== null) playSlideShow();
});

main();



