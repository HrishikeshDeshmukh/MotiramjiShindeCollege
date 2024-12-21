import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './App.css'
import WhyUs from './components/WhyUs';
import AboutUs from './components/AboutUs';
import OurInspiration from './components/OurInspiration';
import CoursesSection from './components/CoursesSection';
import Footer from './components/Footer';
import CollegeNews from './components/CollegeNews';
import OurMiission from './components/OurMiission';
import PhotosSlides from './components/PhotosSlides';



export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurInspiration />
      <CoursesSection />
      <WhyUs />
      <CollegeNews />
      <OurMiission />
      <Footer/>
    </>
  )
}