import { useEffect, useState } from "react";
import styles from "./Questions.module.css";
import Loading from "../../components/loading/Loading";

function Questions({name}) {
  const [questions, setQuestions] = useState([]);
  const [gabarito, setGabarito] = useState([]);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [mostrarPontuacao, setMostrarPontuacao] = useState(false);
  const [pontuacao, setPontuacao] = useState(0);
  const [removeLoading, setRemoveLoading] = useState(false);

  

  const pegarGabarito = () => {
    for (const [key, value] of Object.entries(
      questions[questaoAtual].correct_answers
    )) {
      if (value === "true") {
        // gabarito.push(key.substring(7, 8)) ;
        let novaString = key.substring(7, 8);
        setGabarito((arr) => [...arr, novaString]);
      }
    }
  };

  const irProximaQuestao = (questaoCorreta) => {
    let respostaCorreta = "";

    for (const [key, value] of Object.entries(
      questions[questaoAtual].correct_answers
    )) {
      if (value === "true") {
        respostaCorreta = key.substring(0, 8);
      }
    }

    if (questaoCorreta === respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }

    const proximaQuestao = questaoAtual + 1;
    if (proximaQuestao < questions.length) {
      setQuestaoAtual(proximaQuestao);
    } else {
      setMostrarPontuacao(true);
    }

    pegarGabarito();
  };

  useEffect(() => {
    fetch("https://quizapi.io/api/v1/questions?apiKey=x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed&limit=10", {
      method: "GET",
      headers: {
        // "x-api-key": "x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setQuestions(data);
        setRemoveLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {mostrarPontuacao ? (
        <div>
          Você acertou {pontuacao} de {questions.length}
          <div>
            Gabarito:{" "}
            {gabarito.map((item, index) => (
              <ul>
                <li>
                  {index + 1} - {item}
                </li>
              </ul>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {questions.length > 0 ? (
            <div>
              <div>
                <h1>{name}</h1>
                <span>Questão: {questaoAtual + 1}</span>/{questions.length}
                
              </div>
              <div>{questions[questaoAtual].question}</div>
              <div className={styles.btn_questoes}>
                {Object.keys(questions[questaoAtual].answers).map((item) => (
                  <button
                    onClick={() => irProximaQuestao(item)}
                    className={styles.btn}
                  >
                    {questions[questaoAtual].answers[item]}
                  </button>
                ))}                
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      )}
    </div>
  );
}

export default Questions;
