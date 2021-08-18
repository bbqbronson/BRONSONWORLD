import React, { useState } from 'react'
import { Button } from '../ButtonElements'

import Video from '../../videos/SpaceFlightLoop.mp4'
import Image from '../../images/picture.png'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Img
} from './HeroElements'

function HeroSection () {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  };
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
