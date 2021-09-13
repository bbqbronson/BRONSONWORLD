import React from 'react'
import Icon1 from '../../images/art1.png'
import Icon2 from '../../images/art2.gif'
import Icon3 from '../../images/art3.jpg'
import { NavLink } from 'react-router-dom'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Articles</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Philosophy behind A.I.</ServicesH2>
          <ServicesP>
            Coming soon...
          </ServicesP>
        </ServicesCard>
        <NavLink to='/emailme'>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Conway's Game of Life Logic Gates</ServicesH2>
            <ServicesP>
              Coming soon...
            </ServicesP>
          </ServicesCard>
        </NavLink>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Body Without Organs</ServicesH2>
          <ServicesP>
            Coming soon...
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
