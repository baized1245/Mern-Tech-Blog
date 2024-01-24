import React from 'react'

const HomePost = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* Left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg&ga=GA1.2.1162881527.1690013272&semt=sph"
          alt=""
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      {/* Right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 Users of Artificial Intelligence in Day to Day Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 justify-between items-center md:mb-4">
          <p>@snehasish</p>
          <div className="flex space-x-2">
            <p>24/1/2024</p>
            <p>8.50</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quidem
          consectetur dignissimos, modi unde ratione? Nesciunt temporibus
          dolores delectus nam!
        </p>
      </div>
    </div>
  )
}

export default HomePost
