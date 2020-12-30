import styled, { css } from 'styled-components'

import * as palette from '@styles/variables'

const style = css`
  background-color: ${palette.COLOR_WHITE};
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
  transition-duration: .15s;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  padding: .5rem 2.5rem .5rem 1.5rem;
  border 1px solid #dee2e6;
  color: #868e96;
  margin-bottom: 20px;
  margin-top: 5px;
  font-size: 13px;
  font-family: 'Roboto',sans-serif;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(159,166,178,.45);
  }

  ::placeholder {
    color: ${palette.COLOR_TEXT_BLACK};
    color: #868e96;
  }
`

export const Input = styled.input`
  ${style}
`

export const TextArea = styled.textarea`
  height: 300px;
  ${style}
`

export const Error = styled.span`
  display: inline;
  margin-left: 10px;
  color: #eb6663;
  color: #FF0000; 
  font-size: 14px;
`
