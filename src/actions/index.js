import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchTodos = () => async dispatch => {
  const response = await jsonplaceholder.get("/todos");

  dispatch({
    type: "FETCH_TODOS",
    payload: response
  });
};
