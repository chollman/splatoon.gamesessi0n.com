import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render () {
		return (
			<html>
				<Head>
					{/* Latest compiled and minified CSS */}
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
					{/* Optional theme */}
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />

					<link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<style jsx>{`
					html {
						height: 100%;
						background: linear-gradient(to bottom,#941dcd 0,#ad6660 100%);
					}
					body {
						margin: 0;
						height: 100%;
						background: transparent url('/static/img/bg.png');
						font-family: 'PT Sans', sans-serif;
					}
				`}</style>
			</html>
		)
	}
}
