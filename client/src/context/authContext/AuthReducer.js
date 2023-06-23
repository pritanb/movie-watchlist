const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        err: false
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        err: false
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        err: true
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        err: true
      };
    default:
      return state;
  }
};

export default AuthReducer