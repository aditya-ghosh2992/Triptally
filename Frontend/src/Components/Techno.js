import React from 'react'
import img1 from '../technologies_images/react.webp'
import img2 from '../technologies_images/express.jpg'
import img3 from '../technologies_images/mongodb.webp'
import img4 from '../technologies_images/github.svg'
import img5 from '../technologies_images/nodejs.webp'
const Techno = () => {
  return (
    <div>
        <section className="text-center w-full py-5 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold">Technology We Used</h2>
          <div className="mt-8 w-11/12 gap-10 flex justify-center items-center flex-wrap">
            <div className="w-26 h-24 bg-gray-200 rounded-lg ">
              <img src={img1} alt="" className="w-45 h-full" />
            </div>
            <div className="w-25 h-24 bg-gray-200 rounded-lg ">
              <img src={img2} alt=""
              className="w-34 h-full"
              />
            </div>
            <div className="w-26 h-24 bg-gray-200 rounded-lg ">
              <img src={img3} alt="" className="w-full h-full" />
            </div>
            <div className="w-26 h-24 bg-gray-200 rounded-lg ">
              <img src={img4} alt="" className="w-full h-full" />
            </div>
            <div className="w-26 h-24 bg-gray-200 rounded-lg ">
              <img src={img5} alt="" className="w-full h-full" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Techno