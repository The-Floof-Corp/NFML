import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  const router = useRouter()  // init router.

  // This code redirects the user FROM //www.floof.ml TO //floof.ml (there's a difference. i promise.)
  // "//" implies "http" or "https" if available.
  useEffect(() => {
    const hostname = window.location.host;
    if(hostname.includes("www")) {
      window.location.href = `https://${hostname.replace("www.", "")}${window.location.pathname}`
    };
  }, [router.pathname]);

  // return the actual page user wanted.
  return <Component {...pageProps} />
}

export default MyApp
