import Image from "next/image" 
import Banner from "../../../public/banner1.webp"
import Link from "next/link"

export default function BanerHomeScrean() {
  return (
    <div className="bg-slate-200 flex">
      <Link href={"#"}>
      <Image src={Banner} alt={"image"} className="flex-grow"></Image>
      </Link>
    </div>
  )
}
