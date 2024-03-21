import banco from '../banco';

export default async function handler(req, res) {

    // Simulate fetching question data
    const question = {
      id: 1,
      text: "What is the capital of France?",
      options: ["London", "Paris", "Berlin"]
    };

    const idSelecionado = +req.query.id

    const questaoOuNada = banco.filter(questao =>  questao.id === idSelecionado)
   
    if(questaoOuNada.length === 1) {
        // além de extrair a questão, ele executa o método q embaralha a ordem das respostas (opcões)
        const questao = questaoOuNada[0].embaralharRespostas();
        res.status(200).json(questao.converteParaObjeto());
    } else {
        res.status(204).send();
    }
   
  }
  