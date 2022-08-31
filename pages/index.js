import Head from 'next/head'
import Link from 'next/link'
import DefaultHeaders from '../comp/DefaultHeaders.js'
import Navbar from'../comp/Navbar.js'
import useTranslation from 'next-translate/useTranslation'


export default function Home() {
  let globalPageTitle = "floof.ml";
  let faviconLink = "/static/favicon.ico";

  
  const { t } = useTranslation('common');


  return (
    <>
      <Head key="addedHeaders">
        <title>{t("globalPageTitle")}</title>
        <link rel="icon" type="image/x-icon" href={faviconLink} />
      </Head>
      <DefaultHeaders />
      <div className="">
        <div className="chpe h-screen w-screen bg-black text-white">
          <div className="">
            <div className="text-4xl pt-10 flex flex-col content-center text-center">
            <h1>
                {t("i am")} <span> </span>
                <span className="text-blue-700"><Link href="/ffb">fwuffyboi</Link></span>!
              </h1>
              <div className="typewriter">
                <h1>
                  {t("i am")} <span> </span>
                  <span className="text-blue-700"><Link href="/tfc">The Floof Corp</Link></span>
                  <span className='blink'>_</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
