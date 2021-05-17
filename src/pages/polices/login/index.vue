<template>
  <view class="container">
    <view class="userBJ">
      <image
        class="userBJimg"
        src="../../../assets/images/index/userBD.png"
        alt=""
      ></image>
    </view>
    <view class="userSR">
      <view class="username " :class="{ borderColor: userFlag }">
        <image
          class="username_img"
          src="../../../assets/images/index/username.png"
          alt=""
        ></image>
        <input
          @focus="userFlag = true"
          @blur="userFlag = false"
          class="weui-input username_input"
          v-model="user.name"
          placeholder="请输入帐号"
        />
      </view>
      <view class="username" :class="{ borderColor: passFlag }">
        <image
          class="username_img"
          src="../../../assets/images/index/password.png"
          alt=""
        ></image>
        <input
          @focus="passFlag = true"
          @blur="passFlag = false"
          class="weui-input username_input"
          v-model="user.password"
          placeholder="请输入密码"
        />
      </view>
      <button class="submit" @tap="submit">提交</button>
    </view>
    <van-notify id="van-notify" />
    <!-- 微信授权模态框 -->
    <view class="modalAuth" v-show="false">
      <view class="Auth_view">
        <view class="wxTitle">微信授权</view>
        <view class="wxImg">
          <!-- <image class="wxlogoImg" src="/images/index/authCode.png" alt=""></image> -->
        </view>
        <view class="Auth_content">
          <view class="content_sq">111111 申请获得以下权限</view>
          <view class="content_hd"
            ><text class="hdy"></text
            >获得你的公开信息（呢称、头像、地区及性别）</view
          >
        </view>
        <view class="Auth_btn">
          <button class="Auth_btn_an">拒绝</button>
          <button class="Auth_btn_an greenAn">
            允许
          </button>
        </view>
      </view>
    </view>

    <!-- 切换账号 -->
    <van-action-sheet
      :show="false"
      title="请选择要切绑的帐号"
    >
      <view
        class="addBack"
        :hidden="false"
        bindtap="backUnitFun"
      >
        <view class="sj"></view>返回
      </view>
      <view class="unitContent">
        <view>
          <!-- <view
            class="unitD"
            wx:for="{{unitList}}"
            wx:key="index"
            wx:for-item="item"
          >
            <view
              class="untiD_name {{item.flag ? 'untiD_active' :''}}"
              bindtap="unitCutover"
              data-id="{{item.id}}"
              data-flag="{{item.flag}}"
              >{{ item.name }}-{{ item.user }}</view
            >
          </view>
        </view> -->

        1
      </view>
      </view>
    </van-action-sheet>
  </view>
</template>

<script>
import Notify from "/src/components/vant/notify/notify.js";
export default {
  data() {
    return {
      //用户变量
      user:{
        name:'',
        password:"",
      },
      //状态变量
      userFlag: false,
      passFlag: false
    };
  },
  methods: {
    submit() {
      Notify("消息通知");
      // console.log(this)
    }
  }
};
</script>

<style>
.container {
  padding-bottom: 30rpx;
}
view {
  box-sizing: border-box;
}
.userBJ {
  text-align: center;
  margin: 120rpx 0;
}
.userBJimg {
  width: 136rpx;
  height: 136rpx;
}
.userSR {
  width: 522rpx;
  margin: 0 auto;
  font-size: 32rpx;
  color: #000000;
}
.username {
  position: relative;
  margin-bottom: 50rpx;
  padding-bottom: 20rpx;
  border-bottom: 1px solid #e4e5e6;
}
.borderColor {
  border-color: #1f56fe;
}

.username_img {
  width: 32rpx;
  height: 32rpx;
  position: absolute;
  top: 6rpx;
  left: 0;
}
.username_input {
  padding-left: 44rpx;
}
.submit {
  background-color: #1f56fe;
  border-radius: 8rpx;
  text-align: center;
  height: 80rpx;
  line-height: 80rpx;
  color: #fff;
  font-size: 32rpx;
  margin-top: 120rpx;
}

