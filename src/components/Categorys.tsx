

import { GetCategory } from '@/service/useGetCategory'
import React from 'react';


export const CategorysList = async ():Promise<any>     => {

    const categorys = await GetCategory();





    return (
        <ul className="flex flex-wrap">
            {
                categorys?.results?.map((category: any) => (
                    <li className="w-[291px] flex items-center justify-between border border-gray p-[20px] gap-[20px]" key={category.id}>
                        <div>
                            {/* <p className="text-[14px]">{category?.title?.split("&")[0]}</p> */}
                            <p className="text-[12px] text-Squant">10 items</p>
                        </div>
                        <img width={"107px"} height={"107px"} src={category.image} alt="" />
                    </li>
                ))
            }
        </ul>
        
    )
}
