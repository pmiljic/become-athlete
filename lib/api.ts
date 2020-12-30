async function fetchAPI(query: string | string[], { variables }: any = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getPreviewPostBySlug(slug: string | string[]) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  )
  return data?.posts[0]
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `query {
        posts {
          slug
        }
      }
    `)
  return data?.posts
}

export async function getAllPosts(preview: boolean) {
  const data = await fetchAPI(
    `
    query Posts($where: JSON){
      posts(sort: "date:desc", where: $where) {
        title
        slug
        excerpt
        date
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
      }
    }
  `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: 'published' }),
        },
      },
    }
  )
  return data?.posts
}

export async function getPostAndMorePosts(slug: string | string[] | undefined, preview: boolean) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }

    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
  `,
    {
      preview,
      variables: {
        where: {
          slug,
          ...(preview ? {} : { status: 'published' }),
        },
        where_ne: {
          ...(preview ? {} : { status: 'published' }),
          slug_ne: slug,
        },
      },
    }
  )
  return data
}

export async function getFeaturedPrograms() {
  const data = await fetchAPI(
    `
    query Programs($where: JSON){
      programs(limit: 3, where: $where) {
        name
        description
        duration
        level
        focus
        video
        price
        slug
      }
    }
  `,
    {
      variables: {
        where: {
          isFeatured: true,
        },
      },
    }
  )
  return data?.programs
}

export async function getAllPrograms() {
  const data = await fetchAPI(
    `query Programs {
      programs {
        name
        description
        duration
        level
        focus
        video
        price
        slug
      }
    }
  `)
  return data?.programs
}

export async function getAllProgramsWithSlug() {
  const data = await fetchAPI(
    `query {
        programs {
          slug
        }
      }
    `)
  return data?.programs
}

export async function getProgram(slug: string | string[] | undefined) {
  const data = await fetchAPI(
    `
  query ProgramBySlug($where: JSON) {
    programs(where: $where) {
      name
      description
      duration
      level
      focus
      video
      price
      descriptionDetails
      durationDetails
      levelDetails
      focusDetails
      videoDetails
      }
    }
  `,
    {
      variables: {
        where: {
          slug
        },
      },
    }
  )
  return data
}
