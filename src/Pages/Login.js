
import React,{useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Components/Forms/FormGroup';
import firebase from '../Config/firebase'
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading';
import {loginMessage} from "../Utils/errorMessage"
import AlertCustom from '../Components/AlertCustom';
import AuthContext from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import ima from '../../src/assets/hola.png'
import Figure from 'react-bootstrap/Figure'
import './forms.css'
function Login() {
     const { register, handleSubmit, formState: { errors } } = useForm();
     const [loading,setLoading] = useState(false)
     const [alert,setAlert] = useState({variant:"",text:""})
     const context = useContext(AuthContext)
     const [open, setOpen] = useState(false);
     const navigate = useNavigate()
    const onSubmit = async (data) => {
      try{
        setLoading(true)
        const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
        if(responseUser.user.uid){
          const userInfo = await firebase.db.collection("usuarios")
          .where("userId","==",responseUser.user.uid)
          .get()
          if(userInfo){
            setLoading(false)
            console.log(userInfo.docs[0]?.data())
            context.loginUser(userInfo.docs[0]?.data())
            console.log(responseUser.user.uid)
            navigate("/")
          }
        }

      }catch(e){
        console.log(e.code)
        setAlert({variant:"danger",text:loginMessage[e.code]})
        setLoading(false)
      }
      console.log(document)
          setAlert({variant:"success",text:"Entrando..."})
          setLoading(false)
      
    }

    return (
      <div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup  class='forms' label="Email" type="email" register={{...register("email")}} />
          <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:6})}} />
          {errors.password?.type==="required" &&  <div>El campo Contraseña es obligatorio</div>}
            {errors.password?.type==="minLength" &&  <div>Debe completar al menos 6 caracteres</div>}
            <ButtonWithLoading className="mb-3" loading={loading} type="submit" variant="success">Ingresar</ButtonWithLoading>
            <AlertCustom {...alert}  />

          



        </form>
        
              <Button
                  className="mb-3"
                  variant="warning"
                  onClick={() => setOpen(!open)}
                  aria-expanded={open}>
                  Haz click
                </Button>
                <Collapse in={open}>
                  <div >
                   Tenga en cuenta que nosotros no nos haremos cargo si usted no recuerda su contraseña. Por lo tanto... <b>SEA CUIDADOSO</b>
                  </div>
                </Collapse>

              <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={ima}
                  />
              </Figure>

                
                
            




              
      </div>
    );
  
  
}

export default Login;

