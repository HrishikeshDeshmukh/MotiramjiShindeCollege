import Home from './pages/Home'
import Navbar from './components/Navbar';
import './App.css'
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import Acedemics from './pages/Acedemics';
import Departments from './pages/Departments';
import Administration from './pages/Administration';
import Gallery from './pages/Gallery';
import Activity from './pages/Activity';
import Contact from './pages/Contact';


export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/about' element={ <AboutPage />} />
      <Route path='/acedemics' element={ <Acedemics />} />
      <Route path='/departments' element={ <Departments />} />
      <Route path='/administration' element={ <Administration />} />
      <Route path='/gallery' element={ <Gallery />} />
      <Route path='/activity' element={ <Activity />} />
      <Route path='/contact' element={ <Contact />} />

      </Routes>
      
      <Footer />
      
    </>
  )
}