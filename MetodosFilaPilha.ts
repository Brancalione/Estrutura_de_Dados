//Nessa classe ficaram os Métodos e atributos utilizados nas classes Pilha e Fila
export abstract class  MetodosFilaPilha{
    public _valores:string[]
    public _tamanho:number

    constructor(){
        this._valores = []
        this._tamanho  = 0
    }
    public estaVazia():boolean{
        return this._tamanho === 0
    }
    public getTamanho():number{
        return this._tamanho
    }
    public exibeValores():string[]{
        return this._valores
    }
    //Adicona um elemento e retorna o tamanho do array
    public adicionaFim(elemento:string):number{
        this._tamanho++
        return this._valores.push(elemento)
    }
    //Retorna a posição do valor se ele já foi inserido
    public buscaValor(elemento:string):string{
        for (let i = 0; i<this._tamanho; i++){
            if (this._valores[i] === elemento){
                return "Posição do valor: " + i
            }
        }
        return "Valor não inserido"
    }
}
