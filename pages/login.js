import styles from "@/styles/Form.module.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Login() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.main}>
			<Link href="/" className={styles.back__link}>
				<FontAwesomeIcon icon={faArrowLeft} className={styles.back__icon} />
			</Link>

			<form className={styles.form} onSubmit={handleSubmit}>
				<input type="email" placeholder="이메일" />
				<input type="password" placeholder="비밀번호" />
				<button>로그인</button>
			</form>

			<hr />

			<Link className={styles.other__btn} href="/signup">
				회원가입
			</Link>
		</div>
	);
}
