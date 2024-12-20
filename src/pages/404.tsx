import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <Seo title="Page Not Found" />
