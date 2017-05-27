import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
          <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet" />
          <link rel="stylesheet" href="/static/css/main.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          html {
            height: 100%;
            background: #000 linear-gradient(to bottom,#941dcd 0,#ad6660 100%);
          }
          body {
            margin: 0;
            height: 100%;
            font-family: 'PT Sans', sans-serif;
            background: url('/static/img/bg.png');
          }
          `}</style>
      </html>
    )
  }
}
