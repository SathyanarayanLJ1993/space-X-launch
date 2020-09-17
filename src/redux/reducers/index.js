import { combineReducers } from "redux";
import SpaceXReducer from "./SpaceXReducer";

const rootReducer = combineReducers({
  spaceX: SpaceXReducer,
});

export default rootReducer;
