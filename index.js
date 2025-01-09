console.log('O .js está integrado!');

const inputItem = document.getElementById("input-item");

const botaoAdicionar = document.getElementById("adicionar-item");
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log("evento.target: ", evento.target);
    console.log("obj inputItem: ", inputItem);
    console.log("valor inputItem: ", inputItem.value);
});