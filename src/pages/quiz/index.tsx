import styles from "./index.module.css";
import Questao from "../../components/quiz/Questao"
import {QuestaoModel} from "@/model/quiz/QuestaoModel";
import {RespostaModel}  from "@/model/quiz/RespostaModel";

export default function Home (){

    const questao: QuestaoModel = new QuestaoModel(1, 'Melhor cor', [
    RespostaModel.errada('verde'),
    RespostaModel.errada('vermelha'),
    RespostaModel.errada('amarelo'),
    RespostaModel.certa('azul')
])

    return (
        <div className={styles.corpo} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }}> 

           <Questao  valor={questao}/>

        </div>
       
    )
}