<template>
	<div>
		<Header></Header>
		<div>
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
				<el-table-column align="right">
					<template slot-scope="scope">
						<el-button
							size="mini"
							type="danger"
							@click="handleDelete(scope.row.id)"
							>Delete</el-button
						>
					</template>
				</el-table-column>
			</el-table>
		</div>
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
			dialogVisible: false,
		};
	},
	created() {
		contactService.getList().then((res) => {
			console.log("contact", res);
			this.tableData = res;
		});
	},
	methods: {
		handleDelete(id) {
			console.log("id:", id);
			contactService.delete(id).then((res) => {
				this.$message(res);
				this.$router.push("/contact");
			});
		},
		handleClose(done) {
			this.$confirm("Are you sure to close this dialog?")
				.then((_) => {
					done();
				})
				.catch((_) => {});
		},
	},
	components: {
		Header,
	},
};
</script>
<style></style>
