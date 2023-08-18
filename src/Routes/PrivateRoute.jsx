import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate} from "react-router-dom";
import { ColorRing } from "react-loader-spinner";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="absolute">
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    }
    
    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;