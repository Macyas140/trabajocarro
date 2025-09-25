import React from 'react'

export default function Catalogo() {
  const products = [
    { nombre: "camara", cantidad: 4, id: 1349 },
    { nombre: "lente", cantidad: 7, id: 1347 },
    { nombre: "microfono", cantidad: 9, id: 1355 }
  ]
  return (
    <>
      <div className=' flex flex-wrap justify-center'>

        {products.map((products) => (
          <div key={products.id} className=" flex justify-center shadow-md shadow-gray-600 border-gray-400 w-4/12"><p>{products.nombre}</p></div>

        ))}
      </div>

    </>

  )
}
