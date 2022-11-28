<template>
	<el-menu
		class="el-menu-demo"
		mode="horizontal"
		background-color="rgb(146, 195, 93)"
		text-color="#000"
		active-text-color="#fff"
	>
		<el-menu-item
			><img
				src="../../assets/logo.png"
				style="float: left; padding-left: 50px; height: 100%"
		/></el-menu-item>
		<el-menu-item index="1">
			<router-link to="/home">{{ NavbarTitle.title[0] }}</router-link>
		</el-menu-item>
		<el-menu-item index="2"
			><router-link to="/category">{{
				NavbarTitle.title[1]
			}}</router-link></el-menu-item
		>
		<el-menu-item index="3"
			><router-link to="/news">{{
				NavbarTitle.title[2]
			}}</router-link></el-menu-item
		>
		<el-menu-item index="4"
			><router-link to="/about">{{
				NavbarTitle.title[3]
			}}</router-link></el-menu-item
		>
		<el-menu-item index="5">
			<router-link to="/contactForm">
				{{ NavbarTitle.title[4] }}
			</router-link>
		</el-menu-item>

		<el-dropdown
			style="
				float: right;
				padding-top: 20px;
				padding-right: 80px;
				cursor: pointer;
			"
		>
			<span class="el-dropdown-link">
				<i class="el-icon-arrow-down el-icon--right el-icon-user-solid"
					>User</i
				>
			</span>
			<el-dropdown-menu slot="dropdown" class="drop-down">
				<el-dropdown-item>
					<span @click="handleProfile">{{
						dropDownTitle.title[0]
					}}</span>
				</el-dropdown-item>
				<el-dropdown-item>
					<div @click="handleLogout">
						{{ dropDownTitle.title[1] }}
					</div>
				</el-dropdown-item>

				<!-- <el-dropdown-item>
					<div @click="handleChangePassword">
						{{ dropDownTitle.title[2] }}
					</div>
				</el-dropdown-item> -->
			</el-dropdown-menu>
		</el-dropdown>
	</el-menu>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			NavbarTitle: {
				title: ["Home", "Category", "News", "About", "Contact"],
			},
			dropDownTitle: {
				title: ["Profile", "Logout", "Change Password"],
			},
		};
	},
	computed: {
		...mapGetters("auth", ["getUserId"]),
		...mapGetters("auth", ["getUserPassword"]),
	},
	methods: {
		handleProfile() {
			this.$router.push(`/profile/${this.getUserId}`);
		},
		handleLogout() {
			console.log("logout");
			this.$store.dispatch("auth/getLogout").then(() => {
				this.$notify({
					title: "Success",
					message: "Logout Success",
					type: "success",
				});
				setTimeout(() => {
					this.$router.push("/login");
				});
			});
		},
		handleNavigateCategory(id) {
			this.$router.push(`/news/list-news-category/${id}`);
		},
	},
};
</script>

<style>
.el-container {
	min-height: 50px;
	background: rgb(146, 195, 93);
}
.el-header img {
	float: left;
	padding-left: 50px;
	height: 100%;
}
</style>
