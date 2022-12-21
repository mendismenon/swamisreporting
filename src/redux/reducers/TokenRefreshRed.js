import { TOKEN_REFRESH, TOKEN_REFRESH_FAILURE, TOKEN_REFRESH_SUCCESS } from "../actions/TokenRefreshActn";

const initialState = {
    tokenData: {
      isLoading: false,
      error: false,
      data: null,
    },
  };

  const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOKEN_REFRESH: {
            return {
              ...state,
              tokenData: {
                isLoading: true,
                error: false,
                data: null,
              },
            };
          }
          case TOKEN_REFRESH_SUCCESS: {
            return {
              ...state,
              tokenData: {
                isLoading: false,
                error: false,
                data: action.data,
              },
            };
          }
          case TOKEN_REFRESH_FAILURE: {
            return {
              ...state,
              tokenData: {
                isLoading: false,
                error: true,
                data: action.data,
              },
            };
          }
        default: 
        return state;
    }
  }

  export default tokenReducer;