import styled from 'styled-components'

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
`

export const Section = styled.div`
    margin-top: 40px;
    margin-bottom: 50px;
`

export const SectionHead = styled.div`
    @media screen and (min-width: 768px) {
        text-align: center;
    }
`

export const TextContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`

export const TeamSection = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 35px;
    margin-bottom: 50px;

    @media screen and (min-width: 768px) {
        grid-template-columns: .5fr .5fr;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: .4fr .6fr;
    }
`

export const CoachDiv = styled.div`
    margin-top: 15px;

    @media screen and (min-width: 768px) {
        margin-top: 0;
    }
`
