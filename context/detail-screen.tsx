import { createContext, useState } from 'react'

export type DetailScreenContextType = {
  imageDetailsList: any
  setImageDetailsList: any
}

// @ts-ignore
export const DetailScreenContext = createContext<DetailScreenContextType>()

export const DetailScreenProvider = ({ children }) => {
  const [imageDetailsList, setImageDetailsList] = useState([])

  return (
    <DetailScreenContext.Provider
      value={{
        imageDetailsList,
        setImageDetailsList,
      }}
    >
      {children}
    </DetailScreenContext.Provider>
  )
}
