import React from 'react'

import { 
    Header,
    About,
    Promo,
    Advantages,
    ForWhom,
    News
  } from "../components"

const Home = () => {

  return (
    <>
        <Header/>
        <Promo/>
        <About/>
        <Advantages/>
        <ForWhom/>
        <News/>
    </>
  )
}

export default Home