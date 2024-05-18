"use client"

import React from 'react'
import Link from 'next/link';
import { Rating } from 'react-simple-star-rating'
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "nanoid";
import { nanoid } from 'nanoid';



function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="bg-transparent inline-block cursor-pointer top-[-50px] z-30  absolute right-[2%] text-black text-[21px]"
            onClick={onClick}
        >
            <FaChevronRight />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                backgroundColor: "transparent",
                display: "inline-block",
                cursor: "pointer",
                top: "-34px",
                zIndex: "30",
                position: "absolute",
                left: "92%",
                color: "black",
                fontSize: "21px"
            }}
            onClick={onClick}
        >
            <FaChevronLeft />
        </div>
    );
}

const ProductSec = ({ results }: { results: any }) => {
    console.log(results);

    const [rating, setRating] = React.useState(0)

    const handleRating = (rate: number) => {
        setRating(rate)
    }

    const handleReset = () => {
        setRating(0)
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1322,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    nextArrow: false,
                    prevArrow: false
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    nextArrow: false,
                    prevArrow: false
                }
            }
        ]
    };

    return (
        <div className='container'>
            <div className="flex items-center pb-[20px] gap-[10px] xr:text-[12px] md:text-[15px] ">
                <h1 className="text-nowrap font-bold text-[20px]">Top Categories <span className=" font-normal">Of The Month</span></h1>
                <hr className="w-[71%]" />

            </div>
            <div className='mx-auto w-full '>
                <Slider key={nanoid()} {...settings}>
                    {
                        results?.map((product: any) => (
                            <Link href={`/detail-page/${product.id}`}>
                                <div className='flex justify-center'>
                                    <div className="w-[233px] lg:h-[360px] xr:h-[440px]  border border-gray gap-[20px]" key={product.id}>
                                        <img className='w-[223px] h-[223px] object-contain ' src={product?.images[0].image} alt="" />
                                        <p className='text-center text-[12px] py-[10px] text-Squant'>{product.title.slice(0, 13)}</p>
                                        <p className='text-[14px] text-center pb-[5px]'>Recliner syntheti deck chair</p>
                                        <div className='text-center'>
                                            <Rating onClick={handleRating} initialValue={rating} />
                                        </div>
                                        <p className='text-center text-[18px] font-bold'>${product.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default ProductSec