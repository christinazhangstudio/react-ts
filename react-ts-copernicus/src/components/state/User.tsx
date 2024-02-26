import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    
    // this is type assertion, where the compiler is effectively tricked into
    // because as a developer, you have the knowledge that
    // AuthUser will be set very soon after the component mounts and will never be null.
    // the ? opt chaining below is not needed as such.
    //const [user, setUser] = useState<AuthUser>({} as AuthUser)
    
    const handleLogin = () => {
        // if use `const [user, setUser] = useState(null)`
        // this will cause ts error:
        //Argument of type '{ name: string; email: string; }' 
        // is not assignable to parameter of type 'SetStateAction<null>'.
        // must specify the type use <AuthUser | null>
        setUser({
            name: 'Copernicus',
            email: 'copernicus@spaceship.co'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div> 
            <div>User email is {user?.email}</div>
        </div>
    )
}

