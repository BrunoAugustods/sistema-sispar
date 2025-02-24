// Importações de imagens e Navbar
import styles from "./Reembolsos.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Analises from "../../assets/Dashboard/Análises.png";
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png";
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png";
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png";
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png";
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png";
import NavBar from "../navbar/NavBar.jsx"

function Reembolsos() {
  return (
    <div className={styles.body}>
      {/* Container principal - Apenas da tela reembolsos */}
      <NavBar />

      <header>
        <img src={Home} alt="Home da header" />
        <img src={Seta} alt="Seta da header" />
        <p>Reembolsos</p>
      </header>
      
      <main className={styles.mainReembolsos}>
        {/* Container - Texto principal e subtitulo */}
        <h1>Sistema de Reembolsos</h1>
        <p>
          Solicite novos pedidos de reembolso, visualize solicitações em análise
          e todo o histórico.
        </p>

        <section className={styles.containerCards}>
          {/* Container - Com os cards */}
          <article className={styles.card}>
            <img src={SolicitarReembolso} alt="" />
            <p><strong>Solicitar Reembolso</strong></p>
          </article>

          <article className={styles.card}>
            <img src={Analises} alt="" />
            <p><strong>Verificar análises</strong></p>
          </article>

          <article className={styles.card}>
            <img src={SolicitarHistorico} alt="" />
            <p><strong>Histórico</strong></p>
          </article>
        </section>

        <section className={styles.containerDados}>
          {/* Container - Abaixo com imagens e dados */}
          <div>
            <img
              className={styles.imgSolicitados}
              src={NumeroSolicitados}
              alt=""
            />
            <h4>182</h4>
            <p>Solicitados</p>
          </div>

          <div>
            <img className={styles.imgAnalise} src={NumeroAnalises} alt="" />
            <h4>74</h4>
            <p>Em análise</p>
          </div>

          <div>
            <img className={styles.imgAprovados} src={NumeroAprovados} alt="" />
            <h4>195</h4>
            <p>Aprovados</p>
          </div>

          <div>
            <img
              className={styles.imgRejeitados}
              src={NumeroRejeitados}
              alt=""
            />
            <h4>41</h4>
            <p>Rejeitados</p>
          </div>
        </section>

        <section className={styles.containerSistema}>
          {/* Container - Logo e texto de dados atualizados */}
          <img src={Sistema} alt="" />
          <a href="">Sistema atualizado.</a>
        </section>
      </main>
    </div>
  );
}
export default Reembolsos;
