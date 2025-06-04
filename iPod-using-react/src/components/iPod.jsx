import Screen from "./Screen/Screen";
import Wheel from "./Wheel/Wheel.jsx";
import styled from "styled-components";
import { useState } from "react";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  height: 30em;
  width: 20em;
  margin: 5% auto;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  background-color: #e8e5da;
`;

const Options = [
  {
    text: "Cover Flow",
  },
  {
    text: "Music",
  },
  {
    text: "Games",
  },
  {
    text: "Settings",
  },
];

const Ipod = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [selectedOption, changeSelected] = useState("");
  const [highlightedOption, changeHighlighted] = useState("Cover Flow");

  const handleScroll = (direction) => {
    console.log(direction)
    const currentIndex = Options.findIndex((opt) => opt.text == highlightedOption);
    if (direction === "down" && currentIndex < Options.length - 1) {
      changeHighlighted(Options[currentIndex + 1].text);
    } else if (direction === "up" && currentIndex > 0) {
      changeHighlighted(Options[currentIndex - 1].text);
    }
  };
  
  return (
    <ContainerDiv>
      <Screen
        showMenu={showMenu}
        Options={Options}
        selectedOption={selectedOption}
        changeSelected={changeSelected}
        highlightedOption={highlightedOption}
        changeHighlighted={changeHighlighted}
      />
      <Wheel showMenu={showMenu} setShowMenu={setShowMenu} handleScroll={handleScroll}/>
    </ContainerDiv>
  );
};

export default Ipod;
