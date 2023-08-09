import { Celula } from "./Celula";

export class ListaLigada {
    private _primeira: Celula;
    private _ultima: Celula;
    private _totalDeElementos: number;

    public constructor() {
        this._primeira = null;
        this._ultima = null;
        this._totalDeElementos = 0;
    }

    public adicionaNoComeco(elemento: Object): void {
        let nova: Celula = new Celula(this._primeira, elemento);
        this._primeira = nova;

        if (this._totalDeElementos == 0) {
            //caso especial da lista vazia
            this._ultima = this._primeira;
        }
        this._totalDeElementos++;
    }

    public adicionar(elemento: Object): void {
        if (this._totalDeElementos == 0) {
            this.adicionaNoComeco(elemento);
        } else {
            let nova: Celula = new Celula(null, elemento);
            this._ultima.setProxima(nova);
            this._ultima = nova;
            this._totalDeElementos++;
        }
    }

    public toString(): string {
        // Verificando se a Lista está vazia
        if (this._totalDeElementos == 0) {
            return "[]";
        }
        let str = "[";
        let atual: Celula = this._primeira;

        // Percorrendo até o penúltimo elemento.
        for (let i: number = 0; i < this._totalDeElementos - 1; i++) {
            str += atual.getElemento();
            str += ", ";
            atual = atual.getProxima();
        }
        // último elemento
        str += atual.getElemento();
        str += "]";
        return str;
    }
    
    private posicaoOcupada(posicao: number): boolean {
        return posicao >= 0 && posicao < this._totalDeElementos;
    }

    private pegaCelula(posicao: number): Celula {
        if (!this.posicaoOcupada(posicao)) {
            throw new Error("Posição não existe");
        }

        let atual: Celula = this._primeira;
        for (let i: number = 0; i < posicao; i++) {
            atual = atual.getProxima();
        }
        return atual;
    }

    public pega(posicao: number): Object {
        return this.pegaCelula(posicao).getElemento();
    }
    public removeDoComeco(): void {
        if (!this.posicaoOcupada(0)) {
            throw new Error("Posição não existe");
        }
        this._primeira = this._primeira.getProxima();
        this._totalDeElementos--;

        if (this._totalDeElementos == 0) {
            this._ultima = null;
        }   
    }

    public removeDoFim(): void {
        if (!this.posicaoOcupada(this._totalDeElementos - 1)) {
            throw new Error("Posição não existe");
        }

        if (this._totalDeElementos == 1) {
            this.removeDoComeco();
        } else {
            let penultima: Celula = this.pegaCelula(this._totalDeElementos - 2);
            penultima.setProxima(null);
            this._ultima = penultima;
            this._totalDeElementos--;
        }
    }

    public remove(posicao: number): void {
        if (!this.posicaoOcupada(posicao)) {
            throw new Error("Posição não existe");
        }

        if (posicao == 0) {
            this.removeDoComeco();
        } else if (posicao == this._totalDeElementos - 1) {
            this.removeDoFim();
        } else {
            let anterior: Celula = this.pegaCelula(posicao - 1);
            let atual: Celula = anterior.getProxima();
            let proxima: Celula = atual.getProxima();
            anterior.setProxima(proxima);
            this._totalDeElementos--;
        }
    }

    public tamanho(): number {
        return this._totalDeElementos;
    }
}
