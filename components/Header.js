import Link from 'next/link'
import Button from 'react-bootstrap/lib/Button'

const Header = () => (
	<div className="header">
		<Link href="/">
			<a>Home</a>
		</Link>
		<Button>Default</Button>
		<style jsx>{`
			.header {
				margin-bottom: 15px;
				padding: 15px;
				border-radius: 10px;
				background: #1d1d1d;
			}
			a {
				color: red;
			}
		`}</style>
	</div>
)

export default Header
