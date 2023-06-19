import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const RutasProtegidas = ({children}) => {
 const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
 //preguntar si el usuario NO esta logueado
 if(!usuarioLogueado){
    return <Navigate to={'/login'}></Navigate>
 }else{
   if(usuarioLogueado.administrador){
      return children;
   } else {
      Swal.fire(
         "Ocurrió un error",
         `No tienes los permisos para ver esta pagina`,
         "error"
       );
      return <Navigate to={'/'}></Navigate>
   }
 }
};

export default RutasProtegidas;