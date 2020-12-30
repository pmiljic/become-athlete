import styled from 'styled-components'

import * as palette from '@styles/variables'

interface Props {
  isBlackBackground?: boolean | undefined
}

export const Section = styled.section<Props>`
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: ${props => props.isBlackBackground ? palette.COLOR_BLACK : palette.COLOR_WHITE_BACKGROUND};
  `
export const SectionBecomeAthlete = styled.section<Props>`
    position: relative;
    padding-top: 300px;
    padding-bottom: 300px;
    background-color: ${props => props.isBlackBackground ? palette.COLOR_BLACK : palette.COLOR_WHITE_BACKGROUND};
  
    :before {
    position: absolute;
    content: ' ';
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.4;
    background-image: url('/cr.jpg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    background-attachment: fixed;   
    }
  `

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    
    @media screen and (min-width: 640px) {
      grid-template-columns: repeat(2,.5fr);
    }
  `

export const Title = styled.h2`
  font-size: 56px;
  line-height: 1.05;
  font-weight: 600;
  letter-spacing: -.015em;
  background: radial-gradient(ellipse at center, #eff1ff 10%, #000 100%);
  background-size: 96% 156%;
  background-position: center center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  position: relative;
  z-index: 2;
  
  @media screen and (min-width: 768px) {
    font-size: 80px;
  }
  `

export const SectionTitle = styled.h2`
  position: relative;
  z-index: 2;
  font-size: 45px;
  text-align: center;
  color: ${palette.COLOR_TEXT_WHITE};
  font-weight: 500;
  margin: 20px 0;

  @media screen and (min-width: 768px) {
    font-size: 60px;
    margin: 0;
  }
`

export const ImageDiv = styled.div`
  opacity: 0.4;  
`

export const CompareTitle = styled.h2`
  margin-bottom: 60px;
  text-align: center;
  font-size: 45px;
  font-weight: 500;
  letter-spacing: -.009em;
  color: ${palette.COLOR_TEXT_BLACK};

  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`

export const ProgramsContent = styled.div`
  display: flex;
  justify-content: center;
`

export const ProgramsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  
  @media screen and (min-width: 768px) {
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const LinkWrapper = styled.div`
  margin: 75px 0 40px;
  text-align: center;
`
