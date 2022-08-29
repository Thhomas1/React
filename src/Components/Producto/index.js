import {Card} from 'react-bootstrap'
import './Producto.css'
import {Col} from 'react-bootstrap'
import Actions from "./Actions"
import AuthContext from "../../Context/AuthContext"
const styles={
  cardContainer:{
    marginBottom:"10px",
    width: '18rem'
  },
  cardBody:{

  }
}

function Producto(props) {
  const {datos} = props
  //const datos = props.datos
  return (
    <AuthContext.Consumer>
        {
          context=>
      <Col>
        <Card  style={styles.cardContainer}>
          <Card.Img className="imgProducto" variant="top" src={datos.thumbnail} />
          <Card.Body>
            <Card.Title>{datos.name}</Card.Title>
            <Card.Subtitle>$ {datos.price}</Card.Subtitle>
            <Card.Text>
              {datos.description}
              <br></br>
              SKU: {!datos.sku ? "-" : datos.sku}
            </Card.Text>
            <Actions userLogin={context.userLogin} datos={datos} />
          </Card.Body>
        </Card>
      </Col>
        }
        </AuthContext.Consumer>
  );
}

export default Producto;
