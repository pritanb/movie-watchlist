/*
  Three Actions for Auth:
    1. Start (onClick of login)
    2. Success 
    3. Failure 
    4. Logout
*/

export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const logout = () => ({
  type: "LOGOUT",
});