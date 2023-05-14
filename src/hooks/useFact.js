import { useState, useEffect } from 'react'
import { getFact } from '../services/facts'

export function useFact () {
  const [fact, setFact] = useState()

  const getFactandUpdateState = () => {
    getFact().then(setFact)
  }
  // hook para traer la cita al cargar la pagina
  useEffect(() => {
    getFactandUpdateState()
  }, [])

  return { fact, getFactandUpdateState }
}
