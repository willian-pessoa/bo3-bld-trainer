import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// slices
import userReducer from "./userSlice/userSlice";
import configTimerReducer from "./configTimerSlice/configTimerSlice";

const persistConfig = {
    key: "root",
    storage,
} 

const rootReducer = combineReducers({
    user: userReducer,
    configTimer: configTimerReducer,
})

export default persistReducer(persistConfig, rootReducer)