import { createContext } from 'react'
import { theme } from './theme'

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)
// but what if you need to set the context at a later time?

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}