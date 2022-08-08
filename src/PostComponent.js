import React from "react";
import { useState } from "react";
import "./PostComponent.scss"
import { useDispatch } from "react-redux";
import { addAction } from "./redux/actions";

const PostComponent = ({data}) => {
    const {author, content, image, date, likes, comments, reposts, id} = data;
    const {name, photo, nickname} = author;
    const dispatch = useDispatch()

    let [like, setLike] = useState(false)
    let [comment, setComment] = useState(false)
    let [repost, setRepost] = useState(false)

    function handleLikes(e) {
        let div = e.target.closest('div');
        setLike(like = !like)
        like ? div.classList.add('clicked') : div.classList.remove('clicked')
        let act = like;
        let type = 'likes';
        dispatch(addAction(id, type, act))
    }

    function handleComments(e) {
        let div = e.target.closest('div');
        setComment(comment = !comment)
        comment ? div.classList.add('clicked') : div.classList.remove('clicked')
        let act = comment;
        let type = 'comments';
        dispatch(addAction(id, type, act))
    }

    function handleReposts(e) {
        let div = e.target.closest('div');
        setRepost(repost = !repost)
        repost ? div.classList.add('clicked') : div.classList.remove('clicked')
        let act = repost;
        let type = 'reposts';
        dispatch(addAction(id, type, act))
    }

    return (
        <div className="post">
            <img src={photo} alt="" className="photo"/>
            <div>
                <div className="header">{name} <span>{nickname} · {date}</span></div>
                <div className="content">{content}</div>
                <img src={image} alt="" className="image"/>
                <div className="icons">
                    <div className="icon" id="likes" onClick={handleLikes}>
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z"/></g></svg>
                        <span>{likes}</span>
                    </div>
                    <div className="icon" id="comments" onClick={handleComments}>
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M20,0H4A4,4,0,0,0,0,4V16a4,4,0,0,0,4,4H6.9l4.451,3.763a1,1,0,0,0,1.292,0L17.1,20H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,16a2,2,0,0,1-2,2H17.1a2,2,0,0,0-1.291.473L12,21.69,8.193,18.473h0A2,2,0,0,0,6.9,18H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"/><path d="M7,7h5a1,1,0,0,0,0-2H7A1,1,0,0,0,7,7Z"/><path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"/><path d="M17,13H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"/></svg>
                        <span>{comments}</span>
                    </div>
                    <div className="icon" id="reposts" onClick={handleReposts}>
                        <svg className="svg" id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm7.5 17v-.5a7.5 7.5 0 0 0 -15 0v.5a1 1 0 0 0 2 0v-.5a5.5 5.5 0 0 1 11 0v.5a1 1 0 0 0 2 0zm9-5a7 7 0 0 0 -11.667-5.217 1 1 0 1 0 1.334 1.49 5 5 0 0 1 8.333 3.727 1 1 0 0 0 2 0zm-6.5-9a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5z"/></svg>   
                        <span>{reposts}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostComponent;