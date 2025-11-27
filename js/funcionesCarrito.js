import {
  guardarCarrito,
  obtenerCarrito,
  vaciarCarritoStorage,
} from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  //aca tuve problemas y era un carrito q habia quedado en el localstorage q tuve q borrar desde applications
  //usamos la funcion que pide el carrito al localStorage
  const carrito = obtenerCarrito();
  carrito.push(producto);

  //usamos la funcion que guarda el carrito en el localStorage
  guardarCarrito(carrito);

  //usamos la funcion UI que actualiza en numero en carrito
  actualizarContador(carrito);
  mostrarMensaje("Producto agregado al carrito");
};

export const eliminarDelCarrito = (indice) => {
  const carrito = obtenerCarrito();
  carrito.splice(indice, 1); //1er parametro a partir de cual, 2do cuantos a partir del anterior, 3ro x que cosa debe reemplazarlo (si no hay nada entonces elimina)
  guardarCarrito(carrito);
  actualizarContador(carrito);
  mostrarMensaje("Producto eliminado");
};

export const vaciarElCarrito = () => {
  vaciarCarritoStorage();
  actualizarContador([]);
  mostrarMensaje("Carrito vacio");
};
//--------------------------------------
