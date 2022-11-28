<template>
	<div>
		<Header></Header>
		<h2 style="text-align: center; padding-top: 20px">
			<b>{{ detail.contentTitle[1] }}</b>
		</h2>
		<el-row :gutter="20">
			<el-col :span="12">
				<div>
					<img src="../../assets/mall.png" alt="" />
				</div>
			</el-col>
			<el-col :span="12">
				<div>
					<h3>{{ detail.contentTitle[0] }}</h3>
					<p>{{ detail.content[0] }}</p>
					<p>{{ detail.content[1] }}</p>
					<p>{{ detail.content[2] }}</p>
					<button
						style="
							color: white;
							background: green;
							border-radius: 7px;
							cursor: pointer;
							text-decoration: none;
						"
					>
						<router-link to="/footer">Đọc tiếp</router-link>
					</button>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import Header from "../Header/Header.vue";
export default {
	components: {
		Header,
	},

	data() {
		return {
			detail: {
				contentTitle: [
					"Phát Triển & Tích Hợp Hệ Thống Quản Lý Trung Tâm Thương Mại",
					"Tin tức mới nhất",
				],
				content: [
					"– Mất nhiều thời gian để tạo tài liệu so sánh đơn giá xây dựng trung tâm thương mại và lưu trữ dữ liệu sang excel trong môi trường cục bộ.",
					"– Tất cả dữ liệu báo giá đều được phân phối và quản lý trên server dưới dạng file excel nên rất khó để trích xuất dữ liệu.",
					"– Khách hàng muốn hệ thống hóa toàn bộ số liệu báo giá và đánh giá các báo giá này từ nhà cung cấp xây dựng qua 1 hệ thống.",
				],
			},
		};
	},
};
</script>

<style></style>
