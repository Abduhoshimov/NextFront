"use server"
import React from 'react'



interface ProductListType {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface BannerProps {
    count: number;
    next: number|null;
    previous:number | null;
    results: ProductListType[];
}
export const GetBanner = async (): Promise<BannerProps> => {
    try {
        const res = await fetch('http://135.181.108.207/banner/',{
            next: { revalidate: 3600 } 
        });
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("error")
    }

}
