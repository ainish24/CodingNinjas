import { useEffect, useRef, useState } from "react";
import {
  WheelButton,
  MenuSpan,
  Previous,
  Next,
  PlayPause,
  CenterButton,
} from "./Styled";
const Wheel = ({ showMenu, setShowMenu, handleScroll }) => {
  //implementing scroll by determining angle of the rotation

  {
    /* const wheelRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [prevAngle, setPrevAngle] = useState(null);
  useEffect(() => {
    //we have created a function named handleMouseMove to capture the movement of mouse in degree angle
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      //To add a gap of 50ms between the logic re-run
      //getBoundingClientRect gives various dimensions of the element referenced in order to perform calculations
      const rect = wheelRef.current.getBoundingClientRect();
      //calculating center of the wheel component with respect to the DOM
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      //calculating the deviation of the cursor with respect to center in order to implement the scroll functionality
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      //using the Math.atan2 we get the angle of deviation in radians and then multiplying it with 180/pi gives it in degrees
      let angle = Math.atan2(dy, dx) * (180 / Math.PI);
      if (angle < 0) {
        angle += 360;
      }
      if (prevAngle !== null) {
        //calculating deviation from previous angle to detect whether we need to scroll up or down with a sensitivity of 2 degrees
        const delta = angle - prevAngle;
        if (Math.abs(delta) > 300) return;
        if (delta > 2) {
          handleScroll("down");
        } else if (delta < -2) {
          handleScroll("up");
        }
      }
      //to prevent jumps and implement smoother flow, we update the prevangle in the following manner
      setPrevAngle((prev) =>
        prev !== null ? (prev * 0.7 + angle * 0.3) : angle
      );
      console.log(angle, prevAngle);
    };
    const stopDragging = () => {
      setIsDragging(false);
      setPrevAngle(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, [isDragging, prevAngle, handleScroll]); */
  }

  //implementing scroll by using the technique taught in class

  let prevbtn = useRef("menu-btn"),
    currbtn = useRef("menu-btn");
  useEffect(() => {
    const ipodbtns = document.getElementsByClassName("ipodBtns");
    const allbtns = ["menu-btn", "prev-btn", "next-btn", "pp-btn"];

    const handleHover = (e) => {
      if (allbtns.includes(e.target.id)) {
        currbtn.current = e.target.id;
      }

      if (
        (prevbtn.current === "menu-btn" && currbtn.current === "next-btn") ||
        (prevbtn.current === "next-btn" && currbtn.current === "pp-btn") ||
        (prevbtn.current === "pp-btn" && currbtn.current === "prev-btn") ||
        (prevbtn.current === "prev-btn" && currbtn.current === "menu-btn")
      ) {
        handleScroll("down");
      }
      if (
        (prevbtn.current === "menu-btn" && currbtn.current === "prev-btn") ||
        (prevbtn.current === "prev-btn" && currbtn.current === "pp-btn") ||
        (prevbtn.current === "pp-btn" && currbtn.current === "next-btn") ||
        (prevbtn.current === "next-btn" && currbtn.current === "menu-btn")
      ) {
        handleScroll("up");
      }

      prevbtn.current = currbtn.current;
    };

    for (let btn of ipodbtns) {
      btn.addEventListener("mouseover", handleHover);
    }

    return () => {
      for (let btn of ipodbtns) {
        btn.removeEventListener("mouseover", handleHover);
      }
    };
  }, []);

  return (
    <>
      {/* <WheelButton ref={wheelRef} onMouseDown={() => setIsDragging(true)}> */}
      <WheelButton>
        <MenuSpan
          onClick={() => setShowMenu(!showMenu)}
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
        <CenterButton></CenterButton>
      </WheelButton>
    </>
  );
};

export default Wheel;
