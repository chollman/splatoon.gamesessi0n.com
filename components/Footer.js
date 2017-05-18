import Link from 'next/link'

const Footer = () => (
	<div className="footer">
		<div className="container-fluid">
	        <span>Sitio desarrollado por </span>
			<Link href="https://gamesessi0n.com">
				<a target="_blank">GameSessi0n</a>
			</Link>
		</div>
        <style jsx>{`
			.container-fluid {
				max-width: 1170px;
                padding: 15px;
                background: #1d1d1d;
                border-radius: 10px;
			}
        `}</style>
	</div>
)

export default Footer
