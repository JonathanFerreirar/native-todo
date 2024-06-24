import React from 'react'

type AuthProviderProps = React.PropsWithChildren

type AuthContextProps = {
  isAuth: boolean
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps,
)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = React.useState(true)

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return React.useContext(AuthContext)
}
