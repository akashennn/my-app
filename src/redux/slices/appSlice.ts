import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Posts } from '../../types';

interface InitialState {
    posts: Posts;
}

const initialState: InitialState = {
    posts: [],
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Posts>) => {
            state.posts = action.payload
        },
    },
})

// exports
// fns
export const { setPosts } = appSlice.actions

// values
export const getPosts = (state: RootState) => state.app.posts

// reducer as default
export default appSlice.reducer