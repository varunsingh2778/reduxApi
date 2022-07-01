import axios from "axios"

export const fetchData = () => {
  return async (dispatch) => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(action(data.data));
  }
}

export const action = (data) => {
  return {
    type: 'ITEMS',
    payload: data
  }
}