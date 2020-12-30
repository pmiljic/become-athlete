import { FC } from 'react'

import Moment from 'react-moment'

import { Text, Link } from '@components/ui'
import { Avatar, CoverImage } from '@components/blog'

import { Author } from '@interfaces/index'

import {
  ImageContainer,
  PostTitle,
  DateDiv
} from './PostPreview.styles'

interface Props {
  title: string
  coverImage: {
    url: string
  }
  date: Date
  excerpt: string
  author: Author
  slug: string
}

const PostPreview: FC<Props> = ({ slug, title, coverImage, date, author, excerpt }) => {
  return (
    <div>
      <ImageContainer>
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </ImageContainer>
      <PostTitle>
        <Link href={`/blog/${slug}`} fontSize={28} isColorBlack>
          {title}
        </Link>
      </PostTitle>
      <DateDiv>
        <Moment format="DD MMMM, YYYY">{date}</Moment>
      </DateDiv>
      <Text>{excerpt}</Text>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default PostPreview
