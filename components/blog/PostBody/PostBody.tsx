import { FC } from 'react'

import markdownStyles from './MarkdownStyles.module.css'

interface Props {
  content: string
}
const PostBody: FC<Props> = ({ content }) => {
  return (
    <div>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <style jsx>{`
                div {
                    max-width: 672px;
                    margin-left: auto;
                    margin-right: auto;
                    }
            `}</style>
    </div>

  )
}

export default PostBody
