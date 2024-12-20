import React from "react"
import type { PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<main>
				<h2>
					Make a card, any card! 🃏
				</h2>
				<p>
					Something something, games, cards, presents, presentable
				</p>
				
			</main>
		</Layout>
	)
}

export default IndexPage

export const Head = () => <Seo />
