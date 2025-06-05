import { useRef, useState } from "react";
import {
  WheelButton,
  MenuSpan,
  Previous,
  Next,
  PlayPause,
  CenterButton,
} from "./Styled";
import { useScrollLogic, SelectMenu, updateShowMenu } from "./Logic";

const Wheel = ({
  showMenu,
  setShowMenu,
  handleScroll,
  highlightedOption,
  selectedOption,
  changeSelected,
  isSelected,
  changeIsSelected,
  showMusicMenu,
  changeMusicMenu,
}) => {
  // Ref to track the wheel element for calculations related to scrolling
  const wheelRef = useRef(null);
  
  // State to track whether the user is currently dragging the wheel
  const [isDragging, setIsDragging] = useState(false);

  // Function handling scroll logic
  useScrollLogic(wheelRef, isDragging, setIsDragging, handleScroll);

  return (
    <WheelButton ref={wheelRef} onMouseDown={() => setIsDragging(true)}>
      <MenuSpan
        // Handles menu visibility toggle when the "MENU" button is clicked
        onClick={() => updateShowMenu(setShowMenu, showMenu, selectedOption, changeSelected, changeMusicMenu, changeIsSelected)}
        className="ipodBtns"
        id="menu-btn"
      >
        MENU
      </MenuSpan>
      <Previous className="ipodBtns" id="prev-btn">
        ⏮
      </Previous>
      <Next className="ipodBtns" id="next-btn">
        ⏭
      </Next>
      <PlayPause className="ipodBtns" id="pp-btn">
        ▶︎‖
      </PlayPause>

      <CenterButton
        // Ensures only the intended click event is processed, avoiding unwanted bubbling
        onClick={(event) => {
          event.stopPropagation();
          SelectMenu(
            highlightedOption,
            changeSelected,
            changeIsSelected,
            showMusicMenu,
            changeMusicMenu,
            setShowMenu,
            showMenu
          );
        }}
      ></CenterButton>
    </WheelButton>
  );
};

export default Wheel;
