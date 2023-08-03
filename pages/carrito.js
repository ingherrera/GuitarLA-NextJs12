"use client"

import Image from "next/future/image"
import Layout from "../components/layout"
import styles from "/styles/carrito.module.css"
import { useEffect, useState } from "react"
import { useCarrito } from "../context/carritoContext"

// export default function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {
export default function Carrito() {
  const { carrito, actualizarCantidad, eliminarProducto } = useCarrito()
  // console.log({ carrito })

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    )
    // const calculoTotal = carrito.reduce(
    //   (total, producto) => total + producto,
    //   0
    // )
    setTotal(calculoTotal)
  }, [carrito])

  return (
    <>
      <Layout title="Carrito" description="Descripcion - Carrito">
        <main>
          <h1 className="heading">Carrito</h1>
          <div className={styles.contenido}>
            <div className={styles.carrito}>
              {carrito.length === 0
                ? "Carrito Vacío"
                : carrito.map((producto) => (
                    <div key={producto.id} className={styles.producto}>
                      <div>
                        <Image
                          src={producto.imagen}
                          width={125}
                          height={240}
                          alt={`Imagen de ${producto.nombre} `}
                        />
                      </div>
                      <div>
                        <p className={styles.nombre}>{producto.nombre}</p>
                        <p>Cantidad:</p>
                        <select
                          value={producto.cantidad}
                          onChange={(e) =>
                            actualizarCantidad({
                              id: producto.id,
                              cantidad: +e.target.value,
                            })
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <p className={styles.precio}>{producto.precio}</p>
                        <p className={styles.subtotal}>
                          Subtotal $
                          <span>{producto.cantidad * producto.precio}</span>
                        </p>
                        <button
                          className={styles.btnEliminar}
                          onClick={() => eliminarProducto(producto.id)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
            </div>
            <aside className={styles.resumen}>
              <h3>Resumen del Pedido</h3>
              <p>Total a Pagar {total}</p>
            </aside>
          </div>
        </main>
      </Layout>
    </>
  )
}
