import { Login_background_URL } from "../utils/constant";
import Header from "./Header";

const Login = ()=>{
    return(
<div className="w-[100%] h-[100%]">
    <Header />
    <div className="">        <img src={Login_background_URL} className="" alt="background-logo"></img>
    </div>
</div>
    )
}
export default Login ; 