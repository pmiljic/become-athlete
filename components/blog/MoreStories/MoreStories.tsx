import { FC } from 'react'

import { Text } from '@components/ui'
import { PostPreview } from '@components/blog'

import { Post } from '@interfaces/index'

interface Props {
  posts: Post[]
}

const MoreStories: FC<Props> = ({ posts }) => {
  return (
    <section>
      <Text variant='pageHeading'>More Stories</Text>
      <div>
        {posts.map((post) => (
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
      </div>
      <style jsx>{`
                div {
                    display: grid;
                    grid-row-gap: 100px;
                    margin-top: 40px;
                    margin-bottom: 70px;
                    grid-column-gap: 60px;
                    }
                    @media screen and (min-width: 768px) {
                      div {
                        grid-template-columns: repeat(2, 1fr);
                      }
                    }
                    @media screen and (min-width: 1024px) {
                      div {
                        grid-gap: 100px;
                      }
                    }
            `}</style>
    </section>
  )
}

export default MoreStories
