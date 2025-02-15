/* eslint-disable @next/next/no-img-element */
// لوگو و اسم سایت

import Link from "next/link";

 
export default function LogoName() {
  return (
      <div>
        <Link href={"/"}>
        <img loading="lazy" width="110" height="42" alt="Technolife" title="Technolife" src="https://www.technolife.ir/image/static_logo_techno_new.svg"></img>
        </Link>
      </div>
  )
}
