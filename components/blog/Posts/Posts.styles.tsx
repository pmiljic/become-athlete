import styled from 'styled-components'

export const PostsContainer = styled.div`
    display: grid;
    grid-gap: 60px;
    
    @media screen and (min-width: 640px) { 
        grid-template-columns: repeat(1, 1fr)
    }	
    @media screen and (min-width: 768px) { 
        grid-template-columns: repeat(2, .5fr);
    }	
    @media screen and (min-width: 1024px) { 
        grid-gap: 100px;
     }	
`
