//Pilha é uma estrutura de dados onde são inseridos valores em um array e o último valor que é adicionado é o primeiro que saí
import { MetodosFilaPilha } from "./MetodosFilaPilha"
export default  class  Pilha extends MetodosFilaPilha{
    //define tipos
    constructor(){
        super()
        console.log('Objeto Pilha criado!')
    }
    public exibeTopo():string{
        return this._valores[this._tamanho-1]
    }
    //remove e retona o último elemento do array
    public desempilhar():string{
        this._tamanho--
        return this._valores.pop() 
    }
}

let pilha1 = new Pilha() //{Objeto Pilha Criado}
pilha1.adicionaFim('2')
pilha1.adicionaFim('3')
console.log(pilha1.adicionaFim('6'))//{3}
console.log(pilha1.desempilhar())//{6}
console.log(pilha1.exibeValores())//{'2', '3'}
console.log(pilha1.buscaValor('3'))//{Posição do valor: 1}
console.log(pilha1.buscaValor('7'))//{Valor não inserido}
console.log(pilha1.exibeTopo())//{3}
console.log(pilha1.estaVazia())//{false}
