import Link from 'next/link';
import { GREEN } from '../constants'

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
                border-radius: 10px;
			}

			.footer {
				position: relative;
				color: #fff;
			}

			a {
				color: ${GREEN};
			}

			.footer:before {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;
				content: " ";
				background: #1d1d1d;
				transform: perspective(500px) rotateX(-10deg) rotateY(-8deg) rotateZ(0deg) translateX(-8%) translateY(26%);
			}
        `}</style>
	</div>
)

export default Footer
