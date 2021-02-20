import axios from "axios";

export function callUserDetails(page) {
  return (dispatch) => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((data) => {
      dispatch({ type: "usersList", payload: data });
    });
  };
}

export const sortuserAction = (data) => {
  return (dispatch) => {
    dispatch({ type: "sort", data });
  };
};
