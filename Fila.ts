//Fila é um conceito de inserção da dados em um array, onde o primeiro a ser inserido é o primeiro a sair
import { MetodosFilaPilha } from "./MetodosFilaPilha"
export default class Fila extends MetodosFilaPilha{
    constructor(){
        super()
        console.log('Objeto Fila criado!')
    }
    //remove e retona o primeiro elemento do array
    public desenfileirar():string{
        this._tamanho--
        return this._valores.shift()
    }
    public exibePrimeiro():string{
        return this._valores[0]
    }
}
let Fila1 = new Fila() //{Objeto Fila criado!}
Fila1.adicionaFim('4')
Fila1.adicionaFim('5')
console.log(Fila1.adicionaFim('6'))//{3}
console.log(Fila1.desenfileirar())//{4}
console.log(Fila1.exibeValores())//{'5', '6'}
console.log(Fila1.buscaValor('5'))//{Posição do valor: 0}
console.log(Fila1.buscaValor('7'))//{Valor não inserido}
console.log(Fila1.exibePrimeiro())//{5}
console.log(Fila1.estaVazia())//{false}
