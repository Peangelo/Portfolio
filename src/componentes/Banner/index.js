import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {

    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Ola mundo
                </h1>
                <p className={styles.paragrafo}>
                Este é o meu portfólio web pessoal, desenvolvido para exibir meus projetos, habilidades e experiências na área de desenvolvimento de software e automação de testes. O site foi criado utilizando tecnologias modernas para garantir uma interface limpa, responsiva e de fácil navegação.
                </p>
            </div>
            <div className={styles.imagens}>
                
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido} 
                    aria-hidden={true} 
                    alt='circuloColorido'
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Minha foto'
                />

            </div>
        </div>
    )
}