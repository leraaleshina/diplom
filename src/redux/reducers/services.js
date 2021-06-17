const initialState = {
  items: [],
};

const services = (state = initialState, action) => {
  if (action.type === "SET_SERVICES") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default services;
