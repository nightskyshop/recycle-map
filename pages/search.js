import ItemList from "@/components/ItemList";
import SearchBar from "@/components/SearchBar";
import styles from "@/styles/Search.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axiosInstance from "@/lib/axios";
import SessionStorage from "@/lib/SessionStorage";

export default function Search() {
	const router = useRouter();

	const searchQuery = router.query["q"];

	const [itemList, setItemList] = useState(null);

	const getSearchTrash = async () => {
		const { data } = await axiosInstance
			.post("/trash/search", { word: searchQuery })
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
				<SearchBar searchQuery={searchQuery} />

				<hr />

				<ItemList itemList={itemList} />
			</div>
		</>
	);
}
