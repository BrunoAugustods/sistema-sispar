// Importações
import { useNavigate } from "react-router-dom";
import Capa from "../../assets/Tela Login/imagem tela de login.png";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss";
// Criação da função
function Login() {
    const navigate = useNavigate()
    const botaoEntrar = () => {
        navigate("/reembolsos")
    }
    return (
        <main className={styles.mainLogin}>
                {/* Container principal - Apenas da página Login */}
            <section className={styles.containerImagem}></section>
                {/* Container esquerdo - Imagem de fundo do navio */}
            <section className={styles.containerLogin}>
                {/* Container direito - Logo, textos, imput e botões */}
                <div className={styles.boxLogo}>
                    <img src={Logo} alt="Logo da Wilson sons" />
                    <h1>Boas vindas ao Novo Portal SISPAR</h1>
                    <p>Sistema de Emissão de Boletos e Parcelamento</p>
                </div>

                <form action="">
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <input type="password" name="password" id="password" placeholder="Senha" />
                    <p>Esqueci minha senha</p>
                    <div className={styles.boxBotoes}>
                        <button onClick={botaoEntrar}>Entrar</button>
                        <button>Criar conta</button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Login;