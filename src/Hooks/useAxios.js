import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://flightbooking-kappa.vercel.app/api",
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
