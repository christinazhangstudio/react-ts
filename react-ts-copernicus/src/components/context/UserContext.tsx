import React, { useState, createContext } from 'react'

export type AuthUser = {
    name: string
    email: string
}

type UserContextType = {
    // simply copied over from what useState returns
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

//export const UserContext = createContext(null)
// ...in the future, this could be UserContextType, 
// so add as param type
//export const UserContext = createContext<UserContextType | null>(null)
// ...using TypeAssertion, which means no need for null checks
export const UserContext = createContext({} as UserContextType)


export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null) // user is logged out initially
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}