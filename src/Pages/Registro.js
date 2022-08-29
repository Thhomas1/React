
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/Forms/FormGroup';
import firebase from '../Config/firebase'
import AlertCustom from '../Components/AlertCustom';
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import skate from '../../src/assets/skate.png'
function Registro() {
     const { register, handleSubmit, formState: { errors } } = useForm();
     const [loading,setLoading] = useState(false)
     const [alert,setAlert] = useState({variant:"",text:""})
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
    const onSubmit = async (data) => {
      try{
        setLoading(true)
        console.log("Estos son los datos",data,data.email,data.password);
        const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
        console.log(responseUser)
        if(responseUser.user.uid){
          const document = await firebase.db.collection("usuarios")
          .add({
            name:data.name,
            lastname:data.lastname,
            userId:responseUser.user.uid
          })
          console.log(document)
          setAlert({variant:"success",text:"Registro exitoso"})
          setLoading(false)
        }
      }catch(e){
        console.log(e.code)
        switch(e.code){
          case "auth/weak-password":
              setAlert({variant:"danger",text:"La contraseña debe tener al menos 6 caracteres"})
              break;
          case "auth/email-already-in-use":
              setAlert({variant:"danger",text:"El email ya se encuentra registrado"})
              break;
          default:
              setAlert({variant:"danger",text:"Ha ocurrido un error"})
        }
        setLoading(false)

      }
      
    }

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="Nombre" register={{...register("name",{required:true,minLength:5})}} placeholder="Ingrese su nombre" helpText="El nombre de tener al menos 5 caracteres" />
          {errors.name && <div>El campo Nombre es obligatorio</div>}
          <FormGroup label="Apellido" register={{...register("lastname",{required:true,minLength:3})}} placeholder="Ingrese su apellido" />
          {errors.name && <div>El campo Apellido es obligatorio</div>}
          <FormGroup label="Email" type="email" register={{...register("email",{required:true})}} placeholder="hola@ejemplo.com" helpText="El mail de tener al menos 1 caracter" /> 
          {errors.email}
          <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:5})}} helpText="La contraseña debe tener al menos  caracter"/>
         
          {errors.password?.type==="required" &&  <div>El campo Contraseña es obligatorio</div>}
            {errors.password?.type==="minLength" &&  <div>Debe completar al menos 6 caracteres</div>}

          <ButtonWithLoading  loading={loading} type="submit" variant="primary">Registrarse</ButtonWithLoading> 
          <AlertCustom {...alert}  />
        
            <Button size="sm" variant="danger" onClick={handleShow}>Launch</Button>
              
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title >Recuerde sus datos</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="mb-5">
               Hoy en dia es muy comun olvidarse los datos, por eso le recomendamos que anote sus datos para no olvidarse!
               <p></p>

            <Button variant="warning" size="md" className="mb-2">
              Buena suerte
            </Button>
            <p></p>
            <Figure >
                  <Figure.Image
                    width={300}
                    height={200}
                    alt="200x200"
                    src={skate}
                  />
              </Figure>

              </Offcanvas.Body>
            </Offcanvas>
    


        </form>
  
      </div>
    );
  
  
}

export default Registro;
