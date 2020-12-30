import { FC } from 'react'

import { Text } from '@components/ui'

import { Author } from '@interfaces/index'

import {
  AvatarContainer,
  AvatarImage
} from './Avatar.styles'

const Avatar: FC<Author> = ({ name, picture }) => {
  const url = picture.url
  return (
    <AvatarContainer>
      <AvatarImage
        src={`${url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''}${url}`}
        alt={name} />
      <Text>{name}</Text>
    </AvatarContainer>
  )
}

export default Avatar
