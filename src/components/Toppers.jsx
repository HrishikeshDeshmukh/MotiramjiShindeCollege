import React, { useState } from "react"
import Topper1 from '../assets/topper.jpg'
import Topper2 from '../assets/topper2.jpg'
import Topper3 from '../assets/topper3.jpg'
import Topper4 from '../assets/topper4.jpg'
import Topper5 from '../assets/topper5.jpg'



const Data = [
    {
        name: "Anshul D Godbole",
        image: Topper1,
        marks: "510 / 600",
        percentage: "85.0%"
    },
    {
        name: "Aryan S Supare",
        image: Topper2,
        marks: "499 / 600",
        percentage: "83.2%"
    },
    {
        name: "Samruddhi R Zamre",
        image: Topper3,
        marks: "497 / 600",
        percentage: "82.83%"
    },
    {
        name: "Anudha T Zade",
        image: Topper4,
        marks: "492 / 600",
        percentage: "82.0%"
    },
    {
        name: "Vidhi L Nimbalkar",
        image: Topper5,
        marks: "491 / 600",
        percentage: "81.83%"
    },

]


const Toppers = () => {


    return (
        <>
            <div className="w-full flex justify-center flex-col text-center">
                <h6 className='text-2xl font-bold text-[#08377b] text-center mt-8'>
                    Recent Toppers
                </h6>
                <p className="my-2 font-semibold text-slate-600">12th Science Merits</p>
            </div>

            <section class="py-24 ">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">

                        {Data.map(({ name, image, marks, percentage }) => (
                            <div class="block group md:col-span-2 lg:col-span-1 " key={name}>
                                <div class="relative mb-6">
                                    <img src={image} alt="Antonio image"
                                        class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600" />
                                </div>
                                <h4
                                    class="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                                    {name} </h4>
                                <span
                                    class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">{marks}</span>
                                <span
                                    class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">{percentage}</span>
                            </div>
                        ))}

                    </div>

                </div>
            </section >
        </>

    )
}

export default Toppers;