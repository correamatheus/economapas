import styles from "./Home.module.css";
import Button from "../../components/button/Button";
import LogoEconomaps from "../../assets/economapas-logo.svg"
import { useState } from "react";


function Home() {



  return (
    <section className={styles.home_container}>
        <img src={LogoEconomaps} alt="Logo Economapas" className={styles.home_logo}/>
        <h1>Bem-vindo ao Quiz da Economapas</h1>
                
      <form className={styles.home_card} >
        <input className={styles.home_input}  type="text" placeholder="Digite o seu nome" />
        <Button type="submit" text="Começar o jogo"/>
      </form>
      
    </section>
  );
}

export default Home;
