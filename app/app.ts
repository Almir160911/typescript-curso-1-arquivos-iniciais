import { NegoiacaoController } from "./controllers/NegociacaoController.js";
console.log('começou!');
const controller = new NegoiacaoController();
const form = document.querySelector ('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();

})



