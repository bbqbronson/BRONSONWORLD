import React from 'react'
import Icon1 from '../../images/pawpal.jpg'
import Icon2 from '../../images/comiccol.jpg'
import Icon3 from '../../images/yeezy.jpg'
import Icon4 from '../../images/flappybird.png'
import Link from 'react-router-dom/Link'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

const Projects = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <ServicesContainer id='projects'>
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>PawPal</ServicesH2>
          <ServicesP>
            A web application that accesses an API's database so users can search their area for adoptable pets and share with others.
            <br />
            <Link onClick={() => openInNewTab('https://github.com/CharlotteFrancis/paw-pal')}>GitHub</Link>
            ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏
            <Link onClick={() => openInNewTab('https://paw-pal-bootcamp.herokuapp.com/')}>Deployed</Link>
            <br />
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>ComicCol</ServicesH2>
          <ServicesP>
            A web application that users access comics from an API database and are able to review and make a list of their favorites.
            <br />
            <Link onClick={() => openInNewTab('https://github.com/CharlotteFrancis/ComicCol')}>GitHub</Link>
            ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏
            <Link onClick={() => openInNewTab('https://comiccol.herokuapp.com/')}>Deployed</Link>
            <br />
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>G-Yeezy Game Search</ServicesH2>
          <ServicesP>
            A web application that uses multiple API's to search for games and get a detailed decription of the game.
            <br />
            <Link onClick={() => openInNewTab('https://github.com/bwclark90/G-Yeezy-project')}>GitHub</Link>
            ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏
            <Link onClick={() => openInNewTab('https://bwclark90.github.io/G-Yeezy-project/index.html')}>Deployed</Link>
            <br />
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Java Flappy Bird</ServicesH2>
          <ServicesP>
            Simple Flappy Bird game made using Java.
            <br />
            <Link onClick={() => openInNewTab('https://github.com/bronsonsoda/flappybirdjava')}>GitHub</Link>
            <br />
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Projects
