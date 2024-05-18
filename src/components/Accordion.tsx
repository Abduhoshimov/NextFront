"use client"
import React, { useState, useEffect } from 'react';
import { AiOutlineBars } from "react-icons/ai";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { GetCategory } from '@/service/useGetCategory';

import { Category } from '@/service/useGetCategory';
import { ScrollArea } from './ui/scroll-area';
import Link from 'next/link';
import { nanoid } from 'nanoid';

interface Child {
    title: string;
    id: number
}

const AccordionHeader: React.FC = () => {
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
        <div className='grow'>
            <div className='flex items-center gap-[20px] mb-[10px]'>
                <AiOutlineBars className='text-2xl' />
                <h1>SHOP BY DEPARTMENT</h1>
            </div>
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
        </div>
    );
};

export default AccordionHeader;
