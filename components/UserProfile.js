import styles from "./UserProfile.module.css";

export default function UserProfile() {
	return (
		<div className={styles.user}>
			<img
				className={styles.user__image}
				src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JTIzaW1hZ2V8ZW58MHx8MHx8fDA%3D"
				width={300}
				height={300}
			/>

			<h1 className={styles.user__username}>Username</h1>

			<p className={styles.user__content}>content</p>
		</div>
	);
}
