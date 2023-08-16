import { CaminhoArquivo } from "../codigo/CaminhoArquivo.js";

describe('Tests CaminhoArquivoo', () => {

    it('Deve montar caminho para arquivo',  () => {

        let caminhoArquivo = CaminhoArquivo.instance(1);
        expect(caminhoArquivo.diretorio).toBe("/tmp/1");
        expect(caminhoArquivo.arquivo).toBe("/tmp/1/1");

        caminhoArquivo = CaminhoArquivo.instance(2);
        expect(caminhoArquivo.diretorio).toBe("/tmp/1");
        expect(caminhoArquivo.arquivo).toBe("/tmp/1/2");

        caminhoArquivo = CaminhoArquivo.instance(1000);
        expect(caminhoArquivo.diretorio).toBe("/tmp/1");
        expect(caminhoArquivo.arquivo).toBe("/tmp/1/1000");

        caminhoArquivo = CaminhoArquivo.instance(1500);
        expect(caminhoArquivo.diretorio).toBe("/tmp/2");
        expect(caminhoArquivo.arquivo).toBe("/tmp/2/1500");

        caminhoArquivo = CaminhoArquivo.instance(2000);
        expect(caminhoArquivo.diretorio).toBe("/tmp/2");
        expect(caminhoArquivo.arquivo).toBe("/tmp/2/2000");

        caminhoArquivo = CaminhoArquivo.instance(2001);
        expect(caminhoArquivo.diretorio).toBe("/tmp/3");
        expect(caminhoArquivo.arquivo).toBe("/tmp/3/2001");
    })
});