
import React,{useState,useEffect} from 'react';
import Loading from '../Components/Loading';
import Producto from '../Components/Producto/index';
import {getAllProductos} from "../Services/ProductosServices"
import {Row} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import cyber from '../../src/assets/noche.jpg'
import razer from '../../src/assets/star.jpg'
import auto from '../../src/assets/battlefield.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas'
import elmo from '../../src/assets/elmo.gif'
import Figure from 'react-bootstrap/Figure'
import imagen from '../../src/assets/azul.png'
import './forms.css'

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
 
  return (
    <>
    
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Aceptas nuestros terminos de cookies?</Offcanvas.Title>
        </Offcanvas.Header>
        
        <Figure >
                  <Figure.Image
                    width={200}
                    height={200}
                    alt="200x200"
                    src={elmo}
                  />
              </Figure>
      </Offcanvas>
    </>
  );
}







function Home() {
  const [productos,setProductos] = useState([])
  const [loading,setLoading] = useState(true)
  
  useEffect(
    ()=>{

      const request = async ()=>{
        try{
          const docs = await getAllProductos()
          if(docs){
            setProductos(docs)
            setLoading(false)
          }
        }catch(e){
          console.log(e)
        }
      }
      request()
    },
    []
  )

    return (
<div>

      <Loading loading={loading}>
        <Row xs={"auto"} md={"auto"}>
          {productos.map((producto,indice)=><Producto key={producto.id} datos={{...producto.data(),id:producto.id}} />)}
        </Row>
      </Loading>
      <>
      {['top'].map((placement, idx) => (
        <OffCanvasExample  key={idx} placement={placement} name={placement} />
      ))}
      </>
      <Figure clasName="mb-0" >
                  <Figure.Image
                    width={200}
                    height={200}
                    alt="100x100"
                    src={imagen}
                  />
              </Figure>

      
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          className="mb-5"
          src={ cyber }
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Aproveche nuestro Cyber Week!!!</h3>
          <p>Compras validas hasta el 25/05/2022</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          className="mb-5"
          src={ razer }
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tarjetas de video AMD en oferta</h3>
          <p>A partir de 20000$, se te agrega un desucneto del 99%</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          className="mb-5"
          src={ auto }
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Descuentos en juegos de hasta un 20%</h3>
          <p>Compras validas hasta el 25/05/2022</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

     
      </div>

      
    );
  
  
}

export default Home;
