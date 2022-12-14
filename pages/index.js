import Head from 'next/head'
import React from 'react'
import HeroContainer from '../components/HeroContainer/HeroContainer'
import ServiceComponent from '../components/ServiceComponent/ServiceComponent'
import AboutContainer from '../components/AboutContainer/AboutContainer'
import DownloadContainer from '../components/DownloadContainer/DownloadContainer'
import ContactSection from '../components/ContactSection/ContactSection'
import FooterContainer from '../components/FooterContainer/FooterContainer'
export default function Home() {
  return (
  <>     
  <Head>
    <title>Foodzy</title>
  <meta name="description" content="Generated by create next app" />
  <link rel="icon" href="/favicon.ico" />
</Head>
<HeroContainer/>
<ServiceComponent/>
<AboutContainer/>
<DownloadContainer/>
<ContactSection/>
<FooterContainer/>
</>
 

     
  )
}
