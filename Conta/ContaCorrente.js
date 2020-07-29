import {Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContasCorrente = 0;
    
    constructor(agencia, cliente) {
        super(0, agencia, cliente);
        ContaCorrente.numeroDeContasCorrente += 1;
    };

    sacar(valor) {    
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    };
    
}
