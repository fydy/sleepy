import Document, { Html, Head, Main, NextScript } from "next/document";
import { seo } from "../sleepy.config";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="zh-CN">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="keywords" content={seo.keywords} />
          <meta name="description" content={seo.description} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
