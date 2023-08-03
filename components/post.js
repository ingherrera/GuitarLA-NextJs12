import Image from "next/future/image";
import Link from "next/link";
import styles from "../styles/blog.module.css";
import { formatearFecha } from "../utils/helpers";

export default function Post({ post }) {
  // console.log("🌳🌳🌳🌳🌳 Post  🌳🌳🌳🌳🌳🌳");
  // console.log(post);
  const { imagen, titulo, publishedAt, contenido, url } = post;
  return (
    <article>
      <Image src={imagen.data.attributes.url} width={300} height={200} alt={`Imagen post ${titulo}`} />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}> {formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.enlace}>Leer Post</a>
        </Link>
      </div>
    </article>
  );
}
