import React, { useContext } from 'react'
import styled from "styled-components"
import { AuthContext } from './Context'
import artik from "./images/artik.png"
import frixx from "./images/frixx.png"
import smart from "./images/smart.png"
import teenhood from "./images/teenhood.png"
import Fade from "react-reveal/Fade"

const Portfolio = () => {
    const {theme} = useContext(AuthContext)

  return (
    <Container id="portfolio">
        <Wrapper>
            <Title>Portfolio</Title>
            <ProjectHolder>
                <Fade right>
                    <Card
               
                >
                    <Image src={frixx}/>
                    <ProjectTitle>Frixx</ProjectTitle>
                   <Desc>
                 Frixx is a platform that brings techies together thereby creating a space for recruiters tho hire tech talents
                    </Desc>
                    <a
                    target="_blank"
                    href="https://frixxapp.com"
                    style={{
                        textDecoration: "none",
                        color: "white"
                    }}
                    >
                        <Button
                          style={{
                            // backgroundColor: theme === "light"? "white": "lightgray",
                            // color: theme === "light"? "#2D2D2D": "white",
                        
                        }}
                        >Visit Site</Button>  
                    </a>
                </Card>
                </Fade>
                <Fade right>
                   <Card>
                    <Image src={artik}/>
                    <ProjectTitle>Artik</ProjectTitle>
                    <Desc>
                   This is a one stop platform for artisians and a person in 
                   need of service. Need a plumber, just name the problem and Artik is for you
                    </Desc>
                    <a
                    target="_blank"
                    href="https://artik-app.netlify.app"
                    style={{
                        textDecoration: "none",
                        color: "white"
                    }}
                    >
                        <Button>Visit Site</Button>  
                    </a>
                </Card> 
                </Fade>
                <Fade right>
                    <Card>
                    <Image src={smart}/>
                    <ProjectTitle>Smart Dev</ProjectTitle>
                    <Desc>
                    This platform helps to bridge the gap between tech talents and recruiters. 
                    We provide a service that helps tech talents to access jobs easily
                    </Desc>
                    <a
                    target="_blank"
                    href="https://smart-dev.netlify.app"
                    style={{
                        textDecoration: "none",
                        color: "white"
                    }}
                    >
                        <Button>Visit Site</Button>  
                    </a>
                </Card> 
                </Fade>
                <Fade right>
                     <Card>
                    <Image src={teenhood}/>
                    <ProjectTitle>Teenhood QA</ProjectTitle>
                    <Desc>
                    This is a platform that helps teenagers be able to express themselves in event during QA scetions by 
                    asking any questions just by pushing buttons on their phones
                    </Desc>
                    <a
                    target="_blank"
                    href="https://teens-confab-askapp.netlify.app"
                    style={{
                        textDecoration: "none",
                        color: "white"
                    }}
                    >
                        <Button>Visit Site</Button>  
                    </a>
                  
                </Card>
                </Fade>
               
                
            </ProjectHolder>
        </Wrapper>
    </Container>
  )
}

export default Portfolio

const Button = styled.div`
padding: 9px 25px;
font-size: 11px;
background-color:#7996FC;
border-radius: 4px; 
margin: 20px 0; 
cursor: pointer;
text-decoration: none;
font-family: jost;

`
const Desc = styled.div`
width: 94%;
font-size: 14px;
text-align: center;
`
const ProjectTitle = styled.div`
margin: 15px 0;
font-weight: 600;
`
const Image = styled.img`
height: 160px;
width: 100%;
object-fit: cover;
`
const Card = styled.div`
width: 260px;
height: auto;
// background-color: white;
border-radius: 8px;
transition: all ease-in-out 660ms;
overflow: hidden;
display:flex;
flex-direction:column;
align-items: center; 
border: solid 1px #C9C9C9;
margin: 13px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
:hover{
    transform: scale(1.02);
}
`

const ProjectHolder = styled.div`
width: 100%;
// background-color: red;
display:flex;
flex-wrap: wrap;
justify-content: center;
margin-bottom: 30px;

`
const Title = styled.div`
font-family: Jost;
font-size: 40px;
font-weight: 700;
line-height: 69px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 20px;
`
const Wrapper = styled.div`
display:flex;
width: 80%;
flex-direction: column;
`

const Container = styled.div`
width: 100%;
display:flex;
height: auto;
justify-content: center;
margin-bottom: 80px;

`