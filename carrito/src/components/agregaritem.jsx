import React from 'react'
import { useState } from 'react';

export default function Agregaritem() {
    const [visible, setVisible] = useState(false);
    return (
        <div className="flex justify-center">
            <div className="relative flex flex-col shadow-md shadow-gray-30 border border-gray-300 w-6/12 bg-white rounded ">
                <div className="flex justify-center mb-2">
                    <p >Agregar Item</p>
                </div>
                <div className="absolute right-4">
                    <button onClick={() => setVisible(!visible)} className="cursor-pointer hover:scale-125 transition-transform">
                        {visible ? "⬆️" : "⬇️"}
                    </button>
                </div>

                {/* Input centrado debajo del texto */}
                {visible && (
                    <div className=" flex justify-center">
                        <form>
                            <input
                                type="text"
                                placeholder="nombre"
                                id="nombre"
                                className="border border-gray-300 px-3 py-1 rounded"
                            />
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}
