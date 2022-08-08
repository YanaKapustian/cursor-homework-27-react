import { ADD_POST, ADD_ACTION } from "./types";

export function addPost(text, link, select) {
    return {
        type: ADD_POST,
        payload: {text, link, select}
    }
}

export function addAction(id, type, act) {
    return {
        type: ADD_ACTION,
        payload: {id, type, act}
    }
}