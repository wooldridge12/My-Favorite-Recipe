import React, { useContext, useEffect } from "react"
import "./Page.css"
import { LikeContext } from "./PageProvider"

export const PageList = () => {
    const { likes, getLikes } = useContext(LikeContext)
    useEffect(() => {
        console.log("CustomerList: useEffect - getLikes")
        getLikes()
    }, [])

    

    return(
        <section className="likes">
            {
                likes.map(like => {
                    return (
                        <div className="like" id={`like--${like.id}`}>
                            <div>
                                {like.id}
                            </div>
                        </div>

                    )
                })
            }
        </section>
    )
}