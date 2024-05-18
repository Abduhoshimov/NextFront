import React from 'react';
export interface Category {
    id: number;
    image: string;
    title: string;
    description: string;
    results: any[]
}

export const GetCategory = async (): Promise<Category> => {
    try {
        const res = await fetch('http://135.181.108.207/category/?limit=10',{
            next: { revalidate: 3600 } 
        });
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("error")
    }

}
