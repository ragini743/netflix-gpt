import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  
  const { movieName, movieResults } = gpt;
  console.log("length",gpt)
  if (gpt.movieName===null) return null;


return (
    <div className="bg-black text-white p-4 font-bold relative -top-80 md:w-[50%] mx-auto">

      {(movieName.map((name, index) => (
        console.log("name",name),
       <li> <MovieList title={name} movies={movieResults[index]} key={name} /></li>
      )))}
    </div>
  );
};

export default GptMovieSuggestion;
