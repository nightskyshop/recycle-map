import LocalStorage from "@/lib/LocalStorage";
import axios from "axios";
import SessionStorage from "@/lib/SessionStorage";

const axiosInstance = axios.create({
	baseURL: "https://13.125.162.165",
});

// axiosInstance.interceptors.response.use(
// 	async function (response) {
// 		// 요청이 전달되기 전에 작업 수행
// 		console.log(response["msg"]);

// 		if (response["msg"] == "Token has expired") {
// 			const { data } = await axios.post("http://13.125.162.165:8080/refresh", {
// 				headers: {
// 					Authorization: `Bearer ${LocalStorage.getItem("refreshToken")}`,
// 				},
// 			});
// 			console.log(data);
// 		}
// 		return response;
// 	},
// 	async function (error) {
// 		// 요청 오류가 있는 경우 작업 수행
// 	}
// );

export default axiosInstance;
