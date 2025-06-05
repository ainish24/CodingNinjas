import { useEffect, useRef } from "react";

export const useScrollLogic = (wheelRef, isDragging, setIsDragging, handleScroll) => {
    // Using useRef instead of useState to avoid unnecessary re-renders
    const prevAngle = useRef(null);
    // const prevTime = useRef(0);
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            // getBoundingClientRect gives various dimensions of an element
            const rect = wheelRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;

            //using the below formula we get angle of deviation from center in degrees
            let angle = Math.atan2(dy, dx) * (180 / Math.PI);
            // Ensuring smooth transitions near 0° and 360° to prevent unintended jumps
            if (angle < 0) angle += 360;
            //Below I have written code for 3 differernt types of scrolling. 
            //1. Quadrant Based Scrolling
            //2. Previous Angle Based Scrolling
            //3. Method taught in class


            // Quadrant-based scrolling
            if (
                (angle >= 0 && angle <= 90 && prevAngle.current >= 270 && prevAngle.current <= 360) ||
                (angle >= 90 && angle <= 180 && prevAngle.current >= 0 && prevAngle.current <= 90) ||
                (angle >= 180 && angle <= 270 && prevAngle.current >= 90 && prevAngle.current <= 180) ||
                (angle >= 270 && angle <= 360 && prevAngle.current >= 180 && prevAngle.current <= 270)
            ) {
                handleScroll("down");
            } else if (
                (angle >= 270 && angle <= 360 && prevAngle.current >= 0 && prevAngle.current <= 90) ||
                (angle >= 180 && angle <= 270 && prevAngle.current >= 270 && prevAngle.current <= 360) ||
                (angle >= 90 && angle <= 180 && prevAngle.current >= 180 && prevAngle.current <= 270) ||
                (angle >= 0 && angle <= 90 && prevAngle.current >= 90 && prevAngle.current <= 180)
            ) {
                handleScroll("up");
            }

            prevAngle.current = angle;


            //****Measuring changes using angles


            // if (prevAngle.current !== null) {
            //   //calculating deviation from previous angle to detect whether we need to scroll up or down with a sensitivity of 5 degrees
            //   const delta = angle - prevAngle.current;
            //   if (Math.abs(delta) > 300) return;
            //   if (delta > 5) {
            //     handleScroll("down");
            //   } else if (delta < -5) {
            //     handleScroll("up");
            //   }
            // }
            // //To add a gap of 50ms between the logic re-run
            // let thisTime = Date.now();
            // let gap = thisTime - prevTime.current;
            // if (gap > 400) {
            //   //to prevent jumps and implement smoother flow, we update the prevangle in the following manner
            // //   setPrevAngle((prev) =>
            // //     prev !== null ? prev * 0.75 + angle * 0.25 : angle
            // //   );
            // prevAngle.current= prevAngle.current!==null ? prevAngle.current*0.75 + angle*0.25 : angle
            //   console.log(angle, prevAngle.current);
            // }
            // prevTime.current = thisTime;


        };

        const stopDragging = () => {
            setIsDragging(false);
            prevAngle.current = null;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", stopDragging);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", stopDragging);
        };
    }, [isDragging, handleScroll]);



    //implementing scroll by using the technique taught in class

    // let prevbtn = useRef("menu-btn"),
    //   currbtn = useRef("menu-btn");
    // useEffect(() => {
    //   const ipodbtns = document.getElementsByClassName("ipodBtns");
    //   const allbtns = ["menu-btn", "prev-btn", "next-btn", "pp-btn"];

    //   const handleHover = (e) => {
    //     if (allbtns.includes(e.target.id)) {
    //       currbtn.current = e.target.id;
    //     }

    //     if (
    //       (prevbtn.current === "menu-btn" && currbtn.current === "next-btn") ||
    //       (prevbtn.current === "next-btn" && currbtn.current === "pp-btn") ||
    //       (prevbtn.current === "pp-btn" && currbtn.current === "prev-btn") ||
    //       (prevbtn.current === "prev-btn" && currbtn.current === "menu-btn")
    //     ) {
    //       handleScroll("down");
    //     }
    //     if (
    //       (prevbtn.current === "menu-btn" && currbtn.current === "prev-btn") ||
    //       (prevbtn.current === "prev-btn" && currbtn.current === "pp-btn") ||
    //       (prevbtn.current === "pp-btn" && currbtn.current === "next-btn") ||
    //       (prevbtn.current === "next-btn" && currbtn.current === "menu-btn")
    //     ) {
    //       handleScroll("up");
    //     }

    //     prevbtn.current = currbtn.current;
    //   };

    //   for (let btn of ipodbtns) {
    //     btn.addEventListener("mousemove", handleHover);
    //   }

    //   return () => {
    //     for (let btn of ipodbtns) {
    //       btn.removeEventListener("mousemove", handleHover);
    //     }
    //   };
    // }, []);


};

export const SelectMenu = function (
    highlightedOption, // Current highlighted menu option
    changeSelected,    // Function to update the selected option
    changeIsSelected,  // Function to toggle selection state
    showMusicMenu,     // Boolean indicating whether the music menu is displayed
    changeMusicMenu,   // Function to toggle the music menu
    setShowMenu,       // Function to control main menu visibility
    showMenu           // Boolean indicating whether the main menu is visible
) {
    changeIsSelected((prev) => {
        const newSelectedState = !prev; // Toggle selection state

        // If selecting for the first time and the menu is open
        if (newSelectedState && !showMenu) {
            changeSelected(highlightedOption); // Assign selected option

            // Special case: If "Music" is selected, switch to the Music menu
            if (highlightedOption === "Music") {
                setShowMenu(false); // Hide main menu
                changeMusicMenu(!showMusicMenu); // Toggle Music menu
            }
        }
        return newSelectedState;
    });
};


export const updateShowMenu = (
    setShowMenu,       // Function to toggle menu visibility
    showMenu,          // Boolean indicating whether the menu is currently visible
    selectedOption,    // Currently selected menu option
    changeSelected,    // Function to reset selected option
    changeMusicMenu,   // Function to toggle music menu visibility
    changeIsSelected   // Function to update selection state
)=> {
    if (!selectedOption) {
        setShowMenu(!showMenu); // Toggle main menu visibility if no option is selected
    }

    if (selectedOption) {
        changeMusicMenu(true);  // Ensure the Music menu is visible
        changeSelected("");      // Reset selected option
        changeIsSelected((prev) => !prev); // Toggle selection state
    }
};
