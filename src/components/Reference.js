import React from 'react'
import { useContext } from 'react'
import styled from "styled-components"
import { AuthContext } from './Context'
import arrow from "./images/arrow.png"
import call from "./images/call.png"

const Reference = () => {
    const {theme} = useContext(AuthContext)
  return (
    <Container id="reference">
        <Wrapper>
            <Title>Reference</Title>
            <CardHolder>
                <Card
                  style={{
                    backgroundColor: theme === "light"? "white": "#414141",
                }}
                >
                    <CardWrapper>
                    <NameAndPosition>
                        <Position>CEO of Codelab</Position>
                        <Name>Peter Oti</Name>
                    </NameAndPosition>
                    <SocialAndLogo>
                        <Social>Linkedln</Social>
                        <ArrowIcon src={arrow}/>
                        <a href="https://www.linkedin.com/in/peter-oti-36196911b/" target="_blank"
                    
                        >
                            <IconBox>
                            <Icon src={call}/>
                        </IconBox>
                        </a>
                        
                    </SocialAndLogo>
                    </CardWrapper>
                </Card>
                <Card
                    style={{
                        backgroundColor: theme === "light"? "white": "#414141",
                        // color: theme === "light"? "#2D2D2D": "white",
                    
                    }}>
                    <CardWrapper>
                    <NameAndPosition>
                        <Position>CEO of Indigo</Position>
                        <Name>God'sgift Ajomafuwe </Name>
                    </NameAndPosition>
                    <SocialAndLogo>
                        <Social>Twitter</Social>
                        <ArrowIcon src={arrow}/>
                        <a
                        href="https://twitter.com/giftajomafuwe" 
                        target="_blank"
                        >
                            <IconBox>
                            <Icon src={call}/>
                        </IconBox> 
                        </a>
                       
                    </SocialAndLogo>
                    </CardWrapper>
                </Card>
                <Card
                    style={{
                        backgroundColor: theme === "light"? "white": "#414141",
                        // color: theme === "light"? "#2D2D2D": "white",
                    
                    }}>
                    <CardWrapper>
                    <NameAndPosition>
                        <Position>CEO of Mandavo Computer Learning Center</Position>
                        <Name>David Edewor</Name>
                    </NameAndPosition>
                    <SocialAndLogo>
                        <Social>Twitter</Social>
                        <ArrowIcon src={arrow}/>
                        <a   
                        href="https://twitter.com/dmandavo" 
                        target="_blank">
                            <IconBox>
                            <Icon src={call}/>
                        </IconBox> 
                        </a>
                       
                    </SocialAndLogo>
                    </CardWrapper>
                </Card>
            </CardHolder>
        </Wrapper>
    </Container>
  )
}

export default Reference

const Icon = styled.img`
object-fit: contain;
`
const IconBox = styled.div`
width: 50px;
height: 50px;
border-radius: 7px;
background-color: #7996FC;
margin-left: 40px;
display:flex;
justify-content: center;
align-items: center;
`

const ArrowIcon = styled.img`
object-fit: contain;
// color: black;
// background-color:black;
`
const Social = styled.div`
margin-left: 20px;
margin-right: 40px;
font-size: 15px;
font-weight: 600;
`
const SocialAndLogo = styled.div`
display:flex;
align-items: center;
// background-color: green;
`
const NameAndPosition = styled.div`
display:flex;
flex-direction:column;
margin-top: 18px;
margin-bottom: 30px;
@media screen and (max-width: 1209px){
    margin-bottom: 15px;
 }
`
const Position = styled.div`
font-size: 14px;
margin-bottom: 5px;
color: #C9C9C9;
`
const Name = styled.div`
font-weight: 600;
font-size: 18px;
`
const CardWrapper = styled.div`
width: 90%;
display:flex;
flex-direction:column;

`
const Card = styled.div`
height: 180px;
width: 350px;
border-radius: 10px;
background: #414141;
display:flex;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
@media screen and (max-width: 1332px){
   width: 330px;
   height: 170px;
}
@media screen and (max-width: 1257px){
   width: 320px;
   height: 160px;
}
@media screen and (max-width: 1209px){
   width: 300px;
   height: 150px;
}
@media screen and (max-width: 1139px){
  margin: 15px;
}
@media screen and (max-width: 400px){
  margin: 15px 0;
}

`


const CardHolder = styled.div`
width: 100%;
display:flex;
flex-wrap: wrap;
justify-content: space-between;
margin-bottom: 30px;
@media screen and (max-width: 1139px){
    justify-content: flex-start;
  }
@media screen and (max-width: 600px){
    justify-content: center;
}

`

const Title = styled.div`
font-family: Jost;
font-size: 40px;
font-weight: 700;
line-height: 69px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 20px;
@media screen and (max-width: 400px){
    width: 80%;
   }
`

const Wrapper = styled.div`
display:flex;
width: 80%;
flex-direction: column;
@media screen and (max-width: 400px){
   width: 100%;
   align-items:center;
  }
`

const Container = styled.div`
width: 100%;
display:flex;
justify-content: center;

`