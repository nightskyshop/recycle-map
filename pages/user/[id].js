import UserProfile from "@/components/UserProfile";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserPage() {
	const router = useRouter();
	const { id } = router.query;

	const [user, setUser] = useState();

	const getUser = async () => {
		const { data } = await axiosInstance.get(`/user/by_id/${id}`);

		setUser(data);
	};

	useEffect(() => {
		if (id) {
			getUser();
		}
	}, [id]);

	if (!user) return <div>로딩중...</div>;

	return <UserProfile user={user} />;
}
