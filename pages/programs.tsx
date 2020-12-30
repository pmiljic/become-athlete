import Head from 'next/head'

import { ProgramCard } from '@components/program'
import { Link, Container, Text } from '@components/ui'
import { Layout } from '@components/common'

import { getAllPrograms } from '@lib/api'

import { Program } from '@interfaces/index'

import {
    ProgramsSection,
    InfoContainer,
    ProgramsContainer,
} from '@styles/programs.styles'

interface Props {
    allPrograms: Program[]
}

export default function Programs({ allPrograms }: Props) {
    return (
        <Container>
            <Head>
                <title>
                    Programs | Become Athlete
                </title>
            </Head>
            <ProgramsSection>
                <InfoContainer>
                    <Text variant="pageHeading">Find perfect program for you.</Text>
                    <Text variant="body">Get help choosing.
                        <Link href='/contact' >
                            <span>&nbsp;</span>
                            Contact us
                        </Link>
                        .
                        </Text>
                </InfoContainer>
                <ProgramsContainer>
                    {allPrograms.map((props) => (
                        <ProgramCard key={props.slug} {...props} />
                    ))}
                </ProgramsContainer>
            </ProgramsSection>
        </Container>
    )
}

export async function getStaticProps() {
    const allPrograms = await getAllPrograms()

    return {
        props: {
            allPrograms
        },
        revalidate: 1,
    }
}

Programs.Layout = Layout
