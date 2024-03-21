import { RespostaModel } from "./RespostaModel";
import { embaralhar } from "@/functions/embaralhar";

export class QuestaoModel {
    // private é do ts e # é o padrão do emascript
    #id: number;
    #enunciado: string;
    #respostas: RespostaModel[];
    #acertou: boolean;
    


constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
    this.#id = id;
    this.#enunciado = enunciado;
    this.#respostas = respostas;
    this.#acertou = acertou;
}

get id ():number {
    return this.#id;
}

get enunciado ():string {
    return this.#enunciado;

}

get repostas(): any[] {
    return this.#respostas
}

get acertou (): boolean {
    return this.#acertou
}

get respondida (): boolean {
    for(let resposta of this.#respostas) {
        if(resposta.getRevelada) return true;
        
      
    }
    return false;
}

embaralharRespostas(): QuestaoModel{
  let respostasEmbaralhadas = embaralhar(this.#respostas);
  return new QuestaoModel(this.#id, this.enunciado, respostasEmbaralhadas, this.#acertou)
}



// para devolver os dados na api, é preciso q ele seja convertido p/ objeto, obrigando a criar esse método p/ devolver todos os atributos da classe
converteParaObjeto() {
    return {
        id: this.#id,
        enunciado: this.#enunciado,
        respostas: this.#respostas.map(resposta => {
            return resposta.converteParaObjeto();
        }),
        acertou: this.#acertou
    }
}


}