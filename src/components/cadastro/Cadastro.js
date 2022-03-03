import { useState } from "react";
import styles from "./Cadastro.module.css";

function Cadastro({onSubmit}) {
  const [name, setName] = useState("");
  const [mostrarQuestoes, setMostrarQuestoes] = useState(false)
  const [selecaoDificuldade, setSelecaoDificuldade] = useState('')

  const dificuldade = ['easy', 'hard']

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('dados componente', {name})
      onSubmit({name})
      setMostrarQuestoes(true)
      console.log("mostrar questoes component",mostrarQuestoes)
      console.log(selecaoDificuldade)
  }

  return (
    <>
      <form className={styles.home_card} onSubmit={handleSubmit}>
        <input
          className={styles.home_input}
          type="text"
          placeholder="Digite o seu nome"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Começar a jogar</button>
        <select onChange={(e) => setSelecaoDificuldade(e.target.value)}>
            {dificuldade.map(item => (
                <option value={item} >{item}</option>
            ))}
        </select>
      </form>
    </>
  );
}

export default Cadastro;
