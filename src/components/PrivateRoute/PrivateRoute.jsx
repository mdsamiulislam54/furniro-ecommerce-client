import React from "react";
import userAuth from "../../Hooks/UserAuth/UserAuth";
import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {
    const {user,loading} = userAuth()

    if(loading){
        return <p>Loading...</p>
    }


    
    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }



  return children;
};

export default PrivateRoute;
