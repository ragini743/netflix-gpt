import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlyayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse =() =>{
 useNowPlayingMovies()

    const navigate = useNavigate();
    const user = useSelector(store=>store.user) ;
 
    const handleSignOut =() =>{
 console.log("click")
signOut(auth).then(() => {
  // Sign-out successful.

}).catch((error) => {
  // An error happened.
  navigate("/error")
});

    }

    return(
      <div>
          <div className="shadow-lg py-2 relative h-[100%]">
            <div className="flex justify-between relative z-20 ">
                <div className="flex justify-evenly w-[60%] items-center">
                 <Header />
                 <ul className="flex justify-evenly text-white font-bold">
                    <li className="ml-4">Home</li>
                    <li className="ml-4">TV shows</li>
                    <li className="ml-4">Movies</li>
                    <li className="ml-4">New & Popular</li>
                    <li className="ml-4">My List</li>
                    <li className="ml-4">Browse By Language</li>
                 </ul>

                </div>
                
                 {user?<div className="w-[16%] mr-10 flex justify-evenly items-center">
                    <div className="w-10">
                    <img src={user.photoURL}alt="user Icon"></img>
                    <span className="text-white">{user.displayName}</span>
                    </div>
                  
                    <button className="font-bold" onClick={handleSignOut}>Sign Out</button>
                </div>:null}
             </div> 
            <div className="absolute inset-0 bg-black opacity-75">
            </div>   
          </div>
          <MainContainer />
          <SecondaryContainer />
        {/* 
        MainContainer
         -VideoBacground
         -VideoTitle
        SecondaryContainer
         -MovieList*n
          -cards*n 
       */}

        
      </div>
    
    )
}
export default Browse;