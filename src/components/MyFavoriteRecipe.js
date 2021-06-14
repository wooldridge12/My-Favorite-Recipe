// import { PageList } from "./PersonalPage/PageLists";
// import { LikeProvider } from "./PersonalPage/PageProvider";
// import { PostList } from "./Posts/PostLists";
// import { PostProvider } from "./Posts/PostProvider";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./Nav/NavBar";
import { AppView } from "./AppView";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./MyFavoriteRecipe.css";

export const MyFavoriteRecipe = () => (


    <>
        <NavBar />
        <AppView />
    </>

);