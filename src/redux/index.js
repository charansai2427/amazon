import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import tvshowsSlice from "./slices/tvshowsSlice";
import watchlistSlice from "./slices/watchlistSlice";
import userslice from "./slices/userSlice";

export default configureStore({
    reducer:{
       primemovies: moviesSlice,
       primetvshows:tvshowsSlice,
       primeWishlist:watchlistSlice,
       User:userslice,

    }
})