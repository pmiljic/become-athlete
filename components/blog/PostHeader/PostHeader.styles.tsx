import styled from 'styled-components'

export const AvatarDiv = styled.div`
    display: none;
    @media screen and (min-width: 768px) { 
        display: block;
        margin-bottom: 48px;
    }	
`

export const ImageDiv = styled.div`
    margin-bottom: 32px;
    @media screen and (min-width: 640px) { 
        margin-left: 0;
        margin-right: 0;
    }	
    @media screen and (min-width: 768px) { 
        margin-bottom: 64px;
    }	
`

export const AvatarDateDiv = styled.div`
    max-width: 672px;
    margin-left: auto;
    margin-right: auto;	
`

export const AvatarMdDiv = styled.div`
    display: block;

    @media screen and (min-width: 768px) { 
        display: none;
        margin-bottom: 24px;
    }	
`

export const DateDiv = styled.div`
    margin-top: 15px;
    margin-bottom: 24px;
    font-size: 18px;
`
