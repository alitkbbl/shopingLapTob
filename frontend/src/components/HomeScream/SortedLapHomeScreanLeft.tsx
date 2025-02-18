import Link from 'next/link';

const PriceFilterLeft = () => {
  return (
    <div className="p-7 bg-white rounded-2xl shadow-md mx-20 mt-6">
      <h3 className="text-xl font-bold mr-1 mb-5 text-gray-900">لپ تاب بر اساس کارایی </h3>
      <div className="grid grid-cols-3 gap-2 font-bold text-balance">
        <Link href="/" className="py-8 px-10 bg-gray-200 border-4 border-gray-200 rounded-xl text-center block">
          گیمینگ
        </Link>
        <Link href="/" className="py-7 px-10 bg-gray-200 border-4 border-gray-200 rounded-xl text-center block">
          برنامه نویسی
        </Link>
        <Link href="/" className="py-7 px-10 bg-gray-200 border-4 border-gray-200 rounded-xl text-center block">
          سبک و راحت  
        </Link>
        <Link href="/" className="py-7 px-10 bg-gray-200 border-4 border-gray-200 rounded-xl text-center block">
          صفحه لمسی 
        </Link>
        <Link href="/" className="py-7 px-10 bg-gray-200 border-4 border-gray-200 rounded-xl text-center block">
          برنامه نویسی
        </Link>
        <Link href="/" className="py-7 px-10 bg-gray-200 border-4 border-gray-200 rounded-xl text-center block">
          باتری
        </Link>
      </div>
    </div>
  );
};

export default PriceFilterLeft;
