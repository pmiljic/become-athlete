import styled from 'styled-components'

import * as palette from './variables'

export const ProgramContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleDiv = styled.div`
  margin-top: 70px;
  margin-bottom: 10px;
  text-align: center;
`

export const ProgramDetails = styled.p`
  color: #86868b;
  padding-top: 30px;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    font-weight: 400;
  }
`

export const ProgramInfo = styled.span`
   color: ${palette.COLOR_TEXT_BLACK};
`

export const ButtonDiv = styled.div`
  height: 200px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
`

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    width: 100%
`
