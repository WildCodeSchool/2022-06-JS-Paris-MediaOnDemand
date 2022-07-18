import { PlusIcon } from "@assets/iconsCard";
import React from "react";
// import axios from "axios";
import { useFavContext } from "../../context/FavContext";

// const MOVIE_API = import.meta.env.VITE_MOVIE_API;

const Favorite = () => {
  // const [listData, setListData] = useState([]);

  const { fav, setFav } = useFavContext();
  console.log(fav);

  // useEffect(() => {
  //   for (let i = 0; i < fav.length; i += 1) {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/${fav[i].favId}?api_key=${MOVIE_API}&language=fr-FR`
  //       )
  //       .then((res) => setListData([...listData, res.data]));

  // .then((response) => response.data)
  // .then((data) => {
  //   setListData(data);
  // });
  // }
  // }, []);
  // console.log("listData", listData);

  const deleteStorage = (favId) => {
    const newData = fav.filter((id) => id.favId !== favId);
    setFav([...newData]);
  };

  return (
    <div>
      <ul>
        {fav && (
          <>
            {fav.map((movie) => (
              <li key={movie.favId}>
                {movie.favTitle}
                <button
                  type="button"
                  onClick={() => {
                    deleteStorage(movie.favId);
                    // window.location.reload();
                  }}
                >
                  supprimer de la liste
                </button>
                <PlusIcon />
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default Favorite;
