// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

          //<link href="https://fonts.googleapis.com/css?family=Arvo|Work+Sans" rel="stylesheet" />
  render() {
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" />
          <style>{`
            html {
              font-size: 16px;
              line-height: 1.2em;
              font-family: Work Sans, Source Sans Pro, sans-serif;
            }
            body {
              font-size: 1rem;
              margin: 0 0;
              padding: 0 0;
              color: #576F7A;
              background-color: #f2f2f6;
            }
            h1,
            h2,
            h3,
            h4,
            h5 {
              text-transform: capitalize;
              color: #2C3A43;
              margin: 0 0;
              line-height: 1.2em;
              margin-bottom: 1rem;
              font-weight: 200;
            }
            h1 {
              font-size: 3em;
            }
            h2 {
              font-size: 2.2em;
            }
            h3 {
              font-size: 1.8em;
            }
            h4 {
              font-size: 1.4em;
            }
            h5 {
              font-size: 1em;
            }
            a {
              color: #A74F2D;
              text-decoration: none;
            }
          `}
          </style>
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}