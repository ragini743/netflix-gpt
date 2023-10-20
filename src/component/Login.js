import { useState } from "react";
import { Login_background_URL } from "../utils/constant";
import Header from "./Header";

const Login = ()=>{
    const [isSignInForm,setIsSignForm] = useState(true);
    const toggleSignInForm = ()=>{
        setIsSignForm(!isSignInForm);
    }
    return(
<div className="">
    <Header />
    <div className="h-full">
        <img src={Login_background_URL} className="" alt="background-logo"></img>
    </div>

    <form className="bg-black text-white p-2 flex flex-col top-5 mx-[30%] left-0 right-0 md:p-10 md:w-[40%] absolute md:top-24 opacity-80">
        <thead className="p-1 md:font-bold md:text-2xl md:p-2">{isSignInForm ? "Sign In" : "signUp"}</thead>
   {!isSignInForm &&
        <input type="text" placeholder="enter your name" className="border-2 border-black mb-2 text-sm md:text-lg md:mb-4 md:p-2 rounded-sm  bg-stone-800"></input>
   }




        <input type="email" placeholder="Email or phone number" className="border-2 border-black mb-2 text-sm md:text-lg md:mb-4 md:p-2 rounded-sm  bg-stone-800"></input>
        <input type="password"placeholder="Password" className="border-2 border-black mb-2 text-sm md:text-lg md:mb-4 md:p-2  rounded-sm bg-stone-800"></input>
        <button type="submit" className="border-black border-1 bg-red-600 md:p-2 md:mb-4">{isSignInForm ? "Sign In" : "signUp"}</button>
        <div className="md:mb-4 flex items-center">
        <input type="checkbox" className="md:w-5 md:h-5 md:mr-2">
            </input><label className="text-sm md:text-lg">remember me</label>
            </div>
            <p className="text-sm md:text-lg cursor-pointer"onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix?Sign Up" : "already ragistered sign In"} now.</p>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>

    </form>
    <footer className="relative -top-48 bg-black bg-opacity-70 text-white w-full py-6 px-10">
        <div>
        <h2>Questions? Call 000-800-919-1694</h2>
        <ul>
            <li><a href="https://help.netflix.com/support/412">FAQ</a></li>
            <li><a href="https://help.netflix.com/">Help Center</a></li>
            <li><a href="https://help.netflix.com/legal/termsofuse">Terms of use</a></li>
            <li><a href="https://help.netflix.com/legal/privacy">Privecy</a></li>
            <li><a href="https://www.netflix.com/in/login#">Cookie Preferences</a></li>
        </ul>
        </div>
    </footer>

</div>
    )
}
export default Login ; 