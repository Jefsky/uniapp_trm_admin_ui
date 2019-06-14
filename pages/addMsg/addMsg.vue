<template>
	<view>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">Orderid</view>
				<input class="uni-input" focus placeholder="Orderid" v-model="orderId" @input="getOrderId" />
			</view>
			<view class="uni-padding-wrap uni-common-mt"><button type="default" @click="getQrcode">qrcode</button></view>
			<view class="uni-form-item uni-column">
				<view class="title">Datetime</view>
				<input class="uni-input" placeholder="Datetime" @input="getDateTime" v-model="datetime" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Area</view>
				<input class="uni-input" placeholder="Area" @input="getArea" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Explain</view>
				<view class="uni-textarea"><textarea placeholder="Explain" auto-height @input="getExplain" /></view>
			</view>
			<view class="uni-padding-wrap uni-common-mt"><button type="primary" @click="submit">submit</button></view>
			<view class="uni-padding-wrap uni-common-mt"><button type="default" @click="goBack">back</button></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderId: '',
			datetime: '',
			area: '',
			explain: ''
		};
	},
	onLoad() {},
	onReady() {
		this.datetime = this.getCurrentDate();
	},
	methods: {
		getCurrentDate: function() {
			var date = new Date();
			var sign1 = '-';
			var sign2 = ':';
			var year = date.getFullYear(); // 年
			var month = date.getMonth() + 1; // 月
			var day = date.getDate(); // 日
			var hour = date.getHours(); // 时
			var minutes = date.getMinutes(); // 分
			var seconds = date.getSeconds(); //秒
			// var weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
			// var week = weekArr[date.getDay()];
			// 给一位数数据前面加 “0”
			if (month >= 1 && month <= 9) {
				month = '0' + month;
			}
			if (day >= 0 && day <= 9) {
				day = '0' + day;
			}
			if (hour >= 0 && hour <= 9) {
				hour = '0' + hour;
			}
			if (minutes >= 0 && minutes <= 9) {
				minutes = '0' + minutes;
			}
			if (seconds >= 0 && seconds <= 9) {
				seconds = '0' + seconds;
			}
			var currentdate = year + sign1 + month + sign1 + day + ' ' + hour + sign2 + minutes + sign2 + seconds;
			return currentdate;
		},
		getOrderId: function(event) {
			this.orderId = event.target.value;
		},
		getDateTime: function(event) {
			this.dateTime = event.target.value;
		},
		getArea: function(event){
			this.area = event.target.value;
		},
		getExplain: function(event){
			this.explain = event.target.value;
		},
		goBack: function(){
			uni.navigateBack();
		},
		getQrcode: function(){
			let that = this;
			uni.scanCode({
				success: function (res) {
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
					if(that.orderId != ''){
						that.orderId += ',' + res.result;
					}else{
						that.orderId = res.result;
					}
				},
				fail(res) {
					console.error(res);
				}
			})
		}
	}
};
</script>

<style></style>
