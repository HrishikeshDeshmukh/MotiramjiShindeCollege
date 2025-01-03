import React from 'react'

const AdmissionBlock = () => {
    return (
        <section className="m-10" data-aos="fade-up" data-aos-duration="800">
            <div className="p-10 rounded-l-xl border border-blue-gray-100 lg:bg-[url('./assets/girl.jpg')] rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right shadow-[0_2px_4px_rgba(0,0,0,0.4),0_7px_13px_-3px_rgba(0,0,0,0.3),0_-3px_0px_inset_rgba(0,0,0,0.2)]">
                <p
                    className="font-bold mb-2 text-slate-600 text-md"
                >
                    Admission Open
                </p>
                <h3 className='font-bold text-lg md:text-3xl'>
                   Upgrade Your Career with Us
                </h3>
                <p
                    className="mt-2 mb-6 !text-base font-normal text-gray-500"
                >
                    Prepare to be part of the Journey that will redefine the
                    future.
                </p>
                <button className='my-4 button'>
                    <span>Take Admission</span>
                </button>
            </div>
        </section>
    )
}

export default AdmissionBlock
