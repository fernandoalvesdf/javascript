export class CaminhoArquivo {

    _diretorio;
    _arquivo;

    constructor(diretorio, arquivo){
        this._diretorio = diretorio;
        this._arquivo = arquivo;
    }

    get diretorio(){
        return this._diretorio;
    }

    get arquivo(){
        return this._arquivo;
    }

    static instance(id){
        let b = '/tmp/';
        let d = null;    

        if(id <= 1000){
            d = b + id;
        }else {
            i = id;
            f = true;
            while(f){
                if(id <= (i * 1000)){
                    d = b + i;
                    f = false;
                }
                i++;
            }
        }

        return new CaminhoArquivo(d,d)
    }
}