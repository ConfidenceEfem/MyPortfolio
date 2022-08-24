import React, { useContext } from "react"
import styled from "styled-components"
import About from "./About"
import { AuthContext } from "./Context"
import Footer from "./Footer"
import Header from "./Header"
import HeroPage from "./HeroPage"
import Portfolio from "./Portfolio"
import Reference from "./Reference"


const Landingpage = () => {
    const {theme} = useContext(AuthContext)

    return (
        <div 
        style={{
            color: theme === "light"? "#2D2D2D": "white",
            backgroundColor: theme === "light"? "white": "#2D2D2D"
        }}
        >
            <Header/>
            <HeroPage/>
            <About/>
            <Portfolio />
            <Reference />
            <Footer />

        </div>
    )
}

export default Landingpage