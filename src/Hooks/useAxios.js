import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
