import './App.css'
import { useFact } from './hooks/useFact'
import { useCatImage } from './hooks/useCatImage'
// const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const { fact, getFactandUpdateState } = useFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    getFactandUpdateState()
  }

  return (
    <main>
      <h1>Cat app</h1>
      <button className='button' onClick={handleClick}>Get new cat </button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='imagen extraida de la API' />}

    </main>
  )
}
