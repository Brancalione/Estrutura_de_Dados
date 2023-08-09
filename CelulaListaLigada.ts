export class Celula {
    private _proxima:Celula;
    private _elemento:object;
    public constructor(proxima:Celula, elemento:object) {
    this._proxima = proxima;
    this._elemento = elemento;}

    public setProxima(proxima:Celula):void{
        this._proxima = proxima;
    }

    public getProxima():Celula {
        return this._proxima;
    }

    public getElemento(): Object {
        return this._elemento;
    }
}

