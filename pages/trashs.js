import ItemList from "@/components/ItemList";
import { useEffect, useState } from "react";
import styles from "@/styles/Items.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "@/lib/axios";

export default function Items() {
	const [items, setItems] = useState();

	const getItems = async () => {
		const { data } = await axiosInstance
			.get("/trash/data")
			.catch((err) => setItems([]));
		setItems(data);
	};

	useEffect(() => {
		getItems();
	}, []);

	return (
		<div className={styles.items}>
			<ItemList itemList={items} />
		</div>
	);
}
