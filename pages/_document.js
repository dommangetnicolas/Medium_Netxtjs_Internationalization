import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>Next.js Internationalization</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="/css/main.css"/>
                </Head>
                <body className="landing">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
