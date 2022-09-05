import Head from 'next/head'
import React from 'react'
import HeroContainer from '../components/HeroContainer/HeroContainer'
export default function Home() {
  return (
  <>     
  <Head>
    <title>Foodzy</title>
  <meta name="description" content="Generated by create next app" />
  <link rel="icon" href="/favicon.ico" />
</Head>
<HeroContainer/>
</>
 

     
  )
}
