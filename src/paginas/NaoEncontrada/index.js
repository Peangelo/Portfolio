import BotaoPrincipal from "componentes/BotaoPrincipal"
import styles from "./NaoEncontrada.module.css"

export default function NaoEncontrada() {

    return (

        <>
        
        
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>
                Ops! Pagina não encontrada
            </h1>
            <p className={styles.paragrafo}>
                Tem certeza que é isso que esta procurando?
            </p>

            <div className={styles.botaoContainer}>
                <BotaoPrincipal> voltar </BotaoPrincipal>
            </div>
         
        </div>
        <div className={styles.espacoEmBranco}></div>
        </>
    )
}