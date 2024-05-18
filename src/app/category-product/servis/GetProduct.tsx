import React from 'react';

export interface ProductType {
    id: number;
    is_available: boolean;
    title: string;
    images: { image: string, id: number }[];
    product: number;
    attribute_value: { id: number, }[];
    other_detail: string;
    price: string;
    price_with_discount: string | null;
    quantity: number;
}


export interface Category {
    count: number;
    next: number | null;
    previous: number | null;
    results: ProductType[];

}

export const GetProductsss = async (id: number): Promise<Category> => {
    try {
        const res = await fetch(`http://135.181.108.207/product_variant/?product__category=${id}`, {
            next: { revalidate: 3600 }
        });
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("error")
    }

}
