import { QuestaoModel } from "@/model/quiz/QuestaoModel"
import { RespostaModel } from "@/model/quiz/RespostaModel";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import styles from "./Questao.module.css";
import Temporizador from "./Temporizador";
import Button from "./Botao";

const letras = [
  {valor: "A", cor: '#F2C866'},
  {valor: "B", cor: '#F266BA'},
  {valor: "C", cor: '#85D472'},
  {valor: "D", cor: '#BCE596'}
]

interface QuestaoProps {
    valor: QuestaoModel;
    respostaFornecida: (indice: number) => void;
    tempoEsgotado: () => void;
    tempoParaResponder?: number
}



export default function Questao(props: QuestaoProps){
  const questao = props.valor;
   
  function renderizarRespostas(){
     return  questao.respostas.map((resposta, i) => {
        return   <Resposta 
                key={i}
                objeto={resposta}
                indice={i}
                letra={letras[i].valor}
                corFundoDaLetra={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
                
           />
      })
  }

    return (
     <div className={styles.questao}>

        <Enunciado texto={questao.enunciado}/>
        <Temporizador duracao={props.tempoParaResponder ?? 10}  tempoEsgotado={props.tempoEsgotado}/>
        {renderizarRespostas()}
       <Button texto="botao" href="/quiz/resultado"/>
      

     </div>
     
    
    )
}