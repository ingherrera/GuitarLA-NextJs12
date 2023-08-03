import styles from "../styles/curso.module.css"

// export default Curso({ curso }) {
export default function Curso({ curso }) {
  const { imagen, titulo, contenido } = curso

  return (
    <section className={`${styles.curso} fondoImagen`}>
      <style jsx>{`
        .fondoImagen {
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.65),
              rgb(0 0 0 / 0.7)
            ),
            url(${imagen?.data?.attributes?.url});
        }
      `}</style>

      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p>{contenido}</p>
        </div>
      </div>
    </section>
  )
}

/*
export default function Curso({ curso }) {
  // console.log(curso)
  const { titulo, imagen, contenido } = curso
  return (
    <section className={`${styles.curso} curso`}>
      <style jsx>{`
        .curso {
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.65),
              rgb(0 0 0 / 0.7)
            ),
            url(${imagen?.data?.attributes?.url});
        }
      `}</style>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p>{contenido}</p>
        </div>
      </div>
    </section>
  )
}
*/
