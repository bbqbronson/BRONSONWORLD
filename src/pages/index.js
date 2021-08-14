import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import ResumeSection from '../components/Resume'
import { homeObjOne } from '../components/InfoSection/Data'
import { homeObjThree } from '../components/Resume/Data'
import Services from '../components/Services'
import Projects from '../components/Projects'

function Home () {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Projects />
      <Services />
      <ResumeSection {...homeObjThree} />
      <Footer />
    </>
  )
}

export default Home
