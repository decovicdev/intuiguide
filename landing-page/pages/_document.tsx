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
          <link
            rel='preload'
            href={fixSrcWithBasePath('/images/bg.png')}
            as='image'
          />
          <link
            rel='preload'
            href={fixSrcWithBasePath('/images/map-screen.png')}
            as='image'
          />
          <link
            rel='preconnect'
            href='https://decovicdev.github.io/intuiguide/'
          />
          <link
            rel='dns-prefetch'
            href='https://decovicdev.github.io/intuiguide/'
          />
          <meta name='apple-mobile-web-app-title' content='Intuiguide' />
          <meta name='application-name' content='Intuiguide' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#00bdbb' />
          <meta name='description' content='Intuiguide' />
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
