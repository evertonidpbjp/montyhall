import { RespostaModel } from "@/model/quiz/RespostaModel";
import styles from "@/components/quiz/Resposta.module.css";

interface RespostaProps {
    objeto: RespostaModel;
    indice: number;
    letra: string;
    corFundoDaLetra: string;
}



export default function Resposta (props: RespostaProps) {
    const resposta = props.objeto;

  return (
      <div className={styles.reposta}>
         <div className={styles.conteudoReposta}>
            <div className={styles.frente}>
                <div className={styles.letra}>
                    {props.letra}
                </div>

                <div className={styles.valor}>
                  {resposta.getValor()}        
                </div>
            </div>

            <div className={styles.verso}>

            </div>
         </div>
      </div>
   
  )

}