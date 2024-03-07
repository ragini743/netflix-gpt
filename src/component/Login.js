import { useRef, useState } from "react";
import { Login_background_URL } from "../utils/constant";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch =useDispatch();
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  // const navigate = useNavigate() ;

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // validate  the form data
if(!errorMessage){
  //signIn /signUp
}
   // Validate the form data
   if (isSignInForm) {
    //signIn Logic
    if (!email.current.value) {
      setErrorMessage("Email is not found");
      return;
    }
    if (!password.current.value) {
      setErrorMessage("Your password is empty");
      return;
    }
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(user ,{  displayName: name.current.value,
       photoURL: "https://w7.pngwing.com/pngs/801/479/png-transparent-lord-krishna-illustration-krishna-janmashtami-radha-krishna-lord-krishna-text-logo-computer-wallpaper-thumbnail.png"
    }).then(() => {
       // Profile updated!
   
      const {uid,email,displayName,photoURL} = auth.currentUser;
      
      dispatch(
        addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
      })
      )
   
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message)
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" &" +errorMessage)
  });
  } else {
    //signUp logic

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("userCredential",userCredential.user)
        updateProfile(user ,{
          displayName: name.current.value, photoURL: "https://w7.pngwing.com/pngs/801/479/png-transparent-lord-krishna-illustration-krishna-janmashtami-radha-krishna-lord-krishna-text-logo-computer-wallpaper-thumbnail.png"
        }).then(() => {
           // Profile updated!
       
          const {uid,email,displayName,photoURL} = auth.currentUser;
          
          dispatch(
            addUser({
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL,
          })
          )
        
         
          // navigate("/browse")
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error.message)
        });
        // ...
      
    
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +":"+ errorMessage)
      });




    if (!name.current.value) {
      setErrorMessage("Name is required");
      return;
    }
    if (!email.current.value) {
      setErrorMessage("Email is not found");
      return;
    }
    if (!password.current.value) {
      setErrorMessage("Your password is empty");
      return;
    }
    
    // Additional validation using the checkValidData function
    if (!checkValidData(email.current.value, password.current.value)) {
        setErrorMessage("Invalid email or password");
        return;
      }
  
      // If all validations pass, clear any previous error messages
      setErrorMessage(null);
  }
 
  };
  return (
    <div className="relative ">
      <Header />
      <div className="h-full absolute top-0 bottom-0">
        <img
          src={Login_background_URL}
          className="w-full h-full"
          alt="background-logo"
        ></img>
        <div className="absolute inset-0 bg-black opacity-50">

        </div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black text-white px-2 flex flex-col top-5 mx-auto left-0 right-0 md:p-10 md:w-[40%] lg:w-[30%] relative md:top-20 opacity-80  mb-40  "
      >
        <thead className="p-1 md:font-bold md:text-2xl md:p-2 md:pt-8">
          {isSignInForm ? "Sign In" : "signUp"}
        </thead>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="enter your name"
            className="border-2 outline-none border-black mb-2 text-sm md:text-lg md:mb-4 md:p-2 rounded-sm  bg-stone-800"
          ></input>
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email or phone number"
          className="border-2 outline-none border-black mb-2 text-sm md:text-lg md:mb-4 md:p-2 rounded-sm  bg-stone-800"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="border-2 outline-none border-black mb-2 text-sm md:text-lg md:mb-4 md:p-2  rounded-sm bg-stone-800"
        ></input>
        <p className="mb-2 text-red-500 font-bold">{errorMessage}</p>
        <button
          type="submit"
          className="border-black border-1 bg-red-600 md:p-2 md:mb-4"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "signUp"}
        </button>
        <div className="md:mb-4 flex items-center">
          <input type="checkbox" className="md:w-5 md:h-5 md:mr-2"></input>
          <label className="text-sm md:text-lg">remember me</label>
        </div>
        <p
          className="text-sm md:text-lg cursor-pointer"
          onClick={toggleSignInForm}
        >
          {" "}
          {isSignInForm
            ? "New to Netflix?Sign Up"
            : "already ragistered sign In"}{" "}
          now.
        </p>
        <p className="pb-36">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
      <footer className="relative mt-60 bg-black bg-opacity-70 text-white w-full py-6 px-10 z-15 ">
        <div>
          <h2>Questions? Call 000-800-919-1694</h2>
          <ul>
            <li>
              <a href="https://help.netflix.com/support/412">FAQ</a>
            </li>
            <li>
              <a href="https://help.netflix.com/">Help Center</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/termsofuse">
                Terms of use
              </a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/privacy">Privecy</a>
            </li>
            <li>
              <a href="https://www.netflix.com/in/login#">Cookie Preferences</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
export default Login;
