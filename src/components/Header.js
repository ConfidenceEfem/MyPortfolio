import React, { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "./Context"
import SwitchCom from "./SwitchCom"
import {Link, animateScroll as scroll} from "react-scroll"

const Header = () => {
    const {theme, onToggle} = useContext(AuthContext)
    return (
        <Container
        style={{
            color: theme === "light"? "#2D2D2D": "lightgray",
        
        }}
        >
        
       <Wrapper>
       <NavHolder>
          <Link
    //    activeClass="active"
       to="about"
       spy={true}
       smooth={true}
       offset={-70}
       duration={500}
        >
        <Nav 
        onClick={() => {
            
        }}> 
     
            About
         
            </Nav>  
             </Link>
        
             <Link
                to="portfolio"
                offset={60}
                spy={true}
                smooth={true}
                duration={1000}
                >
                <Nav>Portfolio</Nav>
                </Link>

                <Link
                to="reference"
                offset={60}
                spy={true}
                smooth={true}
                duration={1000}
                > 
                 <Nav>Reference</Nav>
                </Link>
              
                <Nav
                onClick={()=>{
                    scroll.scrollToBottom()
                }}
                >Contact</Nav>
                <Nav></Nav>
            </NavHolder>
            <Me>
                <SwitchCom onToggle={onToggle} theme={theme}/>
            </Me>
       </Wrapper>
        </Container>
    )
}

export default Header

const Me = styled.div`
width: 10%;
/* background-color: purple; */
display:flex;
justify-content: flex-end;
align-items: center;
@media screen and (max-width: 800px){
    width:5%;
}
`
const Line = styled.div`
display:flex;
/* flex: 1; */
/* width: 0px; */
/* background-color: purple; */
`
const Wrapper = styled.div`
display:flex;
/* background:red; */
width: 80%;
justify-content: space-between;
align-items: center;
margin-top: 30px;
@media screen and (max-width: 1190px){
    width:90%;
}
@media screen and (max-width: 600px){
   display:flex;
   justify-content: flex-end;
}
`
const Nav = styled.div`
margin:  0 30px;
font-weight: 500;
cursor: pointer;

// color: lightgray;
`
const NavHolder = styled.div`
display:flex;
align-items: center;
/* margin-top: 30px; */
/* background-color: green; */
width: 75%;
justify-content: flex-end;

/* flex: 1; */

@media screen and (max-width: 1190px){
    width: 80%;
}

@media screen and (max-width: 800px){
    width:90%;
}

@media screen and (max-width: 600px){
    display:none;
}
`
const Container = styled.div`
width: 100%;
display:flex;
justify-content: center;
font-family: jost;
height: 70px;
@media screen and (max-width: 600px){
   display:flex;
}

`

