import { Head, Html, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <meta name='description' content='GuitarLa - Venta de Guitarras y Blog de Música'/>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={'true'} />
        <link href='https://fonts.googleapis.com/css2?family=Amaranth:ital@1&family=Outfit:wght@400;700;900&display=swap' rel='stylesheet' />
        <link href='https://necolas.github.io/normalize.css/8.0.1/normalize.css' rel='stylesheet' />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}