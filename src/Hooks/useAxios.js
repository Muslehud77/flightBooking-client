import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000/api",
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
