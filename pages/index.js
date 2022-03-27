import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest"/>
        <title>Nickel NG</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header  />
        <p className='description'>We are under construction 🚧</p>
      </main>

      <Footer />
    </div>
  );
}
