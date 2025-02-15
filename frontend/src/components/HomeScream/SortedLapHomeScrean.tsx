import Link from 'next/link';

const PriceFilter = () => {
  return (
    <div className="p-7 bg-white rounded-2xl shadow-md mx-20 mt-6">
      <h3 className="text-xl font-bold mr-1 mb-5 text-gray-900">لپ تاب بر اساس قیمت</h3>
      <div className="grid grid-cols-3 gap-2 font-bold">
        <Link href="/" className="py-8 px-10 bg-white border-2 border-blue-100 rounded-xl text-center block">
          لپ تاب ارزان
        </Link>
        <Link href="/" className="py-7 px-10 bg-blue-50  border-2 border-blue-200 rounded-xl text-center block">
          تا ۱۵ میلیون
        </Link>
        <Link href="/" className="py-7 px-10 bg-blue-100  border-2 border-blue-300 rounded-xl text-center block">
          تا ۳ میلیون
        </Link>
        <Link href="/" className="py-7 px-10 bg-blue-200 b border-2 border-blue-300 rounded-xl text-center block">
          تا ۵ میلیون
        </Link>
        <Link href="/" className="py-7 px-10 bg-blue-300  border-2 border-blue-400 rounded-xl text-center block">
          تا ۷۵ میلیون
        </Link>
        <Link href="/" className="py-7 px-10 bg-blue-400 rounded-xl border-2 border-blue-400 text-center block">
          تا ۷۵ میلیون
        </Link>
      </div>
    </div>
  );
};

export default PriceFilter;
