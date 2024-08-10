import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from 'react-router-dom'

export default function AuthGuard() {
  const { isAuthenticated } = useAuthContext()
  console.log('Is it authenticated?')
  console.log(isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to='/login' />
  } else {
    return <Outlet />
  }

}