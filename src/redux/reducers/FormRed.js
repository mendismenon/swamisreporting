import {
  FORM_SUBMIT,
  FORM_SUBMIT_FAILURE,
  FORM_SUBMIT_SUCCESS,
} from "../actions/FormAction";

const initialState = {
  formObj: {
    isLoading: false,
    error: false,
    data: null,
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_SUBMIT: {
      return {
        ...state,
        formObj: {
          isLoading: true,
          error: false,
          data: null,
        },
      };
    }
    case FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        formObj: {
          isLoading: false,
          error: false,
          data: action.data,
        },
      };
    }
    case FORM_SUBMIT_FAILURE: {
      return {
        ...state,
        formObj: {
          isLoading: false,
          error: true,
          data: action.data,
        },
      };
    }
    default:
      return state;
  }
};

export default formReducer;
