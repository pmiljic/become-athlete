import { FC } from 'react'

import Moment from 'react-moment'

import { Avatar, PostTitle, CoverImage } from '@components/blog'

import { Author } from '@interfaces/index'

import {
  AvatarDiv,
  ImageDiv,
  AvatarDateDiv,
  AvatarMdDiv,
  DateDiv
} from './PostHeader.styles'

interface Props {
  title: string
  coverImage: {
    url: string
  }
  date: Date
  author: Author
}

const PostHeader: FC<Props> = ({ title, coverImage, date, author }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <AvatarDiv>
        <Avatar name={author.name} picture={author.picture} />
      </AvatarDiv>
      <ImageDiv>
        <CoverImage title={title} url={coverImage.url} />
      </ImageDiv>
      <AvatarDateDiv>
        <AvatarMdDiv>
          <Avatar name={author.name} picture={author.picture} />
        </AvatarMdDiv>
        <DateDiv>
          <Moment format="DD MMMM, YYYY">{date}</Moment>
        </DateDiv>
      </AvatarDateDiv>
    </>
  )
}

export default PostHeader
