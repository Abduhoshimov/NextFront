import React from 'react'
import Carusel from './Carusel'

export const BannerComp = ({ results }:{results:any}) => {
    return (
        <Carusel>
            {results?.map((banner: any) => (
                <div key={banner.id} className="relative">
                    <h1 className="absolute resHeader:top-[100px] xr:top-[30px] font-bold left-[50px] resHeader:text-[20px] xr:text-[10px]">{banner.title}</h1>
                    {/* <p dangerouslySetInnerHTML={{ __html: banner.description }} className=" absolute resHeader:w-[400px] resHeader:top-[150px] xr:top-[60px] left-[50px] resHeader:text-[25px] xr:text-[10px] xr:w-[200px]"></p> */}
                    <div className='w-full lg:h-[500px] xr:h-[200px]'>
                        <img className='w-full h-[100%]' width={"full "} height={"full"} src={banner.image} alt="" />
                    </div>
                </div>
            ))}
        </Carusel>
    )
}
