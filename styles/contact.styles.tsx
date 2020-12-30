import styled from 'styled-components'

export const ContactContainer = styled.div`
    margin-top: 80px;
    margin-bottom: 50px;
`

export const ContactInfo = styled.div`
    margin-bottom: 50px;
    text-align: center;
`

export const InputContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media screen and (min-width: 640px) {
        grid-template-columns: repeat(1, .6fr);
    }

    @media screen and (min-width: 768px) { 
        grid-template-columns: repeat(1, .4fr);
    }
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`
