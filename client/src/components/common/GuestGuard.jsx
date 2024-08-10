import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from 'react-router-dom'

export default function GuestGuard() {
  const { isAuthenticated } = useAuthContext()
  console.log('GUest Guard')
  console.log(isAuthenticated)

  if (isAuthenticated) {
    return <Navigate to='/' />
  } else {
    return <Outlet />
  }

}