import React from 'react'
import Video from '../../videos/SpaceFlightLoop.mp4'
import Image from '../../images/picture.png'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  Img
} from './HeroElements'

function HeroSection () {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <Img src={Image} className={Img} alt='logo' />
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
