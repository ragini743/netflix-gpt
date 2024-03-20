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
import { Supported_Language, optionIcon } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

import { toggleOption, toggleUserName } from "../utils/optionalSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useTopRatedMovies();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const optionState = useSelector((store) => store.option);

  console.log("option", optionState);

  const showUserName = () => {
    dispatch(toggleUserName());
  };

  const showOption = () => {
    dispatch(toggleOption());
  };
  const handleSignOut = () => {
    console.log("click");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguage = (e) => {
    console.log("vlaue", e.target.value);
    dispatch(changeLanguage(e.target.value));
  };


  return (
    <div
      className={
        "relative w-[100%] overflow-hidden " +
        (showGptSearch ? "h-[100vh]" : "h-[100%]")
      }
    >
      <div
        className=" py-2  h-[100%] z-20
           bg-gradient-to-b from-black to-transparent bg-opacity-50 relative overflow-hidden"
      >
        <div className="flex justify-between md:justify-between md:items-center pt-4">
          <div className="w-[40%] flex justify-evenly md:w-[70%]   relative">
            <Header />
            <ul className="md:flex justify-evenly items-center text-white font-bold z-10 hidden">
              <li className="ml-4">Home</li>
              <li className="ml-4">TV shows</li>
              <li className="ml-4">Movies</li>
              <li className="ml-4">New & Popular</li>
              <li className="ml-4">My List</li>

              {showGptSearch && (
                <>
                  <label htmlFor="language" className=" ml-4">
                    Browse By Language
                  </label>

                  <select
                    id="language"
                    className="bg-transparent text-white border-2 border-gray-700 rounded-md outline-none 
                      ml-1 py-2 "
                    onChange={handleLanguage}
                  >
                    {Supported_Language.map((lang) => (
                      <option
                        key={lang.identifier}
                        value={lang.identifier}
                        className="text-black"
                      >
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </ul>
            <div className="flex flex-col z-10 md:hidden justify-between items-center ">
              <div className="w-6"  onClick={showOption}>
                <img src={optionIcon} alt=""></img>
              </div>

              {optionState.option && (
                <ul className="flex  flex-col md:flex-row md:justify-evenly items-center mx-auto  z-1000 text-white">
                  <li className="">Home</li>
                  <li className="">TV shows</li>
                  <li className="">Movies</li>
                  <li className="">New & Popular</li>
                  <li className="">My List</li>

                  {showGptSearch && (
                    <>
                      <label htmlFor="language" className=" ml-4 ">
                        Browse By Language
                      </label>

                      <select
                        id="language"
                        className="bg-transparent text-white border-2 border-gray-700 rounded-md outline-none 
                      ml-1 py-2 "
                        onChange={handleLanguage}
                      >
                        {Supported_Language.map((lang) => (
                          <option
                            key={lang.identifier}
                            value={lang.identifier}
                            className="text-black"
                          >
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </ul>
              )}
            </div>
          </div>

          {user ? (
            <div className="w-[50%] md:w-[20%] md:mr-10 flex justify-evenly items-center relative z-10 bg-opacity-70  text-white">
              <div
                className="text-white rounded-sm bg-purple-800 md:rounded-lg absolute top-0 left-0"
                onClick={handleSearchClick}
              >
                <button className="md:rounded-lg rounded-sm px-1 py:1 text-sm md:px-4 md:py-2">
                  {showGptSearch ? "home" : "GPT search"}
                </button>
              </div>
              <div className="w-6 md:w-10 absolute top-0  " onClick={showUserName}>
                <img src={user.photoURL} alt="user Icon"></img>
                {optionState.userName && (
                  <span className="text-white text-xs">{user.displayName}</span>
                )}
              </div>

              <button className="font-bold text-sm  absolute top-0 right-2 " onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          ) : null}
        </div>
        {/* <div className="absolute inset-0 opacity-50 bg-black" >
            </div>    */}
      </div>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
        MainContainer
         -VideoBacground
         -VideoTitle
        SecondaryContainer
         -MovieList*n
          -cards*n 
       */}
    </div>
  );
};
export default Browse;
