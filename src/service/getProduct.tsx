import React from 'react'

const getProduct = async () => {
    try {
        const res = await fetch('http://135.181.108.207/product_variant/',{
            next: { revalidate: 3600 } 
        });
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("error")
    }
}

export default getProduct