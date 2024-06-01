import ItemDetail from "@/components/ItemDetail";
import styles from "@/styles/Item.module.css";

export default function Item() {
	const item = {
		id: 1,
		name: "페트병",
		description: "플라스틱류",
		disposal_method:
			"페트병은 내용물을 완전히 비우고 물로 헹구어서 세척한 후 재활용함에 버려야 합니다.",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqsBCYywWsuST6quJLJZ5fvb_60JyAPMgBg&s",
	};

	return (
		<div className={styles.item}>
			<ItemDetail item={item} />
		</div>
	);
}
