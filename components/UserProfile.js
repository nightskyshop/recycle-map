import styles from "./UserProfile.module.css";

export default function UserProfile({ user }) {
	return (
		<div className={styles.user}>
			<img
				className={styles.user__image}
				src={user.image}
				width={300}
				height={300}
			/>

			<h1 className={styles.user__username}>{user.nickname}</h1>

			<p className={styles.user__content}>{user.email}</p>
		</div>
	);
}
