import styles from "./ItemSummary.module.css";
import Link from "next/link";

export default function ItemSummary({ item }) {
	return (
		<div className={styles.itemSummary}>
			<Link href={`/trash/${item.id}`} className={styles.itemSummary__link}>
				<img
					src={item.image}
					alt="Item Photo"
					className={styles.itemSummary__image}
					width={100}
					height={120}
				/>

				<div className={styles.itemSummary__text}>
					<h1>{item.name}</h1>
					<h5>#{item.description}</h5>
					<p>{item.disposal_method.slice(0, 70)}...</p>
				</div>
			</Link>
		</div>
	);
}
