import React from 'react'
import Moti from '../assets/motiramji.jpg'
import Sunil from '../assets/sunil.jpg'
import Supriya from '../assets/supriya.jpg'
const OurInspiration = () => {
    return (
        <div className='my-8'>
            <div class="heading ">
                Our Inspiration
            </div>

            <div className='w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center my-8 p-3'>

                <div class=" max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-[#183153] h-[440px] w-[260px]" data-aos="fade-right" data-aos-duration="2000">
                    <img class=" p-3 w-full " src={Moti} alt="avatar"  />

                    <div class="py-5 text-center">
                        <a href="#" class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Shri. Motiramji Shinde</a>
                        <span class="text-sm text-gray-700 dark:text-gray-200">Chairman</span>
                    </div>
                </div>
                <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-[#183153] h-[440px] w-[260px]">
                <img class=" p-3 w-full" src={Sunil} alt="avatar" />
                    <div class="py-5 text-center">
                        <a href="#" class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Shri. Sunil Shinde</a>
                        <span class="text-sm text-gray-700 dark:text-gray-200">Secretary</span>
                    </div>
                </div>
                <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-[#183153] h-[440px] w-[260px]" data-aos="fade-left" data-aos-duration="2000">
                <img class=" p-3 w-full" src={Supriya} alt="avatar" />
                    <div class="py-5 text-center">
                        <a href="#" class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Sau. Supriya S Shinde</a>
                        <span class="text-sm text-gray-700 dark:text-gray-200">Administrative Officer</span>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default OurInspiration
