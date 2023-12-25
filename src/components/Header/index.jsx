import { FaSearch } from "react-icons/fa";
import { StyledHeader } from "./header.js"
const Header = () => {

    return(

        <StyledHeader>
            <div className="firstColumn">
                <img src="./src/assets/logo.png" alt="Pokedex" />
            </div>

            <div className="secondColumn">
                <form>
                    <input type="text" placeholder="Search..." />
                    <button><FaSearch/></button>
                </form>
            </div>
        </StyledHeader>

    )

}
export default Header