
import Footer from "@/components/footer/Footer";
import Header from "@/components/Navbar/Header";
import Laptop from "@/MyTypes/laptob";
import axios from "axios";
import ImageLaptob from "./ImageLaptob";
import LaptopList from "@/components/HomeScream/LaptopList";

interface IProductProps {
  params: Promise<{id: string}>;
  searchParams: Promise<object>;
}

async function Product(props: IProductProps) {
  const { id } = await props.params;

  console.log(id);

  const response = await axios.get(`http://localhost:5000/api/laptops/${id}`);
  const laptop: Laptop = response.data;

  return (
    <div className="bg-slate-100">
        <Header />
        <hr />
        <h3 className="text-blue-700 mr-12 text-sm mt-8">{`${laptop.name}-${laptop.brand}-Laptobs `}</h3>
        <div className="flex justify-between mx-10 border-2 border-gray-200  rounded-xl">
            <div>
                <div className="my-6 mx-5">
                    <h2 className="mb-2 text-xl text-gray-800 font-bold">{laptop.description}</h2>
                    <h3 className="mt-1 mb-4  text-sm text-blue-600">{laptop.model}</h3>
                </div>
                <div className="mr-6 font-bold text-gray-600 text-sm mb-16 mt-1">
                    <span>رنگ :</span>
                    <span className="mr-4 text-gray-800">نقره ای</span>
                </div>
                <div className="mx-5 my-3">
                    <p className="mr-2 font-bold text-gray-700 text-sm mb-1">ویژگی های اصلی</p>
                    <div className="border-2 border-gray-100 bg-white rounded-lg text-gray-500  ">
                        <div>
                            <span className="inline-block mr-4 mt-2">برند :</span>
                            <span className="text-gray-800 mr-6 text-sm font-bold">{laptop.brand}</span>
                        </div>
                        <div>
                            <span className="inline-block  mr-4">پردازنده : </span>
                            <span className="text-gray-800 mr-2 text-sm font-bold">{laptop.processor}</span>
                        </div>
                        <div>
                            <span className="inline-block  mr-4">کاربری :</span>
                            <span className="text-gray-800 mr-2 text-sm font-bold">{laptop.usageType}</span>
                        </div>
                        <div>
                            <span className="inline-block  mr-4">مدل : </span>
                            <span className="text-gray-800 mr-6 text-sm font-bold">{laptop.model}</span>
                        </div>
                        <div className="mb-2">
                            <span className="inline-block  mr-4">قیمت : </span>
                            <span className="text-gray-800 mr-4 mb-2 text-sm font-bold">{laptop.price}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white mr-5 flex pl-4 justify-between rounded-2xl border-2 border-gray-100 mb-4 items-center">
                    <div>
                        <p className="mr-7 text-2xl font-bold text-gray-800" >{laptop.price}</p>
                    </div>
                    <div>
                        <button className="bg-blue-900 py-3 px-5 my-3 text-white text-xl rounded-2xl ml-3">افزودن به سبد خرید</button>
                    </div>
                </div>
            </div>
            <div>
                <ImageLaptob 
                image={laptop.image}
                image2={laptop.image2}/>
            </div>
        </div>
        <br />
        <hr />
        <br />
        <LaptopList />
        <br />
        <Footer />
    </div>

  );
}

export default Product;
