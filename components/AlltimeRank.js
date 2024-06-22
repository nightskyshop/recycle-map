import Link from "next/link";
import styles from "./AlltimeRank.module.css";

export default function AlltimeRank({ ranking }) {
	return (
		<table className={styles.rank__table}>
			<caption className={styles.rank__caption}>분리수거 랭킹</caption>

			<thead className={styles.rank__thead}>
				<tr>
					<th scope="col">순위</th>
					<th scope="col"></th>
					<th scope="col">닉네임</th>
					<th scope="col">포인트</th>
				</tr>
			</thead>

			<tbody className={styles.rank__tbody}>
				{ranking.map((user, index) => (
					<tr key={index}>
						<th scope="row">{index + 1}.</th>
						<td>
							<Link href={`/user/${user.id}`}>
								<img
									width={40}
									height={52}
									src={user.image}
									alt="Profile Image"
									className={styles.user__rank_image}
								/>
							</Link>
						</td>
						<td>{user.nickname}</td>
						<td>{user.point}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
