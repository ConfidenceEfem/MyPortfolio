import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components"
import  { AuthContext } from './Context'
import arrow from "./images/arrow.png"
import telegram from "./images/telegram.png"
import Fade from 'react-reveal/Fade';

const HeroPage = () => {
    const [counter, setCounter] = useState(0)

    const {theme} = useContext(AuthContext)

   const holdText = [
    {
        text: "Frontend Developer",
    },
    {
        text: "Backend Developer",
    },
    {
        text: "Blockchain Enthusiast",
    },
   ]


   const oneText = holdText[counter % holdText.length]

    useEffect(()=>{
     setInterval(()=>{
        setCounter((e)=>e + 1)
     },3000)
    },[])

  return (
    <Container>
        <Wrapper>
            <ImageCont>
                <ImageHold>
                  {/* <Image src={confidence}/>   */}
                </ImageHold>
                
            </ImageCont>
            <Fade right>
            <DetailsCont>
                <TextCont>
                    <Hello>Hello, I'm a</Hello>
                    <Occupation 
                    // style={{color: "red"}}
                    >{oneText?.text}</Occupation>
                    <Name>Confidence Efem</Name>
                </TextCont>
                <ButtonCont>
                    <FirstButtons>
                        <a href="mailto:confidenceefem1@gmail.com" target="_blank"
                          style={{
                            textDecoration:"none",
                            
                        }}
                        >
                        <Button mr="15px" br="#7996FC">
                           <ButtonWrapper>
                           <span>Hire me</span>
                           <Icon src={arrow}/>
                           </ButtonWrapper>
                        </Button>
                        </a>
                     
                        <a
                        style={{
                            textDecoration:"none",
                            
                        }}
                        href="confidence_efem.pdf"
                        download="Confidence Efem Resume"
                        >
                            <Button
                         br="#414141">
                            <ButtonWrapper>
                               <span>Resume</span>
                               <Icon src={arrow}/>
                            </ButtonWrapper>
                        </Button> 
                        </a>
                       
                    </FirstButtons>

                    <a href="https://wa.link/r5upyj" target="_blank"
                     style={{
                        textDecoration:"none",
                        width:"100%"
                        
                    }}
                    >
  <SecondButton>
                        <ButtonWrapperS>
                            <SocialIcon src={telegram} />
                        <code>Get in touch by Whatsapp</code>
                        <IconS src={arrow}/>
                        </ButtonWrapperS>
                        
                    </SecondButton>
                    </a>
                  
                </ButtonCont>
            </DetailsCont>
            </Fade>
           
        </Wrapper>
    </Container>
  )
}

export default HeroPage

