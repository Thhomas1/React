



import Home from '../Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import Registro from '../Pages/Registro';
import Login from '../Pages/Login';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import Detalle from '../Pages/Detalle';
import NotFound from '../Pages/NotFound';
import Container from 'react-bootstrap/Container'
import ProductosAlta from '../Pages/ABMProductos/ProductosAlta';
import ProductosModificar from '../Pages/ABMProductos/ProductosModificar';
import AuthContext from '../Context/AuthContext';
import Soporte from '../Pages/ABMProductos/Soporte'
import Compra from '../Pages/ABMProductos/Compra'
function Public() {
  return (
    
      <Router>
        <Menu />
        <Container>
          <AuthContext.Consumer>
            {
              context=>
              <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/home" element={<Navigate to="/"/>} />
              <Route path="/alta" element={<Registro />}/>
              <Route path="/ingresar" element={<Login />}/>
              <Route path="/productos/alta" element={<ProductosAlta />}/>
              {
                context.userLogin &&
                <Route path="/productos/modificar/:id" element={<ProductosModificar />}/>
              }
             
              <Route path="/producto/:id" element={<Detalle />}/>
              <Route path="/productos/Soporte/:id" element={<Soporte />}/>
              <Route path="/productos/Compra/:id" element={<Compra />}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
            }
          </AuthContext.Consumer>
        </Container>
        <Footer />
      </Router>

  );
}

export default Public;