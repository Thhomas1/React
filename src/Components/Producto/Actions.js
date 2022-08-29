import {Link} from "react-router-dom"
import {Button} from 'react-bootstrap'
import './Producto.css'

function Actions(props) {
  const {datos,userLogin} = props
  
  return (
          <>
            <Button className="button" size="sm" variant="info" as={Link} to={'/producto/'+datos.id}>Ver Detalle</Button>
            <Button className="button" size="sm" variant="success" as={Link} to={'/productos/Compra/'+datos.id}>Comprar</Button>

            
            {userLogin &&
              <Button className="button" size="sm" variant="info" as={Link} to={'/productos/modificar/'+datos.id}>Modificar</Button>
            }
            
            <Button className="button" size="sm" variant="dark" as={Link} to={'/productos/Soporte/'+datos.id}>Soporte</Button>
          </>
  );
}

export default Actions;
