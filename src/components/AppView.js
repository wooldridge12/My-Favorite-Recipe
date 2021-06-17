import React from "react"
import { Route } from "react-router-dom"
import { PageList } from "./PersonalPage/PageLists"
import { LikeProvider } from "./PersonalPage/PageProvider"
import { PostList } from "./Posts/PostLists"
import { PostProvider } from "./Posts/PostProvider"
import { PostForm } from "./Posts/PostingForm"

export const AppView = () => {
    return (
        <>
            
            <LikeProvider>
                <Route exact path="/likes">
                    <PageList />
                </Route>
            </LikeProvider>

            <PostProvider>
                <Route exact path="/posts">
                    <PostList />
                </Route>

                <Route exact path="/posts/create">
                    <PostForm />
                </Route>
            </PostProvider>
        </>
    )
}