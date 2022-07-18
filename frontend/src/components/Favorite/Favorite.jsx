import { PlusIcon } from "@assets/iconsCard";
import { BrokenHeartIcon } from "@assets/svgIcon";
import React from "react";
import { useFavoriteContext } from "@context/";

export const Favorite = () => {
  const { favorites, setFavorites } = useFavoriteContext();

  const deleteStorage = (favId) => {
    const newData = favorites.filter((id) => id.favId !== favId);
    setFavorites([...newData]);
  };

  return (
    <div>
      <ul>
        {favorites && (
          <>
            {favorites.map((movie) => (
              <li key={movie.favId}>
                {movie.favTitle}
                <BrokenHeartIcon
                  onClick={() => {
                    deleteStorage(movie.favId);
                  }}
                />

                <PlusIcon />
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};
