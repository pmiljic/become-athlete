import type { NextApiRequest, NextApiResponse } from 'next'

import { getPreviewPostBySlug } from '@lib/api'

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  if (
    req.query.secret !== process.env.STRAPI_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const post = await getPreviewPostBySlug(req.query.slug)

  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  res.setPreviewData({})

  res.writeHead(307, { Location: `/blog/${post.slug}` })
  res.end()
}
