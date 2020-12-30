import { FC, ButtonHTMLAttributes } from 'react'

import { ButtonContainer } from './Button.styles'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    return (
        <ButtonContainer {...props}>{children}</ButtonContainer>
    )
}

export default Button
