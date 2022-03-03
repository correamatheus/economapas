import styles from "./Home.module.css";
import Button from "../../components/button/Button";
import LogoEconomaps from "../../assets/economapas-logo.svg";
import Cadastro from "../../components/cadastro/Cadastro";
import { useState } from "react";
import Questions from "../questions/Questions";

function Home() {
  const [name, setName] = useState();
  const [mostrarQuestoes, setMostrarQuestoes] = useState(false);

  const handleSubmit = ({ name }) => {
    console.log("dados home", { name });
    setName(name);
    setMostrarQuestoes(true);
    console.log("mostrar questoes home", mostrarQuestoes);
  };

  return (
    <div>
      {mostrarQuestoes ? (
        <Questions name={name} />
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
