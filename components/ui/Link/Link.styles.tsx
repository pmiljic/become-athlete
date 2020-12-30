import styled from 'styled-components'

import * as palette from '@styles/variables'

interface Props {
    fontSize?: number
    isColorBlack?: boolean
}

export const LinkMore = styled.a<Props>`
    color: ${props => props.isColorBlack ? palette.COLOR_TEXT_BLACK : palette.COLOR_BLUE_LINK};
    line-height: 1.42859;
    font-weight: 400;
    cursor: pointer;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : 'inherit'};
    : hover {
        opacity: .8;
    }
    `
