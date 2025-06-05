import { useRef } from "react";
import { FcMusic } from "react-icons/fc";
import { StyledSubMenu } from "../Styled";
import MusicSubMenu from "./Music-Sub-Menu/MusicSubMenu.jsx";
import "../Screen.css";
import { StyledIcon } from "../Styled";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const styles = {
  Header: {
    display: "flex",
    flexDirection: "row",
    gap: "0.1em",
    margin: "0 auto",
  },
  SubMenuIcon: {
    marginTop: "0.65em",
  },
  MainMenu: {
    flexDirection: "column",
    gap: 0,
  },
  ListStyle: {
    marginTop: 0,
    listStyleType: "none",
    padding: "0",
    paddingLeft: "0.2em",
    fontFamily: "Courier New, Courier, monospace",
  },
  LiStyle: {
    marginBottom: "0.1em",
    width: "7em",
    paddingLeft: "0.5em",
  },
  HighlightedLi: {
    width: "7em",
    paddingLeft: "0.5em",
    marginBottom: "0.1em",
    backgroundColor: "#CCCCCC",
    display: "flex",
    justifyContent: "space-between",
  },
  Icon:{
    marginRight:"0.8em",
  }
};

const Music = ({
  MusicMenuOptions,
  highlightedMusicOption,
  changeHighlightedMusic,
}) => {
  return (
    <StyledSubMenu style={styles.MainMenu}>
      <div style={styles.Header}>
        <FcMusic className="SubMenuIcon" style={styles.SubMenuIcon} />
        <h2>Music</h2>
      </div>
      <ul style={styles.ListStyle}>
        {MusicMenuOptions.map((options, key) => {
          return (
            <li
              style={
                highlightedMusicOption == options.text
                  ? styles.HighlightedLi
                  : styles.LiStyle
              }
              key={key}
            >
              {options.text} {options.text==highlightedMusicOption && (
                      <StyledIcon icon={faChevronRight} style={styles.Icon} />
                    )}
            </li>
          );
        })}
      </ul>
    </StyledSubMenu>
    //This component will be used for future updates
    // <MusicSubMenu></MusicSubMenu>
  );
};

export default Music;
