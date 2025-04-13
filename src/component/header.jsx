
import { BrowserRouter,Routes,Route ,Link} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header=()=>{
    return(
        <>
        
        <BrowserRouter>
       
       <Navbar bg="primary" data-bs-theme="dark" expand="lg">
         <Container>
           <Navbar.Brand as={Link} to="/">REACT</Navbar.Brand>     
           <Nav className="me-auto">
             <Nav.Link as={Link} to="/home">Home</Nav.Link>
             <Nav.Link as={Link} to="/insert">Insert</Nav.Link>
             <Nav.Link as={Link} to="/display">Display</Nav.Link>
           </Nav>
         </Container>
       </Navbar>

       
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="home" element={<Home />} />
           <Route path="insert" element={<Insert />} />
           <Route path="display" element={<Display />} />
         </Route>
       </Routes>
     </BrowserRouter>
        
        
        
        </>
    )
}
export default Header;