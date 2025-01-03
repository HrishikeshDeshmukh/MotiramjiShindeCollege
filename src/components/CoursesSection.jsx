import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiElectronbuilder } from "react-icons/si";
import { MdOutlineLocalHospital } from "react-icons/md";
import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import Pic from "../assets/female-student.jpg"
import Pic0 from "../assets/pic-2.jpg"
import Pic1 from "../assets/pic-1.jpg"

const CoursesSection = () => {
    const [content, setContent] = useState('hsc'); // Default content is for "11th & 12th"

    const hscContent = {
        title: '11th & 12th',
        items: [
            'Arts (Marathi)',
            'Commerce (English, Hindi, Marathi)',
            'Science (English)',
        ],
        eligibility: '10th pass with CBSE or State Board',
    };

    const ugContent = {
        title: 'UG Graduates',
        items: ['B.A. (Marathi)', 'B.Com.'],
        eligibility: '12th pass with CBSE, State Board, or equivalent',
    };

    const nursingContent = {
        title: 'Nursing Courses',
        items: [
            'General Nursing and Midwifery (GNM)',
            'Auxiliary Nurse Midwifery (ANM)',
           
            
        ],
        eligibility: '12th pass with Any Stream',
    };

    const getContent = () => {
        if (content === 'hsc') return hscContent;
        if (content === 'ug') return ugContent;
        return nursingContent;
    };

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='lg:w-[80%] flex justify-center bg-slate-200 rounded-lg flex-col my-8 overflow-x-hidden mx-auto'>
            <h6 className='text-2xl font-bold text-[#08377b] text-center mt-8'>
                Courses We Offer
            </h6>

            <div className='w-full flex items-center justify-center my-9'>

                <div class="flex items-center gap-3 w-full md:flex-row flex-col justify-center">

                    <button
                        class="lg:w-[25%] cursor-pointer text-slate-700 bg-white relative inline-flex items-center justify-center gap-2 text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-[60px] rounded-md px-3"
                        onClick={() => setContent('hsc')}
                    >
                        <SiElectronbuilder />
                        11th & 12th
                    </button>
                    <button
                        class=" lg:w-[25%] cursor-pointer text-slate-700 bg-white relative inline-flex items-center justify-center gap-2  text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#60A5FA] h-[60px] rounded-md px-3"
                        onClick={() => setContent('ug')}
                    >
                        <FaGraduationCap />
                        UG Graduation
                    </button>
                    <button
                        class=" lg:w-[25%] cursor-pointer text-slate-700 bg-white relative inline-flex items-center justify-center gap-2  text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FACC14] h-[60px] rounded-md px-3"
                        onClick={() => setContent('nursingContent')}
                    >
                        <MdOutlineLocalHospital />
                        Nursing Courses
                    </button>

                </div>


            </div>
            <div className='w-full m-3 relative flex flex-col md:flex-row'>
                <div className='md:w-1/2 md:flex-row flex-col justify-center md:p-3 md:m-3 gap-3 hidden md:flex z-22'>
                    <div className='md:w-[250px] xl:w-[250px] h-[400px] border-solid border border-black rounded-xl flex justify-center ' data-aos="zoom-in"  data-aos-duration="2000">
                        <img src={Pic} alt=""  className='rounded-xl'/>
                    </div>
                    <div className=''>
                        <div className='w-[200px] h-[190px] border-solid border border-black rounded-xl hidden lg:flex' data-aos="zoom-in-up" data-aos-duration="2500">
                            <img src={Pic1} alt=""  className='w-[200px] h-[190px] rounded-xl'/>
                        </div>
                        <div className='w-[200px] h-[190px] border-solid border border-black mt-5 rounded-xl hidden lg:flex' data-aos="zoom-in-down" data-aos-duration="3000">
                            <img src={Pic0} alt="" className='w-[200px] h-[190px] rounded-xl' />
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 p-3 m-3 flex'>
                    <div className='p-5'>
                        <h4 className='text-2xl font-bold text-slate-700'>{getContent().title}</h4>

                        <div className='my-6'>
                            <ul>
                                {getContent().items.map((item, index) => (
                                    <li key={index} className="flex items-center py-2 text-[#08377b] text-lg">
                                        <FaCheckCircle className="mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <h6 className="text-lg font-bold text-slate-700 mt-2">Eligibility</h6>

                            <li className="flex items-center py-2 text-[#08377b] text-lg">
                                <FaCheckCircle className="mr-3" />
                                {getContent().eligibility}
                            </li>



                        </div>



                    </div>

                </div>


            </div>



        </div>
    )
}

export default CoursesSection
