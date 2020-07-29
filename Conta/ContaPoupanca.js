import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    static numeroDeContasPoupanca = 0;
    
    constructor(saldo, agencia, cliente) {
        super(saldo, agencia, cliente);
        ContaPoupanca.numeroDeContasPoupanca += 1;
    };

    sacar(valor) {    
        let taxa = 0.2;
        return this._sacar(valor, taxa);
    };
}