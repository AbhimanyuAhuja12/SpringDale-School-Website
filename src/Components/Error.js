import { useRouteError } from "react-router-dom";
import errorImage from "../Assets/Error.png"
const Error=()=>{

    const err =useRouteError();
    return(
        <div>
            <img src={errorImage} alt={err.status} /> 
        </div>
    )
}
export default Error;


