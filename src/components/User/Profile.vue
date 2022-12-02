<template>
	<div>
		<Header></Header>
		<div class="greeting">Hello: {{ title }}</div>
		<el-row :gutter="20">
			<el-col :span="6" :offset="8">
				<el-form
					label-position="right"
					label-width="100px"
					:model="userProfile"
					size="mini"
				>
					<el-form-item label="User Id :">
						<span>{{ userProfile.id }}</span>
					</el-form-item>
					<el-form-item label="User Name :">
						<span>
							{{ userProfile.name }}
						</span>
					</el-form-item>
					<el-form-item label="User Email :">
						<span>
							{{ userProfile.email }}
						</span>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import Header from "../Header/Header.vue";
import userService from "@/services/users";

export default {
	created() {
		userService.detail(this.$route.params.id).then((response) => {
			this.userProfile = response;
			this.title = response?.name;
		});
	},

	data() {
		return {
			userProfile: {},
			title: "",
		};
	},
	components: {
		Header,
	},
};
</script>

<style>
.greeting {
	text-align: center;
	margin-right: 5rem;
	margin-top: 2rem;
	max-width: 88%;
	font-size: 30px;
	font-weight: 200;
}

.el-row {
	margin-top: 1rem;
}

.uid {
	border: none !important;
	max-width: 50%;
}
</style>
