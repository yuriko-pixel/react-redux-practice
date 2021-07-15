import { configureStore } from "@reduxjs/toolkit";
import counterReducder from './counter'

export default configureStore({
    reducer: {
        counter: counterReducder
    }
})