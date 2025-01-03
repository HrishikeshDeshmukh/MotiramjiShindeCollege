import React from 'react'
import Department1 from '../assets/departments.jpg'
import Department2 from '../assets/1.jpeg'


const Departments = () => {
    return (
        <>
        <div class="flex pt-7 px-6 md:px-20  items-center justify-center bg-hero">
            <div class="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
                <div class="w-full md:w-1/2 lg:pr-32">
                    <h2 class="text-2xl lg:text-4xl text-center font-bold md:text-left text-blue-900 leading-tight ">Department of Junior College & UG.</h2>
                    <h3
                        class="mt-6 md:mt-10 text-md lg:text-lg text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                        Shri Motiramji Shinde College offers comprehensive educational opportunities through its Junior College and Undergraduate (UG) departments, catering to students seeking quality academic and professional growth.

                        The Junior College provides a strong foundation in essential streams such as Science, Commerce, and Arts, equipping students with the knowledge and skills needed for advanced studies and career preparation. 

                        The UG Department offers a range of undergraduate programs designed to empower students with in-depth knowledge and practical expertise in their chosen fields. </h3>
                    <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                    <button className='my-4 button'>
                        <span>Enquiry Now</span>
                    </button>
                        
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex justify-center md:justify-end shadow-[0_60px_40px_-7px_rgba(0,0,0,0.2)]">
                    <img src={Department1} />
                </div>
            </div>
        </div>

        <div class="flex pt-7 px-6 md:px-20  items-center justify-center bg-hero  font-poppins">
            <div class="flex  flex-col-reverse  gap-6 md:flex-row items-center max-w-8xl">
                
            <div class="w-full md:w-1/2 flex justify-center md:justify-end shadow-[0_60px_40px_-7px_rgba(0,0,0,0.2)]">
                    <img src={Department2} />
                </div>
                
                <div class="w-full md:w-1/2 lg:pl-32 mb-9">
                    <h2 class="text-2xl lg:text-4xl text-center font-bold md:text-left text-blue-900 leading-tight ">Department of Nursing.</h2>
                    <h3
                        class="mt-6 md:mt-10 text-md lg:text-lg text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                       The Nursing Department at Kasturba Nursing School is renowned as the best in Wardha district and a top choice for students seeking the best college near Mandgaon. Equipped with advanced laboratories and supported by a team of experienced and dedicated teaching faculty, the department ensures a comprehensive and practical learning experience. Students benefit from hostel facilities, fostering a conducive environment for focused studies. Regular weekly visits to Primary Health Centers (PHCs) and public hospitals in Wardha and Hinganghat provide hands-on clinical exposure, preparing students to excel in their nursing careers.</h3>
                    <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                    <button className='my-4 button'>
                        <span>Enquiry Now</span>
                    </button>
                        
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Departments
