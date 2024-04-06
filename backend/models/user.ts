import{Schema,model} from "mongoose"; 

///Aqui definimos nuestro esquema 
const userSchema= new Schema({
Nombre: {
    type:String,
    required:true
},
 Correo:{
    type:String,
    required:true
 },
 Contraseña:{
    type:String,
    required:true
 },
 Telefono:{
    type:String,
    required:true
 },
 Direccion:{
    type:String,
    required:true
 },
 Rancho_id:{
    type:String,
    required:true
 },
 Ocupacion:{
    type:String,
    required:true
 }
});
export const UserModel = model('users',userSchema)