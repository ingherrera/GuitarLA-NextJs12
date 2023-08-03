import Curso from "../components/curso"
import Guitarra from "../components/guitarra"
import Layout from "../components/layout"
import Post from "../components/post"
import styles from "../styles/grid.module.css"

export default function Home({ guitarras, posts, curso, carrito }) {
  // console.log({ guitarras })
  // console.log({ posts })
  // console.log(curso.attributes)
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de música, venta de guitarras y más"}
        carrito={carrito}
      >
        {/* <main className="contenedor">
          <h2 className="heading">Nuestra Colección</h2>
          {guitarras?.length && (
            <div className={styles.grid}>
              {guitarras.map((guitarra) => (
                <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
              ))}
            </div>
          )}
        </main> */}
        { /* <Curso curso={curso.attributes} /> */}

        {/* <section className="contenedor">
          <h1 className="heading">Blog</h1>
          <div className={styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section> */}
      </Layout>
    </>
  )
}
/*
export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarras, resBlog, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso),
  ])

  const [{ data: guitarras }, { data: posts }, { data: curso }] =
    await Promise.all([resGuitarras.json(), resBlog.json(), resCurso.json()])

  return {
    props: {
      guitarras,
      posts,
      curso,
    },
  }
}
*/