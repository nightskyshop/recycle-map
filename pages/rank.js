import AlltimeRank from "@/components/AlltimeRank";
import axiosInstance from "@/lib/axios";
import styles from "@/styles/Rank.module.css";
import { useEffect, useState } from "react";

export default function Rank() {
	const [ranking, setRanking] = useState();

	const getRank = async () => {
		const { data } = await axiosInstance.get("/ranks");
		setRanking(data);
	};

	useEffect(() => {
		getRank();
	}, []);

	if (!ranking) return <div className={styles.rank}>로딩중...</div>;

	return (
		<div className={styles.rank}>
			<div className={styles.rank__alltime}>
				<AlltimeRank ranking={ranking} />
			</div>
		</div>
	);
}
