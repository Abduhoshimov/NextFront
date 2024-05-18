import AccordionHeader from "@/components/Accordion";
import Carusel from "@/components/Carusel";
import HoverCards from "@/components/HoverCards";
import { GetBanner } from "@/service/useGetBanner";
import section2Icon from "../assets/icon/section2-icon.png"
import section2Icon2 from "../assets/icon/section2-icon2.png"
import section2Icon3 from "../assets/icon/section2-icon3.png"
import section2Icon4 from "../assets/icon/section2-icon4.png"
import section2Icon5 from "../assets/icon/section2-icon5.png"

import banner1 from "../assets/img/banner1.jpg"
import banner2 from "../assets/img/banner2.jpg"
import banner3 from "../assets/img/banner3.jpg"
import { GetCategory } from "@/service/useGetCategory";
import { BannerComp } from "@/components/Banner";
import Link from "next/link";
import ProductSec from "@/components/ProductSec";
import getProduct from "@/service/getProduct";

interface categoryListType {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Home = async () => {
  const [banners, categorys, products] = await Promise.all([GetBanner(), GetCategory(), getProduct()])

  return (
    <div className=" ">
      <div className="resHeader:flex xr:hidden">
        <HoverCards />
      </div>
      <div className="container bg-[#F5F6F9] py-[30px] w-full flex items-center gap-[20px] justify-between">
        <div className="w-[20%] p-[10px] pr-0 bg-white rounded-[20px]  resHeader:flex xr:hidden">
          <AccordionHeader />
        </div>
        <div className="resHeader:w-[79%] xr:w-full">
          <BannerComp {...banners} />
        </div>
      </div>
      <div className="container bg-[#F5F6F9] ">
        <ul className="bg-white p-[30px] flex items-center resHeader:flex-nowrap  resHeader:flex resHeader:justify-between xr:flex-wrap xr:gap-[20px] xr:justify-center">
          <li className="flex items-center px-[20px] gap-[20px] border-r border-Squant">
            <div>
              <img src={section2Icon.src} alt="icon" />
            </div>
            <div>
              <p className="text-black text-[13px] font-bold">FREE DELIVERY</p>
              <p className="text-Squant text-[14px] ">For all oders over $120</p>
            </div>
          </li>
          <li className="flex items-center px-[20px] gap-[20px] border-r border-Squant">
            <div>
              <img src={section2Icon2.src} alt="icon" />
            </div>
            <div>
              <p className="text-black text-[13px] font-bold">SAFE PAYMENT</p>
              <p className="text-Squant text-[14px] ">100% secure payment</p>
            </div>
          </li>
          <li className="flex items-center px-[20px] gap-[20px] border-r border-Squant">
            <div>
              <img src={section2Icon3.src} alt="icon" />
            </div>
            <div>
              <p className="text-black text-[13px] font-bold">SHOP WITH CONFIDENCE</p>
              <p className="text-Squant text-[14px] ">If goods have problems</p>
            </div>
          </li>
          <li className="flex items-center px-[20px] gap-[20px] border-r border-Squant">
            <div>
              <img src={section2Icon4.src} alt="icon" />
            </div>
            <div>
              <p className="text-black text-[13px] font-bold">24/7 HELP CENTER</p>
              <p className="text-Squant text-[14px] ">Dedicated 24/7 support</p>
            </div>
          </li>
          <li className="flex items-center px-[20px] gap-[20px]">
            <div>
              <img src={section2Icon5.src} alt="icon" />
            </div>
            <div>
              <p className="text-black text-[13px] font-bold">FRIENDLY SERVICES</p>
              <p className="text-Squant text-[14px] ">30 day satisfaction guarantee</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="container bg-[#F5F6F9]   gap-[20px] py-[30px] items-center justify-between xr:flex-col xr:flex xr:justify-center md:flex md:justify-between md:flex-row">
        <div>
          <img src={banner1.src} alt="banner" />
        </div>
        <div>
          <img src={banner2.src} alt="banner" />
        </div>
        <div>
          <img src={banner3.src} alt="banner" />
        </div>
      </div>
      <div className="container bg-[#F5F6F9] py-[30px]">
        <div className="flex items-center pb-[20px] gap-[10px] xr:text-[12px] md:text-[15px] justify-between ">
          <h1 className="text-nowrap font-bold text-[20px]">Top Categories <span className=" font-normal">Of The Month</span></h1>
          <hr className="w-[82%]" />
        </div>
        <div className="bg-white mb-[50px]">
          <ul className="flex flex-wrap justify-between xr:justify-center md:flex md:justify-between ">
            {
              categorys?.results?.map((category: categoryListType) => (
                <li className="w-[291px] flex items-center justify-between border border-gray p-[20px] gap-[20px]" key={category.id}>
                  <div>
                    <Link href={"/products"} className="hover:text-blue text-[14px]">{category?.title?.split("&")[0]}</Link>
                    <p className="text-[12px] text-Squant">10 items</p>
                  </div>
                  <img width={"107px"} height={"107px"} src={category.image} alt="" />
                </li>
              ))
            }
          </ul>
        </div>
        <section>
          
          <ProductSec {...products}/>
        </section>
      </div>
    </div>
  );
}

export default Home