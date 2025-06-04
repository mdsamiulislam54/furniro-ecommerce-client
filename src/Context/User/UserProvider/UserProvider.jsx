import React, { useEffect, useState } from "react";
import { UserContext } from "../UserContextApi/UserContextApi";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../../firbase-config";
import axios from "axios";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const prvider = new GoogleAuthProvider();
    return signInWithPopup(auth, prvider);
  };

  const logOutUser = () => {
    return auth.signOut();
  };

 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    setUser(currentUser);

    if (currentUser) {
      const userData = { email: currentUser.email };
      
      axios
        .post("http://localhost:5000/jwt", userData, {
          withCredentials: true,
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }

    setLoading(false);
  });

  return () => {
    unsubscribe();
  };
}, []);


  const userInfo = {
    user,
    createUser,
    loginUser,
    loginWithGoogle,
    logOutUser,
    loading,
  };
  return <UserContext value={userInfo}>{children}</UserContext>;
};

export default UserProvider;
