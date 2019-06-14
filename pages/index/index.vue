<template>
	<view class="loginpage">
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">Username</view>
				<input class="uni-input" focus placeholder="Username" @input="getUserName"/>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Password</view>
				<input class="uni-input" password type="text" placeholder="Password" @input="getUserPass"/>
			</view>
			<view class="uni-padding-wrap uni-common-mt"><button type="primary" @click="login">Login</button></view>
		</view>
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
	onLoad() {},
	methods: {
		getUserName: function(event){
			this.userName = event.target.value;
		},
		getUserPass: function(event){
			this.userPass = event.target.value;
		},
		login: function(){
			uni.redirectTo({
				url: '../info/info?userName=' + this.userName + '&userPass=' + this.userPass
			});
		}
	}
};
</script>

<style></style>
