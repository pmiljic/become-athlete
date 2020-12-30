import { FC, useState, useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { Container, Logo } from '@components/ui'
import { Menu, Cancel } from '@components/icons'

import {
    NavbarContainer,
    NavbarContent,
    NavbarLeft,
    ItemContainer,
    ItemContainerMd,
    OptionLink,
    OptionLinkLogin,
    TopMenu
} from './Navbar.styles'

const Navbar: FC = () => {
    const [hidden, setHidden] = useState(true)
    const toggleHidden = () => setHidden(!hidden)
    const closeMobileMenu = () => setHidden(true)

    const router = useRouter()

    useEffect(() => {
        router.events.on('routeChangeComplete', closeMobileMenu)

        return () => {
            router.events.off('routeChangeComplete', closeMobileMenu)
        }
    }, [])

    return (
        <NavbarContainer isNavHidden={hidden}>
            <Container>
                <NavbarContent>
                    <TopMenu>
                        <div onClick={toggleHidden}>
                            {hidden ? <Menu /> : <Cancel />}
                        </div>
                        <ItemContainer>
                            <Link href="/" passHref>
                                <a>
                                    <Logo width={23} height={23} />
                                </a>
                            </Link>
                        </ItemContainer>
                    </TopMenu>
                    <NavbarLeft isNavHidden={hidden} >
                        <ItemContainerMd>
                            <Link href="/" passHref>
                                <OptionLink>
                                    <Logo width={23} height={23} />
                                </OptionLink>
                            </Link>
                        </ItemContainerMd>
                        <Link href="/programs" passHref>
                            <OptionLink>Programs</OptionLink>
                        </Link>
                        <Link href="/blog" passHref>
                            <OptionLink>Blog</OptionLink>
                        </Link>
                        <Link href="/about" passHref>
                            <OptionLink>About</OptionLink>
                        </Link>
                        <Link href="/contact" passHref>
                            <OptionLink>Contact</OptionLink>
                        </Link>
                        <ItemContainer>
                            <Link href="/" passHref>
                                <OptionLinkLogin>Login</OptionLinkLogin>
                            </Link>
                        </ItemContainer>
                    </NavbarLeft>
                    <ItemContainerMd>
                        <Link href="/" passHref>
                            <OptionLink>Login</OptionLink>
                        </Link>
                    </ItemContainerMd>
                </NavbarContent>
            </Container>
        </NavbarContainer >
    )
}

export default Navbar