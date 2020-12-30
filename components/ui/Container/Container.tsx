import { FC } from 'react'

import { Container as NextContainer } from './Container.styles'

const Container: FC = ({ children }) => {
    return <NextContainer>{children}</NextContainer>
}

export default Container
