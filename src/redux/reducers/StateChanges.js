import { PLAN_SELECT, RESET_STATE, STATE, VERIFY } from "../actions/StateAction";

const initialState = {
  verify: {
    email: "",
  },
  planSelected: {
    date: "",
    tickets: [],
    previousExpand: -1,
    meals: [],
  },
  reportingData: {
    name_of_sales_manager: {
      required: true,
    },
    customer_name: {
      required: true,
    },
    customer_number: {
      required: true,
    },
    customer_requirement: [],
    requirement: "",
    callback_date: "",
    remarks: "",
  },
};

const StateReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY: {
      return {
        ...state,
        verify: {
          email: action.data,
        },
      };
    }
    case PLAN_SELECT: {
      return {
        ...state,
        planSelected: action.data,
      };
    }
    case STATE: {
      return {
        ...state,
        reportingData: action.data,
      };
    }
    case RESET_STATE: {
        return {
            ...state,
            reportingData: initialState.reportingData,
          };
    }
    default: {
      return state;
    }
  }
};
export default StateReducer;
