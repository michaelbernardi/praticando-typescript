"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatters_js_1 = require("../utils/formatters.js");
var FormatoData_js_1 = require("../types/FormatoData.js");
var Conta_js_1 = require("../types/Conta.js");
var elementoSaldo = document.querySelector(".saldo-valor .valor");
var elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = (0, formatters_js_1.formatarData)(Conta_js_1.default.getDataAcesso(), FormatoData_js_1.FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = (0, formatters_js_1.formatarMoeda)(Conta_js_1.default.getSaldo());
    }
}
var SaldoComponent = {
    atualizar: function () {
        renderizarSaldo();
    }
};
exports.default = SaldoComponent;
