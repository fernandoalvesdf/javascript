import { Conta } from "../model/Conta.js";

export class BancoService {

    _nome;
    _contas;

    constructor(nome){
        this._nome =  nome;
        this._contas = [];
    }

    adicionarConta(conta){
        this._contas.push(conta);
    }

    pesquisarContaCliente(cpf){
        let conta = null;
        for(var i = 0; i < this._contas.length; i++){
            if(this._contas[i].cpf == cpf){
                conta = this._contas[i];
            }
        }
        return conta;
    }

    listarContasAltaRenda(){
        return this._contas.filter(obj => obj.saldo >= 10000);
    }

}