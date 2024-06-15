import UserProfile from "@/components/UserProfile";

export default function UserPage() {
	return (
		<UserProfile
			user={{ id: 1, nickname: "ha", email: "ha@ha.ha", image: "no" }}
		/>
	);
}