const Image = styled.img`
object-fit: cover;
height: 521px;
width: 382px;
border-radius: 20px;
position: absolute;
// background: red;
top: -200px;
left: 100px;
transform: rotate(45deg);

`
const ImageHold = styled.div`
width: 400.87px;
margin-top: 40px;
height: 400.87px;
background: #FFFFFF;
border-radius: 70px;
position: relative;
transform: rotate(-45deg);
// overflow: hidden;

@media screen and (max-width: 1430px){
    width: 370.87px;
    margin-top: 40px;
    height: 370.87px;
    background: #FFFFFF;
    border-radius: 60px;
    transform: rotate(-45deg);
}
@media screen and (max-width: 1000px){
       width: 330.87px;
    margin-top: 60px;
    height: 330.87px;
    background: #FFFFFF;
    border-radius: 50px;
  }
  @media screen and (max-width: 880px){
    width: 300.87px;
    margin-top: 80px;
    height: 300.187px;
    background: #FFFFFF;
    border-radius: 40px;
}
@media screen and (max-width: 800px){
    margin-top: 0px;
    // margin-bottom: 60px;
}
@media screen and (max-width: 800px){
    width: 280.87px;
    margin-top: 80px;
    height: 280.187px;
    background: #FFFFFF;
    border-radius: 30px;
}
@media screen and (max-width: 500px){
    width: 260.87px;
    margin-top: 80px;
    height: 260.187px;
    background: #FFFFFF;
    border-radius: 25px;
}
@media screen and (max-width: 450px){
    width: 240.87px;
    margin-top: 80px;
    height: 240.187px;
    background: #FFFFFF;
    border-radius: 25px;
}
@media screen and (max-width: 390px){
    width: 210.87px;
    margin-top: 80px;
    height: 210.187px;
    background: #FFFFFF;
    border-radius: 20px;
}
@media screen and (max-width: 335px){
    width: 190.87px;
    margin-top: 80px;
    height: 190.187px;
    background: #FFFFFF;
    border-radius: 15px;
}
`
const ButtonWrapper = styled.div`
width: 90%;
display:flex;
align-items: center;
color: white;
span{
    font-family: Jost;
    font-size: 24px;
    font-weight: 500;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    margin-right: 50px;
    
}
code{
      font-family: Jost;
    font-size: 24px;
    font-weight: 500;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    margin-right: 50px;
}
@media screen and (max-width: 1200px){
   span{
    font-size: 20px;
    margin-right: 30px;
   }
   code{
    font-size: 20px;
    margin-right: 30px;
}

@media screen and (max-width: 980px){
    span{
        font-size: 17px;
        margin-right: 25px;
       }
       code{
        font-size: 15px;
        margin-right: 25px;
    }
 }
 @media screen and (max-width: 800px){
    width: 80%;
justify-content: space-between;
span{
    margin-right: 0px;
    font-size: 18px;
}
code{
    margin-right: 0px;
    font-size: 18px;
}
}
 @media screen and (max-width: 490px){

code{
    font-size: 16px;
}
}
 @media screen and (max-width: 445px){
    span{
        font-size: 17px;
    }
code{
    margin-right: 0px;
    font-size: 15px;
}
}
@media screen and (max-width: 400px){
    width:90%;
    span{
        font-size: 16px;
    }
code{
    margin-right: 0px;
    font-size: 14px;
}
   }
   @media screen and (max-width: 360px){
 span{
    font-size: 18px;
 }
 code{
    font-size: 19px;
 }
   }
`
const ButtonWrapperS = styled.div`
width: 90%;
display:flex;
align-items: center;
color: white;
span{
    font-family: Jost;
    font-size: 24px;
    font-weight: 500;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    margin-right: 50px;
    
}
code{
      font-family: Jost;
    font-size: 24px;
    font-weight: 500;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    margin-right: 50px;
}
@media screen and (max-width: 1200px){
   span{
    font-size: 20px;
    margin-right: 30px;
   }
   code{
    font-size: 20px;
    margin-right: 30px;
}

@media screen and (max-width: 980px){
    span{
        font-size: 17px;
        margin-right: 25px;
       }
       code{
        font-size: 15px;
        margin-right: 25px;
    }
 }
 @media screen and (max-width: 800px){
    width: 80%;
justify-content: space-between;
span{
    margin-right: 0px;
    font-size: 18px;
}
code{
    margin-right: 0px;
    font-size: 18px;
}
}
 @media screen and (max-width: 490px){

code{
    font-size: 16px;
}
}
 @media screen and (max-width: 445px){
    span{
        font-size: 17px;
    }
code{
    margin-right: 0px;
    font-size: 15px;
}
}
@media screen and (max-width: 400px){
    width:90%;
    span{
        font-size: 16px;
    }
code{
    margin-right: 0px;
    font-size: 14px;
}
   }
   @media screen and (max-width: 360px){
    justify-content: center;
 span{
    font-size: 18px;
 }
 code{
    font-size: 19px;
 }
   }
`
const SecondButton = styled.div`
width:100%;
background-color: #414141;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
height: 60px;
display:flex;
justify-content: center;
align-items: center;
border-radius: 10px;
cursor: pointer;
transition: all ease 550ms;
:hover{
    transform: scale(1.02);
}
@media screen and (max-width: 1200px){
    height: 55px;
    border-radius: 8px;
}
`
const SocialIcon = styled.img`
object-fit: contain;
margin-right: 45px;
@media screen and (max-width: 980px){
  margin-right: 35px;
 }
@media screen and (max-width: 800px){
  margin-right: 0px;
 }
@media screen and (max-width: 360px){
 display:none;
 }
`
const IconS = styled.img`
object-fit: contain;
@media screen and (max-width: 360px){
    display:none;
}
`
const Icon = styled.img`
object-fit: contain;
`
const Button = styled.div`
display:flex;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
align-items: center;
margin-right:${({mr})=>mr};
background-color:${({br})=>br};
cursor: pointer;
transition: all ease 550ms;
height: 60px;
width: 251px;
border-radius: 10px;

:hover{
    transform: scale(1.02);
}
@media screen and (max-width: 1200px){
    height: 55px;
    width: 221px;
    border-radius: 8px;
}
@media screen and (max-width: 980px){
    width: 200px;
    border-radius: 6px;
 }
 @media screen and (max-width: 920px){
    width: 170px;
    border-radius: 6px;
}
 @media screen and (max-width: 800px){
    width: 280px;
    height: 60px;
    border-radius: 6px;
}
 @media screen and (max-width: 630px){
    width: 260px;
    height: 60px;
    border-radius: 6px;
}
 @media screen and (max-width: 575px){
    width: 240px;
    height: 60px;
    border-radius: 6px;
}
 @media screen and (max-width: 535px){
    width: 220px;
    height: 60px;
    border-radius: 6px;
}
}
 @media screen and (max-width: 495px){
    width: 200px;
    height: 60px;
    border-radius: 6px;
}
@media screen and (max-width: 445px){
 width: 180px;
}
@media screen and (max-width: 400px){
 width: 160px;
}
@media screen and (max-width: 360px){
 width: 330px;
 margin-right:0px;
 margin-bottom: 18px;
}
}
@media screen and (max-width: 350px){
 width: 320px;
 margin-right:0px;
 margin-bottom: 18px;
}
@media screen and (max-width: 340px){
 width: 310px;
 margin-right:0px;
 margin-bottom: 18px;
}
@media screen and (max-width: 330px){
 width: 300px;
 margin-right:0px;
 margin-bottom: 18px;
}
@media screen and (max-width: 320px){
 width: 290px;
 margin-right:0px;
 margin-bottom: 18px;
}
`
const FirstButtons = styled.div`
display:flex;
margin-bottom: 25px;
width: 100%;
@media screen and (max-width: 360px){
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 0px;
   }
`
const ButtonCont = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
`
const Name = styled.div`
font-size: 30px;
font-weight: 500;
@media screen and (max-width: 1200px){
    font-size: 20px;
    }
