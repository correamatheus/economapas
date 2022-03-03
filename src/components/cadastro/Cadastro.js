import { useState } from "react";
import styles from "./Cadastro.module.css";


function Cadastro({ onSubmit }) {
  const [name, setName] = useState("");
  const [mostrarQuestoes, setMostrarQuestoes] = useState(false);
  const [selecaoDificuldade, setSelecaoDificuldade] = useState("easy");
  const dificuldade = ["easy", "hard"];
  const [validaCampo, setValidaCampo] = useState(false)

  const enviarFormulario = (e) => {
    
    if(name.value === 0 ){
      setValidaCampo(false)
    }
    
    if(name.length > 0){
      e.preventDefault();
      console.log("dados componente", { name });
      onSubmit({ name, selecaoDificuldade });
      setMostrarQuestoes(true);
      console.log("mostrar questoes component", mostrarQuestoes);
      console.log(selecaoDificuldade);
      setValidaCampo(true)
    }
   
  };

  return (
    <>
      <form className={styles.cadastro_card} onSubmit={enviarFormulario}>
        <input
          className={styles.cadastro_input}
          type="text"
          placeholder="Digite o seu nome"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}   
  
        />
               <select onChange={(e) => setSelecaoDificuldade(e.target.value)}>
          {dificuldade.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        {!validaCampo && <p className={styles.info}>Para iniciar o jogo preencha o campo nome - Campo obrigatório</p>}
        <button type="submit" className={styles.button_style}>Começar a jogar</button>
 
      </form>
    </>
  );
}

export default Cadastro;
