import Head from 'next/head'
import Link from 'next/link'
import DefaultHeaders from './DefaultHeaders.js'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'



export default function Navbar() {
    const { t } = useTranslation('common');
    
    const router = useRouter()  // init router.
    const pn = router.pathname;

    return (
      <>
        <nav className="chpe bg-black text-white flex w-full gap-4 pt-4 pb-1 pr-4 pl-4">
            <Link href={pn} locale="en">En</Link>
            <h1>•</h1>
            <Link href={pn} locale="de">De</Link>

            <h1>//</h1>

            <Link href="/">{t("home")}</Link>
            
        </nav>
      </>
    )
  }
  