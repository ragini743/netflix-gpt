import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const optionState = useSelector(state=> state.option)
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        // User is signed out

        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="relative w-[80%] md:w-[25%] z-10 flex items-center ">
      <div className={"flex items-center absolute top-0 w-[100%] " + (optionState.option?"null":"h-[100%]" )}>
        <img
          src={NETFLIX_LOGO}
          alt="Logo"
        className="brightness-200"></img>
      </div>
    </div>
  );
};
export default Header;
