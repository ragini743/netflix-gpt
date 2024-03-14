import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "./hooks/useNowPlyayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/usePopularMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import useTrendingMovies from "./hooks/useTrendingMovies";
import useTopRatedMovies from "./hooks/useTopRated";
import { toggleGptSearchView } from "../utils/gptSlice";
import GptSearch from "./GptSearch";
import { Supported_Language } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";


const Browse =() =>{
  const dispatch =useDispatch() ;
  const showGptSearch = useSelector(store =>store.gpt.showGptSearch)
 useNowPlayingMovies() ;
 usePopularMovies() ;
 useUpcomingMovies() ;
 useTrendingMovies() ;
 useTopRatedMovies();
//  console.log("trending",useTrendingMovies())

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
    const handleSearchClick = () =>{
       dispatch(toggleGptSearchView()) ;
    }
    const handleLanguage =(e) =>{
console.log("vlaue",e.target.value)
dispatch(changeLanguage(e.target.value))
    }

    return(
      <div className={"relative w-[100%] overflow-hidden " + (showGptSearch?'h-[100vh]':"h-[100%]")}>
          <div className=" py-2  h-[100%] z-20
           bg-gradient-to-b from-black to-transparent bg-opacity-50 relative overflow-hidden">
            <div className="flex justify-between  " >
                <div className="flex justify-evenly w-[70%] items-center">
                 <Header />
                 <ul className="flex justify-evenly items-center text-white font-bold z-10">
                    <li className="ml-4">Home</li>
                    <li className="ml-4">TV shows</li>
                    <li className="ml-4">Movies</li>
                    <li className="ml-4">New & Popular</li>
                    <li className="ml-4">My List</li>
                   
                    {
                      showGptSearch && <>
                      <label for="language" className=" ml-4">Browse By Language
                    </label>
                    
                      <select id="language" className="bg-transparent text-white border-2 border-gray-700 rounded-md outline-none 
                      ml-1 py-2 " onChange={handleLanguage}>
                        {
                          Supported_Language.map((lang) =>(<option key={lang.identifier} value={lang.identifier} className="text-black">{lang.name}</option>))
                        }
                        
                    
                      </select>
                      </>
                    }
                 
                    
                 </ul>

                </div>
                
                 {user?<div className="w-[20%] mr-10 flex justify-evenly items-center relative z-10 bg-opacity-70  text-white">
                  <div className="text-white bg-purple-800 rounded-lg" onClick={handleSearchClick}>
                    <button className="rounded-lg px-4 py-2">
                      GPT search
                    </button>
                  </div>
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
          {
            showGptSearch?<GptSearch />:<>
             <MainContainer />
          <SecondaryContainer />
            </>
          }
         
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