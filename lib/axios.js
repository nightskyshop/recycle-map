import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://3.35.4.197:8000",
});

export default axiosInstance;
