
import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import Loading from '../Components/Loading';
import {getByIdProductos} from "../Services/ProductosServices"
import {Link} from "react-router-dom"
import {Button} from 'react-bootstrap'
function Detalle() {
  const [producto,setProducto] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams();
  console.log("id",id)
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          
          const document = await getByIdProductos(id)
          if(document){
            setProducto(document.data())
            setLoading(false)
          }
        }catch(e){
          console.log(e)
        }
      }
      request()
    },
    [id]
  )
  
    return (
      <>
      <Loading loading={loading} configuration={{animation:"grow",variant:"primary"}}>
        <p>Nombre: {producto.name}</p>
        <p>Precio: {producto.price}</p>
        <p>Descripcion: {producto.description}</p>
        <p>SKU: {producto.sku}</p>
      </Loading>
      <Button size="sm" variant="success" as={Link} to={'../Pages/ABMProductos/Compra/'}>Comprar</Button>
      </>
    );
  
  
}

export default Detalle;
