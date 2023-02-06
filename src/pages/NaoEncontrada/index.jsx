import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/erro_404.png'
import BotaoPrincipal from 'components/BotaoPrinciapal';
import { useNavigate } from 'react-router-dom';

export default function NaoEcontrada() {
    const navegar = useNavigate();

    return (
       <>
             <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Ops! Página não econtrada.</h1>
            <p className={styles.paragrafo}>Tem certeza de que era isso que você está procurando?</p>
            <p className={styles.paragrafo}>Aguarde uns instantes e regarregue a página ou volte para página inicial</p>
            <div className={styles.botaoContainer} onClick={() => navegar("/")}>
                 <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
            </div>

            <img className={styles.imagemCachorro} src={erro404} alt="Cachorro de óculos vestido como humano" />

        </div>
        <div className={styles.espacoEmBranco}>

        </div>
       </>
    );
}