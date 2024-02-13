import { useEffect, useState } from "react"
import { Header } from "./Components/Header"
import { api } from "./services/api"

function App() {

  const [pokeList, setPokeList] = useState([])
  const [pokeDatabase, setPokeDatabase] = useState([])
  useEffect(() => {

    async function loadPokemonData(){

      try {
        
        const response = await api.get('pokemon', {

          params:{
            limit: 30,
            offset: 0,
          }
        })
        console.log(response)

        const database = await api.get('pokemon', {
          params: {
            limit: 10000,
            offset: 0,
          }
        })
        setPokeList(response.data.results)
        setPokeDatabase(database.data.results)
      } catch (error) {

        console.log(error)
      
      }

    }
    loadPokemonData()
    console.log(pokeList)
    console.log(pokeDatabase)
  }, [])

  return (
    <>
      <Header/>
      {pokeList.map((pokemon) => {

        return(
          <li key={pokemon.name}>
            <p>{pokemon.name}</p>

          </li>
        )

      })}
    </>
  )
}

export default App
