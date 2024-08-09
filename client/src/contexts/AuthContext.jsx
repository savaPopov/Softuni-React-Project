import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext()


export function AuthContextProvider(props) {
  const [authState, setAuthState] = usePersistedState('auth', {})

  const changeAuthState = (state) => {
    // localStorage.setItem('accessToken', state.accessToken)
    setAuthState(state)
  }

  const localLogout = async () => {
    setAuthState(null)
    // localStorage.removeItem('auth')
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