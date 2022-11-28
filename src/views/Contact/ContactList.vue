<template>
	<div>
		<Header></Header>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="ID" width="180">
			</el-table-column>
			<el-table-column prop="name" label="Name" width="180">
			</el-table-column>
			<el-table-column prop="phone" label="Phone" width="180">
			</el-table-column>
			<el-table-column prop="email" label="Email" width="180">
			</el-table-column>
			<el-table-column prop="subject" label="Subject" width="180">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import contactService from "@/services/contact";

export default {
	name: "Contact",
	data() {
		return {
			tableData: [],
		};
	},
	created() {},

	methods: {
		async getContact() {
			const response = await contactService.getList();
			this.tableData = response.data;
			// contactService.getList().then((res) => {
			// 	console.log("contact", res);
			// 	this.tableData = res;
			// });
		},
	},

	components: {
		Header,
	},
};
</script>

<style></style>
