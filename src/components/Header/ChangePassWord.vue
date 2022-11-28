<template>
	<div>
		<FirstHeader></FirstHeader>
		<div class="change_pass_container">
			<el-form
				:model="passForm"
				status-icon
				:rules="rules"
				ref="passForm"
				label-width="200px"
				class="demo-passForm"
			>
				<el-header style="text-align: center; padding-top: 20px">
					<b>Change Password</b>
				</el-header>
				<el-form-item label="Old Password" prop="pass">
					<el-input
						type="password"
						v-model="passForm.pass"
						autocomplete="on"
					></el-input>
				</el-form-item>
				<el-form-item label="New Password" prop="n_pass">
					<el-input
						type="password"
						v-model="passForm.n_pass"
						autocomplete="on"
					></el-input>
				</el-form-item>
				<el-form-item label="Confirm Password" prop="c_pass">
					<el-input v-model="passForm.c_pass"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button
						type="primary"
						@click="handleChangePW('passForm')"
						>Submit</el-button
					>
					<el-button @click="handlePushBackHome()">Back</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
import FirstHeader from "../Header/FirstHeader.vue";
export default {
	data() {
		var checkAge = (rule, value, callback) => {
			if (!value) {
				return callback(new Error("Please input the age"));
			}
			setTimeout(() => {
				if (!Number.isInteger(value)) {
					callback(new Error("Please input digits"));
				} else {
					if (value < 18) {
						callback(new Error("Age must be greater than 18"));
					} else {
						callback();
					}
				}
			}, 1000);
		};
		var validatePass = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("Please input the password"));
			} else {
				if (this.passForm.checkPass !== "") {
					this.$refs.passForm.validateField("checkPass");
				}
				callback();
			}
		};
		var validatePass2 = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("Please input the password again"));
			} else if (value !== this.passForm.pass) {
				callback(new Error("Two inputs don't match!"));
			} else {
				callback();
			}
		};
		return {
			passForm: {
				pass: "",
				n_pass: "",
				c_pass: "",
			},
			rules: {
				pass: [{ validator: validatePass, trigger: "blur" }],
				checkPass: [{ validator: validatePass2, trigger: "blur" }],
				age: [{ validator: checkAge, trigger: "blur" }],
			},
		};
	},
	methods: {
		handleChangePW(formName) {
			
		},
		handlePushBackHome() {
			this.$router.push("/home");
		},
	},
	components: {
		FirstHeader,
	},
};
</script>

<style>
.change_pass_container {
	padding-top: 100px;
	width: 40%;
	margin: auto;
}
</style>
