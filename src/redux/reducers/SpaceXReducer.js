import * as spaceConstants from "../constants";

const initialState = { list: [], isLoading: false, error: "", success: true };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case spaceConstants.LAUNCH_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
      break;

    case spaceConstants.LAUNCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        error: "",
        list: action.list,
      };
      break;

    case spaceConstants.LAUNCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: false,
        error: action.error,
        list: [],
      };
      break;

    default:
      return initialState;
  }
}
