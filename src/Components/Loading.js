
import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
function Loading(props) {
    const {loading,children,configuration} = props
    const styles ={
      spinner:{
        position:"left",
        top:"50%",
        
      }
    }
    if(loading){
      return (
        <Spinner style={styles.spinner} animation={configuration?.animation || "border"} role="status" variant={configuration?.variant || "green"}>
          <span className="visually-hidden">Cargando</span>
        </Spinner>
      );
    }else{
      return(
        <>
          {children}
        </>
      )
    }
  
  
}

export default Loading;
