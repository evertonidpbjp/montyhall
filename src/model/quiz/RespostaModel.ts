export class RespostaModel {
  private valor: string;
  private certa: boolean;
  private revelada: boolean;

constructor(valor: string, certa: boolean, revelada: boolean  = false) {
   this.valor = valor;
   this.certa = certa;
   this.revelada = revelada;

}
// métodos estáticos, pertencem à classe, ñ ao objeto. Serve p/ obter qual resposta é a correta ou errada (ver api/quiz/questoes/id)
static certa(valor: string): RespostaModel{

  return new RespostaModel(valor, true);
}


static errada(valor: string): RespostaModel {
    return new RespostaModel(valor, false)
}

getValor(): string{
    return this.valor;
}

getCerta(): boolean {
    return this.certa;
}

getRevelada():boolean {
    return this.revelada
}

converteParaObjeto(){
    return {
        valor: this.valor,
        certa: this.certa,
        revelada: this.revelada
        
    }

}

}