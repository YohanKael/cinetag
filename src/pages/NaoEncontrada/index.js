import styles from "./Naoencontrada.module.css"

function NaoEncontrada() {
    return(
        <section className={styles.container}>
        <h2>Ops!</h2>
        <p>A Página que voce tentou acessar não foi encontrada!</p>
        </section>
    )
}

export default NaoEncontrada