import { FC } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import { LinkMore } from './Link.styles'

interface Props extends NextLinkProps {
    fontSize?: number
    isColorBlack?: boolean
}

const Link: FC<Props> = ({ href, children, fontSize, isColorBlack }) => {
    return (
        <NextLink href={href} passHref>
            <LinkMore fontSize={fontSize} isColorBlack={isColorBlack}>{children}</LinkMore>
        </NextLink>
    )
}

export default Link
