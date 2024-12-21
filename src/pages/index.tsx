import React from "react"
import type { PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: React.FC<PageProps> = () => {
	interface GameInfo {
		image?: string;
		storeLink?: string;
		storeName?: string;
		invalid?: boolean;
	}
	const [gameInfo, setGameInfo] = React.useState({} as GameInfo)
	
	function parseStoreLink(event: React.ChangeEvent<HTMLInputElement>) {
		const storeLink = event.target.value
		switch (storeLink.match(/[^.]+\.com/)?.[0]) {
			case "steampowered.com":
				const id = storeLink.match(/app\/(\d+)/)?.[1]
				if (!id) {
					setGameInfo({invalid: true});
					break
				}
				setGameInfo({
					storeLink: storeLink,
					storeName: "Steam",
					image: `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${id}/header.jpg`
				});
				break
			case "gog.com":
				// Invalid due to GOG's blocking of CORS
			case null:
				setGameInfo({invalid: true});
				break
		}
	}
  
	return (
		<Layout>
			<main>
				<h2>
					Make a card, any card! 🃏
				</h2>
				<p>
					Something something, games, cards, presents, presentable
				</p>
				<form>
					<label htmlFor="storeLink">Store Link</label>
					<input type="text" id="storeLink" onChange={parseStoreLink} />
				</form>
				{gameInfo.invalid ? <p>Invalid store link (Currently this only works with Steam)</p> : ""}
				{gameInfo.image ? <img src={gameInfo.image} alt="" /> : ""}
			</main>
		</Layout>
	)
}

export default IndexPage

export const Head = () => <Seo />
