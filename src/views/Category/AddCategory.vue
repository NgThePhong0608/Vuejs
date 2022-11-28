<template>
	<div>
		<!-- Form -->
		<el-button class="btn btn-primary" text @click="show()"
			>Add Category</el-button
		>

		<el-dialog :visible.sync="dialogFormVisible" title="Add Category">
			<el-form>
				<el-form-item
					label="Category Name"
					:label-width="formLabelWidth"
				>
					<el-input v-model="name" autocomplete="off" />
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogFormVisible = false"
						>Cancel</el-button
					>
					<el-button type="primary" @click="submit"
						>Confirm</el-button
					>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: "AddCategory",
	data() {
		return {
			dialogFormVisible: false,
			name: "",
			formLabelWidth: "120px",
		};
	},
	methods: {
		show() {
			this.dialogFormVisible = !this.dialogFormVisible;
		},
		submit() {
			this.$emit("inputData", this.name);
			this.name = "";
			this.dialogFormVisible = false;
			console.log("check");
		},
	},
};
</script>
<style scoped>
.el-button--text {
	margin-right: 15px;
}
.el-select {
	width: 300px;
}
.el-input {
	width: 300px;
}
.dialog-footer button:first-child {
	margin-right: 10px;
}
</style>
