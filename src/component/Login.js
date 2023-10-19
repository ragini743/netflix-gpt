import { Login_background_URL } from "../utils/constant";
import Header from "./Header";

const Login = ()=>{
    return(
<div className="">
    <Header />
    <div className="">        <img src={Login_background_URL} className="" alt="background-logo"></img>
    </div>

    <form className="bg-slate-200 p-2 flex flex-col top-5 mx-[30%] left-0 right-0 md:p-10 md:w-[40%] absolute md:top-24">
        <thead className="p-1 md:font-bold md:text-2xl md:p-2">Sign In</thead>
        <input type="email" placeholder="Email or phone number" className="border-2 border-black mb-2 text-sm md:text-lg md:mb-4 md:p-2 rounded-sm"></input>
        <input type="password"placeholder="Password" className="border-2 border-black mb-2 text-sm md:text-lg md:mb-4 md:p-2 rounded-sm"></input>
        <button type="submit" className="border-black border-1 bg-red-500 md:p-2 md:mb-4">sign in</button>
        <div className="md:mb-4 flex items-center">
        <input type="checkbox" className="md:w-5 md:h-5 md:mr-2">
            </input><label className="text-sm md:text-lg">remember me</label>
            </div>
            <h1>New to Netflix? Sign up now.</h1>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>

    </form>
    <footer className="absolute -bottom-20 bg-slate-400 w-full">
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