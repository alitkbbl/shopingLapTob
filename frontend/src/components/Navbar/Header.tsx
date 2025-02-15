import LoginBottom from "./LoginBottom";
import LogoName from "./LogoName";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import ShoppingCard from "./ShoppingCard";




export default function Header() {
  return (
    <div className="bg-white pb-1 ">
      <br />
      
    
      <div className="flex ">
        <div className="basis-1/7 mt-5 mr-2">
          <LogoName />
        </div>
        <div className="basis-4/7 w-2/3 mr-2 ">
          <SearchBox />
        </div>
        <div className="flex items-center basis-2/7 justify-end flex-auto mx-8 mt-3">
          <LoginBottom />
          <ShoppingCard />
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
    
  )
}
