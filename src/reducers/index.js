import { combineReducers } from "redux";
import Highlights from "./highlights";
import Activityfeed from "./activityfeed";
import Worldmap from './worldmap'

const rootReducer = combineReducers({
    Highlights,
    Activityfeed,
    Worldmap
});




export default rootReducer;
