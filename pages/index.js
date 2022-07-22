import Head from 'next/head'
import DefaultHeaders from '../comp/DefaultHeaders.js'

export default function Home() {
  let pageTitle = "floof.ml";
  let faviconLink = "/static/favicon.ico";

  // ALWAYS PROVIDE THE BELOW!!!
  // linkName, url, toCopy, imgurl, imgalt, divid
  let links = [
    {
      "linkName": "GitHub",
      "url": "https://github.com/fwuffyboi",
      "toCopy": "",
      "imgurl": "/static/github.svg",
      "imgalt": "GitHub logo",
      "divid": "githubbtn"
    },
    {
      "linkName": "Twitter",
      "url": "https://twitter.com/fwuffyboi",
      "toCopy": "",
      "imgurl": "/static/twitter.svg",
      "imgalt": "Twitter logo",
      "divid": "twitterbtn"
    },
    {
      "linkName": "Discord",
      "url": "",
      "toCopy": "fwuffyboi#1556",
      "imgurl": "/static/discord.svg",
      "imgalt": "Discord logo",
      "divid": "discordbtn"
    }

  ];

  function copyToClipboard(toCopyToClipboard) {
    navigator.clipboard.writeText(toCopyToClipboard);
    alert("Copied to the clipboard!\nValue: " + toCopyToClipboard);
  }


  return (
    <>
      <Head key="addedHeaders">
        <title>{pageTitle}</title>
        <link rel="icon" type="image/x-icon" href={faviconLink} />
      </Head>
      <DefaultHeaders />

      <div className="chpe h-screen w-screen bg-black text-white">
        <div className="hover:">
          <div className="text-4xl pt-10 flex flex-col content-center text-center">
            <h1>
              Fwuffyboi
              <span className='blink'>_</span>
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
      </div>
    </>
  )
}
