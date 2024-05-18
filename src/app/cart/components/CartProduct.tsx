import { remove, toggleAnmount } from '@/redux/reducer/cart';
import { addLikeItem } from '@/redux/reducer/like';
import Link from 'next/link'
import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';

const CartProduct = (product: any) => {
    const dispach = useDispatch()
    console.log(product);
    
    const deleteProduct = (id: number) => {
        console.log(id);

        dispach(remove({ id }))
    }

    const addCount = (id: number) => {
        dispach(toggleAnmount({ id, type: "add" }))
    }
    const removeCount = (id: number) => {
        dispach(toggleAnmount({ id, type: "remove" }))
    }

    const toFavorite = (product:any) => {
        dispach(addLikeItem( product ))
    }

    return (

        <div className="lg:flex items-center justify-between max-w-[1000px] w-full mb-[30px] ">
            <div className="flex items-center justify-between">
                <div className="max-w-[90px]">
                    <img src={product.product?.images[0]?.image} alt="image" />
                </div>
                <div className="flex flex-col  gap-[25px] w-[400px]">
                    <Link href={`/shop-single/${product.product.id}`} >
                        <h2 className=" font-semibold text-[18px] text-linkColor hover:text-mainColor cursor-pointer ">
                            {product.product.title}
                        </h2>
                    </Link>
                    <div className=" flex items-center gap-[10px]">
                        <button onClick={() => toFavorite(product.product)} className="text-[15px] font-semibold hover:text-blue pr-[10px] border-r-[1px] border-borderColor ">
                            To Favorites
                        </button>
                        <button
                            onClick={() => deleteProduct(Number(product.product.id))}
                            className="text-[15px] font-semibold hover:text-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex xr:mt-[30px] lg:mt-0 xr:mx-auto items-center justify-between max-w-[400px] w-full gap-[30px]">
                <div className=" flex items-center gap-[15px] border-[2px] border-borderColor py-[3px] rounded-[7px] px-[25px]">
                    {product.product.userCount > 1 ? (
                        <button
                            className="text-2xl"
                            onClick={() => removeCount(product.product.id)}
                        >
                            -
                        </button>
                    ) : (
                        <button onClick={() => deleteProduct(product.product.id)}>
                            <RiDeleteBin6Line className="text-2xl" />
                        </button>
                    )}
                    <span className="text-xl">{product.product.userCount}</span>
                    <button className="text-2xl" onClick={() => addCount(product.product.id)}>
                        +
                    </button>

                </div>

                <strong>${Number(product.product.price)}</strong>
            </div>
        </div>

    )
}

export default CartProduct