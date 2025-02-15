// قسمت لاگین کردن سایت

import Login from "./Login";


export default function LoginBottom() {
  
        return (
             
        <button className="flex font-bold itemsCenter hower:bg-white items-center py-1 px-5 mt-1 border-grey border-2 rounded-md hover:shadow-lg hover:bg-white hover:scale-104 transition duration-300 ease-in-out">
             <Login />
             <span className="mr-2 mb-1  text-gray-600 ">ورود | ثبت‌نام</span>
        </button> 
        );
    
  }
  
  