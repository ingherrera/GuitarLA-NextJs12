import { CarritoProvider } from "../context/carritoContext"
import "../styles/globals.css"
import { useState, useEffect } from "react"

function MyApp({ Component, pageProps }) {
  
  // const carritoLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("carrito")) ?? []: [] 
  
  // const [carrito, setCarrito] = useState(carritoLS)
  // const [paginaLista, setPaginaLista] = useState(false)

  /*
  useEffect(() => {
    setPaginaLista(true)
  }, [])
  */

  /*
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])
  */

  


  // return ( paginaLista ?
  return (
    <CarritoProvider>
      <Component
        {...pageProps}
        // carrito={carrito}
        // agregarCarrito={agregarCarrito}
        // eliminarProducto={eliminarProducto}
        // actualizarCantidad={actualizarCantidad}
        />
    </CarritoProvider>
    // : null
  )
}

export default MyApp
