import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

const PostDetails = () => {
  return (
    <div>
      <Navbar />

      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 Users of Artificial Intelligence in Day to Day Life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@snehasish</p>
          <div className="flex space-x-2">
            <p>24/1/24</p>
            <p>8.50</p>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg&ga=GA1.2.1162881527.1690013272&semt=sph"
          className="w-full mx-auto mt-8 object-cover rounded-md"
          alt=""
        />
        <p className="mx-auto mt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          ut laboriosam, ad quibusdam dolore natus rem quas corrupti accusamus!
          Minus, reiciendis omnis nemo placeat voluptatibus esse aliquam ipsa
          provident voluptatem voluptatum modi officiis eum. Temporibus maiores
          non quasi vel eum!
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories: </p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          {/* Comment */}
          <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@sneha</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">24/1/2024</p>
                <p className="text-gray-500 text-sm">8.50</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">Nice info</p>
          </div>

          {/* Comment */}
          <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@sneha</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">24/1/2024</p>
                <p className="text-gray-500 text-sm">8.50</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">Nice info</p>
          </div>
        </div>
        {/* write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="Write a comment"
            className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
          />
          <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0 rounded-sm">
            Add Comment
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PostDetails
