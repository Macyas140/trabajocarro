import React from 'react'
import Carrito from './carrito'
import Catalogo from './catalogo'
import camara from '../assets/camara.png'
import homer from '../assets/homer.png'
import lente from '../assets/Lente.png'
import micro from '../assets/micro.png'
import zapato from '../assets/zapato.png'
import { useState } from 'react'

export default function Catacarr() {
    const [products, setProduct] = useState([
        { nombre: " Camara", cantidad: 4, id: 1349, descripcion: "Camara Profesional para capturar lo que desees", src: camara },
        { nombre: " Lente", cantidad: 7, id: 1347, descripcion: "Lente Extra detallado para que puedas tomar todas las fotografias", src: lente },
        { nombre: " Microfono", cantidad: 9, id: 1355, descripcion: "Microfono con la mejor calidad del mundo, nada sonara mejor que esto", src: micro },
        { nombre: " Zapato", cantidad: 2, id: 1367, descripcion: "Zapato aprueba de agua y que te prepara un taco cada vez que lo usas", src: zapato },
        { nombre: " Pomni", cantidad: 99999, id: 1955, descripcion: "Sabias que Pomnni tiene los mismos colores que jesus?", src: homer }
    ])

    const [productsCarr, setProductCarr] = useState([])


    const agregar = (id) => {
        const prodCopy = [...products];
        const producto = prodCopy.find((p)=>(p.id==id));
        const prodCarrCopy=[...productsCarr, producto];
        setProductCarr(prodCarrCopy);
    }
    const eliminar = (id) => {

    }
    return (

        <div>
            <Catalogo products={products} onClick={agregar}></Catalogo>
            <Carrito products={productsCarr}></Carrito>
        </div>
    )
}
