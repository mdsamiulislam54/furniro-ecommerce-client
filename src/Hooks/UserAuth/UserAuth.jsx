import React, { use } from "react";
import { UserContext } from "../../Context/User/UserContextApi/UserContextApi";

const userAuth = () => {
  const userInfo = use(UserContext);
  return userInfo
 
};

export default userAuth;
