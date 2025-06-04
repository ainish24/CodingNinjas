import { FcMusic } from "react-icons/fc";
import { StyledSubMenu } from "../Styled";
import '../Screen.css'

const Music= ()=>{
    return(
        <StyledSubMenu>
            <FcMusic className="SubMenuIcon"/>
            <h2>Music</h2>
        </StyledSubMenu>
    )
}

export default Music