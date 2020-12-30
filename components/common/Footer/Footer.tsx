import { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@components/ui'

import {
  FooterContent,
  FooterContainer,
  LogoLink,
  SocialDiv,
  CopyrightText
} from './Footer.styles'

const Footer: FC = () => {
  return (
    <FooterContent>
      <Container>
        <FooterContainer>
          <SocialDiv>
            <Link href='/' passHref>
              <LogoLink>
                <Image src="/social/instagram.svg" alt="Logo" width={30} height={30} />
              </LogoLink>
            </Link>
            <Link href='/' passHref>
              <LogoLink>
                <Image src="/social/tiktok.svg" alt="Logo" width={30} height={30} />
              </LogoLink>
            </Link>
            <Link href='/' passHref>
              <LogoLink>
                <Image src="/social/youtube.svg" alt="Logo" width={30} height={30} />
              </LogoLink>
            </Link>
            <Link href='/' passHref>
              <LogoLink>
                <Image src="/social/facebook.svg" alt="Logo" width={30} height={30} />
              </LogoLink>
            </Link>
            <Link href='/' passHref>
              <LogoLink>
                <Image src="/social/twitter.svg" alt="Logo" width={30} height={30} />
              </LogoLink>
            </Link>
          </SocialDiv>
          <CopyrightText>Copyright 2020 @ Become Athlete. All rights reserved.</CopyrightText>
        </FooterContainer>
      </Container>
    </FooterContent>
  )
}

export default Footer
