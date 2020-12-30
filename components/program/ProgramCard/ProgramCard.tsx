import { FC } from 'react'

import { Link } from '@components/ui'

import { Program } from '@interfaces/index'

import {
    CardContainer,
    Name,
    Description,
    InfoContainer,
    ListItem,
    DivMore
} from './ProgramCard.styles'

const ProgramCard: FC<Program> = ({ name, description, duration, level, focus, video, price, slug }) => {
    return (
        <CardContainer>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <InfoContainer>
                <ListItem>{duration}</ListItem>
                <ListItem>{level}</ListItem>
                <ListItem>{focus}</ListItem>
                <ListItem>{video}</ListItem>
                <ListItem>{price}$</ListItem>
            </InfoContainer>
            <DivMore>
                <Link href={`/programs/${slug}`} fontSize={14}>
                    Learn more
                </Link>
            </DivMore>
        </CardContainer >
    )
}

export default ProgramCard
