//بقیه قسمت های منوی بالای صفحه


export default function OtherInNavbar() {
    return (
      <div className="flex mr-7 text-gray-800 text-base">
        <div className="m-3 hover:cursor-pointer">
            <span className="" >  |     خرید سازمانی </span>
        </div>
        <span className="mt-3 text-gray-300"> | </span>
        <div className="m-3 hover:cursor-pointer">
            <span > درخواست وام</span>
        </div>
        <span className="mt-3 text-gray-300"> | </span>
        <div className="m-3 hover:cursor-pointer">
            <span> فروشنده شو</span>
        </div>
        <span className="mt-3 text-gray-300"> | </span>
        <div className="m-3 hover:cursor-pointer">
            <span>   کارت هدیه   </span>
            <span className="mt-3 mr-1 text-gray-300"> | </span>
        </div>
        <div className="mt-3 hover:cursor-pointer">
            <span>درباره ی ما </span>
        </div>
      </div>
    )
  }
  