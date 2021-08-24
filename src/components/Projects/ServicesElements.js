import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1500px;
  }

  @media screen and (max-width: 480px) {
    height: 1600px;
  }
`

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin-right: 470px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 40px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    margin-right: 0px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin-right: 120px;
  }

   @media screen and (min-width: 1024px){
  width: 100%;
  margin-top: 100px;
  margin-bottom: 300px;
  margin-left: 10px;
  padding: 10px
  padding-right: 0;
  }
  @media screen and (max-width: 375px) {
    
  }
  
`

export const ServicesCard = styled.div`
  background: #010606;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin-left: 115px;
`

export const ServicesIcon = styled.img`
  height: 160px;
  width: 280px;
  margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  // margin-bottom: 100px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: -5px;
    padding: 50px;
`

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 10px;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
`
