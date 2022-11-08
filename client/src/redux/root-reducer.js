import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// slices
import userReducer from "./userSlice/userSlice";

const persistConfig = {
    key: "root",
    storage,
} 

const rootReducer = combineReducers({
    user: userReducer,
})

export default persistReducer(persistConfig, rootReducer)