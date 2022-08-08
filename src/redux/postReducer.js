import { ADD_POST, ADD_ACTION } from "./types"
import uniqid from 'uniqid';
import randomNum from "../randomNum";

const initialState = {
  posts: [
    {
      id: uniqid(),
      author: {
        name: "Yana Kapustian",
        photo: 'https://i.ibb.co/yYK0g5Y/1-40.jpg',
        nickname: "@yana_kapustian",
      },
      content: "I was lucky to visit Norway this summer. The views were spectacular!",
      image: 'https://images.unsplash.com/photo-1611771341253-dadb347165a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      date: "15.07.2022",
      likes: randomNum(100, 1000),
      comments: randomNum(20, 80),
      reposts: randomNum(2, 15),
    },
    {
      id: uniqid(),
      author: {
        name: "Emily Smith",
        photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        nickname: "@girl_with_flowers",
        },
      content: "Finally graduated! Now I'm a bachelor of Computer Science!",
      image: 'https://images.unsplash.com/photo-1618355776464-8666794d2520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdyYWR1YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      date: "24.06.2022",
      likes: randomNum(100, 1000),
      comments: randomNum(20, 80),
      reposts: randomNum(2, 15),
    },
    {
      id: uniqid(),
      author: {
        name: "Liam Weikko",
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        nickname: "@stranger",
        },
      content: "Meet Rosie! My new cat!",
      image: 'https://images.unsplash.com/photo-1518288774672-b94e808873ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80',
      date: "20.06.2022",
      likes: randomNum(100, 1000),
      comments: randomNum(20, 80),
      reposts: randomNum(2, 15),
    },
  ]}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
          let posts = [...state.posts]
          let user = posts.find(user => user.author.nickname === action.payload.select)
          
          posts.unshift({
              id: uniqid(),
              author: {
                  name: user.author.name,
                  photo: user.author.photo,
                  nickname: action.payload.select,
                  },
              content: action.payload.text,
              image: action.payload.link,
              date: "20.06.2022",
              likes: randomNum(100, 1000),
              comments: randomNum(20, 80),
              reposts: randomNum(2, 15),
          })
          return Object.assign({}, state, {posts})
        }
        case ADD_ACTION: {
          let posts = [...state.posts]
          let userIndex = posts.findIndex(user => user.id === action.payload.id)
          let type = action.payload.type;
          posts[userIndex][type] = action.payload.act ? posts[userIndex][type] + 1 : posts[userIndex][type] - 1;
          return Object.assign({}, state, {posts})
        }
        default: return state;
    }
}
