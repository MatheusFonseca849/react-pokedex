import { useEffect } from "react"
import { Header } from "./Components/Header"
import { api } from "./services/api"

function App() {

  useEffect(() => {

    async function loadPokemonData(){

      try {
        
        const response = await api.get('pokemon', {
          limit: 30,
          offset: 0
        })
        console.log(response)
      } catch (error) {
        console.log(error)
      }

    }
    loadPokemonData()
  }, [])

  return (
    <>
      <Header/>
    </>
  )
}

export default App
