import Guitarra from "../components/guitarra"
import Layout from "../components/layout"
import styles from "../styles/grid.module.css"

export default function Tienda({ guitarras }) {
  // console.log("Tienda..", guitarras);
  return (
    <>
      <Layout
        title={"Tienda Virtual"}
        description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
      >
        <main className="contenedor">
          <h2 className="heading">Nuestra Colección</h2>
          {guitarras?.length && (
            <div className={styles.grid}>
              {guitarras.map((guitarra) => (
                <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
              ))}
            </div>
          )}
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  )
  const { data: guitarras } = await respuesta.json()

  return {
    props: {
      guitarras,
    },
  }
}

// export async function getStaticProps() {
//   const respuesta = await fetch(`http://localhost:1337/api/guitarras?populate=imagen`);
//   const resultado = await respuesta.json();
//   // console.log(resultado);

//   return {
//     props: {},
//   };
// }
// export async function getServerSideProps() {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitarras?populate=imagen`
//   );
//   const { data: guitarras } = await respuesta.json();

//   return {
//     props: {
//       guitarras,
//     },
//   };
// }
