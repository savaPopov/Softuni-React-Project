import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext()


export function AuthContextProvider(props) {
  const [authState, setAuthState] = usePersistedState('auth', {})

  const changeAuthState = (state) => {
    setAuthState(state)
  }

  const localLogout = async () => {
    setAuthState(null)
  }

  const contextData = {
    userId: authState?._id,
    email: authState?.email,
    accessToken: authState?.accessToken,
    isAuthenticated: !!authState?.email,
    changeAuthState,
    localLogout
  }

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const authData = useContext(AuthContext)
  return authData
}