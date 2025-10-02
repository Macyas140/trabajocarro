import React from 'react'
import Carrito from './carrito'
import Catalogo from './catalogo'
import camara from '../assets/camara.png'
import homer from '../assets/homer.png'
import lente from '../assets/Lente.png'
import micro from '../assets/micro.png'
import zapato from '../assets/zapato.png'
import Agregaritem from './agregaritem'
import { useState } from 'react'

export default function Catacarr() {
    const [products, setProduct] = useState([
        { nombre: " Camara ", cantidad: 4, id: 1349, descripcion: "Camara Profesional para capturar lo que desees", src: camara },
        { nombre: " Lente ", cantidad: 7, id: 1347, descripcion: "Lente Extra detallado para que puedas tomar todas las fotografias", src: lente },
        { nombre: " Microfono ", cantidad: 9, id: 1355, descripcion: "Microfono con la mejor calidad del mundo, nada sonara mejor que esto", src: micro },
        { nombre: " Zapato ", cantidad: 2, id: 1367, descripcion: "Zapato aprueba de agua y que te prepara un taco cada vez que lo usas", src: zapato },
        { nombre: " Homero ", cantidad: 99999, id: 1955, descripcion: "Sabias que Pomnni tiene los mismos colores que jesus?", src: homer }
    ])

    const [productsCarr, setProductCarr] = useState([])


    const agregar = (id) => {

        /* Encontrar el elemento donde se dio click en agregar */
        const prodCopy = [...products];
        const producto = prodCopy.find((p) => (p.id == id));
        if (producto.cantidad>=1) {

            /* Agrega el elemento si el carrito esta vacio */
            if (productsCarr.length < 1) {
                const prodCarrCopy = [...productsCarr, { ...producto, cantidad: 1 }];
                setProductCarr(prodCarrCopy);

                /* Resta la cantidad al catalogo */
                prodCopy.map((p) => {
                    if (p.id == id) {
                        return { ...p, cantidad: p.cantidad - 1 };
                    }
                    return p;
                })
                prodCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad - 1 : p));
                /* Resta la cantidad al catalogo */
            }


            /* Agregar elemento cuando el carrito no esta vacio */
            else {
                const productCar = productsCarr.find((p) => (p.id == id));
                const productCarrCopy = [...productsCarr];

                /* Agregar elemento cuando el carrito no esta vacio y ya se tiene un elemento simirar (se aumenta cantidad) */
                if (productCar) {
                    prodCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad - 1 : p));
                    setProduct(prodCopy);

                    /* Suma la cantidad del carrito */
                    productCarrCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad + 1 : p));
                    setProductCarr(productCarrCopy);

                }

                /* Agregar elemento cuando el carrito no esta vacio y no se tiene un elemento simirar (se aumenta cantidad) */
                else {
                    prodCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad - 1 : p));
                    setProduct(prodCopy);

                    const prodCarrCopy = [...productsCarr, { ...producto, cantidad: 1 }];
                    setProductCarr(prodCarrCopy);

                }


            }
        }




    }
    const eliminar = (id) => {
        const productCarrCopy = [...productsCarr];
        const prodCopy = [...products];
        const productoEnCarrito = productCarrCopy.find((p) => p.id === id);
        if (productoEnCarrito) {
            // Actualizar la cantidad en el catálogo (products)
            const productoEnCatalogo = prodCopy.find((p) => p.id === id);
            if (productoEnCatalogo) {
                productoEnCatalogo.cantidad += productoEnCarrito.cantidad;
            }
            setProductCarr(productCarrCopy.filter((p) => (p.id != id)));
        }


    }
    return (

        <div>
            <Agregaritem/>
            <Catalogo products={products} onClick={agregar}></Catalogo>
            <Carrito products={productsCarr} onClick={eliminar}></Carrito>
        </div>
    )
}
