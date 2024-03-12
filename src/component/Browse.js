import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "./hooks/useNowPlyayingMovies";
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
      <div className="relative h-[100%] w-[100%] ">
          <div className=" py-2  h-[100%] z-20
           bg-gradient-to-b from-black to-transparent bg-opacity-50 relative">
            <div className="flex justify-between  " >
                <div className="flex justify-evenly w-[60%] items-center">
                 <Header />
                 <ul className="flex justify-evenly text-white font-bold z-10">
                    <li className="ml-4">Home</li>
                    <li className="ml-4">TV shows</li>
                    <li className="ml-4">Movies</li>
                    <li className="ml-4">New & Popular</li>
                    <li className="ml-4">My List</li>
                    <li className="ml-4">Browse By Language</li>
                 </ul>

                </div>
                
                 {user?<div className="w-[16%] mr-10 flex justify-evenly items-center relative z-10 bg-opacity-70  text-white">
                    <div className="w-10">
                    <img src={user.photoURL}alt="user Icon"></img>
                    <span className="text-white">{user.displayName}</span>
                    </div>
                  
                    <button className="font-bold" onClick={handleSignOut}>Sign Out</button>
                </div>:null}
             </div> 
            {/* <div className="absolute inset-0 opacity-50 bg-black" >
            </div>    */}
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