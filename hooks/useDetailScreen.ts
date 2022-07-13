import { useContext } from 'react'
import { DetailScreenContext } from '../context/detail-screen'

export const useDetailScreen = () => useContext(DetailScreenContext)
