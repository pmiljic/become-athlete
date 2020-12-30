import styled from 'styled-components'

export const ScrollMenu = styled.div`
    overflow: auto;
    white-space: nowrap;
    margin-bottom: 30px;
`

export const ScrollMenuLink = styled.button`
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px;
    text-decoration: none;
    background-color: #1f1f1f;
    border: 1px solid white;
    cursor: pointer;

    :hover {
        background-color: #777;
    }
`
