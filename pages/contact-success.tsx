import Head from 'next/head'

import { Container, Text } from '@components/ui'
import { Layout } from '@components/common'

import {
    ContactContainer,
    ContactInfo
} from '@styles/contact.styles'

export default function ContactSuccess() {
    return (
        <Container>
            <Head>
                <title>Contact Success | Become Athlete</title>
            </Head>
            <ContactContainer>
                <ContactInfo>
                    <Text variant="pageHeading">Thank you for reaching out.</Text>
                    <Text variant="body">Our team will be in touch with you soon. In the meantime, check us on the social media and explore a few reasons to join Become Athlete.</Text>
                </ContactInfo>
            </ContactContainer>
        </Container>
    )
}

ContactSuccess.Layout = Layout
