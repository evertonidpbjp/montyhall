import { QuestaoModel } from "@/model/quiz/QuestaoModel"
import { RespostaModel } from "@/model/quiz/RespostaModel";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import styles from "./Questao.module.css";

interface QuestaoProps {
    valor: QuestaoModel;
}


export default function Questao(props: QuestaoProps){
  const questao = props.valor;
   
  function renderizarRespostas(){
     return  questao.respostas.map((resposta, i) => {
        return   <Resposta 
                key={i}
                objeto={resposta}
                indice={i}
                letra="A"
                corFundoDaLetra="red"
           
           />
      })
  }

    return (
     <div className={styles.questao}>

        <Enunciado texto={questao.enunciado}/>
        {renderizarRespostas()}

     </div>
     
    
    )
}