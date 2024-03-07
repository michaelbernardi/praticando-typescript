"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var saldo_component_js_1 = require("./saldo-component.js");
var Conta_js_1 = require("../types/Conta.js");
var extrato_component_js_1 = require("./extrato-component.js");
var elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação!");
            return;
        }
        var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        var inputValor = elementoFormulario.querySelector("#valor");
        var inputData = elementoFormulario.querySelector("#data");
        var tipoTransacao = inputTipoTransacao.value;
        var valor = inputValor.valueAsNumber;
        var data = new Date(inputData.value + " 00:00:00");
        var novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        };
        Conta_js_1.default.registrarTransacao(novaTransacao);
        saldo_component_js_1.default.atualizar();
        extrato_component_js_1.default.atualizar();
        elementoFormulario.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
