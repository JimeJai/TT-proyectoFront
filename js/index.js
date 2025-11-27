//ACA VA EL RENDERIZADO DE LAS TARJETAS

import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-productos");

  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  fetch("./data/productos.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error HTTP status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      data.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("cada-producto");

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre; //va una clase antes del text content?

        const img = document.createElement("img");
        img.src = `./${producto.img}`;
        img.alt = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio} por dia`;

        const boton = document.createElement("button");
        //aca ella le pone una clase xq habia hecho un boton y eso.. yo no lo tengo, quiza lo puedo agregar desde aca
        boton.classList.add("btn"); //no esta usado desde el css
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
          agregarAlCarrito(producto);
        });

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(img);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta);
      });
    })
    .catch((error) => console.log(error));
});
//------------------------------------------------------
