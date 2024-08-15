import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from 'react-router-dom'

export default function GuestGuard() {
  const { isAuthenticated } = useAuthContext()


  if (isAuthenticated) {
    return <Navigate to='/' />
  } else {
    return <Outlet />
  }

}