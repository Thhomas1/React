
import React,{useState} from 'react';
import ReactPlayer from 'react-player'
import { useForm } from "react-hook-form";
import {tenerfinalmenteunaidparaconsultas} from "../../Services/ProductosServices"
import FormGroup from '../../Components/Forms/FormGroup';
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import ButtonWithLoading from '../../Components/Forms/ButtonWithLoading';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import problem from '../../assets/pro.png'
import Figure from 'react-bootstrap/Figure'
import skate2 from '../../assets/skate2.png'
import Offcanvas from 'react-bootstrap/Offcanvas'

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
 
  return (
    <>
    
      <Offcanvas  show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >Tenes dudas de como comprar online?</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="App" style={({width:'100%', height:'100%', position: 'absolute'})}>
        <ReactPlayer
        url='https://www.youtube.com/watch?v=Kqkb4mgqmiw'
        width='90%'
        height='30%'
        controls
        volume='0.5'
        />
        </div>
        </Offcanvas.Body>
        <Offcanvas.Body>
          Te dejamos un video para que te introduzcas en el mundo del internet y 
          asi poder aprender muchisimo mas de las millones de cosas que existen en esta tecnologia
        </Offcanvas.Body>
        
        
       
      </Offcanvas>
    </>
  );
}





function Soporte() {
     const { register, handleSubmit, formState: { errors } } = useForm();
     const [loading,setLoading] = useState(false);
     // eslint-disable-next-line
     const [alert,setAlert] = useState({variant:"",text:""})
     const [show, setShow] = useState(false);
     
    const onSubmit = async (data) => {
      try{
        setLoading(true)
        const document = await tenerfinalmenteunaidparaconsultas(data)
        
        console.log(document)
          setAlert({variant:"success",text:"Registro exitoso"})
          setLoading(false)
      }catch(e){
        console.log(e.code)
      }
      
    }

    return (
      <div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
        <>
          <FloatingLabel className="mb-4" controlId="floatingTextarea3" label="Deje aqui su consulta">
            <Form.Control
              as="textarea"
              placeholder="Deje aqui su comentario"
              style={{ height: '150px' }}
            />
          </FloatingLabel>
        </>
          
          <FormGroup className="mb-3" label="Email" type="email" register={{...register("email",{required:true})}} placeholder="hola@ejemplo.com" helpText="El mail de tener @" /> 
          {errors.email && <div>El campo mail es obligatorio es obligatorio</div>}
          <div>Tipo de consulta</div>
        <Form.Select className="mb-4"  aria-label="Tipo de consulta">
         
          <option value="1">Producto</option>
          <option value="2">Envio</option>
          <option value="3">Proovedores</option>

        </Form.Select>

          <ButtonWithLoading loading={loading} type="submit" variant="success">Enviar</ButtonWithLoading>
        </form>
        
          <>
        <Form.Label class= "titulo" >Rango de satisfaccion de la consulta</Form.Label>
          <Form.Range />
          </>
        <Alert show={show} variant="light">
        <Alert.Heading>
           <h5>Responderemos lo antes posible</h5>
           <Figure>
              <Figure.Image
                width={120}
                height={120}
                alt="100x100"
                src={skate2}
              />
              
          </Figure>

    
           </Alert.Heading>
        <p>
          Sino puede esperar, puede llamarnos al 158930211 para cualquier consulta 
        </p>
        
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Cerrame si entendiste
          </Button>
        </div>
      </Alert>

      

      {!show && <Button onClick={() => setShow(true)}>+INFO </Button>}
      <Figure>
              <Figure.Image
                width={70}
                height={70}
                alt="50x50"
                src={problem}
              />
              
          </Figure>
         
      <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample  key={idx} placement={placement} name={placement} />
      ))}
      </>



       
      </div>
    );
  
  
}

export default Soporte;
