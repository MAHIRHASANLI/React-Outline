import { Outlet } from "react-router-dom"
import Navbar from "../../components/Admin/Navbar"


const AdminRoot = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   </>
  )
}

export default AdminRoot