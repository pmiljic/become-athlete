import { FC } from 'react'

const PostTitle: FC = ({ children }) => {
  return (
    <>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {children}
      </h1>
      <style jsx>{`
                h1 {
                    font-size: 60px;
                    font-weight: 700;
                    letter-spacing: -0.05em;
                    line-height: 1.25;
                    margin-top: 80px;
                    margin-bottom: 48px;
                    }
                    @media screen and (min-width: 768px) { 
                      h1 {
                        font-size: 72px;
                        line-height: 1;
                        text-align: left;
                       }
                    }	
                    @media screen and (min-width: 1024px) { 
                      h1 {
                        font-size: 96px;
                       }
                    }	
            `}</style>
    </>
  )
}

export default PostTitle
