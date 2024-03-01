import { RouterProvider, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () =>{
    const dispatch = useDispatch() ;
  
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />,
        }

    ]) ;
    useEffect(() =>{
      
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName} =user;
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            dispatch(addUser({uid:uid,email:email , displayName :displayName}))
            // navigate("/browse")
            // ...
          } else {
            // User is signed out
            // ...
            dispatch(removeUser()) ;
            // navigate("/");
          }
        });
    },[])
    return(
        <div>
            <RouterProvider router={appRouter}>

            </RouterProvider>
            
        </div>
    )
}
export default Body;