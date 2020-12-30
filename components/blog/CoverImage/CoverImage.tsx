import { FC } from 'react'

import Link from 'next/link'

interface Props {
  title: string
  url: string
  slug?: string
}

const CoverImage: FC<Props> = ({ title, url, slug }) => {
  const imageUrl = `${url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
    }${url}`
  const postImage = (
    <img
      src={imageUrl}
      width='100%'
      alt={`Cover Image for ${title}`}
    />
  )

  return (
    <div>
      {slug ? (
        <Link href={`/blog/${slug}`}>
          <a aria-label={title}>
            {postImage}
          </a>
        </Link>
      ) : (
          postImage
        )}
    </div>
  )
}

export default CoverImage
