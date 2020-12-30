import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'

import { Container, Button, Link, Text } from '@components/ui'
import { Layout } from '@components/common'

import { getAllProgramsWithSlug, getProgram } from '@lib/api'

import { Program as IProgram } from '@interfaces/index'

import { loadStripe } from '@stripe/stripe-js'

import {
    TitleDiv,
    ProgramDetails,
    ProgramInfo,
    ProgramContent,
    ButtonDiv,
    ImageDiv
} from '@styles/program.styles'


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Program({ program }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()

    const handleClick = async () => {
        const { sessionId } = await fetch('/api/checkout/session', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ id: router.query.slug, quantity: 1 })
        }).then(res => res.json())

        const stripe = await stripePromise
        const { error } = await stripe!.redirectToCheckout({ sessionId })
    }
    return (
        <ProgramContent>
            {router.isFallback ? (
                <Text variant="pageHeading">Loading…</Text>
            ) : (
                    <>
                        <Head>
                            <title>
                                Program - {program.name}
                            </title>
                        </Head>
                        <ImageDiv>
                            <Image
                                src='/banner.png'
                                alt="Banner logo"
                                width={858}
                                height={426}
                            />
                        </ImageDiv>
                        <Container>
                            <TitleDiv>
                                <Text variant="pageHeading">{program.name}</Text>
                            </TitleDiv>
                            <ProgramDetails>
                                <ProgramInfo>{program.description} </ProgramInfo>
                                {program.descriptionDetails}
                            </ProgramDetails>
                            <ProgramDetails>
                                <ProgramInfo>{program.level} level. </ProgramInfo>
                                {program.levelDetails}
                            </ProgramDetails>
                            <ProgramDetails>
                                <ProgramInfo>Focus is on {program.focus}. </ProgramInfo>
                                {program.focusDetails}
                            </ProgramDetails>
                            <ProgramDetails>
                                <ProgramInfo>{program.video}. </ProgramInfo>
                                {program.videoDetails}
                            </ProgramDetails>
                            <ProgramDetails>
                                <ProgramInfo>{program.duration} long. </ProgramInfo>
                                {program.durationDetails}
                            </ProgramDetails>
                            <ButtonDiv>
                                <Button role="link" onClick={handleClick}>Buy</Button>
                                <Text>
                                    Need more informations? Hit us up on
                        <Link href='/contact'>
                                        <span>&nbsp;</span>
                            Contact page
                        </Link>
                        .
                    </Text>
                            </ButtonDiv>
                        </Container>
                    </>
                )
            }
        </ProgramContent>
    )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const data = await getProgram(params!.slug)
    const program: IProgram = {
        ...data?.programs[0]
    }
    return {
        props: {
            program
        },
        revalidate: 1,
    }
}

export async function getStaticPaths() {
    const allPrograms = await getAllProgramsWithSlug()

    return {
        paths: allPrograms?.map((program: IProgram) => `/programs/${program.slug}`),
        fallback: true,
    }
}

Program.Layout = Layout
