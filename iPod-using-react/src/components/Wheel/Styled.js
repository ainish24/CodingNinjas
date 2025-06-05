import styled from "styled-components"

export const WheelButton=styled.div`
    border-radius:50%;
    width:12em;
    height:12em;
    background-color:black;
    margin:0px auto 2em;
    position:relative;
    cursor:pointer;
`
export const MenuSpan=styled.button`
    cursor:pointer;
    user-select:none;
    background-color:black;
    border:none;
    position:absolute;
    color:#E8E5DA;
    top:10%;
    left:37%;
`
export const PlayPause=styled.button`
    cursor:pointer;
    user-select:none;
    background-color:black;
    border:none;
    position:absolute;
    color:#E8E5DA;
    bottom:10%;
    left:43%;
`
export const Previous=styled.button`
    cursor:pointer;
    user-select:none;
    background-color:black;
    border:none;
    position:absolute;
    color:#E8E5DA;
    bottom:45%;
    left:10%;
    font-size:1.2em;
`
export const Next=styled.button`
    cursor:pointer;
    user-select:none;
    background-color:black;
    border:none;
    position:absolute;
    color:#E8E5DA;
    bottom:45%;
    right:10%;
    font-size:1.2em;
`
export const CenterButton=styled.div`
    width:4em;
    height:4em;
    background-color:#E8E5DA;
    position:absolute;
    bottom:32%;
    right:33%;
    border: none;
    border-radius:50%;
`