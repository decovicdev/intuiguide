import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import fixSrcWithBasePath from '../utils/fixSrcWithBasePath';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href={fixSrcWithBasePath('/apple-touch-icon.png')}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href={fixSrcWithBasePath('/favicon-32x32.png')}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href={fixSrcWithBasePath('/favicon-16x16.png')}
          />
          <link rel='manifest' href={fixSrcWithBasePath('/site.webmanifest')} />
          <link
            rel='mask-icon'
            href={fixSrcWithBasePath('/safari-pinned-tab.svg')}
            color='#5bbad5'
          />
          <meta name='apple-mobile-web-app-title' content='Intuiguide' />
          <meta name='application-name' content='Intuiguide' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#00bdbb' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
