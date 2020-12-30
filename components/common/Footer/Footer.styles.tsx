import styled from 'styled-components'

import * as palette from '@styles/variables'

export const FooterContent = styled.footer`
  background-color: ${palette.COLOR_TEXT_WHITE};
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d2d2d7;
  padding: 30px 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const SocialDiv = styled.div`
   margin-bottom: 25px;

   @media screen and (min-width: 768px) {
     margin-bottom: 0;
   }
`

export const LogoLink = styled.a`
  cursor: pointer;
  margin-right: 20px;

  :hover {
    opacity: .8;
  }
`

export const CopyrightText = styled.p`
  font-size: 14px;
  color: ${palette.COLOR_TEXT_BLACK};
`
