"use client"
import { IconCart } from '@/assets/icon/icon-cart'
import { IconFavorites } from '@/assets/icon/icon-favorites'
import { add } from '@/redux/reducer/cart'
import { addLikeItem } from '@/redux/reducer/like'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProductLi = ({ product }: { product: any }) => {
    const dispach = useDispatch();
    const data = useSelector(state => state)

    return (
        <li className='w-[252px] hover:shadow-lg rounded-[15px] p-[10px] text-center relative group overflow-hidden' key={product.id}>
            <div className="hidden sm:flex sm:flex-col sm:gap-3 absolute  sm:translate-x-[100px] sm:group-hover:translate-x-0  right-[10px]   sm:duration-300 z-50">
                <button onClick={() => dispach(addLikeItem(product))} className='w-[45px] h-[45px] border border-gray rounded-[50%] text-center bg-white hover:bg-black hover:border-none flex items-center justify-center'>
                    <IconFavorites />
                </button>
                <button onClick={() => dispach(add(product))} className='w-[45px] h-[45px] border border-gray rounded-[50%] text-center bg-white hover:bg-black hover:border-none flex items-center justify-center'>
                    <IconCart />
                </button>

            </div>
            <Link href={`/detail-page/${product.id}`} key={product.id}>
                <img className='hover:scale-[0.9] duration-200 ' width={"100%"} height={"252px"} src={product.images[0].image} alt="" />
                <h1 className='text-[12px] py-[5px] text-Squant'>{product.title}</h1>
                <p className='text-[14px] text-blue mb-[5px]'>{product.other_detail.slice(3, 50)}</p>
                <p className='text-[18px] font-bold mb-[5px]'>${product.price}</p>
            </Link>
            <button onClick={() => dispach(add(product))} className='w-full border border-blue text-white p-[10px] rounded-[30px] bg-blue hover:text-blue hover:bg-white'>Add To Cart</button>
        </li>
    )
}

export default ProductLi