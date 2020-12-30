import { FC } from 'react'

import { Navbar, Footer } from '@components/common'

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <style jsx>{`
                div {
                  max-width: 2460px;
                  height: 100%;
                  margin-left: auto;
                  margin-right: auto;
                    }
            `}</style>
    </div>
  )
}

export default Layout
