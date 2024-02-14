import { PokeCard } from "../PokeCard";
import { StyledPokemonList } from "./pokeList";

export const PokemonList = ({pokeList}) => {
    
return(

    <StyledPokemonList>

        <h1>Pokemon List:</h1>

        <ul>

            {pokeList.map((pokemon) => {

                return(
                    <PokeCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
                )

            })}

        </ul>

    </StyledPokemonList>

)

}