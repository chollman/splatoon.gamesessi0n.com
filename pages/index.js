import Layout from "../components/MyLayout";
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import GameSessionsList from "../containers/GameSessionsList"

const API_KEY = process.env.YOUTUBE_API_KEY;

const Index = () => (
	<div>
		<Layout>
			<div className="container-fluid">
				<h1>Splatoon 2</h1>

				<GameSessionsList />
			</div>
		</Layout>

		<style jsx>{`
			.container-fluid {
				max-width: 1170px;
			}
			h1 {
				color: #cdf523;
			}
		`}</style>
	</div>
);

export default withRedux(initStore, null)(Index)
