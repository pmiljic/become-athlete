import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Container, Link } from '@components/ui'
import { Layout } from '@components/common'
import { PostBody, PostHeader, PostTitle, MoreStories } from '@components/blog'

import markdownToHtml from '@lib/markdownToHtml'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@lib/api'

import { Post } from '@interfaces/index'

export default function BlogPost({ post, morePosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  return (
    <Container>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
          <>
            <article>
              <Head>
                <title>
                  Blog - {post.title}
                </title>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            <div>
              <Link href='/blog' fontSize={20}>Back to Blog</Link>
            </div>
          </>
        )
      }
      <style jsx>{`
                article {
                    margin-bottom: 128px;
                    }
                    div {
                      margin: 70px 0;
                    }
            `}</style>
    </Container >
  )
}

export async function getStaticProps({ params, preview = false }: GetStaticPropsContext) {
  const data = await getPostAndMorePosts(params!.slug, preview)
  const content = await markdownToHtml(data?.posts[0]?.content)
  const post: Post = {
    ...data?.posts[0],
    content
  }
  const morePosts: Post[] = data?.morePosts

  return {
    props: {
      post,
      morePosts
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts?.map((post: Post) => `/blog/${post.slug}`),
    fallback: true,
  }
}

BlogPost.Layout = Layout
