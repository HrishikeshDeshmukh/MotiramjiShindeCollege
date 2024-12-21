import React, { useCallback }  from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Poster from '../assets/poster.jpg'
import Poster2 from '../assets/poster-2.jpg'
import Poster3 from '../assets/poster-3.jpg'
import Poster4 from '../assets/poster-4.jpg'
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container relative">
          <div className="embla__slide slide1"><img src={Poster} alt="" /></div>
          <div className="embla__slide slide2"><img src={Poster2} alt="" /></div>
          <div className="embla__slide slide3"><img src={Poster3} alt="" /></div>
          <div className="embla__slide slide3"><img src={Poster4} alt="" /></div>
          
        </div>
      </div>
      <button className="embla__prev absolute top-[50%] left-2 z-29 lg:flex hidden" onClick={scrollPrev}>
        <FaChevronCircleLeft className='text-slate-500 text-2xl'/>
      </button>
      <button className="embla__next absolute top-[50%] right-2 z-29 lg:flex hidden" onClick={scrollNext}>
        <FaChevronCircleRight className='text-slate-500 text-2xl'/>
      </button>
    </div>
  )
}

export default Hero
