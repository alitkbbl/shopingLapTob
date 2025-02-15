import MacBanner from "../../../public/static_laptop_mac_new.webp"
import AcerBanner from "../../../public/static_laptop_aser_new.webp"
import LenovoBanner from "../../../public/static_laptop_lenovo_new.webp"
import HpBanner from "../../../public/static_laptop_hp_new.webp"
import AsusBanner from "../../../public/static_laptop_asus_new.webp"
import Image from "next/image"
import Link from "next/link"

export default function CircleItemHomeScrean() {

 
  return (
    <div className="flex justify-center mt-7 bg-slate-200"> 
        <div className="mx-5 ">
          <Link href={"/"} className="">
              <Image src={MacBanner} alt="MAc" width={190} height={190} className="rounded-2xl mb-2 "/>
              <span className="mr-16 mt-6 text-xl font-bold text-gray-800">مک بوک</span>
          </Link>
        </div>

        <div className="mx-5 ">
          <Link href={"/"} className="">
              <Image src={LenovoBanner} alt="MAc" width={190} height={190} className="rounded-2xl mb-2"/>
              <span className="mr-20  mt-6 text-xl font-bold text-gray-800">لنوو</span>
          </Link>
        </div>

        <div className="mx-5 ">
          <Link href={"/"} className="">
              <Image src={HpBanner} alt="MAc" width={190} height={190} className="rounded-2xl mb-2"/>
              <span className="mx-16 mt-6 text-xl font-bold text-gray-800">اچ پی</span>
          </Link>
        </div>

        <div className="mx-5 ">
          <Link href={"/"} className="">
              <Image src={AsusBanner} alt="MAc" width={190} height={190} className="rounded-2xl mb-2"/>
              <span className="mx-16 mt-6 text-xl font-bold text-gray-800">ایسوس</span>
          </Link>
        </div>
        
        <div className="mx-5 ">
          <Link href={"/"} className="">
              <Image src={AcerBanner} alt="MAc" width={190} height={190} className="rounded-2xl mb-2"/>
              <span className="mx-20 mt-6 text-xl font-bold text-gray-800">ایسر</span>
          </Link>
        </div>
    </div>
  )
}
