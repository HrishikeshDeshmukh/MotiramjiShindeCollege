import React from 'react'
import { GiGraduateCap } from "react-icons/gi";
import { MdModelTraining, MdEmojiEvents } from "react-icons/md";
import { SiCodementor } from "react-icons/si";
import { HiChartBarSquare } from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa6";



const CardData = [
    {
        id: 1,
        title: 'Featured Courses',
        icon: <GiGraduateCap />,
        text: 'Our educational organization has multiple courses according to the tradition and future aspects.'
    },

    {
        id: 2,
        title: 'Training Programs',
        icon: <MdModelTraining />,
        text: 'We organize various training programs that enhance practical and experience knowledge.'
    },

    {
        id: 3,
        title: 'Career Guidance',
        icon: <SiCodementor />,
        text: 'Our institute provide various resources and guidance support towards future education.'
    },



]

const WhyUs = () => {
    return (
        <div className='mt-8'>
            <div class="heading ">
                Why Us
            </div>

            <div className='w-full lg:w-[80%] lg:mx-auto my-6 grid grid-cols-3 md:gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5'>

                {CardData.map((card) => (

                    <div class="card" id={card} data-aos="fade-up" data-aos-duration="2000">
                        <div class="card__body" >
                            <div class="card__icon text-[40px]">
                                {card.icon}
                            </div>

                            <p class="card__title">{card.title}</p>
                            <p class="card__paragraph">
                                {card.text}
                            </p>
                        </div>

                        <div class="card__ribbon">
                            <label class="card__ribbon-label">{card.id}</label>
                        </div>
                    </div>))}


            </div>


        </div>
    )
}

export default WhyUs
