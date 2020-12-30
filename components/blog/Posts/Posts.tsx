import { FC } from 'react'

import { Container } from '@components/ui'
import { PostPreview } from '@components/blog'

import { Post } from '@interfaces/index'

import { PostsContainer } from './Posts.styles'

interface Props {
  allPosts: Post[]
}

const Posts: FC<Props> = ({ allPosts }) => {
  return (
    <Container>
      <PostsContainer>
        {allPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </PostsContainer>
    </Container>
  )
}

export default Posts
