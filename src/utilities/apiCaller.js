import axios from "axios";
import { api } from "../configs";

class userApi {

  resetPassword(data) {
      let response =  axios.post(`${api}/SignIn/forgotPassword`,
      {
          email: data.userEmail,
      }
      
      )
      return response;
  }
}


const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const publicGet = async (endpoint) => {
  const response = await axios.get(`${api}${endpoint}`, config);
  return response.data;
};

export const publicPost = async (endpoint, body) => {
  const response = await axios.post(`${api}${endpoint}`, body, config);
  return response.data;
};

export const privateGet = async (endpoint, token) => {
  config.headers.Authorization = `Bearer ${token}`;
  const response = await axios.get(`${api}${endpoint}`, config);
  return response.data;
};

export const privatePost = async (endpoint, token, body) => {
  config.headers.Authorization = `Bearer ${token}`;
  const response = await axios.post(`${api}${endpoint}`, body, config);
  return response.data;
};

export const privatePut = async (endpoint, token, body) => {
  config.headers.Authorization = `Bearer ${token}`;
  const response = await axios.put(`${api}${endpoint}`, body, config);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default new userApi();