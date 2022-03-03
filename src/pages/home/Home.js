import styles from "./Home.module.css";
import LogoEconomaps from "../../assets/economapas-logo.svg";
import Cadastro from "../../components/cadastro/Cadastro";
import { useState } from "react";
import Questions from "../questions/Questions";

function Home() {
  const [name, setName] = useState();
  const [mostrarQuestoes, setMostrarQuestoes] = useState(false);
  const [selecaoDificuldade, setSelecaoDificuldade] = useState('')

  const handleSubmit = ({ name, selecaoDificuldade }) => {
    console.log("dados home", { name });
    setName(name);
    setMostrarQuestoes(true);
    setSelecaoDificuldade(selecaoDificuldade);
    console.log("mostrar questoes home", mostrarQuestoes);
    console.log("mostrar difculdade home", selecaoDificuldade);
  };

  return (
    <div>
      {mostrarQuestoes ? (
        <Questions name={name} selecaoDificuldade={selecaoDificuldade} />
      ) : (
        <section className={styles.home_container}>
          <img
            src={LogoEconomaps}
            alt="Logo Economapas"
            className={styles.home_logo}
          />
          <h1>Bem-vindo ao Quiz da Economapas</h1>

          <Cadastro onSubmit={handleSubmit} />
        </section>
      )}
    </div>

    // <section className={styles.home_container}>
    //   <img
    //     src={LogoEconomaps}
    //     alt="Logo Economapas"
    //     className={styles.home_logo}
    //   />
    //   <h1>Bem-vindo ao Quiz da Economapas</h1>

    //   <Cadastro onSubmit={handleSubmit}/>
    //   <Questions name={name}/>
    // </section>
  );
}

export default Home;
