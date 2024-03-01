import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { signOut } from "firebase/auth";

const Browse =() =>{
    const navigate = useNavigate();
    const handleSignOut =() =>{
 console.log("click")
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
    }
    return(
        <div className="shadow-lg py-2 relative ">
            <div className="flex justify-between relative">
                <div className="flex justify-evenly w-[60%] items-center">
                 <Header />
                 <ul className="flex justify-evenly ">
                    <li className="ml-4">Home</li>
                    <li className="ml-4">TV shows</li>
                    <li className="ml-4">Movies</li>
                    <li className="ml-4">New & Popular</li>
                    <li className="ml-4">My List</li>
                    <li className="ml-4">Browse By Language</li>
                 </ul>

                </div>
                
                 <div className="w-[16%] mr-10 flex justify-evenly items-center">
                    <div className="w-10">
                    <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"alt="user Icon"></img>
                    </div>
                  
                    <button className="font-bold" onClick={handleSignOut}>Sign Out</button>
                </div>
             </div> 
            <div className="absolute inset-0 bg-black opacity-50">
            </div>   
        </div>
    )
}
export default Browse;