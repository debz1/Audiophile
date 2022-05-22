import styled from 'styled-components'
import { Button, MainHeading } from '../../globalStyles'

export const ZX7Section=styled.section`
height: 75vh;
width:100%;
background-position: center;
background-size: cover;
padding-top:clamp(70px,5vh,220px);
overflow: hidden;
/* box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2); */
`

export const Zx7Image=styled.img`
width: 75%;
position: absolute;
margin-left:240px;
z-index: -3;
border-radius:10px;
`
export const Zx7Heading=styled(MainHeading)`
color:black;
z-index:4;
text-align: left;
margin-top:100px;
font-size: clamp(1.3rem,13vw,3.1rem);
`
export const Zx7Button = styled(Button)`
/* margin-left:650px; */
background-color:  transparent;
border-color: black;
color:black;
&:hover{
    color:#fff;
    background-color: black;
}
`;