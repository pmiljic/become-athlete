import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { Layout } from "@components/common"
import { Posts } from '@components/blog'

import { getAllPosts } from "@lib/api"

import { Post } from '@interfaces/index'


export default function Blog({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <Head>
                <title>
                    Blog | Become Athlete
                </title>
            </Head>
            {allPosts.length > 0 && <Posts allPosts={allPosts} />}
            <style jsx>{`
            div {
                margin-top: 100px;
                margin-bottom: 80px;
                }
        `}</style>
        </div>
    )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext) {
    const allPosts: Post[] = await getAllPosts(preview)
    return {
        props: {
            allPosts
        },
        revalidate: 1,
    }
}

Blog.Layout = Layout
