import axios from "axios";
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../types"; 
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../types"; 
import { API_URL } from "../../config/api";


export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST }); // Dispatch loading state

  try {
    // Making the POST request to the API
    const { data } = await axios.post(`${API_URL}/api/auth/signup`, reqData.userData);

    // Dispatch success action with the response data
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data, // You can modify based on what data you want to store (e.g., created customer data)
    });
    
    // Optionally, handle any further actions after successful registration (e.g., navigate to login page)
    // For example:
    // history.push('/login');  // If you're using React Router for navigation

  } catch (error) {
    // Dispatch failure action with the error
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response ? error.response.data : "Something went wrong",
    });

    console.error("Error registering user:", error);
  }
};
