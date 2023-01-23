import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites:[],
    totalfavo:0,
    addFavorite: (favoriteProfile)=>{},
    removeFavorite:(profileId)=>{},
    itemIsFavorite:(profileId)=>{},
});

export function FavoritesContextProvider(props){
    const [userFavorites,setUserFavorites]=useState([]);

    function addFavoriteHandler(favoriteProfile) {
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteProfile);
        });
    }

    function removeFavoriteHandler(profileId){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.filter(profile=>profile.id !==profileId);
        });
    }

    function itemIsFavoriteHandler(profileId){
        return userFavorites.some(profile=>profile.id===profileId)
    }

    const context= {
        favorites: userFavorites,
        totalFavo: userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemIsFavorite:itemIsFavoriteHandler,
    };

    return (
    <FavoritesContext.Provider value={context}>
      {props.children}  
    </FavoritesContext.Provider>
    );
}

export default FavoritesContext;

