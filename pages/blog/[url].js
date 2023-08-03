import Layout from "../../components/layout"
import Image from "next/future/image"
import styles from "../../styles/blog.module.css"
import { formatearFecha } from "../../utils/helpers"

export default function Post({ post }) {
  console.log("🌳🌳🌳🌳🌳 Cliente - [url].js  - Post 🌳🌳🌳🌳🌳🌳")
  console.log(post[0].attributes)
  const { imagen, titulo, publishedAt, contenido } = post[0].attributes
  return (
    <Layout title={titulo}>
      <article className={`contenedor ${styles.post} ${styles.mt3}`}>
        <Image
          src={imagen.data.attributes.url}
          width={600}
          height={400}
          alt={`Imagen post ${titulo}`}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const { url } = query
  // console.log("🌳🌳🌳🌳🌳 getServerSideProp - url  🌳🌳🌳🌳🌳🌳");
  // console.log(url);

  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  )
  const { data: post } = await respuesta.json()
  // console.log("🌳🌳🌳🌳🌳 getServerSideProp - data  🌳🌳🌳🌳🌳🌳");
  // console.log(post);
  return {
    props: { post },
  }
}