@media screen and (max-width: 930px){
    font-size: 19px;
    }
@media screen and (max-width: 400px){
    font-size: 18px;
    }
`

const Occupation = styled.div`
margin: 5px 0;
font-size: 50px;
font-weight: 700;
@media screen and (max-width: 1200px){
    font-size: 40px;
    }
@media screen and (max-width: 930px){
        font-size: 37px;
}
 @media screen and (max-width: 800px){
           font-size: 45px;
}
@media screen and (max-width: 500px){
font-size: 38px;
    }
@media screen and (max-width: 450px){
font-size: 35px;
    }
@media screen and (max-width: 380px){
font-size: 30px;
    }
`
const Hello = styled.div`
font-size: 40px;
font-weight: 600;
@media screen and (max-width: 1200px){
font-size: 30px;
}
@media screen and (max-width: 930px){
    font-size: 23px;
    }
@media screen and (max-width: 380px){
    font-size: 20px;
    }
`
const TextCont = styled.div`
display:flex;
flex-direction: column;
margin-bottom: 70px;
`
const DetailsCont = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
// background: green;
@media screen and (max-width: 1360px){
    margin-left: 40px;
}
@media screen and (max-width: 1220px){
    // background: red;
    margin-left: 20px;
}
@media screen and (max-width: 800px){
  margin-left: 0px;
  align-items: center;
  text-align: center;
}

`
const ImageCont = styled.div`

background: radial-gradient(48.42% 48.42% at 43% 40%, #7996FC 0%, rgba(121, 150, 252, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
filter: drop-shadow(0px 0px 15px rgba(121, 150, 252, 0.15));
border:none;
@media screen and (max-width: 1440px){
    margin-right: 60px;
}
@media screen and (max-width: 810px){
 margin-right: 50px;
}
@media screen and (max-width: 800px){
    margin-right: 0px;
    margin-bottom: 60px;
    // background: green;
}
@media screen and (max-width: 600px){
//    width: 80%;
//    background: green;
width: 100%auto;
}

`
const Wrapper = styled.div`
width: 70%;
display:flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 1100px){
   width: 85%;
}


@media screen and (max-width: 800px){
    flex-wrap: wrap;
    justify-content: center;
}



`
const Container = styled.div`
width: 100%;
display:flex;
height: auto;
justify-content: center;
margin-top: 100px;
margin-bottom: 100px;
`
