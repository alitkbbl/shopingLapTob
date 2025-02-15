//صفحه س سرچ زدن

export default function SearchBox () {
    return (
      <div className="px-5  mt-4 mr-1">
        <input type="search" className="focus:w-full px-5 p-1.5 mt-0.5 pl-28 bg-gray-50 text-gray-700 text-lg rounded-full shadow-md border-2 border-gray-300 focus:outline-none focus:scale-105 focus:bg-white transition duration-300 ease-in-out  transform "
         placeholder="جستجو..." aria-label="Search"></input>
      </div>
    )
  }
  