import { Login_background_URL } from "../utils/constant";
import Header from "./Header";

const Login = ()=>{
    return(
<div className="">
    <Header />
    <div className="">        <img src={Login_background_URL} className="" alt="background-logo"></img>
    </div>

    <form className="bg-slate-400 p-2 flex flex-col top-5 mx-[30%] left-0 right-0 md:p-8 md:w-[40%] absolute ">
        <thead className="p-1 md:font-bold md:text-2xl md:p-2">Sign In</thead>
        <input type="email" placeholder="Email or phone number" className="border-2 border-black mb-2 text-sm md:text-lg md:mb-4 md:p-2 rounded-sm"></input>
        <input type="password"placeholder="Password" className="border-2 border-black mb-2 text-sm md:text-lg md:mb-4 md:p-2 rounded-sm"></input>
        <button type="submit" className="border-black border-1 bg-red-500 ">sign in</button>
        <div>
        <input type="checkbox">
            </input><label className="text-sm md:text-lg">remember me</label>
            </div>

    </form>

</div>
    )
}
export default Login ; 