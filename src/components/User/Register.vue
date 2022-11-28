<template>
	<div>
		<FirstHeader></FirstHeader>
		<div class="regist_container">
			<el-form
				label-position="right"
				:model="registerForm"
				ref="registerForm"
				class="demo-registerForm"
			>
				<el-header style="text-align: center; padding-top: 20px"
					><b>Register</b></el-header
				>
				<el-form-item label="Email" prop="email">
					<el-input
						type="email"
						v-model.lazy="registerForm.email"
						autocomplete="on"
					></el-input>
				</el-form-item>
				<el-form-item label="Name" prop="email">
					<el-input
						type="text"
						v-model="registerForm.name"
						autocomplete="on"
					></el-input>
				</el-form-item>
				<el-form-item label="Password" prop="password">
					<el-input
						type="password"
						v-model="registerForm.password"
						autocomplete="on"
					></el-input>
				</el-form-item>

				<el-form-item label="Confirm Password" prop="c_password">
					<el-input
						type="password"
						v-model="registerForm.c_password"
						autocomplete="on"
					></el-input>
				</el-form-item>

				<el-form-item class="el-btn">
					<el-button
						style="
							background: rgb(146, 195, 93);
							color: white;
							margin-left: 40%;
						"
						type="primary"
						@click="openNotify"
						>Register</el-button
					>
					<p>
						Already have an account?
						<router-link to="/login">Sign in</router-link>
					</p>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import FirstHeader from "../Header/FirstHeader.vue";
export default {
	name: "Register",
	components: {
		FirstHeader,
	},
	data() {
		return {
			registerForm: {
				email: "",
				name: "",
				password: "",
				c_password: "",
			},
		};
	},

	methods: {
		isEmail(emailAdress) {
			let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if (emailAdress.match(regex)) return true;
			else return false;
		},
		isUpper(str) {
			return /[a-z]/.test(str) && /[A-Z]/.test(str);
		},
		hasNumber(password) {
			return /\d/.test(password);
		},
		validatePassword(password) {
			const checklengthPwd = password.length <= 8 ? false : true;
			const checkContainUpperCase = this.isUpper(password);
			const checkContainNumber = this.hasNumber(password);
			console.log(
				checklengthPwd,
				checkContainUpperCase,
				checkContainNumber
			);
			if (checklengthPwd && checkContainNumber && checkContainUpperCase) {
				return true;
			}
			return false;
		},
		openNotify() {
			if (!this.isEmail(this.registerForm.email)) {
				this.$notify.error({
					title: "Error",
					message: "Email không phù hợp, vui lòng nhập lại",
					type: "error",
				});
				return;
			}
			console.log(this.validatePassword(this.registerForm.password));
			if (!this.validatePassword(this.registerForm.password)) {
				this.$notify({
					title: "Warning",
					message:
						"Mật khẩu yêu cầu độ dài trên 8 kí tự, chữ viết hoa & kí tự đặc biệt",
					type: "warning",
				});
				return;
			}
			if (this.registerForm.c_password !== this.registerForm.password) {
				this.$notify({
					title: "Warning",
					message: "Password yêu cầu trùng khớp !",
					type: "warning",
				});
				return;
			}
			this.handleRegister();
			// this.loading=true
		},

		async handleRegister() {
			console.log(this.registerForm);
			try {
				const res = await this.$store.dispatch("auth/register", {
					...this.registerForm,
				});
				console.log(res);
				setTimeout(() => {
					this.$router.push("/login");
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style>
.regist_container {
	padding-top: 100px;
	width: 40%;
	margin: auto;
}
</style>
