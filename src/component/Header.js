import { NETFLIX_LOGO } from "../utils/constant";

const Header =()=>{
    return(
        <div>
            <div className="w-[20%] absolute">
                <img src={NETFLIX_LOGO} alt="Logo"></img>
            </div>
        </div>
    )
}
export default Header;