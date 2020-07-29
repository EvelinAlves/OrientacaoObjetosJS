import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    static numeroDeContasSalario = 0;
    
    constructor(saldo, agencia, cliente) {
        super(saldo, agencia, cliente);
        ContaSalario.numeroDeContasSalario += 1;
    };

    sacar(valor) {    
        let taxa = 0.01;
        return this._sacar(valor, taxa);
    };

}