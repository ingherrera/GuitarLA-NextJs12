import Layout from "../components/layout"
import Image from "next/future/image"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <>
      <Layout
        title={"Nosotros"}
        description="Sobre nosotros, guitarLA, tienda de música"
      >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="Imagen sobre nosotros"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                aliquet libero non sagittis pulvinar. Morbi aliquet, odio ut
                congue ullamcorper, lectus nibh molestie libero, quis commodo
                massa mauris in mi.
              </p>
              <p>
                Vestibulum quis posuere risus. Maecenas malesuada felis sit amet
                arcu imperdiet finibus. Pellentesque porttitor erat nisi,
                feugiat fermentum quam varius ut. Pellentesque aliquet ornare
                mauris ut pretium. Suspendisse a felis faucibus, vestibulum urna
                ac, venenatis nibh.{" "}
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}
