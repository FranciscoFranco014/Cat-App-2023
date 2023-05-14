import { useEffect, useState } from 'react'
import { getImageUrlFromFact } from '../services/img'

const CAT_PREFIX_ENDPOINT = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // hook para traer la img cada vez que existe una cita nueva
  useEffect(() => {
    if (!fact) return
    getImageUrlFromFact(fact)
      .then(url => setImageUrl(url))
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_ENDPOINT}${imageUrl}` }
}
