import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps {
  description?: string;
  title?: string;
}

export default function Head({ description, title }: SeoProps) {
	const { site } = useStaticQuery(graphql`
		query HeaderQuery {
			site {
				siteMetadata {
					title
					siteUrl
				}
			}
		}
	`)

	return (
		<>
			<title>{(title ? `${title} – ` : "") + site.siteMetadata.title}</title>
			{description ? <meta name="description" content={description} /> : ""}
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<meta property="og:url" content="{site.siteMetadata.siteUrl}{pathname || ''}" />
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color={site.siteMetadata.themeColor} />
			<meta name="msapplication-TileColor" content={site.siteMetadata.themeColor} />
			<meta name="theme-color" content={site.siteMetadata.themeColor} />
			<link
				rel="preload"
				href="/fonts/Nubby.woff2"
				as="font"
				type="font/woff2"
			/>
		</>
	)
}