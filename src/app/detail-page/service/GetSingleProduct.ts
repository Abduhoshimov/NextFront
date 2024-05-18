
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



const getSingleProduct = async (id: string | number): Promise<ProductType> => {
    try {
        const res = await fetch(`http://135.181.108.207/product_variant/${id}/`, {
            next: { revalidate: 3600 }
        });
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("error")
    }
}

export default getSingleProduct