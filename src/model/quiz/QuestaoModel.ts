import { RespostaModel } from "./RespostaModel";

export class QuestaoModel {
    // private é do ts e # é o padrão do action script
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

}