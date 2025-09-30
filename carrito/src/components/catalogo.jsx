import React from 'react'
import Catacarr from './catacarr'


export default function Catalogo({products, onClick}) {

  return (
    <>
      <div className=' flex flex-wrap justify-around'>

        {products.map((products) => (
          <div key={products.id} className=" flex justify-center shadow-md shadow-gray-600 border-gray-400 w-3/10 m-2 rounded gap-9">
            <div className=' border border-white'>
              <h1 className=' m-2 font-bold bg-blue-400'>{products.nombre}</h1>
              <p className=' text-gray-500 font-sans'>{products.descripcion}</p>
              <p className=' text-gray-500'>Cantidad: {products.cantidad}</p>
              <button onClick={()=>onClick(products.id)} className=' bg-blue-600 text-white px-6 py 2 rounded shadow-md shadow-gray-600 hover:bg-blue-900 active:scale-95 transition-all duration-150 hover:scale-110 w-35 h-15 active:bg-green-600 '>Agregar</button>
            </div>
            <div className=' flex flex-wrap justify-center border-8 border-white'>
              <img src={products.src} alt="imagen" className=' w-40 h-40 ' />
            </div>


          </div>





        ))}
      </div>

    </>

  )
}
