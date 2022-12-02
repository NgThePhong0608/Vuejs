<template>
	<div>
		<a href="/login"></a>
		<FirstHeader></FirstHeader>
		<div class="login_container">
			<el-form
				:model="loginForm"
				status-icon
				:rules="rules"
				ref="loginForm"
				label-width="120px"
				class="demo-loginForm"
			>
				<el-header style="text-align: center; padding-top: 20px">
					<b>Sign in</b>
				</el-header>
				<el-form-item style="" label="Email" prop="email">
					<el-input
						type="email"
						v-model="loginForm.email"
						autocomplete="on"
					></el-input>
				</el-form-item>
				<el-form-item label="Password" prop="password">
					<el-input
						type="password"
						v-model="loginForm.password"
						autocomplete="on"
					></el-input>
				</el-form-item>

				<el-form-item class="el-btn">
					<el-button
						style="background: blue; color: white; margin-left: 40%"
						type="primary"
						@click="handleLogin()"
					>
						Login
					</el-button>
					<el-button
						style="background: green; color: white"
						@click="resisterForm('loginForm')"
						type="primary"
					>
						Register
					</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import FirstHeader from "../Header/FirstHeader.vue";
// imp
export default {
	name: "Login",
	components: {
		FirstHeader,
	},

	data() {
		var validateEmail = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("Please input the email"));
			} else {
				if (this.loginForm.email !== "") {
					this.$refs.loginForm.validateField("checkPass");
				}
				callback();
			}
		};
		var validatePass = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("Please input the password again"));
			} else if (value !== this.loginForm.password) {
				callback(new Error("Two inputs don't match!"));
			} else {
				callback();
			}
		};
		return {
			loginForm: {
				email: "",
				password: "",
			},
			rules: {
				email: [{ validator: validateEmail, trigger: "blur" }],
				password: [{ validator: validatePass, trigger: "blur" }],
			},
		};
	},

	methods: {
		handleLogin() {
			// console.log(this.loginForm);
			console.log("success");
			this.$store
				.dispatch("auth/getLogin", { ...this.loginForm })
				.then(() => {
					this.$notify.success({
						title: "Success",
						message: "Login Success",
					});
					setTimeout(() => {
						this.$router.push("/home");
					});
				})
				.catch((err) => {
					console.log(err);
					this.$notify.error({
						title: "Failed",
						message: "Login Failed",
					});
				});
		},
		resisterForm(formName) {
			this.$router.push("/register");
		},
	},
};
</script>

<style>
.login_container {
	padding-top: 100px;
	width: 40%;
	margin: auto;
}
</style>
