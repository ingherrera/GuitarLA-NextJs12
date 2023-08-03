// import { useRouter } from "next/router";
import Layout from "../../components/layout"
import Image from "next/future/image"
import styles from "../../styles/guitarra.module.css"
import { useState } from "react"
import { useCarrito } from "../../context/carritoContext"

export default function Producto({ guitarra }) {
  const [cantidad, setCantidad] = useState(0)
  const { nombre, descripcion, precio, imagen } = guitarra[0].attributes

  const { agregarCarrito } = useCarrito()

  // console.log("🌳🌳🌳🌳🌳 Producto  🌳🌳🌳🌳🌳🌳")
  // console.log({ guitarra })
  // console.log({ cantidad })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (cantidad < 1) {
      alert("Debes seleccionar una cantidad")
      return
    }

    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    }
    // console.log({ guitarraSeleccionada })
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <Layout title={`Guitarra ${nombre}`}>
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

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad</label>

            <select
              onChange={(e) => setCantidad(parseInt(e.target.value))}
              id="cantidad"
            >
              <option value="0">-- Seleccione ---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al Carrito" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

/*
export async function getServerSideProps({ query }) {
  const { url } = query;
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}`);
  const { data: guitarra } = await respuesta.json();
  console.log("🌳🌳🌳🌳🌳 getServerSideProp - data  🌳🌳🌳🌳🌳🌳");
  console.log(guitarra);
  return {
    props: { guitarra },
  };
} */

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const { data: guitarras } = await respuesta.json()
  // console.log(guitarras);
  // const paths = [{ params: { url: "vai" } }];
  const paths = guitarras.map((guitarra) => ({
    params: {
      // url: guitarra.attributes.url,
      url: guitarra.attributes.url,
    },
  }))
  // console.log("🌳🌳🌳🌳🌳 getStaticPaths - paths  🌳🌳🌳🌳🌳🌳");
  // console.log(paths);

  // paths.map((objeto) => {
  //   console.log("Mapeando paths..", objeto);
  // });
  return {
    // paths: [{ params: { url: "vai" } }],
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { url } = params
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  )
  const { data: guitarra } = await respuesta.json()
  console.log("🌳🌳🌳🌳🌳 getStaticProps - url  🌳🌳🌳🌳🌳🌳")
  console.log(url)

  return {
    props: { guitarra },
  }
  // return { props: {} };
}
