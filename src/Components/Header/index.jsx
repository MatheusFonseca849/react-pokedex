import { IoHomeSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { StyledHeader } from "./header.js";
import { FaStar } from "react-icons/fa";
import { TbPokeball } from "react-icons/tb";


export const Header = ({pokeList, setPokeList, pokeDatabase, setPokeDatabase}) => {

    function searchPokemon(string){

        setPokeList(pokeDatabase.filter((pokemon) => {pokemon.name.includes(string)}))
        console.log(pokeList)
    }

    return (

        <StyledHeader>
            <div className="imgContainer">
            <img src="./src/assets/pokeapi.png" alt="pokeAPI" />
            </div>

            
            <form className="searchForm">
    
                <input type="text" placeholder="Search Pokemon" onChange={(e) => searchPokemon(e.target.value)} />
                <button>
                    <IoSearch size={24} color="grey"/>
                </button>

            </form>
            

            <div className="navButtonContainer">
                <button>
                    <IoHomeSharp className="buttonIcon"/>
                </button>

                <button>
                    <FaStar className="buttonIcon"/>
                </button>

                <button>
                    <TbPokeball className="buttonIcon"/>
                </button>

            </div>



        </StyledHeader>

    )


}