import Screen from "./Screen/Screen";
import Wheel from "./Wheel/Wheel.jsx";
import styled from "styled-components";
import { useState, useRef, useMemo } from "react";

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

// List of main menu options displayed on the iPod screen
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
// Submenu options available within the Music section
const MusicMenuOptions = [
  {
    text: "All Songs",
  },
  {
    text: "Artists",
  },
  {
    text: "Albums",
  },
];

const Ipod = () => {

  // Boolean to control visibility of the main menu
  const [showMenu, setShowMenu] = useState(true);
  // State tracking the selected menu option
  const [selectedOption, changeSelected] = useState("");
  // State tracking the currently highlighted option in the main menu
  const [highlightedOption, changeHighlighted] = useState("Cover Flow");
  // State tracking the currently highlighted option in the music menu
  const [highlightedMusicOption, changeHighlightedMusic] = useState("All Songs");
  // Boolean to determine if an option has been selected
  const [isSelected, changeIsSelected] = useState(false);
  // Boolean controlling whether the music menu is displayed
  const [showMusicMenu, changeMusicMenu] = useState(true);

  const handleScroll = (direction) => {
    if (showMusicMenu) {
      changeHighlighted((prev) => {
        const currentIndex = Options.findIndex((opt) => opt.text === prev);
        if (direction === "down" && currentIndex < Options.length - 1) {
          return Options[currentIndex + 1].text;
        } else if (direction === "up" && currentIndex > 0) {
          return Options[currentIndex - 1].text;
        }
        return prev;
      });
    } else {
      changeHighlightedMusic((prev) => {
        const currentIndex = MusicMenuOptions.findIndex(
          (option) => option.text === prev
        );
        if (direction === "down" && currentIndex < MusicMenuOptions.length - 1) {
          return MusicMenuOptions[currentIndex + 1].text;
        } else if (direction === "up" && currentIndex > 0) {
          return MusicMenuOptions[currentIndex - 1].text;
        }
        return prev;
      });
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
        MusicMenuOptions={MusicMenuOptions}
        highlightedMusicOption={highlightedMusicOption}
        changeHighlightedMusic={changeHighlightedMusic}
      />
      <Wheel
        showMenu={showMenu}
        highlightedOption={highlightedOption}
        setShowMenu={setShowMenu}
        handleScroll={handleScroll}
        selectedOption={selectedOption}
        changeSelected={changeSelected}
        isSelected={isSelected}
        changeIsSelected={changeIsSelected}
        showMusicMenu={showMusicMenu}
        changeMusicMenu={changeMusicMenu}
      />
    </ContainerDiv>
  );
};

export default Ipod;
