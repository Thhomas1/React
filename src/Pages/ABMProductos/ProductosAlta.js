
import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../../Components/Forms/FormGroup';
import {crearProducto} from "../../Services/ProductosServices"
import AlertCustom from '../../Components/AlertCustom';
import ButtonWithLoading from '../../Components/Forms/ButtonWithLoading';
function ProductosAlta() {
     const { register, handleSubmit, formState: { errors } } = useForm();
     const [loading,setLoading] = useState(false)
     const [alert] = useState({variant:"",text:""})
     const onSubmit = async (data) => { 
      try{
        setLoading(true)
        const document = await crearProducto(data)
        setLoading(false)
        console.log(document)
      }catch(e){
        console.log(e.code)
        
      }
      
    }

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="Producto" register={{...register("name",{required:true})}} placeholder="Ingrese el Producto"  />
          {errors.name && <div>El campo Producto es obligatorio</div>}
          <FormGroup label="Precio $" register={{...register("price",{required:true})}} helpText="Recuerde poner el precio en pesos" />
          {errors.price && <div>El campo Precio es obligatorio</div>}
          <FormGroup label="Descripcion" register={{...register("description",{required:true})}} />
          {errors.description && <div>El campo Despripcion es obligatorio</div>}
          <FormGroup label="sku" register={{...register("sku",{required:true})}} />
          {errors.sku && <div>El campo SKU es obligatorio</div>}
         
          <ButtonWithLoading loading={loading} type="success" variant="primary">Guardar</ButtonWithLoading>
          <AlertCustom {...alert}  />
        </form>

      </div>
    );
 
}

export default ProductosAlta;