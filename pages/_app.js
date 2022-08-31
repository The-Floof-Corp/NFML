import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Navbar from '../comp/Navbar.js'

function MyApp({ Component, pageProps }) {

  /* return the actual page user wanted.
     This code forces the navigation bar on top of the page, no matter the endpoint. 
     No footer tho. */
  return (
    <>
      <div className="fixed top-0 w-full">
        <Navbar />
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
