
//Pilha é uma estrutura de dados onde são inseridos valores em um array e o último valor que é adicionado é o primeiro que saí
export default class Pilha{
    //define tipos
    private _valores:string[] 
    private _tamanho:number

    constructor(){
        //declara _valores vazio e _tamanho 0
        this._valores = []
        this._tamanho = 0
        console.log('Objeto Pilha Criado')
    }
    //Adicona um elemento e retorna o tamanho do array
    public empilhar(elemento:string):number{
        this._tamanho++
        return this._valores.push(elemento)
    }
    public exibeTopo():string{
        return this._valores[this._tamanho-1]
    }
    //remove e retona o último elemento do array
    public desempilhar():string{
        this._tamanho--
        return this._valores.pop() 
    }
    public exibeValores():string[]{
        return this._valores
    }
    public getTamanho():number{
        return this._tamanho
    }
    public estaVazia():boolean{
        return this._tamanho === 0
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

let pilha1 = new Pilha() //{Objeto Pilha Criado}
pilha1.empilhar('2')
pilha1.empilhar('3')
console.log(pilha1.empilhar('6'))//{3}
console.log(pilha1.desempilhar())//{6}
console.log(pilha1.exibeValores())//{'2', '3'}
console.log(pilha1.buscaValor('3'))//{Posição do valor: 1}
console.log(pilha1.buscaValor('7'))//{Valor não inserido}
console.log(pilha1.exibeTopo())//{3}
console.log(pilha1.estaVazia())//{false}
