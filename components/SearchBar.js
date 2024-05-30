import { useRouter } from "next/router";
import styles from "./SearchBar.module.css";

export default function SearchBar({ searchQuery }) {
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.currentTarget;

		const searchInput = form.elements.namedItem("searchInput").value;

		router.push(`/search?q=${searchInput}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="searchInput"
				className={styles.search__input}
				placeholder="분리수거할 제품을 검색해주세요."
				defaultValue={searchQuery}
			/>
		</form>
	);
}
