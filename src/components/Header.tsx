"use client"
import Link from 'next/link'
import React, { BaseSyntheticEvent, useEffect, useState } from 'react'
import Logo from "../assets/img/Logo.png"
import HeaderIcon from "../assets/icon/icon-phone.png"
import { Input } from './ui/input'
import { ProfileIcon } from '@/assets/icon/profile-icon'
import { IconFavorites } from '@/assets/icon/icon-favorites'
import { IconCart } from '@/assets/icon/icon-cart'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button'
import { FaBars } from 'react-icons/fa'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { signIn } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { ScrollArea } from './ui/scroll-area'
import { Category, GetCategory } from '@/service/useGetCategory'

interface ProductListType {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface ProductProps {
    count: number;
    next: number | null;
    previous: number | null;
    results: ProductListType[];
}




const Header = () => {
    const [data, setData] = React.useState<ProductProps>({ count: 0, next: null, previous: null, results: [] });
    const [value, setValue] = React.useState<any>("")

    const { count } = useSelector((state: any) => state.product);

    const { likeCount } = useSelector((state: any) => state.like);



    React.useEffect(() => {
        const fetchData = async (text: string | undefined) => {
            try {
                const res = await fetch(`http://135.181.108.207/product_variant/?search=${text}`, {
                    next: { revalidate: 10 }
                });
                const responseData = await res.json();
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(value);

        return () => {
        };
    }, [value]);

    const changeValue = (e: BaseSyntheticEvent) => {
        if (e.target.value?.length > 1) {
            setValue(e.target.value)
        }
        if (e.target.value <= 1) {
            setValue("")
        }

    }


    const googleAuth = () => {
        signIn("google")
    }

    const [category, setCategory] = useState<Category | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetCategory();
                setCategory(data);
            } catch (error) {
                console.error('Error fetching category:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='relative'>
            <div className='flex container items-center xr:hidden md:flex justify-between'>
                <div className="py-[15px]">
                    <p className="text-[14px]">Welcome to Worldwide Electronics Store</p>
                </div>
                <div className='flex items-center gap-[20px]'>
                    <Link href={"/checkout"} className="text-[14px] border-r border-Squant pr-[20px] text-Squant">Checkout</Link>
                    <Link href={"/shop"} className="text-[14px] border-r border-Squant  pr-[20px] text-Squant">Shop</Link>
                    <Link href={"/wishlist"} className="text-[14px] text-Squant">Wishlist</Link>
                </div>
            </div>
            <hr />
            <div className='flex resHeader:flex xr:hidden justify-between container py-[15px] items-center'>
                <div className='mr-[50px]'>
                    <Link href={"/"}><img width={"220px"} src={Logo.src} alt="Logo" /></Link>
                </div>
                <div className='flex gap-[10px] mr-[40px] md:hidden res:flex'>
                    <img src={HeaderIcon.src} alt="" />
                    <div>
                        <p className='text-Squant'>Hotline Free:</p>
                        <p className='text-[14px] font-[500]'>+998-90-041-21-20</p>
                    </div>
                </div>
                <div className='flex mr-[50px] border border-blue w-[550px]  pl-[10px] rounded-[30px]'>
                    <div className='pr-[10px] border-r py-[10px] border-Squant mr-[10px]'>

                        <Select>
                            <SelectTrigger className="w-[140px]">
                                <SelectValue placeholder="All Categories" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">All Categories</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                    <Input type='search' onChange={changeValue} className='py-[10px] outline-none ' />
                    <Button className='bg-blue py-[22px] text-white rounded-r-[30px] px-[10px]'>Search</Button>
                </div>
                {
                    value.length > 1 ?
                        <div className='absolute bg-black w-[550px] h-[500px] bg-opacity-60 rounded-3xl right-[330px] top-[120px] z-50 overflow-y-auto max-h-100'>
                            {data?.results?.map((item: any) =>
                            (
                                <Link href={`/detail-page/${item.id}`}>
                                    <div className='p-[20px] flex items-center justify-between'>
                                        <div>
                                            <img className='w-[80px] h-[80px] rounded-[50%]  ' src={item.images[0].image} alt="" />
                                        </div>
                                        <h2 className='z-50 text-white'>{item.title}</h2>
                                    </div>
                                </Link>
                            )
                            )}
                        </div>
                        : ""
                }
                <div className='flex gap-[20px]'>
                    <Link href={"/profile"} className='flex flex-col gap-[5px] items-center '>
                        <ProfileIcon />
                        <p className='text-[14px] text-Squant'>Profile</p>
                    </Link>
                    <Link href={"/wishlist"} className='relative flex flex-col gap-[5px] items-center '>
                        <IconFavorites />
                        <div>
                            <p className='text-[14px] text-Squant'>Favorites</p>
                        </div>
                        <div>
                            <p className='absolute top-[-2px] right-[-5px] w-[20px] h-[20px] bg-blue rounded-[50%] flex items-center justify-center text-white '>{likeCount}</p>
                        </div>
                    </Link>
                    <Link href={"/cart"} className='relative flex flex-col gap-[5px] items-center '>
                        <IconCart />
                        <div>
                            <p className='text-[14px] text-Squant'>My Cart</p>
                        </div>
                        <div>
                            <p className='absolute top-[-2px] right-[-5px] w-[20px] h-[20px] bg-blue rounded-[50%] flex items-center justify-center text-white'>{count}</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex items-center justify-between container resHeader:hidden xr:flex'>
                <div className='mr-[50px]'>
                    <img width={"220px"} src={Logo.src} alt="Logo" />
                </div>
                <div >
                    <Drawer>
                        <DrawerTrigger className=''><FaBars /></DrawerTrigger>
                        <DrawerContent className='resHeader:hidden xr:flex'>
                            <DrawerHeader >
                                <div className='flex items-center border border-blue mb-[15px]'>
                                    <Input type='search' onChange={changeValue} className='outline-none' placeholder='Search Products...' />
                                    <Button className='bg-white text-black'>Search</Button>
                                </div>
                                {
                                    value.length > 1 ?
                                        <div className='absolute bg-black w-[300px] h-[200px] bg-opacity-60 rounded-3xl right-[10px] top-[90px] z-50 overflow-y-auto max-h-100'>
                                            {data?.results?.map((item: any) =>
                                            (
                                                <Link href={`/detail-page/${item.id}`}>
                                                    <div className='p-[20px] flex items-center justify-between'>
                                                        <div>
                                                            <img className='w-[50px] h-[50px] rounded-[50%]  ' src={item.images[0].image} alt="" />
                                                        </div>
                                                        <h2 className='z-50 text-[10px] text-white'>{item.title}</h2>
                                                    </div>
                                                </Link>
                                            )
                                            )}
                                        </div>
                                        : ""
                                }
                                <hr />
                                <div className=''>
                                    <ScrollArea className="h-[500px] w-full pr-[15px] ">
                                        {
                                            category?.results?.map((category: any) => (
                                                <Accordion type="single" collapsible className="w-full ">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>{category?.title}</AccordionTrigger>
                                                        <AccordionContent key={category.id}>
                                                            {category?.children?.map((child: { title: string, id: string }) => (
                                                                <Link className='hover:text-blue block' href={`/category-product/${child.id}`}>{child.title}</Link>
                                                            ))}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>

                                            ))
                                        }
                                    </ScrollArea>
                                </div>
                                <Link className='text-blue py-[12px] ' href={"/contact"}>CONTACT</Link>
                                <hr />
                                <Link className='hover:text-blue py-[12px]' href={"/viewed"}>YOUR RECENTLY VIEWED</Link>
                            </DrawerHeader>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Header