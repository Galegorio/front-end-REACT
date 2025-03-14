import styles from './home.module.css';

const Home = () =>{
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>TarefaMaker</span></h1>
            <p>Não esqueça jamais das suas Tarefas</p>
            <img className={styles.home_container}src="./mlk_estudando.png" alt="" />
        </section>
    );
}

export default Home;