import { loadState } from "@/lib/storage";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = loadState('like') || {
    likeItem:[],
    likeCount:0
}


const like = createSlice({
    name:"like",
    initialState,
    reducers:{
        addLikeItem:(state,action) => {
            console.log({...action.payload});
            
            const idf = state.likeItem.find((item:any) => item.id === action.payload.id);
            if(!idf){
                return { ...state, likeItem:[ ...state.likeItem , { ...action.payload}]}
            }
            return state;
        },
        removeLikeItem:(state,action) => {
            return { ...state, likeItem: state.likeItem.filter((item:any)=> item.id !== action.payload.id)}
        },
        likeItemCount:(state)=> {
            return {...state , likeCount:state.likeItem.length }
        }
    }
})

export const likeReducer = like.reducer;

export const { addLikeItem, removeLikeItem, likeItemCount} = like.actions
