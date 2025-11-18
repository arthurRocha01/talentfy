import styles from './Main.module.css';

export const Main = () => {
  return (
    <main className={styles.main}>
      <h2>Encontre <span>Talentos Incríveis</span> Perto de Você</h2>
      <p>
        Conecte-se com os melhores profissionais da sua região. Rápido, seguro e eficiente.
      </p>
      <div className={styles.searchBar}>
        {/* copiar estilo para fazer search bar */}
      </div>
      <div className={styles.button}>
        <button>Buscar Talentos</button>
      </div>
      <div className={styles.reviews}>
        <span>4.8</span> Avaliações
      </div>
    </main>
  );
};
