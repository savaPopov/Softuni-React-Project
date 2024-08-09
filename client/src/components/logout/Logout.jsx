import { Navigate } from "react-router-dom"
import { useLogout } from "../../hooks/useAuth"
import { useEffect } from "react"


export default function Logout() {
  const logout = useLogout()
  // console.log(logout)
  useEffect(() => {
   
      logout()
  
    
  }, [])



  return <Navigate to='/' />
}