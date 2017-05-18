import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (props) => (
	<div className="layout">
		<Header />
		<div className="content">
			{props.children}
		</div>
		<Footer />

		<style jsx>{`
			.content {
				min-height: 500px;
			}
		`}</style>
	</div>
);

export default Layout;
