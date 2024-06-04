import ItemList from "@/components/ItemList";
import SearchBar from "@/components/SearchBar";
import styles from "@/styles/Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "axios";

export default function Search() {
	const router = useRouter();

	const searchQuery = router.query["q"];

	const [itemList, setItemList] = useState(null);

	const getSearchTrash = async () => {
		const { data } = await axios
			.post("http://3.39.195.20:8080/search", { trash: searchQuery })
			.catch((err) => setItemList([]));

		if (data == []) {
			setItemList([]);
		} else {
			setItemList(data);
		}
	};

	useEffect(() => {
		if (searchQuery) {
			getSearchTrash();
		} else {
			setItemList([]);
		}
	}, [searchQuery]);

	return (
		<>
			<Head>
				<title>Search - {searchQuery}</title>
				<meta name="description" content="Recycle Map Search tab." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.search}>
				<Link href="/" className={styles.back__link}>
					<FontAwesomeIcon icon={faArrowLeft} className={styles.back__icon} />
				</Link>

				<SearchBar searchQuery={searchQuery} />

				<hr />

				<ItemList itemList={itemList} />
			</div>
		</>
	);
}
