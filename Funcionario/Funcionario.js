export class Funcionario {
    constructor(nome, cpf, salario){
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        this._bonificacao = 1;
        this._senha;

        if(this.constuctor == Funcionario) {
            throw new Error("Você não pode instanciar um objeto do tipo Funcionario, pois essa é uma classe abstrata");
        }
    }

    get senha() {
        return this._senha;
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }
}