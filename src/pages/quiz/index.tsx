import styles from "./index.module.css";
import Questao from "../../components/quiz/Questao"
import {QuestaoModel} from "@/model/quiz/QuestaoModel";
import {RespostaModel}  from "@/model/quiz/RespostaModel";
import { useState } from "react";

export default function Home (){

    const questaoMock: QuestaoModel = new QuestaoModel(1, ' Qual é a melhor cor', [
    RespostaModel.errada('verde'),
    RespostaModel.errada('vermelha'),
    RespostaModel.errada('amarelo'),
    RespostaModel.certa('azul')
])

 const [questao, setQuestao] = useState(questaoMock);
 
  function respostaFornecida(indice: number){
     console.log(indice)
     setQuestao(questao.responderCom(indice))
  }

  // qnd o tempo termina, ele chama a função responderCom c/ valor -1, o q sgnifica q será sempre errada e ele mostrará a resposta certa
  function tempoEsgotado(){
    if(questao.naoRespondida) {
        setQuestao(questao.responderCom(-1));
    }
   
  }

    return (
        <div className={styles.corpo} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }}> 

           <Questao  valor={questao} respostaFornecida={respostaFornecida} tempoEsgotado={tempoEsgotado} tempoParaResponder={5}  />

        </div>
       
    )
}