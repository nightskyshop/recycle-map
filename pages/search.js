import ItemList from "@/components/ItemList";
import SearchBar from "@/components/SearchBar";
import styles from "@/styles/Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Search() {
	const router = useRouter();

	const searchQuery = router.query["q"];

	const [itemList, setItemList] = useState(null);

	useEffect(() => {
		if (searchQuery) {
			if (searchQuery == "김치") {
				setItemList([
					{
						id: 1,
						name: `${searchQuery}`,
						description: "음식물쓰레기",
						disposal_method:
							"상해서 먹지 못하는 김치는 김장 양념을 물에 한번 헹군 후 음식물쓰레기로 버려요. 가정에서 배출하는 소량의 김치국물은 하수구로 보...",
						image:
							"https://blisgo.com/wp-content/uploads/elementor/thumbs/%EA%B9%80%EC%B9%98-ppkv9je40ttcrgmfl26ptg8zgw36unnjpns2sk95hc.jpg",
					},
				]);
			} else {
				setItemList([]);
			}
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
