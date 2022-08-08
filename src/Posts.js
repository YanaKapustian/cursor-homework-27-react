import React, {useState} from "react";
import PostComponent from "./PostComponent";
import "./PostComponent.scss"
import { addPost } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Posts(props) {
    let [text, setText] = useState('')
    let [link, setLink] = useState('')
    let [select, setSelect] = useState('')
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postReducer.posts)

    function handleTextChange(e) {
        setText(text = e.target.value)
    }

    function handleLink(e) {
        let message = document.querySelector('.message')
        message.innerText = ''
        if (e.target.value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) ) {
            setLink(link = e.target.value)
        } else {
            message.innerText = 'Please enter the valid link'
        }
        
    }

    function handleSelect(e) {
        setSelect(select = e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const message = document.querySelector('.message')
        const textarea = document.querySelector('textarea')
        const photoInput = document.querySelector('.photo-input')
        message.innerText = ''
        if ((text && link && select)) {
            dispatch(addPost(text, link, select))
            textarea.value = ''
            photoInput.value = ''
            setText(text = '')
            setLink(link = '')
        } else {
            message.innerText = 'Please fill out the form'
        }
    }

    return (
        <div className='container'>
            <h2 className="title">Create new post:</h2>
            <form>
                <div className="post-block">
                    <textarea onChange={handleTextChange} placeholder="Type the text here..."></textarea>
                    <div className="autor-block">
                        <input onChange={handleLink} placeholder="Link to the photo" className="photo-input"></input>
                        <select onChange={handleSelect} required defaultValue="Choose an author">
                            <option defaultValue="Choose an author" disabled hidden>Choose an author</option>
                            <option defaultValue="@yana_kapustian">@yana_kapustian</option>
                            <option defaultValue="@dirl_with_flowers">@girl_with_flowers</option>
                            <option defaultValue="@stranger">@stranger</option>
                        </select>
                    </div>
                </div>
                <p className="message"></p>
                <button onClick={handleSubmit} type="submit" className="btn">Add post</button>
            </form>
            {posts.map(post => <PostComponent data={post} key={post.id}></PostComponent>)}
        </div>
    )
}

export default Posts

