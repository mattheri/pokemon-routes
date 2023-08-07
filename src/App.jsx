import {Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import Pokemons from './pokemons/components/Pokemons'
import Pokemon from './pokemons/components/Pokemon'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path='/pokemon/:name' element={<Pokemon />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
