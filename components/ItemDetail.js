import styles from "./ItemDetail.module.css";

export default function ItemDetail({ item }) {
	return (
		<div className={styles.itemDetail}>
			<div className={styles.itemDetail__header}>
				<img src={item.image} width={100} height={120} />

				<div className={styles.itemDetail__header_text}>
					<h1>{item.name}</h1>
					<h3>#{item.description}</h3>
				</div>
			</div>

			<p className={styles.itemDetail__content}>{item.disposal_method}</p>
		</div>
	);
}
