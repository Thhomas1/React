
import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import {comprasrealizadas3} from "../../Services/ProductosServices"
import FormGroup from '../../Components/Forms/FormGroup';
import Form from 'react-bootstrap/Form'
import ButtonWithLoading from '../../Components/Forms/ButtonWithLoading';
import Badge from 'react-bootstrap/Badge'
import banco from '../../assets/banco.png'
import plata from '../../assets/plata.png'
import tarjeta from '../../assets/tarjeta.png'
import Figure from 'react-bootstrap/Figure'


function Compra() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading,setLoading] = useState(false);
    // eslint-disable-next-line
    const [alert,setAlert] = useState({variant:"",text:""})
    const [] = useState(false);
   const onSubmit = async (data) => {
     try{
       setLoading(true)
       const document = await comprasrealizadas3(data)
       
       console.log(document)
         setAlert({variant:"success",text:"Compra exitosa"})
         setLoading(false)
     }catch(e){
       console.log(e.code)
     }
     
   }
   
    return (
     <div>
         <form onSubmit={handleSubmit(onSubmit)}>
        <h5 className="mb-3">  <b>Contacto</b> </h5>
        <Form>  
        <FormGroup className="mb-3" label="Email" type="email" register={{...register("email",{required:true,minLength:4})}} placeholder="Ingrese su email" helpText="Debe tener @" />
          {errors.email?.type==="required" && <div>El campo mail es obligatorio</div>}  
          {errors.email?.type==="minLength" && <div>El campo mail debe tener al menos 4 caracteres</div>}  
           
        </Form>

        <Form>
        <FormGroup className="mb-4" label="Codigo Postal" type="number" register={{...register("postal",{required:true,maxLength:8})}} placeholder="Ingrese su codigo postal" helpText="Fijese en google que sea valido" />
          {errors.postal?.type==="required" && <div>El campo CP es obligatorio</div>} 
          {errors.postal?.type==="maxLength" && <div>Debe tener como maximo 8 carecteres</div>} 
        </Form>
            
                <p>Seleccione un metodo de envio</p>
            <Form.Select className="mb-5" size="sm"  register={{...register("select",{required:true})}}  placeholder="Seleccione un metodo de envio">
            {errors.select?.type==="required" && <div>Este campo es obligatorio</div>} 

                <option value="1">Retiro en el local (0$) </option>
                <option value="2">Envio a domicilio (700$) </option>
                <option value="3">Correo Argentino (300$) </option>
            </Form.Select>



            <h5 className="mb-3">  <b>Pago</b> </h5>


        <Form>

        <Form.Select className="mb-4" size="sm"  register={{...register("select",{required:true})}}  placeholder="Seleccione un metodo de pago">
            {errors.select?.type==="required" && <div>Este campo es obligatorio</div>} 

                <option value="1">Tarjeta Debito </option>
                <option value="2">Tarjeta Credito </option>
                <option value="3">Transferencia</option>
                <option value="4">Efectivo</option>
            </Form.Select>

        <FormGroup className="mb-4" label="Numero de Tarjeta" type="card" register={{...register("tarjeta",{required:true,maxLength:16})}} placeholder="" helpText="No comparta esta informacion con nadie" />
          {errors.tarjeta?.type==="required" && <div>El campo Tarjeta es obligatorio</div>} 
          {errors.tarjeta?.type==="maxLength" && <div>Debe tener como maximo 16 carecteres</div>}           
        </Form>

        <Form>
        <FormGroup size="sm" className="mb-4" label="Codigo de seguridad" type="card"  register={{...register("segu",{required:true,maxLength:4})}} placeholder="Codigo de seguridad" helpText="Por favor no comparta esta informacion con nadie" />
          {errors.segu?.type==="required" && <div>El campo Codigo de seguridad es obligatorio</div>} 
          {errors.segu?.type==="maxLength" && <div>Debe tener como maximo 4 carecteres</div>}           
        </Form>

        <Form>
        <FormGroup  className="mb-5" label="Fecha de vencimiento" type="date"  register={{...register("fecha",{required:true,})}} placeholder="Fecha de vencimiento" helpText="Queda advertido" />
          {errors.fecha?.type==="required" && <div>La fecha es obligatoria</div>} 
                 
        </Form>

        <ButtonWithLoading loading={loading} type="submit" variant="success">Comprar</ButtonWithLoading>
          <p></p>
        <Figure>
              <Figure.Image
                width={100}
                height={100}
                alt="50x50"
                src={banco}
              />
              
          </Figure>
          <Figure>
              <Figure.Image
                width={50}
                height={50}
                alt="50x50"
                src={plata}
              />
              
          </Figure>
          <Figure>
              <Figure.Image
                width={100}
                height={100}
                alt="50x50"
                src={tarjeta}
              />
              
          </Figure>


         


            <h4 className="mb-5">
                Aproveche el Cyber Week <Badge bg="success">New!!!</Badge>
            </h4>

        
     </form>
     </div>

     


    );
  
  
}

export default Compra;
