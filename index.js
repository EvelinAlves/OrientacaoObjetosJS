import {Cliente} from './Cliente.js';
import {ContaCorrente} from './Conta/ContaCorrente.js';
import {ContaPoupanca} from './Conta/ContaPoupanca.js';
import {ContaSalario} from './Conta/ContaSalario.js';

import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//Cliente
const cliente = new Cliente('Evelin', 12345678910);

//Contas
const contaCorrente = new ContaCorrente(1001, cliente);
const contaPoupanca = new ContaPoupanca(100, 1001, cliente);
const contaSalario = new ContaSalario(100, 1001, cliente);

//Funcionários
const gerente = new Gerente("Joana", 12345612352, 10000.00);
const diretor = new Diretor("Hérina", 25896314785, 20000.00);

diretor.cadastrarSenha('123456');

const estaLogado = SistemaAutenticacao.login(diretor, "123456");
console.log(estaLogado);

