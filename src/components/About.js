import React, { useContext } from 'react'
import styled from "styled-components"
import { AuthContext } from './Context'
import Fade from "react-reveal/Fade"
import Reveal  from 'react-reveal/Reveal'

const About = () => {
  const {theme} = useContext(AuthContext)

  return (
    <Container id="about">
        <Wrapper>
          <Fade left>
              <Title>About Me</Title>
          </Fade>

            <Reveal effect="fadeInUp">   
            <Desc
             style={{
              color: theme === "light"? "gray": "lightgray",
          }}
          >
            Confidence Efem is a 17 year old full stack software engineerer and also 
            a student at Nnamdi Azikwe University, Nigeria.
            He has worked with teams to build sustainable solutions in his community and has also help to raise
            young tech talents through his internship at Codelab (A tech community in Ajegunle.) One of Confidence few 
            acheivement was leading a team that took 2nd runner up at Genz(A tech community for Genz in Africa) Hackathon. 
            Confidence goal is that before he clocks 20 years he would be among the world best young tech talents in Africa.
            </Desc>
            </Reveal>
         
        </Wrapper>
    </Container>
  )
}

export default About

const Desc = styled.div`
font-family: Jost;
font-size: 20px;
// font-style: italic;
font-weight: 500;
line-height: 31px;
letter-spacing: 0em;
text-align: left;
color: #C9C9C9;
@media screen and (max-width: 500px){
    font-size: 18px;
    font-weight: 500;
}

`
const Title = styled.div`



font-family: Jost;
font-size: 40px;
font-weight: 700;
line-height: 69px;
letter-spacing: 0em;
text-align: left;
`
const Wrapper = styled.div`
width: 80%;
// background-color: blue;

`
const Container = styled.div`
width: 100%;
display:flex;
justify-content: center;
// height: 100px;
margin-bottom: 100px;
margin-top: 150px;

@media screen and (max-width: 950px){
    margin-top: 0px;
}
`