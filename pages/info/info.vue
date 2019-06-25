<template>
	<view class="infopage">
		<view class="uni-padding-wrap uni-common-mt"><button type="primary" @click="addOrder">addOrder</button></view>
		<view class="uni-padding-wrap uni-common-mt"><button type="primary" @click="addMsg">addMsg</button></view>
		<view class="uni-padding-wrap uni-common-mt"><button type="primary" @click="lists">lists</button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userName: '',
			userPass: ''
		};
	},
	onLoad(event) {
		this.userName = event.userName;
	},
	methods: {
		addOrder: function(){
			uni.navigateTo({
				url: '../addOrder/addOrder'
			});
		},
		addMsg: function(){
			uni.navigateTo({
				url: '../addMsg/addMsg'
			});
		},
		lists:function(){
			uni.navigateTo({
				url:'../lists/lists'
			})
		}
	}
};
</script>

<style></style>
