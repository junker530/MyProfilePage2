import React, {useState} from 'react'
import styled from 'styled-components'
import Development from './Development';
import ProductDesign from './ProductDesign';
import WebDesign from './WebDesign';

const data = [
  "Application",
  "AI",
  "Teleoperation",
  "Telepresence",
  "Web Design",
];

const url = [
  "https://www.google.co.jp/",
  "https://www.google.co.jp/",
  "https://www.interaction-ipsj.org/proceedings/2023/data/pdf/2P-67.pdf",
  "https://x.gd/66ye8",
  "https://www.google.co.jp/",
]

const color =[
  "#4158D0",
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const List = styled.ul`
  list-style: none;
  display-flex: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 10px;
`
const ListItem = styled.li`
  font-size: 95px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, ${(props)=>("#"+(0x4158C0+50*props.index**props.index).toString(16).replace(/^0x/, ''))},${(props)=>("#"+(0xC850C0+50*props.index**props.index).toString(16).replace(/^0x/, ''))} 30%, ${(props)=>("#"+(0xFFCC70+50*props.index**props.index).toString(16).replace(/^0x/, ''))});
    /* background: -webkit-linear-gradient(0deg, #4158D0, #C850C0 30%, #FFCC70); */
    -webkit-background-clip: text;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    &::after{
      animation: moveText 0.25s linear both;

      @keyframes moveText{
        to{
          width: 100%;

        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`

const Works = () => {
  const [work,setWork] = useState("WebDeign")
  return (
    <Section>
      <Container>
        <Left>
          <List>
              {data.map((item,index)=>(
                <ListItem key={item} text={item} index={index} onClick={(event)=>window.location.href=url[index]}>{item}</ListItem>
              ))}
          </List>
        </Left>
        <Right>
            {work === "Web Design" ? (<WebDesign/>) : work === "Development" ? (<Development/>) : (<ProductDesign/>)}
        </Right>
      </Container>
    </Section>
  )
}

export default Works
