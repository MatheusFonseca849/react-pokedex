import { StyledPokemonCard } from "./pokeCard"

export const PokeCard = ({ url, name }) => {

    const pokeId = url.slice(34, -1)
    const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`

    return (

        <StyledPokemonCard id={pokeId}>

            <img src={pokeImg} alt={name} />

            <div className="pokeInfo">

            <span>{pokeId}</span>
            <h2>{name}</h2>
            
            </div>

        </StyledPokemonCard>

    )

}