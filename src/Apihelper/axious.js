import axios from "axios";
const Apiend = import.meta.env.NODE_ENV
  ? "/api/v1/tasks"
  : "http://localhost:8000/api/v1/tasks";
console.log(Apiend);
export const Api_post_mehtod = async (data) => {
  const response = await axios.post(Apiend, data);
};
export const getUser = async () => {
  try {
    const response = await axios.get(Apiend);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const updateUser = async (obj) => {
  try {
    const response = await axios.patch(Apiend, obj);
    return console.log(response, obj);
  } catch (error) {
    console.error(error);
  }
};
export const deleteTask = async (data) => {
  // always send the object in delete method
  const obj = { data };
  try {
    const response = await axios.delete(Apiend, obj);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