.van-dialog__header {
  padding-bottom: 24px !important;
}

/*授权页面*/
.modalAuth {
  /* display: none; */
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
}
.Auth_view {
  width: 80%;
  /* height:500rpx; */
  background-color: #fff;
  border-radius: 8rpx;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
}
.wxTitle {
  padding: 20rpx 0;
  padding-top: 28rpx;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
}
.wxImg {
  text-align: center;
  padding: 22rpx 0;
}
.wxlogoImg {
  width: 60rpx;
  height: 60rpx;
}
.Auth_content {
  padding: 0 46rpx;
  font-size: 28rpx;
}
.content_sq {
  padding-bottom: 14rpx;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.content_hd {
  padding-top: 18rpx;
  color: #ccc;
  line-height: 30rpx;
  font-size: 24rpx;
}
.hdy {
  display: inline-block;
  width: 12rpx;
  height: 12rpx;
  border-radius: 6rpx;
  background-color: #888888;
  margin-right: 6rpx;
}
.Auth_btn {
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 54rpx;
}
.Auth_btn_an {
  flex: 0 0 50%;
  background-color: transparent;
}
.Auth_btn_an::after {
  border: 0;
  border-radius: 0;
  background-color: transparent;
}
.greenAn {
  color: green;
}
.van-dialog__header {
  margin-bottom: 24px;
}

/*绑定单位start*/
/*单位编辑样式*/
.unitContent {
  width: 560rpx;
  margin: 0 auto;
  margin-top: 50rpx;
  /* margin-bottom:400rpx; */
  min-height: 875rpx;
}
.unitD {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36rpx;
}
.untiD_name {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8rpx;
  font-size: 28rpx;
  color: #4d4d4d;
  padding: 20rpx 20rpx;
}
.unitD_btn {
  width: 96rpx;
  height: 64rpx;
  line-height: 64rpx;
  text-align: center;
  font-size: 28rpx;
  color: #ffffff;
  background-color: #fa5e5e;
  border-radius: 8rpx;
}

.untiD_active {
  color: #1f56fe;
  border: 1px solid #668bfe;
  background-color: #e6ecff;
}
.jbBtn {
  background-color: #e6e6e6;
  color: #fff;
}
.newUser {
  background-color: #1f56fe;
  border-radius: 8rpx;
  width: 520rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  font-size: 32rpx;
  color: #fff;
  margin: 0 auto;
  margin-bottom: 36rpx;
}
.addSubmit {
  margin-top: 0rpx;
  margin-bottom: 36rpx;
}
.addBack {
  position: absolute;
  top: 13px;
  left: 40rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32rpx;
  color: #4d4d4d;
}
.sj {
  width: 26rpx;
  height: 24rpx;
  transform: rotate(-135deg);
  border-top: 1px solid #4d4d4d;
  border-right: 1px solid #4d4d4d;
}

/*新增*/
.userSR {
  width: 522rpx;
  margin: 0 auto;
  font-size: 32rpx;
  color: #000000;
}
.username {
  position: relative;
  margin-bottom: 50rpx;
  padding-bottom: 20rpx;
  border-bottom: 1px solid #e4e5e6;
}
.borderColor {
  border-color: #1f56fe;
}

.username_img {
  width: 32rpx;
  height: 32rpx;
  position: absolute;
  top: 6rpx;
  left: 0;
}
.username_input {
  padding-left: 44rpx;
}
.submit {
  background-color: #1f56fe;
  border-radius: 8rpx;
  text-align: center;
  height: 80rpx;
  line-height: 80rpx;
  color: #fff;
  font-size: 32rpx;
  margin-top: 120rpx;
}

/*绑定单位end*/

.container .van-popup {
  border-radius: 8px !important;
}
</style>
