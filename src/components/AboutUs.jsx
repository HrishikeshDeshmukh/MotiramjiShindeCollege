import React from 'react'
import Logo from "../assets/logo-plain.png"

const AboutUs = () => {
    return (
        <div className='mt-8'>
            <div class="heading ">
                About Us
            </div>

            <div className='w-full grid md:grid-cols-2 bg  grid-cols-1'>
                <div className=' relative max-h-fit flex justify-center items-center p-4 m-3 '>
                    <img src={Logo} alt="" className='w-[330px] h-[330px] max-md:w-[250px] max-md:h-[250px]  lg:my-5 p-6 ' data-aos="fade-right" data-aos-duration="700" />
                </div>

                <div className='flex justify-center items-center flex-col xl:p-4 lg:m-3 xl:mx-10'>
                    <h6 className='text-xl font-bold lg:my-2 p-6 max-sm:text-white'>Shri Awadhut Bahuuddeshiya Sewa Sanstha, Wardha</h6>
                    <p className='xl:px-3 max-sm:px-3 lg:text-sm xl:text-base   max-sm:text-slate-400' data-aos="fade-left" data-aos-duration="800">Established in 1995, Shri Awadhut Bahuuddeshiya Sewa Sanstha, Wardha has emerged as a cornerstone of educational excellence, providing a ray of hope and a platform for personal and professional growth for students across the Wardha region. The institute serves students from diverse areas such as Mandgaon, Samudrapur, Hinganghat, and other neighboring regions, bridging the gap between urban and rural education.
                        Founded with the noble mission of addressing the growing issue of unemployment in rural and semi-urban areas, Shri Awadhut Bahuuddeshiya Sewa Sanstha aims to transform lives by making education accessible to everyone.</p>
                    <button className='my-4 button'>
                        <span>Read More</span>
                    </button>
                </div>

            </div>


        </div>
    )
}

export default AboutUs
