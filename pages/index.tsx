import Image from 'next/image'

import { ProgramCard } from '@components/program'
import { Link, Container } from '@components/ui'
import { Layout } from '@components/common'

import { getFeaturedPrograms } from "@lib/api"

import { Program } from '@interfaces/index'

import {
  Section,
  SectionContainer,
  Title,
  SectionTitle,
  ImageDiv,
  CompareTitle,
  ProgramsContent,
  ProgramsContainer,
  LinkWrapper,
  SectionBecomeAthlete
} from '@styles/index.styles'

interface Props {
  featuredPrograms: Program[]
}

export default function Home({ featuredPrograms }: Props) {
  return (
    <>
      <Section isBlackBackground>
        <Container>
          <Title>Future of training<br />is here.</Title>
        </Container>
      </Section>
      <SectionBecomeAthlete isBlackBackground>
        <Container>
          <SectionTitle>Become Athlete</SectionTitle>
        </Container>
      </SectionBecomeAthlete>
      <Section isBlackBackground>
        <Container>
          <SectionContainer>
            <ImageDiv>
              <Image
                src="/bolt.png"
                alt="Athlete"
                width={578}
                height={771}
              />
            </ImageDiv>
            <SectionTitle>Speed<br />Power<br />Strength</SectionTitle>
          </SectionContainer>
        </Container>
      </Section>
      <Section isBlackBackground>
        <Container>
          <SectionContainer>
            <SectionTitle>And everything else...</SectionTitle>
            <ImageDiv>
              <Image
                src="/food.png"
                alt="Food"
                width={594}
                height={700}
              />
            </ImageDiv>
          </SectionContainer>
        </Container>
      </Section>
      <Section>
        <Container>
          <CompareTitle>Which Program is right for you?</CompareTitle>
          <ProgramsContent>
            <ProgramsContainer>
              {featuredPrograms.slice(0, 3).map((props) => (
                <ProgramCard key={props.slug} {...props} />
              ))}
            </ProgramsContainer>
          </ProgramsContent>
          <LinkWrapper>
            <Link href='/programs' passHref fontSize={20}>
              See All Programs
            </Link>
          </LinkWrapper>
        </Container>
      </Section>
    </>
  )
}

export async function getStaticProps() {
  const featuredPrograms = await getFeaturedPrograms()

  return {
    props: {
      featuredPrograms
    },
    revalidate: 1,
  }
}

Home.Layout = Layout
