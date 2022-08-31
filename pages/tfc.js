import Head from 'next/head'
import Link from 'next/link'
import DefaultHeaders from '../comp/DefaultHeaders.js'
import useTranslation from 'next-translate/useTranslation'


export default function Ffb() {
  const { t } = useTranslation('common');
  let globalPageTitle = t("globalPageTitle");
  let faviconLink = "/static/favicon.ico";

  // ALWAYS PROVIDE THE BELOW!!!
  // linkName, url, toCopy, imgurl, imgalt, divid
  let links = [
    {
      "linkName": "Email",
      "url": "",
      "toCopy": "biscuitisnotacookie@protonmail.com",
      "imgurl": "/static/email.svg",
      "imgalt": "Email icon",
      "divid": "emailbtn"
    },
    {
      "linkName": "GitHub",
      "url": "https://github.com/the-floof-corp/",
      "toCopy": "",
      "imgurl": "/static/github.svg",
      "imgalt": "GitHub logo",
      "divid": "githubbtn"
    }

  ];

  function copyToClipboard(toCopyToClipboard) {
    navigator.clipboard.writeText(toCopyToClipboard);
    alert(t("cttcv") + toCopyToClipboard);
  }


  return (
    <>
      <Head key="addedHeaders">
        <title>{t("globalPageTitle")}</title>
        <link rel="icon" type="image/x-icon" href={faviconLink} />
      </Head>
      <DefaultHeaders />

      <div className="chpe h-screen w-screen bg-black text-white">
        <div className="">
          <div className="text-4xl pt-10 flex flex-col content-center text-center">
          <h1>
              {t("i am")} <span> </span>
              <span className="text-blue-700"><Link href="/tfc">The Floof Corp</Link></span>!
              <span className="blink">_</span>
            </h1>
          </div>
        </div>
        <div id="linksDiv" className='flex items-center justify-center w-full gap-4 pt-4 pb-4 pr-4 pl-4'>
          { links.map((item, index) => {
              if (item.url == "" && item.toCopy != "") {
                return (
                  <div id={item.divid} className='transition ease-in-out delay-20 hover:-translate-y-1 hover:scale-125 hover:duration-20'>
                    <div onClick={() => {copyToClipboard(item.toCopy)}} key={item.linkName}>
                      <img src={item.imgurl} alt={item.imgalt}></img>
                    </div>
                  </div>
                )
              } else if (item.url != "" && item.toCopy == "") {
                  return (
                    <div id={item.divid} className='transition ease-in-out delay-20 hover:-translate-y-1 hover:scale-125 hover:duration-20'>
                      <div onClick={() => {window.open(item.url)}} key={item.linkName}>
                        <img src={item.imgurl} alt={item.imgalt}></img>
                      </div>
                    </div>
                  )
              }
            })
          }
        </div>
        <div className="pt-10">
            <div className='font-bold text-2xl pl-2'>
                <h1>{t("about tfc")}</h1>
            </div>
            <div className="pl-5">
                <h1>{t("hello")}</h1>
                <br />
                <h1>{t("ctfciti")}</h1>
                <h1>{t("wbhap")}</h1>
                <h1>{t("hitficut")}</h1>
                <h1>{t("stfc")}</h1>
            </div>
        </div>
      </div>
    </>
  )
}
