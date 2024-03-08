import {formatarData, formatarMoeda} from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/conta.js";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if(elementoDataAcesso !== null){
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_MES_ANO);
}; 


renderizarSaldo();
export function renderizarSaldo(): void{

    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}

const SaldoComponet ={
    autializar(){
        renderizarSaldo();
    }
}

export default SaldoComponet;