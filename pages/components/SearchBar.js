import {BiSearchAlt} from "react-icons/bi";

export default function Search() {
  return (
    <>
      <div className='bg-gray-50 text-white max-w-[400px] w-full rounded'>
        <div className='flex flex-row justify-between'>
          <input
            type='text'
            className='bg-transparent border-none text-black focus:outline-none p-2'
            placeholder='Digite uma tag ou nome...'
          />
          <p className='bg-blue-500 text-white py-2 px-4 rounded-tr-sm rounded-br-sm text-2xl'><BiSearchAlt/></p>
        </div>
      </div>
    </>
  );
}