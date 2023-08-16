export class Conta {

    _cpf;
    _saldo;

    constructor(cpf, saldo) {
        this._cpf = cpf;
        this._saldo = saldo;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(saldo){
        this._saldo = saldo;
    }
}