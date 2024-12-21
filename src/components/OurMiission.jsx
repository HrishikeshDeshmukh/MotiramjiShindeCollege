import React from 'react'
import Img from '../assets/mission.jpeg'

const OurMiission = () => {
  return (
    <div className='w-full flex justify-center items-center my-8 flex-col md:flex-row bg-slate-200'>
        <div className='md:w-[50%] bg-slate-200 p-2 my-3 xl:pl-5'>
            <h4 className='text-2xl font-bold text-slate-700 p-6' data-aos="fade-up" data-aos-duration="2000">Our Vision</h4>
            <p className='text-slate-500 p-6' data-aos="fade-up" data-aos-duration="2500">The vision of the institution is to make significant progress in future towards being a model, career-oriented college and to provide affordable education. To Create a centre of acedemic excellence in the field of higher education for student.</p>

            <h4 className='text-2xl font-bold text-slate-700 p-6'data-aos="fade-up" data-aos-duration="2000" >Mission</h4>
            <p className='text-slate-500 p-6'data-aos="fade-up" data-aos-duration="2500">To achieve all round development of the students, we aim at encouraging creativity, employment, social service along with the need of environment, sports and cultural proficiency to stand in globalized world.</p>

        </div>
        
        <div className='md:w-[50%]'>
            <img src={Img} alt="" />

        </div>
      
    </div>
  )
}

export default OurMiission
