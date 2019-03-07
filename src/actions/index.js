import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchTodos = () => async dispatch => {
  const response = await jsonplaceholder.get("/todos");

  dispatch({
    type: "FETCH_TODOS",
    payload: response.data
  });
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonplaceholder.get(`/todos/${id}`)

  dispatch({
    type: "FETCH_USER",
    payload: response.data
  })
}
