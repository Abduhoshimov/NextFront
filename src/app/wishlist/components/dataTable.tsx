import { add } from '@/redux/reducer/cart'
import { removeLikeItem } from '@/redux/reducer/like'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'

const DataTable = (product: any) => {
    const dispach = useDispatch()

    return (
        <div className="my-[30px] px-[20px]">
            {
                product.data?.map((product: any) => (
                    <div className='resHeader:flex items-center border border-gray p-[20px]  justify-between '>
                        <div className='sm:flex items-center justify-between'>
                            <div className="flex items-center gap-[25px]">
                                <div className="max-w-[90px]">
                                    <img src={product?.images[0]?.image} alt="image" />
                                </div>
                                <div className="flex flex-col gap-[25px]  max-w-[400px]">
                                    <Link href={`/shop-single/${product?.id}`} >
                                        <h2 className=" font-semibold text-[18px] text-linkColor hover:text-mainColor cursor-pointer ">
                                            {product.title}
                                        </h2>
                                    </Link>

                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-[90px]">
                                <strong>${Number(product.price)}</strong>
                            </div>
                        </div>
                        <div className='xr:px-[20px] xr:mt-[30px] sm:flex items-center justify-between gap-[20px]'>
                            <div className='flex items-center justify-center'>
                                <button className='hover:text-red-600 text-[15px] font-bold ' onClick={() => dispach(removeLikeItem(product))}>Delete</button>
                            </div>
                            <div className='flex items-center gap-[30px]'>
                                <div>
                                    <button className='hover:text-blue text-[17px]' onClick={() => dispach(add(product))}>Add To Cart</button>
                                </div>
                                <div>
                                    <Link href={`/detail-page/${product?.id}`} className='hover:text-blue text-[17px]'>Select Option</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DataTable