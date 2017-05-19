import Link from 'next/link';
import { VARIABLES } from '../constants'

const Footer = () => (
	<div>
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<div className="footer">
						<span>Sitio desarrollado por </span>
						<Link href="https://gamesessi0n.com">
							<a target="_blank">GameSessi0n</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
        <style jsx>{`
			.container-fluid {
				max-width: 1170px;
			}

			.footer {
				color: #fff;
				position: relative;
				padding: 15px 0;
			}

			a {
				color: ${VARIABLES.GREEN};
			}

			.footer:before {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;
				content: " ";
				display: block;
				background: #1d1d1d;
				transform: perspective(500px) rotateX(-10deg) rotateY(-8deg) rotateZ(0deg) translateX(-8%) translateY(26%) scaleX(1.1);
				box-shadow: #fff 4px 4px 0px;
			}
        `}</style>
	</div>
)

export default Footer
