import styled from 'styled-components'

import * as palette from '@styles/variables'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Name = styled.h3`
    font-size: 24px;
    font-weight: 500;
    letter-spacing: .009em;
    margin-bottom: 4px;
    color: ${palette.COLOR_TEXT_BLACK};
`

export const Description = styled.p`
    font-size: 14px;
    line-height: 1.42859;
    font-weight: 500;
    letter-spacing: -.016em;
    color: ${palette.COLOR_TEXT_BLACK};
`

export const InfoContainer = styled.ul`
    margin-top: 12px;
    margin-bottom: 12px;
`

export const ListItem = styled.li`
    list-style: none;
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.42859;
    font-weight: 400;
    letter-spacing: -.016em;
    color: ${palette.COLOR_TEXT_BLACK};
`

export const DivMore = styled.div`
    margin-top: 14px;
`
