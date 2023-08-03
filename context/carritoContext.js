"use client"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { createContext, useContext, useState} from "react"

const CarritoContext = createContext()

export const useCarrito = () => {
  const context = useContext(CarritoContext)

  if (!context)
    throw new Error("useCarrito debe usarse dentro de CarritoProvider")

  return context
}

export const CarritoProvider = ({ children }) => {

  // save in localStorage
  const [carrito, setCarrito] = useLocalStorage("carrito", [])
  // const [carrito, setCarrito] = useState([10, 20])

  const agregarCarrito = (guitarra) => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad
        }
        return guitarraState
      })
      // Se asigna al array
      setCarrito([...carritoActualizado])
      localStorage.setItem("carrito", JSON.stringify(carrito))
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, guitarra])
      localStorage.setItem("carrito", JSON.stringify(carrito))
    }
  }

  const actualizarCantidad = (guitarra) => {
    console.log({ guitarra })
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = parseInt(guitarra.cantidad)
      }
      return guitarraState
    })
    console.log({ carritoActualizado })
    setCarrito(carritoActualizado)
    window.localStorage.setItem("carrito", JSON.stringify(carritoActualizado))
  }

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((producto) => producto.id != id)
    console.log({ carritoActualizado })
    setCarrito(carritoActualizado)
    window.localStorage.setItem("carrito", JSON.stringify(carritoActualizado))
  }

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarCarrito,
        actualizarCantidad,
        eliminarProducto,
      }}
    >
      {children}
    </CarritoContext.Provider>
  )
}
