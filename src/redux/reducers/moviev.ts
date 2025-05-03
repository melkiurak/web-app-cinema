import { UnknownAction } from "@reduxjs/toolkit";
interface CounterState {
    value: number
}
const movies:CounterState = {
    value:0
}

const movieReducer = (state = movies, action:UnknownAction) => {
    return [...state, action.type]
}