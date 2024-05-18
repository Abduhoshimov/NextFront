import { IconFavorites } from '@/assets/icon/icon-favorites';
import { GetProductsss } from '../servis/GetProduct';
import React from 'react';
import { IconCart } from '@/assets/icon/icon-cart';
import Link from 'next/link';
import { useDispatch } from 'react-redux'
import ProductLi from '../components/productLi';

interface Params {
    params: { id: number }
}

const ProductPage = async ({ params }: Params) => {
    const data = await GetProductsss(Number(params.id));

    return (
        <ul className='container my-[20px]   flex flex-wrap gap-[20px] justify-center'>{
            data?.results?.map((product, index) => (
                <ProductLi key={index} product={product}/>
            ))
        }
        </ul >
    );
};

export default ProductPage;
