// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import {Font, theme, colors, typography} from '../design/theme'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <Font />
          <style>{`
            html {
              font-size: 18px;
              line-height: 1.2em;
            }
            body {
              font-family: ${typography.body}, sans-serif;
              font-size: 1rem;
              margin: 0 0;
              padding: 0 0;
              color: ${theme.body};
              background-color: ${theme.background};
            }
            h1,
            h2,
            h3,
            h4,
            h5 {
              text-transform: capitalize;
              color: ${theme.headings};
              margin: 0 0;
              line-height: 1.2em;
              margin-bottom: 1rem;
              font-weight: 200;
              font-family: ${typography.header};
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

            .container {
              width: 60rem;
              margin: auto auto;
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