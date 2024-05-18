"use client"
import React, { useEffect, useState } from 'react'
import getSingleProduct from '../service/GetSingleProduct'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { MdFavoriteBorder } from "react-icons/md";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaPinterest, FaTwitter } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addLikeItem } from '@/redux/reducer/like';
import { add } from '@/redux/reducer/cart';

interface Params {
    params: { id: number }
}


const DetailPage = ({ params }: Params) => {
    const dispatch = useDispatch();
    const [data, setData] = useState<any>(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getSingleProduct(params.id);
            setData(result);
        };
        fetchData();
    }, [params.id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const addCart = (data:any) => {
        dispatch(add({ ...data, userCount: count }));
    }

    const addCount = () => {
        setCount(count + 1)
    }
    const removeCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='container mt-[30px]'>
            <div className=' resHeader:flex items-center gap-[20px] justify-between' key={data.id}>
                <ScrollArea className='ml-[20px] w-[714px] h-[715px] sm:mx-auto'>
                    <div>
                        {

                            data?.images?.map((image: any) => <img className='w-[614px] h-[614px] mb-[75px]' src={image?.image} alt="" key={image.id} />)
                        }
                    </div>
                </ScrollArea>
                <div className='w-[740px] p-[20px]'>
                    <h1 className='text-[36px] text-black mb-[10px] ' >{data?.title}</h1>
                    <p className='text-[28px] text-black mb-[10px]'>${data?.price}</p>
                    <p className='text-[14px] text-black mb-[14px] '>{data?.other_detail?.slice(3, 280)}</p>
                    <div className='flex items-center gap-[30px]'>
                        <div className='flex items-center '>
                            <Button onClick={() => removeCount()} className='border border-blue hover:bg-white hover:text-blue bg-blue w-[50px] h-[50px] text-[20px] text-white p-[10px] rounded-[50%]'>-</Button>
                            <p className='text-[20px] text-black p-[10px]'>{count}</p>
                            <Button onClick={() => addCount()} className='border border-blue hover:bg-white hover:text-blue bg-blue w-[50px] h-[50px] text-[20px] text-white p-[10px] rounded-[50%]'>+</Button>
                        </div>
                        <div>
                            <Button onClick={() => (addCart(data))} className='border border-blue  w-[250px] p-[23px] bg-blue rounded-[30px] hover:bg-white hover:text-blue'>+ Add To Card</Button>
                        </div>
                    </div>
                    <div className='flex items-center gap-[20px] mt-[20px]'>
                        <div className='flex items-center gap-[10px] hover:text-blue'>
                            <MdFavoriteBorder className='' />
                            <button onClick={() => dispatch(addLikeItem(data))} className='text-[14px] text-black hover:text-blue'>Add to WishList</button>
                        </div>
                    </div>
                    <div className='flex items-center gap-[15px] mt-[30px]'>
                        <p className='text-[16px] text-black '>Share This Product</p>
                        <div className='flex items-center gap-[20px]'>
                            <div className='w-[40px] h-[40px] bg-gray rounded-[50%] text-Squant flex items-center justify-center'>
                                <FaFacebookF />
                            </div>
                            <div className='w-[40px] h-[40px] bg-gray rounded-[50%] text-Squant flex items-center justify-center'>
                                <FaTwitter />
                            </div>
                            <div className='w-[40px] h-[40px] bg-gray rounded-[50%] text-Squant flex items-center justify-center'>
                                <FaPinterest />
                            </div>
                            <div className='w-[40px] h-[40px] bg-gray rounded-[50%] text-Squant flex items-center justify-center'>
                                <FaGooglePlusG />
                            </div>
                            <div className='w-[40px] h-[40px] bg-gray rounded-[50%] text-Squant flex items-center justify-center'>
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <h1 className='text-[20px] text-black mb-[20px] mt-[40px]'>Description</h1>
            <p className='mb-[20px]'>{data?.other_detail?.slice(3, 369)}</p>
        </div>
    )
}

export default DetailPage