import styled from 'styled-components'

import * as palette from '@styles/variables'

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: ${palette.COLOR_BLACK};
  color: ${palette.COLOR_WHITE};
  border: none;
  border: 1px solid ${palette.COLOR_BLACK};

  &:hover {
    background-color: ${palette.COLOR_WHITE};
    color: ${palette.COLOR_BLACK};
  }

  &:focus {
    border: none;
  }
`
