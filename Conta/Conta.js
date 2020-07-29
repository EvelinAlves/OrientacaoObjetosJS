import { Cliente } from '../Cliente.js'  

//Classe Abstrata (abstract)
export class Conta {
    static numeroDeContas = 0;
    
    constructor(saldo, agencia, cliente){
        if(this.constructor == Conta) {
            throw new Error("Você não pode instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata");
        };

        this._saldo = saldo;
        this._agencia = agencia;
        this._cliente = cliente;
        Conta.numeroDeContasCorrente += 1;
    }
    
    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente - novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if(valor <= 0) return;
        this._saldo += valor;
    };
    
    //Método Abstrato (abstract)
    sacar(valor) {
        throw new Error("O método Sacar da Conta é abstrato");
    };

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor    
        if(this._saldo < valorSacado) return;
        this._saldo -= valorSacado;
        return valorSacado;
    };
    
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    };
}
