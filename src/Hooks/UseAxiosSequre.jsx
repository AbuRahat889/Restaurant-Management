import axios from "axios";

const axiosSequre = axios.create({
  baseURL: 'http://localhost:5000'
});
const UseAxiosSequre = () => {
  return axiosSequre;
};

export default UseAxiosSequre;
