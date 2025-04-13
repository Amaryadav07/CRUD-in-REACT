

import { Outlet } from "react-router-dom";
import Footer from "../component/footer";


const Layout=()=>{
    return(
        <>
      
    
        <Outlet />
        <Footer />
      
        </>
    )
}
export default Layout;