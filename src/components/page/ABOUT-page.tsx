import React from 'react'

export default function ABOUTPage() {
  return (
    <>
    <div className="relative w-full bg-white py-20 px-4 flex flex-col items-center text-center  ">
      <div className="mb-10">
        <h2 className="text-xl md:text-6xl font-bold text-black mb-4">
          About
        </h2>
        <div className="w-16 h-[2px] bg-black mx-auto"></div>
      </div>
      <div className="max-w-3xl mb-4">
        <p className="text-sm md:text-xl font-bold text-gray-900 ">
          Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. 
          Suspendisse vulputate semper nunc eget rhoncus.
        </p>
      </div>
      <div className="max-w-4xl">
        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget
          nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem, interdum
          tincidunt libero. Nulla vel quam lobortis, varius est scelerisque, dapibus nisl.
        </p>
      </div>
    </div>


      <div className="bg-[url(https://images.pexels.com/photos/26601192/pexels-photo-26601192.jpeg)] bg-cover bg-fixed bg-center overflow-hidden m-6 p-0 ">
        <div className="bg-black/30 backdrop-brightness-50text-white w-full h-screen rounded-lg flex-col flex items-center justify-center">        
        <div className="relative z-10 container mx-auto max-w-6xl h-full px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
        <div className="w-full md:w-1/2">
          <span className="text-white text-sm font-sans mb-6 block">
            The Mission
          </span>
          <h2 className="text-xl md:text-4xl font-bold leading-tight max-w-md">
            At the heart of everything, we set out to offer the best quality.
          </h2>
          <div className="w-16 h-[2px] bg-white mt-8"></div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <p className="text-white text-3xl md:text-base leading-relaxed font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Aenean placerat facilisis ex, eu laoreet lorem convallis.
          </p>
          <p className="text-white text-xl md:text-base leading-relaxed font-bold">
            Fusce gravida justo a lectus tempus lacinia. Ut mollis scelerisque ultricies. Aenean facilisis efficitur magna, at feugiat massa bibendum at. Etiam ut venenatis urna.
          </p>
        </div>

      </div>
        </div>
      </div>

    </>
  )
}