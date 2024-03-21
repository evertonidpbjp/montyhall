export class RespostaModel {
  private valor: string;
  private certa: boolean;
  private revelada: boolean;

constructor(valor: string, certa: boolean, revelada: boolean  = false) {
   this.valor = valor;
   this.certa = certa;
   this.revelada = revelada;

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



}