import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import MoreInfoButton from "./MoreInfo.jsx";

const Movie = ({ movie, id }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[250px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="block w-full h-auto rounded-sm"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />

      <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 text-white rounded">
        <p className="flex whitespace-normal font-bold md:text-sm text-xs h-full justify-center items-center text-center text-white">
          {movie?.title || movie?.name}
          <p className="absolute bottom-0 right-2">
            <MoreInfoButton movie={movie} />
          </p>
        </p>
      </div>
    </div>
  );
};

export default Movie;
