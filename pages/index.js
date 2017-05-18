import Layout from "../components/MyLayout"

const API_KEY = process.env.YOUTUBE_API_KEY;

const Index = () => (
	<div>
		<Layout>
			<div className="content">Splatoon 2</div>
		</Layout>
		<style jsx>{`
			.content {
				padding: 15px;
				background: #fff;
				border-radius: 10px;
				border: 5px solid #1d1d1d;
			}
		`}</style>
	</div>
);

export default Index;
