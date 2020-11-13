import Document, { Html, Head, Main, NextScript } from 'next/document'

const style = {
  overflow: "hidden",
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
}

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  } 

  render() {
    return (
      <Html>
        <Head>
            <link rel="shortcut icon" href="/static/favicon.ico" /> 
        </Head>
        <body style={style}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument