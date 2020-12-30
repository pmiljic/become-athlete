import styled, { css } from 'styled-components'

import * as palette from '@styles/variables'

interface Props {
  isNavHidden?: boolean
}

export const NavbarContainer = styled.div<Props>`
   background-color: ${palette.COLOR_BACKGROUND_GREY};
   height: ${props => props.isNavHidden ? '50px' : '292px'};

   @media screen and (min-width: 768px) {
    height: auto;
    position: sticky;
    top: 0;
    z-index: 40;
  }
`

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TopMenu = styled.div`
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  z-index: 9999;

  @media screen and (min-width: 768px) {
    display: none;
  } 
`

const stylesExpanded = css`
  left: 0;
  z-index: 3;
  top: 50px;
  background-color: ${palette.COLOR_BACKGROUND_GREY};
  border-top: 1px solid #f5f5f763;
  padding-left: 20px;
  padding-right: 20px;
  height: 242px;
`

const stylesCollapsed = css`
  height: 0;
  top:-100%;
`

export const NavbarLeft = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  ${props => props.isNavHidden ? stylesCollapsed : stylesExpanded};

  @media screen and (min-width: 768px) {
    top:-100%;
    height:0;
    border: none;
    flex-direction: row;
    align-items: center;
    position: relative;
    z-index: 1;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  
   @media screen and (min-width: 768px) {
     display: none;
   }
`

export const ItemContainerMd = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
`

const linkStyles = css`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -.01em;
  color: ${palette.COLOR_TEXT_WHITE};
  margin: 0 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  opacity: .8;

  :hover {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    border: none;
    margin-top: 17px;
    margin-bottom: 11px;
    padding-top: 0;
    padding-bottom: 0;
  }
`

export const OptionLink = styled.a`
  border-bottom: 1px solid #f5f5f763;
  ${linkStyles}
 `

export const OptionLinkLogin = styled.a`
  ${linkStyles}
`
