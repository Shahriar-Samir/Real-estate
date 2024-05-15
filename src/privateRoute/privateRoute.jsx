
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../authProvider/authProvider';
import Loader from '../loader/loader';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext)
    
    if(loading){
        return <Loader/>   
    }
    if(user){
        return children
    }
    return (
        <>
            <Loader></Loader>
            <Navigate to='/login'></Navigate>
        </>
    )

};

export default PrivateRoute;