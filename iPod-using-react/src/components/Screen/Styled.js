import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MainScreen = styled.div`
  width: 16em;
  height: 16em;
  margin: 1.5em auto;
  position: relative;
`;
export const BackgroundImage = styled.img`
  width: 16em;
  height: 14em;
  box-sizing: border-box;
  border: 7px solid black;
  border-radius: 15px;
`;
export const Menu = styled.div`
  position: absolute;
  top: 0;
  box-sizing: border-box;
  border-top:7px solid black;
  border-left:7px solid black;
  border-bottom:7px solid black;
  border-radius:15px 0 0 15px;
  background-color: #e8e5da;
  width: 8.3em;
  height: 14em;
`;

export const StyledHeading= styled.h3`
    margin-left:0.6em;
`

export const MenuList=styled.ul`
    list-style-type:none;
    padding:1em 0em 0em 1em;
`
export const StyledLi=styled.li`
    margin-bottom:0.3em;
    width:5.5em;
    padding-left:0.5em;
    padding-right:0.5em;
`
export const StyledIcon=styled(FontAwesomeIcon)`
    font-size:0.6em;
    margin-top:0.4em;
`

export const StyledSubMenu= styled.div`
  width: 16em;
  height: 14em;
  margin: 1.5em 2em;
    box-sizing: border-box;
  border: 7px solid black;
  border-radius: 15px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  background-color: #e8e5da;
`