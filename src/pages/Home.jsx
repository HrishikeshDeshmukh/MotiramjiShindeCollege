import React from 'react'
import Hero from './../components/Hero';
import AboutUs from './../components/AboutUs';
import OurInspiration from './../components/OurInspiration';
import CoursesSection from './../components/CoursesSection';
import WhyUs from './../components/WhyUs';
import CollegeNews from './../components/CollegeNews';
import OurMiission from './../components/OurMiission';
import Footer from './../components/Footer';
import AdmissionBlock from '../components/AdmissionBlock';
import Toppers from '../components/Toppers';


const Home = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <AdmissionBlock />
            <OurInspiration />
            <CoursesSection />
            <Toppers />
            <WhyUs />
            <CollegeNews />
            <OurMiission />
            

        </>
    )
}

export default Home
