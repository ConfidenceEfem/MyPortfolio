import React, { useContext } from 'react'
import styled from "styled-components"
import { AuthContext } from './Context'
import Fade from "react-reveal/Fade"

const Footer = () => {
    const {theme} = useContext(AuthContext)

  return (
    <Container
    style={{
        backgroundColor: theme === "light"? "#7996FC": "#414141",
    
    }}
    >
        <Wrapper>
            <AddressItems
            style={{
                color: theme === "light"? "white": "#C9C9C9",
            
            }}>
                <Address>
                    Based in Lagos,
                    <br/>
                  Nigeria
                </Address>
                <Contact>+234 9122 641558</Contact>
                <Mail>confidenceefem1@gmail.com</Mail>
            </AddressItems>
            <NavsHolder>
                <PortfolioHolder>
                    <HeadNav>Developers Platform</HeadNav>
                    <SubNav>
                    <a 
                    style={{
                        textDecoration: "none",
                        color: theme === "light"? "white": "#C9C9C9",
                    }}
                        target="_blank"
                        href="https://github.com/ConfidenceEfem"
                        >
                        <Nav>Github</Nav>
                        </a>
                    <a 
                     style={{
                        textDecoration: "none",
                        color: theme === "light"? "white": "#C9C9C9",
                    }}
                        target="_blank"
                        href=""
                        >
                        <Nav>Slack</Nav>
                        </a>
                    <a 
                     style={{
                        textDecoration: "none",
                        color: theme === "light"? "white": "#C9C9C9",
                    }}
                        target="_blank"
                        href=""
                        >
                        <Nav>Discord</Nav>
                        </a>
                    </SubNav>
                </PortfolioHolder>
                <SocialMedia>
                    <SocialHead>Social media</SocialHead>
                    <SocialSub>
                        <a 
                         style={{
                            textDecoration: "none",
                            color: theme === "light"? "white": "#C9C9C9",
                        }}
                        target="_blank"
                        href="https://www.linkedin.com/in/confidence-efem-136086223"
                        >
<SocialNav>Linkedln</SocialNav>
                        </a>
                        <a 
                         style={{
                            textDecoration: "none",
                        color: theme === "light"? "white": "#C9C9C9",
                        }}
                        target="_blank"
                        href="https://twitter.com/confidence_efem"
                        >
        <SocialNav>Twitter</SocialNav>                        
        </a>
                        <a 
                         style={{
                            textDecoration: "none",
                            color: theme === "light"? "white": "#C9C9C9",
                        }}
                        target="_blank"
                        href="https://twitter.com/confidence_efem"
                        >
                        <SocialNav>Instagram</SocialNav>
                        </a>
                        <a 
                         style={{
                            textDecoration: "none",
                            color: theme === "light"? "white": "#C9C9C9",
                        }}
                        target="_blank"
                        href="https://twitter.com/confidence_efem"
                        >
                        <SocialNav>Facebook</SocialNav>
                        </a>
                        <a 
                         style={{
                            textDecoration: "none",
                            color: theme === "light"? "white": "#C9C9C9",
                        }}
                        target="_blank"
                        href="https://wa.link/r5upyj"
                        >
                        <SocialNav>Whatsapp</SocialNav>
                        </a>
                        
                
                    </SocialSub>
                </SocialMedia>
            </NavsHolder>
        </Wrapper>
    </Container>
  )
}

export default Footer
const SocialNav = styled.div`
margin: 10px 0;
// color: #C9C9C9;
font-weight: 500;
line-height: 35px;
letter-spacing: 0em;
cursor: pointer;
transition: all 350ms;
text-decoration :none;

:hover{
    transform: scale(1.01);
    color: gray;
}
`
const SocialSub = styled.div`
@media screen and (max-width: 500px){
    text-align: center;
  }
`
const SocialHead = styled.div`
font-family: Jost;
font-size: 18px;
font-weight: 500;
line-height: 35px;
letter-spacing: 0em;
text-align: left;
color: white;
margin-bottom: 20px;
`

const SocialMedia = styled.div`
@media screen and (max-width: 500px){
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
}
`

const Nav = styled.div`
margin: 10px 0;
font-weight: 500;
line-height: 35px;
letter-spacing: 0em;
cursor: pointer;
transition: all 350ms;
:hover{
    transform: scale(1.01);
    color: gray;
}
`
const SubNav = styled.div`
color: #C9C9C9;
@media screen and (max-width: 500px){
    text-align: center;
  }
`
const HeadNav = styled.div`
font-family: Jost;
font-size: 18px;
font-weight: 500;
line-height: 35px;
letter-spacing: 0em;
text-align: left;
color: white;
margin-bottom: 20px;
// color: #C9C9C9;

`
const PortfolioHolder = styled.div`
 margin-right: 200px;
@media screen and (max-width: 920px){
    margin-right: 150px;
}
@media screen and (max-width: 820px){
    margin-right: 100px;
}
@media screen and (max-width: 710px){
    margin-right: 80px;
}
@media screen and (max-width: 665px){
    margin-right: 120px;
}
@media screen and (max-width: 500px){
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0px;
    margin: 40px;
}
`
const Mail = styled.div``
const Contact = styled.div`
margin: 25px 0;
@media screen and (max-width: 500px){
   text-align: center;

}
`
const Address = styled.div`
font-family: Jost;
font-size: 15px;
font-weight: 400;
// line-height: 35px;
letter-spacing: 0em;
text-align: left;

@media screen and (max-width: 500px){
  text-align: center;
}
`
const NavsHolder = styled.div`
display:flex;
flex-wrap: wrap;
@media screen and (max-width: 665px){
    margin-top: 50px;
}
@media screen and (max-width: 500px){
    width: 100%;
    margin-top: 0px;
}
`
const AddressItems = styled.div`
display:flex;
flex-direction:column;
color:#C9C9C9;
@media screen and (max-width: 700px){
    margin-right: 50px;
}
@media screen and (max-width: 500px){
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0px;
}

`
const Wrapper = styled.div`
width: 78%;
display:flex;
justify-content: space-between;
margin: 50px 0;
flex-wrap: wrap;

`
const Container = styled.div`
width: 100%;
height: auto;
border-radius: 80px 80px 0 0;
background: #414141;
display:flex;
justify-content: center;
@media screen and (max-width: 665px){
    // background: red;
}
@media screen and (max-width: 700px){
    border-radius: 60px 60px 0 0;
}
@media screen and (max-width: 500px){
    border-radius: 40px 40px 0 0;
}
` 