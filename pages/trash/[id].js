import ItemDetail from "@/components/ItemDetail";
import axiosInstance from "@/lib/axios";
import styles from "@/styles/Item.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Item() {
	const router = useRouter();
	const id = router.query["id"];

	const [item, setItem] = useState({});

	const getItem = async () => {
		const { data } = await axiosInstance.get(`/trash/data/${id}`);
		setItem(data);
	};

	useEffect(() => {
		if (id) {
			getItem();
		}
	}, [id]);

	if (!item) return <div>로딩중...</div>;

	return (
		<div className={styles.item}>
			<ItemDetail item={item} />
		</div>
	);
}
