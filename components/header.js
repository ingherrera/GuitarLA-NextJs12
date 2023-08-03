import Link from "next/link"
import Image from "next/future/image"
import { useRouter } from "next/router"

import styles from "../styles/header.module.css"
import { useCarrito } from "../context/carritoContext"

// export default function Header({ carrito }) {
export default function Header() {
  // console.log("Desde Header")
  // console.log({ carrito })
  
  const router = useRouter()

  const { carrito } = useCarrito()

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              src="/img/logo.svg"
              alt="Imagen del Logo"
              width={300}
              height={40}
            />
          </a>
        </Link>

        <nav className={styles.navegacion}>
          <Link href="/">
            <a className={router.pathname === "/" ? styles.active : ""}>
              Inicio
            </a>
          </Link>

          <Link href="/tienda">
            <a className={router.pathname === "/tienda" ? styles.active : ""}>
              Tienda
            </a>
          </Link>

          <Link href="/blog">
            <a className={router.pathname === "/blog" ? styles.active : ""}>
              Blog
            </a>
          </Link>

          <Link href="/nosotros">
            <a className={router.pathname === "/nosotros" ? styles.active : ""}>
              Nosotros
            </a>
          </Link>

          <Link href="/carrito">
            <a className={router.pathname === "/carrito" ? styles.active : ""}>
              <div className={styles.divContenedor}>
                {carrito.length > 0 ?  <div className={styles.badge} id="badge">{carrito.length}</div>: ""}
                <Image
                  src="/img/carrito.png"
                  alt="Imagen del Carrito"
                  width={30}
                  height={25}
                />
              </div>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
