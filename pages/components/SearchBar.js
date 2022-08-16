export default function Search(){
    return (
     
      <div className='bg-gray-50 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded'>
        <div>
          <input
            type='text'
            className='bg-transparent border-none text-black focus:outline-none'
            placeholder='Digite uma tag ou nome...'
          />
        </div>
      </div>

    );
  }