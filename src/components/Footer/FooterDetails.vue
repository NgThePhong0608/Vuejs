<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="4"></el-col>
			<el-col :span="16">
				<div>
					<p>{{ detail.content[0] }}</p>
					<p>{{ detail.content[1] }}</p>
					<p>{{ detail.content[2] }}</p>
					<ol>
						<li>
							Tạo ra một môi trường làm việc chuyên nghiệp, năng
							động Con người là trung tâm trong chính sách phát
							triển của CodLUCK. Chúng tôi hướng đến việc xây dựng
							một môi trường trẻ trung, cởi mở – nơi mà mọi thành
							viên đều có thể phát huy hết khả năng của mình, tô
							điểm cho công ty trở nên đa màu sắc nhưng vẫn giữ
							được tinh thần đoàn kết.
						</li>
						<li>
							Mang lại sự hài lòng tuyệt đối cho Khách Hàng Khách
							hàng của CodLUCK sẽ được cung cấp những dịch vụ tốt
							nhất và sự tư vấn nhiệt tình, phù hợp nhất. Chúng
							tôi sẽ biến lựa chọn của Khách hàng thành lựa chọn
							đúng đắn hơn bao giờ hết.
						</li>
						<li>
							Đóng góp cho xã hội Thế giới đang chuyển mình trong
							cuộc cách mạng công nghiệp 4.0. Chuyển đổi kĩ thuật
							số (DX) đang diễn ra nhanh chóng mặt trên nhiều lĩnh
							vực. Sứ mệnh của chúng tôi là đóng góp vào quá trình
							chuyển đổi kỹ thuật số của Việt Nam và của thế giới,
							bằng cách cung cấp các giải pháp DX phù hợp cho
							doanh nghiệp, cho chính phủ và xã hội.
						</li>
					</ol>
				</div>
			</el-col>
			<el-col :span="4"></el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			detail: {
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

<style>
.footer-details {
	display: flex;
	justify-content: center;
	text-align: center;
}
</style>
