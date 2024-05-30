import ItemSummary from "./ItemSummary";
import styles from "./ItemList.module.css";

export default function ItemList({ itemList }) {
	return (
		<div>
			{!itemList ? (
				<p>로딩 중...</p>
			) : itemList.length == 0 ? (
				<p className={styles.noData}>
					해당하는 데이터를 찾을 수 없습니다... :(
				</p>
			) : (
				itemList.map((item, index) => (
					<ItemSummary key={/*item.id*/ index} item={item} />
				))
			)}
		</div>
	);
}
