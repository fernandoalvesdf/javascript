export class RedeBancariaService {

    _bancoCentralGateway;

    constructor(bancoCentralGateway){
        this._bancoCentralGateway = bancoCentralGateway;
    }

    registrarBanco(banco){
        return this._bancoCentralGateway.cadastrarBanco(banco);
    }
}