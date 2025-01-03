import React from 'react'
import CResult from '../components/CResult'
import AdmissionBlock from '../components/AdmissionBlock'

const Acedemics = () => {
    return (
        <div className='mt-8'>
            <div className='w-[90%] h-auto bg-slate-200 flex flex-col my-2.5 mx-auto rounded-2xl flex-wrap'>
                <div class="max-w-5xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
                    <p className='text-center text-sm md:text-md font-bold text-slate-400 py-2'>Affiliated By Govt. of Maha. and Under by Maha. State Higher Secondary Board, Nagpur</p>
                    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-600 text-center">Motiramji Shinde Junior College, Mandgaon</h2>
                    <p className='text-center md:text-lg font-bold text-slate-600 py-2'>[ Science, Fisheries, Commerce, Arts ]</p>



                    <h2 class="text-2xl my-5 font-extrabold text-white bg-blue-900 text-center p-2">Class: 11th & 12th</h2>
                </div>

                <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto  mt-5">
                    <div className='absolute right-[10%] top-1 hidden md:flex'><CResult /></div>
                    <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-700">Streams</h2>
                    <p class="mb-12 text-lg text-gray-500">Here are the courses we provide.</p>
                    <div class="w-full">
                        <div class="flex flex-col w-full mb-10 sm:flex-row">
                            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">FISHERY</h3>
                                        </div>

                                        <li class="mb-2 text-gray-600">Group 1 : Fresh Water fish Culture (Fisheries)</li>
                                        <li class="mb-2 text-gray-600">Medium: English</li>
                                        <p class="my-3 font-medium text-indigo-500 uppercase">Subjects</p>
                                        <li class="mb-2 text-gray-600">English</li>
                                        <li class="mb-2 text-gray-600">Physics</li>
                                        <li class="mb-2 text-gray-600">Chemistry</li>
                                        <li class="mb-2 text-gray-600">Biology</li>
                                        <li class="mb-2 text-gray-600">Fisheries Technology</li>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2">
                                <div class="relative h-full ml-0 md:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">SCIENCE</h3>
                                        </div>
                                        <li class="mb-2 text-gray-600">Group 2 : General Science with Maths or Sociology</li>
                                        <li class="mb-2 text-gray-600">Medium: English</li>
                                        <p class="my-3 font-medium text-purple-500 uppercase">Subjects</p>
                                        <li class="mb-2 text-gray-600">English</li>
                                        <li class="mb-2 text-gray-600">Marathi/Hindi</li>
                                        <li class="mb-2 text-gray-600">Physics</li>
                                        <li class="mb-2 text-gray-600">Chemistry</li>
                                        <li class="mb-2 text-gray-600">Biology</li>
                                        <li class="mb-2 text-gray-600">Mathematics/Sociology</li>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col w-full mb-10 sm:flex-row">
                            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-white border-2 border-blue-500 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">COMMERCE</h3>
                                        </div>

                                        <li class="mb-2 text-gray-600">Eligibility: 10th Pass</li>
                                        <li class="mb-2 text-gray-600">Medium: English/Hindi/ Marathi</li>
                                        <p class="my-3 font-medium text-blue-500 uppercase">Subjects</p>
                                        <li class="mb-2 text-gray-600">English/Hindi/ Marathi</li>
                                        <li class="mb-2 text-gray-600">Economics</li>
                                        <li class="mb-2 text-gray-600">Book Keeping and Accountancy</li>
                                        <li class="mb-2 text-gray-600">Organisation of Commerce</li>
                                        <li class="mb-2 text-gray-600">Secretarial Practice </li>
                                        <li class="mb-2 text-gray-600">Marketing</li>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2">
                                <div class="relative h-full ml-0 md:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">ARTS</h3>
                                        </div>
                                        <li class="mb-2 text-gray-600">Eligibility: 10th Pass</li>
                                        <li class="mb-2 text-gray-600">Medium: Marathi</li>
                                        <p class="my-3 font-medium text-yellow-400 uppercase">Subjects</p>
                                        <li class="mb-2 text-gray-600">English</li>
                                        <li class="mb-2 text-gray-600">Economics</li>
                                        <li class="mb-2 text-gray-600">Sociology</li>
                                        <li class="mb-2 text-gray-600">History</li>
                                        <li class="mb-2 text-gray-600">Political Science</li>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div className='w-[90%] h-auto bg-slate-200 flex flex-col my-2.5 mx-auto rounded-2xl flex-wrap'>
                <div class="max-w-5xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
                    <p className='text-center text-sm md:text-md font-bold text-slate-400 py-2'>Affiliated By Rashtrasant Tukdoji Maharaj University, Nagpur</p>
                    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-600 text-center">Motiramji Shinde Arts and Commerce College, Mandgaon</h2>
                    <p className='text-center md:text-lg font-bold text-slate-600 py-2'>[ Bachelor of Commerce, Bachelor of Arts ]</p>



                    <h2 class="text-2xl my-5 font-extrabold text-white bg-blue-900 text-center p-2">Graduation Courses</h2>
                </div>

                <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto  mt-5">
                    <div className='absolute right-[10%] top-1 hidden md:flex'></div>
                    <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-700">Streams</h2>
                    <p class="mb-12 text-lg text-gray-500">Here are the courses we provide.</p>
                    <div class="w-full">
                        <div class="flex flex-col w-full mb-10 sm:flex-row">
                            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">BACHELOR OF COMMERCE</h3>
                                        </div>

                                        <li class="mb-2 text-gray-600">New Syllabus Update</li>
                                        <li class="mb-2 text-gray-600">Medium: English/Marathi</li>
                                        <li class="mb-2 text-gray-600">Eligibility: 12th Pass</li>
                                        <p class="my-3 font-medium text-indigo-500 uppercase">6 Semisters</p>
                                        <li class="mb-2 text-gray-600">3 years of Duration</li>

                                    </div>
                                </div>
                            </div>

                            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">BACHELOR OF ARTS</h3>
                                        </div>

                                        <li class="mb-2 text-gray-600">New Syllabus Update</li>
                                        <li class="mb-2 text-gray-600">Medium: Marathi</li>
                                        <li class="mb-2 text-gray-600">Eligibility: 12th Pass</li>
                                        <p class="my-3 font-medium text-indigo-500 uppercase">6 Semisters</p>
                                        <li class="mb-2 text-gray-600">3 years of Duration</li>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

            <AdmissionBlock />


            <div className='w-[90%] h-auto bg-slate-200 flex flex-col my-2.5 mx-auto rounded-2xl flex-wrap'>
                <div class="max-w-5xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
                    <p className='text-center text-sm md:text-md font-bold text-slate-400 py-2'>Affiliated By Mah. Nursing Board Mumbai, Govt of Maharashtra and I.N.C Delhi</p>
                    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-600 text-center">Kasturba Nursing School, Mandgaon</h2>
                    <p className='text-center md:text-lg font-bold text-slate-600 py-2'>Nursing and Midwifery</p>



                    <h2 class="text-2xl my-5 font-extrabold text-white bg-blue-900 text-center p-2">Nursing Courses</h2>
                </div>

                <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto  mt-5">
                    <div className='absolute right-[10%] top-1 hidden md:flex'></div>
                    <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-700">Streams</h2>
                    <p class="mb-12 text-lg text-gray-500">Here are the courses we provide.</p>
                    <div class="w-full">
                        <div class="flex flex-col w-full mb-10 sm:flex-row">
                            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Auxiliary Nurse Midwifery (ANM)</h3>
                                        </div>

                                        <li class="mb-2 text-gray-600">New Syllabus Update</li>
                                        <li class="mb-2 text-gray-600">Medium: Marathi</li>
                                        <li class="mb-2 text-gray-600">Eligibility: 12th Pass</li>
                                        <li class="mb-2 text-gray-600">2 years of Duration</li>

                                    </div>
                                </div>
                            </div>

                            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                    <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                        <div class="flex items-center -mt-1">
                                            <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">General Nursing and Midwifery (GNM)</h3>
                                        </div>

                                        <li class="mb-2 text-gray-600">New Syllabus Update</li>
                                        <li class="mb-2 text-gray-600">Medium: Marathi</li>
                                        <li class="mb-2 text-gray-600">Eligibility: 12th Pass</li>
                                        <li class="mb-2 text-gray-600">3 years of Duration</li>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Acedemics
