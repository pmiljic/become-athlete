import styled from 'styled-components'

import * as palette from '@styles/variables'

export const ProgramsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 70px;
`

export const InfoContainer = styled.div`
  margin-top: 45px;  
  margin-bottom: 80px;
  text-align: center;
`

export const ProgramsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 70px;
  grid-column-gap: 30px;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const LinkContact = styled.a`
  margin-left: 3px;
  font-size: 20px;
  cursor: pointer;
  color: ${palette.COLOR_BLUE_LINK};

  :hover {
    opacity: .8;
  }
`
