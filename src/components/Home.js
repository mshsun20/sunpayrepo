import React from 'react'
import Homeheader from './homepartials/Homeheader'
import Homebody from './homepartials/Homebody'
import Services from './Services'
import About from './About'
import Contact from './Contact'

const Home = () => {
    return (
        <>
        <div className="hmpg">
            <Homeheader />
            <Homebody />
        </div>
        <About />
        <Services />
        <Contact />
        </>
    )
}

export default Home
