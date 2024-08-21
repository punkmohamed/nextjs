"use client"
import React, { useState } from 'react'

const Footer = () => {
    const [count, setCount] = useState(0)
    return (
        <footer className=' bg-emerald-900 text-white  m-14 p-6 rounded-3xl shadow-2xl'>
            <div className='flex  justify-center align-middle'>
                <div className='flex flex-col'>
                    <h1 className=''>copy right @mohamed {count}</h1>
                    <button className='bg-red-200 text-white' onClick={() => setCount((prev) => prev + 1)}>Click me</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer