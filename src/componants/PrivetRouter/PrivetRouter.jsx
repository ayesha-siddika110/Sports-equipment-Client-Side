import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';

const PrivetRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(user){
        return children
    }
    if(loading){
        <Loading></Loading>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivetRouter;