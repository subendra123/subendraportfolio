import React from 'react'
import Data from './Data'
import "./Home.css"
import Social from './Social'

const Home = () => {
  return (
    <>
    <section className="section home" id="home">
    <div className="home__container container grid">
    <div className="home__content grid">
        <Social />

    <div className="home__img"></div>
        <Data />
    </div>
    </div>
    </section>
    </>
  )
}

export default Home