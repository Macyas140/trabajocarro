import React from 'react'


export default function Carrito({products}) {
  
  return (
    <div className=' flex flex-wrap fixed bottom-0 bg-blue-500 w-dvw gap-2'>
      {products.map((product) => (
        <div key={product.id} className=' flex justify-center shadow-md shadow-gray-50 border border-gray-300 w-1/16 bg-white  rounded '>

          <h1>{product.nombre}</h1>
          <p className=' text-gray-500'> cant: {product.cantidad}</p>

          <button className=' m-1 w-5 h-5  flex items-center justify-center rounded cursor-pointer text-red-500 hover:text-red-800 active:text-red-950'>X</button>
        </div>
      ))}


    </div>
  )
}
