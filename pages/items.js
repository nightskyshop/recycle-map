import ItemList from "@/components/ItemList";
import { useEffect, useState } from "react";
import styles from "@/styles/Items.module.css";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Items() {
	const [items, setItems] = useState();

	const getItems = async () => {
		const { data } = await axios
			.get("http://13.209.4.51:8080/api/data")
			.catch((err) => setItems([]));
		setItems(data);
	};

	useEffect(() => {
		getItems();
	}, []);

	return (
		<div className={styles.items}>
			<Link href="/" className={styles.back__link}>
				<FontAwesomeIcon icon={faArrowLeft} className={styles.back__icon} />
			</Link>

			<ItemList itemList={items} />
		</div>
	);
}
