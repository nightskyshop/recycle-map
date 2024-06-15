import axiosInstance from "@/lib/axios";
import styles from "@/styles/Form.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Signup() {
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const form = e.currentTarget;
		const email = form.elements.namedItem("email").value;
		const nickname = form.elements.namedItem("nickname").value;
		const password = form.elements.namedItem("password").value;

		const { data } = await axiosInstance
			.post("/sign_up", {
				email,
				nickname,
				password,
			})
			.catch((err) => {
				alert(err);
			});

		if (data) router.push("/login");
	};

	return (
		<div className={styles.main}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input name="email" type="email" placeholder="이메일" />
				<input name="nickname" type="text" placeholder="닉네임" />
				<input name="password" type="password" placeholder="비밀번호" />
				<button>회원가입</button>
			</form>

			<hr />

			<Link className={styles.other__btn} href="/login">
				로그인
			</Link>
		</div>
	);
}
