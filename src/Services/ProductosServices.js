import firebase from '../Config/firebase';

export async function getAllProductos(){
    const querySnapshot = await firebase.db.collection("productos")
          .get()
    return querySnapshot.docs
}
export async function getByIdProductos(id){
    return await firebase.db.doc("productos/"+id)
          .get()
    
}
export async function crearProducto(data){
    return await firebase.db.collection("productos")
        .add(data)
}

export async function tenerconsultas(){
    const querySnapshot = await firebase.db.collection("consultas")
    .get()
    return querySnapshot.docs
    
}
export async function tenerporunaidconsultas(id){
    return await firebase.db.doc("consultas/"+id)
          .get()
    
}
export async function tenerfinalmenteunaidparaconsultas(data){
    return await firebase.db.collection("consultas")
        .add(data)


}
export async function comprasrealizadas(){
    const querySnapshot = await firebase.db.collection("compras")
    .get()
    return querySnapshot.docs
    
}
export async function comprasrealizadas2(id){
    return await firebase.db.doc("compras/"+id)
          .get()
    
}
export async function comprasrealizadas3(data){
    return await firebase.db.collection("compras")
        .add(data)
}
