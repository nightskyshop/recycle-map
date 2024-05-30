import styles from "./Post.module.css";

export default function Post({ post }) {
	return (
		<div className={styles.post}>
			<h1>{post.createdAt}</h1>

			<div className={styles.img__box}>
				{post.img.map((url, index) => (
					<img key={index} src={url} />
				))}
			</div>
		</div>
	);
}
