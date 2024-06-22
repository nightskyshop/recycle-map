import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
	const router = useRouter();

	useEffect(() => {
		sessionStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");

		router.push("/");
	}, []);

	return <div>로그아웃 진행 중...</div>;
}
