import Image from "next/future/image";
import styles from "../styles/guitarra.module.css";
import Link from "next/link";

export default function Guitarra({ guitarra }) {
  // console.log({ guitarra });
  const { nombre, descripcion, precio, url, imagen } = guitarra;
  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.small.url}
        width={150}
        height={100}
        alt={`Imagen guitarra ${nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>Ver Producto </a>
        </Link>
      </div>
    </div>
  );
}
