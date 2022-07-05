import Head from 'next/head'
import DefaultHeaders from '../comp/DefaultHeaders.js'

export default function Home() {
  let pageTitle = "floof.ml";
  let faviconLink = "/static/favicon.ico";
  
  return (
    <>
      <Head key="addedHeaders">
        <title>{pageTitle}</title>
        <link rel="icon" type="image/x-icon" href={faviconLink} />
      </Head>
      <DefaultHeaders />

      <div className="chpe h-screen w-screen bg-black text-white">
        <div className="">
          <div className="text-4xl pt-10 flex flex-col content-center text-center">
            <h1>The Floof Corp.</h1>
          </div>
        </div>
      </div>
    </>
  )
}
