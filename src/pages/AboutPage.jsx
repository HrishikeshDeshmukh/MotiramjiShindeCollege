import React from 'react'
import Building from '../assets/building.jpg'
import Motiramji from '../assets/motiramji.jpg'
import Sunil from '../assets/sunil-2.jpg'

const AboutPage = () => {
  return (
    <div className='mt-8'>
      <div class="heading ">
        About Us
      </div>

      <div className='w-[90%] h-auto bg-slate-200 flex flex-col my-2.5 mx-auto rounded-2xl flex-wrap'>
        <div className='rounded-md'>
          <img src={Building} alt="" className='md:py-5 md:px-8 ' />
        </div>
        <div className='md:p-12 text-slate-800 text-wrap'>
          <p className='m-5'>
            Established in 1995, Shri Awadhut Bahuuddeshiya Sewa Sanstha, Wardha, stands as a beacon of hope and a transformative institution committed to the cause of educational empowerment. Over nearly three decades, the organization has emerged as a cornerstone of excellence, fostering personal and professional growth among students from diverse backgrounds. Rooted in a vision of inclusivity, the Sanstha has successfully bridged the gap between urban and rural education, making learning accessible and impactful for students across the Wardha region.
          </p>
          <p className='md:flex m-5 hidden'>Shri Awadhut Bahuuddeshiya Sewa Sanstha extends its reach to students hailing from various towns and villages such as Mandgaon, Samudrapur, Hinganghat, and other neighboring areas. By connecting communities through education, the institution has created an enduring platform where aspirations meet opportunities, paving the way for a brighter future for many.</p>

          <p className='md:flex m-5 hidden'>The inception of the organization in 1995 was driven by a profound and noble mission: to combat the alarming rise of unemployment in rural and semi-urban areas. Recognizing the transformative power of education, Shri Awadhut Bahuuddeshiya Sewa Sanstha focused on equipping students with the skills, knowledge, and confidence needed to navigate the challenges of a rapidly evolving world. Through its meticulously designed educational programs, the Sanstha seeks to empower individuals to transcend socio-economic barriers and achieve their dreams.</p>

          <p className='md:flex m-5'>Beyond academics, Shri Awadhut Bahuuddeshiya Sewa Sanstha remains deeply committed to nurturing holistic development. By fostering a culture of innovation, resilience, and community engagement, the organization inspires students to become change-makers who contribute positively to society. Its enduring efforts have not only enriched the lives of countless individuals but also strengthened the social and economic fabric of the Wardha region.</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center relative text-wrap mx-auto '>
          <div className='m-4 max-md:m-2 py-5 max-md:mx-auto'>
            <img src={Motiramji} alt="" className='shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-2xl flex text-center justify-center text-white overflow-hidden relative w-[250px]' />
            <div class="py-5 mx-auto">
              <p class="block text-xl font-bold text-gray-800 ">Motiramji Shinde</p>
              <span class="text-sm text-gray-700">Chairman</span>
            </div>

          </div>
          <div className='m-8 md:w-[50%] text-slate-600 font-mono'>
            <p>Over the years, Shri Awadhut Bahuuddeshiya Sewa Sanstha has evolved into a symbol of hope and opportunity for students and their families. By addressing critical issues such as access to quality education, skill development, and employability, the Sanstha has consistently worked to create a sustainable and equitable future for all. Through its unwavering dedication to its mission, the organization continues to transform lives, ensuring that education remains a powerful force for social and economic change.</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center relative text-wrap mx-auto '>
          <div className='m-8 md:w-[50%] text-slate-600 font-mono hidden md:flex'>
            <p>An educational institution is not just an infra structure with four walls. It is a premier College and the preferred destination for the students to pursue higher education in the disciplines of Arts, Commerce and Science. <br />The Students enrol to this institute with a lot of expectation. The institute shoulder the responsibility to guide them to bright future and there by plays a messianic role in the socio-economic development of the whole area. It aims to take part in the socio-economic development of the local area by providing good quality of higher education to its students. </p>
          </div>


          <div className='m-4 max-md:m-2 py-5 max-md:mx-auto'>
            <img src={Sunil} alt="" className='shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-2xl flex text-center justify-center text-white overflow-hidden relative w-[250px] h-[270px]' />
            <div class="py-5 mx-auto">
              <p class="block text-xl font-bold text-gray-800 ">Shri Sunil Shinde</p>
              <span class="text-sm text-gray-700">Secretary</span>
            </div>

          </div>

        </div>

      </div>

      <div className='w-[90%] h-auto bg-slate-200 flex flex-col my-2.5 mx-auto rounded-2xl flex-wrap'>
        <section class=" py-16 ">
          <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-slate-600">Our Vision</h2>
            <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-[#08377b] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>

                </div>
                <div class="mt-5">
                  <h3 class="text-lg font-medium text-gray-900">Mission</h3>
                  <p class="mt-2 text-base text-gray-500">We aim to make the world a better place through innovation
                    and collaboration.</p>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-[#08377b] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>

                </div>
                <div class="mt-5">
                  <h3 class="text-lg font-medium text-gray-900">Values</h3>
                  <p class="mt-2 text-base text-gray-500">We believe in honesty, integrity, and respect for all
                    individuals.</p>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-[#08377b] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                </div>
                <div class="mt-5">
                  <h3 class="text-lg font-medium text-gray-900">Vision</h3>
                  <p class="mt-2 text-base text-gray-500">The institution’s goal is to inspire students to pursue higher education and develop their skills.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>




    </div>
  )
}

export default AboutPage
