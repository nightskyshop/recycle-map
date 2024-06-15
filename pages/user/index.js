import UserProfile from "@/components/UserProfile";
import LocalStorage from "@/lib/LocalStorage";
import SessionStorage from "@/lib/SessionStorage";
import axiosInstance from "@/lib/axios";
import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
	const [user, setUser] = useState();

	const getUser = async () => {
		const { data } = await axiosInstance
			.get("/protected", {
				headers: {
					Authorization: `Bearer ${SessionStorage.getItem("accessToken")}`,
				},
			})
			.catch(async (err) => {
				// 요청 오류가 있는 경우 작업 수행
				console.log(err);
				const { data } = await axios.post(
					"https://13.125.162.165/refresh",
					{},
					{
						headers: {
							Authorization: `Bearer ${LocalStorage.getItem("refreshToken")}`,
						},
					}
				);
				console.log(data);
				SessionStorage.setItem("accessToken", data.access_token);
			});

		setUser(data);
	};

	useEffect(() => {
		getUser();
	}, []);

	if (!user) return <div>로딩중...</div>;
	return <UserProfile user={user} />;
}
