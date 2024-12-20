import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import logo from "../images/icon.png"
import "./style.scss"

interface LayoutProps {
  children: React.ReactNode;
  description?: string;
  title?: string;
}
export default function Layout({ children, description, title }: LayoutProps) {
	const { site } = useStaticQuery(graphql`
		query TitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	
	return (
		<>
			<header>
				<Link to="/">
					<h1>
						<img src={logo} alt={site.siteMetadata.title + " Logo"} />
						{String(site.siteMetadata.title)}
					</h1>
				</Link>
			</header>
			<div id="main-container">
				{children}
			</div>
			<footer><div>Made by <a href="https://matthewminer.name">Matthew Miner</a></div></footer>
		</>
	)
}
