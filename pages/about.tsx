import Image from 'next/image'
import Head from 'next/head'

import { Container, Text } from '@components/ui'
import { Layout } from '@components/common'

import {
    ImageDiv,
    Section,
    SectionHead,
    TextContainer,
    TeamSection,
    CoachDiv
} from '@styles/about.styles'

export default function About() {
    return (
        <div>
            <Head>
                <title>
                    About | Become Athlete
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
                <Section>
                    <SectionHead>
                        <Text variant="pageHeading">You know why.<br />We know how.</Text>
                    </SectionHead>
                </Section>
            </Container>
            <Container>
                <Section>
                    <Text variant="sectionHeading">Our vision</Text>
                    <TextContainer>
                        <Text>We are here to help you, and our mission is to make you the best possible athlete you can be.</Text>
                    </TextContainer>
                    <TextContainer>
                        <Text>We help you to improve all aspects of your game.</Text>
                    </TextContainer>
                    <TextContainer>
                        <Text>With us, you will change yourself in a better way. Your training, nutrition and mindset gonna change.</Text>
                    </TextContainer>
                    <TextContainer>
                        <Text>Our methods are different and make better results on the athletes.</Text>
                    </TextContainer>
                </Section>
            </Container>
            <Container>
                <Section>
                    <TeamSection>
                        <div>
                            <Image
                                src='/pedja.jpg'
                                alt="Coach"
                                width={326}
                                height={388}
                            />
                        </div>
                        <CoachDiv>
                            <Text variant="sectionHeading">Predrag Miljić</Text>
                            <Text variant="bodyBold">Founder and Head coach</Text>
                            <TextContainer>
                                <Text>Predrag Miljić is in football since the age of 8 and has more than 6 years experince in weight training. From bodybuilding to sports specific training including strenght, power and speed.</Text>
                            </TextContainer>
                            <TextContainer>
                                <Text>Predrag has been learning through the years not only on training, but also on nutrition, mental preparation and the anathomy of the human body.</Text>
                            </TextContainer>
                            <TextContainer>
                                <Text>In 2020 he founded Become Athlete as a 1on1, group, and online coaching platform.</Text>
                            </TextContainer>
                        </CoachDiv>
                    </TeamSection>
                </Section>
            </Container>
        </div>
    )
}

About.Layout = Layout
