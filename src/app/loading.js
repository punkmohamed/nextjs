"use client"
import React from 'react'
import { Atom } from 'react-loading-indicators'

const loading = () => {
    return (
        <div className=' flex justify-center align-middle'>
            <Atom color="#32cd32" size="large" text="loading ..." textColor="" />
        </div>
    )
}

export default loading