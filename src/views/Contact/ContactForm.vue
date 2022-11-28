<template>
	<div>
		<Header></Header>
		<h2 class="intro">Let us know about <span>yourself</span></h2>
		<div style="text-align: center">
			Whether you have questions or you would just like to say hello,
			contact us.
		</div>
		<el-form
			:model="contactForm"
			:rules="rules"
			ref="contactForm"
			label-width="120px"
			class="form-contact"
			label-position="top"
		>
			<el-form-item label="NAME" prop="name">
				<el-input v-model="contactForm.name"></el-input>
			</el-form-item>
			<el-form-item label="EMAIL" prop="email">
				<el-input v-model="contactForm.email"></el-input>
			</el-form-item>
			<el-form-item label="PHONE" prop="phone">
				<el-input v-model="contactForm.phone"></el-input>
			</el-form-item>
			<el-form-item label=" SUBJECT" prop="subject">
				<el-input v-model="contactForm.subject"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submitForm('contactForm')"
					>Submit</el-button
				>
				<el-button @click="resetForm('contactForm')">Reset</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import { isEmail, isPhoneNumber } from "@/utils/validate";
import Header from "@/components/Header/Header.vue";
import contactService from "@/services/contact.js";
export default {
	data() {
		return {
			contactForm: {
				name: "",
				email: "",
				phone: "",
				subject: "",
			},
			rules: {
				name: [
					{
						required: true,
						message: "Please input Activity name",
						trigger: "blur",
					},
				],
				email: [
					{
						required: true,
						message: "Please select Activity zone",
						trigger: "change",
					},
				],
				phone: [
					{
						required: true,
						message: "Please fill in this field",
						trigger: "change",
					},
				],
				subject: [
					{
						required: true,
						message: "Please fill the subject",
						trigger: "change",
					},
				],
			},
		};
	},
	methods: {
		handlePushDetail() {
			this.$router.push("/contactList");
		},
		submitForm(formName) {
			if (!isEmail(this.contactForm.email)) {
				this.$notify.error({
					title: "Error",
					message: "Invalid Email, please re-enter !!",
				});
				return;
			}
			console.log(isPhoneNumber(this.contactForm.phone));
			if (!isPhoneNumber(this.contactForm.phone)) {
				this.$notify.error({
					title: "Error",
					message:
						"Your phone number must be betwenn 10-11 digits numeric",
				});
				return;
			}

			this.$refs[formName].validate((valid) => {
				if (valid) {
					contactService.create(this.contactForm).then((res) => {
						this.$notify({
							title: "Success",
							message: res,
							type: "success",
						}),
							contactService.getList();
						this.$router.push("/contactlist");
					});
				} else {
					console.log("error submit!!");
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
	},
	components: {
		Header,
	},
};
</script>

<style>
span:hover {
	color: #377dff;
}
.intro {
	text-align: center;
	color: #377dff;
	margin-top: 6rem;
}

.form-contact {
	width: 30%;
	margin: 2.5rem auto;
}
</style>
