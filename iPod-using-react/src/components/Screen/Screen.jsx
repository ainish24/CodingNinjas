import { useState } from "react";
import "./Screen.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Music from "./Sub-Menu/Music.jsx";
import Games from "./Sub-Menu/Games.jsx";
import Settings from "./Sub-Menu/Settings.jsx";
import CoverFlow from "./Sub-Menu/CoverFlow.jsx";
import {
  MainScreen,
  Menu,
  StyledHeading,
  MenuList,
  StyledLi,
  BackgroundImage,
  StyledIcon,
} from "./Styled.js";

const Screen = ({
  showMenu,
  Options,
  selectedOption,
  changeSelected,
  highlightedOption,
  changeHighlighted,
  MusicMenuOptions,
  highlightedMusicOption,
  changeHighlightedMusic,
}) => {
  const imgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbSfFRPaTZBQM-V7M7oXMcKgrMOdupKReG1FpZzaM2XHkDgZz3reY1qQ6laNYd4EAm6I&usqp=CAU";
  return (
    <>
      <MainScreen>
        {!showMenu && (
          <Menu>
            <StyledHeading>iPod.js</StyledHeading>
            <MenuList>
              {Options.map((option, index) => {
                return (
                  <StyledLi
                    className={
                      option.text == highlightedOption ? "selected" : ""
                    }
                    key={index}
                  >
                    {option.text}
                    {option.text == highlightedOption && (
                      <StyledIcon icon={faChevronRight} />
                    )}
                  </StyledLi>
                );
              })}
            </MenuList>
          </Menu>
        )}
        <BackgroundImage src={imgUrl} alt="background" />
      </MainScreen>
      {selectedOption == "Cover Flow" && <CoverFlow />}
      {selectedOption == "Music" && (
        <Music
          MusicMenuOptions={MusicMenuOptions}
          highlightedMusicOption={highlightedMusicOption}
          changeHighlightedMusic={changeHighlightedMusic}
        />
      )}
      {selectedOption == "Settings" && <Settings />}
      {selectedOption == "Games" && <Games />}
    </>
  );
};

export default Screen;
