import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function DefaultHeaders() {
  const { t } = useTranslation('common');
  return (
    <>
      <Head key="defaultHeaders">
        {"Search engine tags"}
        <meta charSet="UTF-8" />
        <meta name="description" content="The official website of 'The Floof Corp.' and 'fwuffyboi'!" />
        <meta name="keywords" content="floof, floof.ml, fwuffyboi, the floof corp., the floof corp, TheFloofCorp." />
        <meta name="author" content="fwuffyboi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {"Page/link embed stuff. Now in non-nerd, the thing that shows up when you paste a link in discord/twitter/etc..."}
        <meta content="The Floof Corp. // @fwuffyboi" property="og:title" />
        <meta content="The official website of The Floof Corp. and @fwuffyboi!" property="og:description" />
        <meta content="https://floof.ml/" property="og:url" />
        <meta content="https://floof.ml/static/embed-banner.png" property="og:image" />
        <meta name="twitter:card" content="https://floof.ml/static/embed-banner.png"></meta>
        
        {"The beautiful page fonts"}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&display=swap" rel="stylesheet" />
      </Head>

      <style jsx>{`
        h1,h2,h3,h4,h5,h6,p {
          font-family: 'Chakra Petch';
        }
      `}
      </style>
    </>
  )
  }