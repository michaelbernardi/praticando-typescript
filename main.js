"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./components/nova-transacao-component.js");
require("./components/saldo-component.js");
require("./components/extrato-component.js");
var saldo = 3000;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toString();
}
var elementoFormulario = document.querySelector(".blovk-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de Transação de inválido!");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
