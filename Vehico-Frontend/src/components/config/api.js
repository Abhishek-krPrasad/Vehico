import axios from "axios";

export const API_URL = "http://localhost:8080";

// export const api = axios.create({
//   baseUrl:API_URL,
// headers : {
//   "Content-Type":"application/json",
// }
// })

export const loginServices = async (payload) => {
  try {
    const response = await axios.post(API_URL + "/api/auth/login", payload);

    return response;
  } catch (error) {
    console.log("when error comes", error);
    return error;
  }
};

export const  registerServices = async (payload) => {
  try {
    const response = await axios.post(API_URL + "/api/auth/signup",payload);

    return response;
  } catch (error) {
    console.log("Error : ",error);
    return error
  }
}

export const getbooking = async (token) => {
  try {
    const res = await axios.get(API_URL + "/api/customer/bookings", {
      headers: {
        Authorization: `Bearer ${token}`, // Replace 'token' with your actual token variable
      },
    });
  } catch (error) {
    console.log("error");
    return error;
  }
};

export const getCustomerData = async (token)=>{
  try {
    const res = await axios.get(API_URL+"/api/customer/profile/data",{
      headers:{
        Authorization:`Bearer ${token},`
      },
    })
    return res;
  } catch (error) {
    console.log("error : ",error);
    return error;
  }

}
export const getAdminData = async (token)=>{

  try {
    const res = await axios.get(API_URL+"/api/admin/profile/data",{
      headers:{
        Authorization:`Bearer ${token},`
      },
    })
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
  
}

export const addVehicleService = async (token, payload) => {
  try {
    const res = await axios.post(`${API_URL}/api/admin/vehicles`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return res.data; // Return the response data
  } catch (error) {
    console.error("Error adding vehicle:", error.response?.data || error.message);
    throw error; // Re-throw the error to handle it in the calling function
  }
};


export const getAllVehiclesService = async(token)=>{
  try {
    const res = await axios.get(`${API_URL}/api/admin/vehicles`,{
      headers:{
        Authorization:`Bearer ${token}`,
      }
    })

    return res;
  } catch (error) {
    console.log("Error getting vehicles : ",error);
  }
}

export const  sendBookingRequest = async (payload) => {
  try {
    const response = await axios.post(API_URL + "/api/customer/bookings",payload);

    return response;
  } catch (error) {
    console.log("Error : ",error);
    return error
  }
}