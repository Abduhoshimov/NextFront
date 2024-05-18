"use client"
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';
import CartProduct from './components/CartProduct';
import { loadState } from '@/lib/storage';

const CartPage = () => {
  const { totalPrice } = useSelector((state: any) => state.product);
  const { products } = useSelector((state: any) => state.product);
  const { count } = useSelector((state: any) => state.product);


  return (
    <div className="pb-[70px] pt-[40px] ">
      <div className="container">
        {products?.length ? (
          <div className="resHeader:flex items-start justify-between">
            <div className="max-w-[1000px] w-full border-[2px] rounded-[5px] px-[25px] py-[15px] border-borderColor mb-[15px] ">
              <h1 className="font-medium text-[30px]  text-linkColor mb-[15px] ">
                <span>{count}</span> items in the cart
              </h1>
              {products.map((product: any) => (
                <CartProduct key={product.id} product={product} />
              ))}
            </div>
            <div className=" max-w-[400px] w-[100%] border-[2px] rounded-[5px] border-borderColor px-[25px] py-[15px] ">
              <div className="flex items-center gap-[15px]">
                <span className="font-extrabold text-[25px] text-mainColor">
                  Total Price:
                </span>
                <strong className="font-extrabold text-[25px] ">
                  ${totalPrice}
                </strong>
              </div>
            </div>
          </div>
        ) : (
          <div>

            <div>
              <h1 className="font-extrabold text-[28px] text-center ">
                The cart is empty
              </h1>
              <p className="font-semibold text-[15px] text-center mb-[20px] ">
                But you can always fill it
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href={"/"}
                className="py-[10px] px-[18px] bg-mainColor rounded-[8px] text-[15px] font-semibold text-buttonColor "
              >
                To the main page
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default CartPage