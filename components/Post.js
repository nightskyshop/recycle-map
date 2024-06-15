import styles from "./Post.module.css";

export default function Post({ post }) {
	return (
		<div className={styles.post}>
			<h1>{post.date}</h1>
			<img src={post.image} />
		</div>
	);
}
