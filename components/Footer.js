import Link from 'next/link'

const Footer = () => (
	<div className="footer">
        <span>Sitio desarrollado por </span>
		<Link href="www.gamesessi0n.com">
			<a>GameSessi0n</a>
		</Link>
        <style jsx>{`
            .footer {
                margin-top: 15px;
                padding: 15px;
                background: #1d1d1d;
                border-radius: 10px;
            }
        `}</style>
	</div>
)

export default Footer
