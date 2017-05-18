import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (props) => (
	<div className="container">
		<Header />
		<div className="content">
			{props.children}
		</div>
		<Footer />

	<style jsx>{`
		.container {
			margin: 20px auto;
		}
		.content {
			border: 1px solid #fff;
			border-radius: 10px;
			box-shadow: 0 0 10px #fff;
		}
	`}</style>
	</div>
);

export default Layout;
