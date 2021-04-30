import { get, post } from "./http";

export default {
  getHomeListApi: p => get("v1/home/" + p), //获取首页用户信息
  getUserInfos: () => get("v1/user"), //获取个人信息
  testApi:()=>get('/options/pairTimeLi')
};

// export const loginApi = p => post("v1/authorizations", p);
// //相片支付
// export const payPhoto = data => post('v1/pay_user/' + data.user_id, data);
//
// //动态
// export const timeLine = {
//   timeLinePublishApi: p => post("v1/feeds", p), //发布动态
//   timeLineListApi: ([p, q]) => get("v1/feeds/list?type=" + p + "&last_id=" + q), //获取动态列表
//   videoPubApi: (p, q) => upload("v1/video", p, q), //上傳視頻
//   upoadBase64: p => post("v1/images/base64", p), //上傳base64
//
//   othersdDynamic: data => get("v1/feeds/users/" + data) //他人动态
// };
// //約會
// export const appointment = {
//   getAppointmentListApi: data =>
//     get("v1/dating/list?page=" + data + "&limit=10"), //獲取約會列表
//   getOptionApi: () => get("v1/dating/setting"), //約會表單選項
//   pubApi: p => post("v1/dating/add", p), //發佈約會
//   getDateInfo: data => get("v1/dating/detail?id=" + data), //约会详情
//   joinDate: data => post("v1/dating/" + data + "/join"), //參加約會
//   getDateList: data => get("v1/dating/" + data + "/users"), //參加約會列表
//   getMyMeetList:data => get("v1/dating/my_list?status="+JSON.parse(data).status+'&page='+JSON.parse(data).page+'&limit=10'),//我的约会列表
//   kickPeople:data=>post('v1/dating/'+data.id+'/del/'+data.uid),//約會踢人
// 	getAreaDate:data=> get("v1/dating/list?page=" + data.page + "&limit=10&dating_place="+data.area),
// };
// //聊天
// export const chat = {
//   getImTokenApi: () => get("v1/im/get_token"),
//   getChatListApi: p => post("v1/im/username_avatar", p),
//   getChatPreApi: (p) => get('v1/im/user_info/' + p) //對話信息準備
// };
//
// //獲取其他用戶信息
// export const getOtherUserInfosApi = data => get("v1/users/" + data);
// //獲取自己的信息
// export const getMineUserInfosApi = data => get("v1/user");
// //獲取自己的消息資料
// export const getMineProfile = data => get("v1/user/profile");
// //獲取自己的相冊列表
// export const getMineAlbum = data => get("v1/user/album_list");
// //獲取動態列表
// export const getDynamicList = data => get("v1/feeds/users/" + data);
// //打招呼列表
// export const sayHi = data => get("v1/user/notifications?page="+data+"&limit=10");
// //打招呼
// export const hello = data => post("v1/user/hi");
//
// //喜欢 拉黑api
// export const likeApis = {
//   addLike: data => post("v1/user/add_like", data), //我喜歡的
//   blackApi: p => post("v1/user/add_black", p), //拉黑
//   delLike: data => post("v1/user/del_like/" + 1, data), //1不喜歡· 2拉黑
//   likeMeListApi: p =>
//     get("v1/user/operation/me?page=" + p + "&limit=10&type=1"), //获取喜歡我的
//   lSndBListApi: ([p, q]) =>
//     get("v1/user/like_back/" + p + "?page=" + q + "&limit=10"), //获取我喜歡的和黑名單
//   meLike: p => get("v1/user/operation/others?page=" + p + "&limit=10&type=1"), //获取我喜歡的
//   lookedMe: p => get("v1/user/operation/me?page=" + p + "&limit=10&type=3"), //誰看過我
//   lookHistory: data =>
//     get("v1/user/operation/others?page=" + data.page + "&limit=10&type=3"), //获取我喜歡的
//   blackList: data =>
//     get("v1/user/operation/others?page=" + data.page + "&limit=10&type=2"), //获取我喜歡的
//   delBlack: p => post("v1/user/del_black/" + 2, { op_user_id: p.op_user_id }) //取消拉黑
// };
//
// export const wallet = {
//   rechargeListApi: () => get("v1/recharge/list"), //充值產品列表
//   widthdrawApi: p => post("v1/user/draw", p), //提現申請
//   constListApi: p => get("v1/bill/list?page=" + p + "&limit=10"), //禮物流水記錄
//   rechargeApi: p => post("v1/user/recharge", p), //充值
//   rechargeOrderListApi: ([p, q]) => post("v1/user/recharge/list/" + p, q), //充值訂單列表
//   rechargeOrderDetialApi: p => get("v1/user/recharge/detail/" + p), //充值訂單詳情
//   widthdrawListApi: p => get("v1/user/draw_list?page=" + p + "&limit=10"), //提現記錄列表
//   payApi: p => get("v1/vip/buy?id=" + p), //vip支付
//   handleWithdraw: data => post("v1/user/draw", data),
//   payVip:data=>post('v1/vip/buy',data),//购买vip
//   subscribeVip:data=>post('v1/vip/subscribe',data),//訂閱vip
//   buyRecord:data=>post('v1/user/recharge/list/0',data),//購買記錄
//   getBankNameList:data=>get('v1/draw/bank'),//银行名称
// };
//
// //上傳个人档案信息
// export const postProfileApi = data => post("v1/user/profile", data);
// //搜索
// export const searchPerson = ([page, data]) =>
//   post("v1/search?page=" + page + "&limit=10", data);
// //三方登錄
// export const otherLogins = data => post('v1/socials/'+JSON.parse(data).social_type+'/authorizations',JSON.parse(data))
//
//
// //設定
// export const setting = {
//   uploadBigHead: data => post("v1/user/upload_avatar", data), //上传大头贴
//   bigHeadList: data => get("v1/user/avatar_list"), //大頭貼列表
//   delBigHead: data => get("v1/user/avatar_del?img_id=" + data) //删除大头贴
// };
// export const album = {
//   getAlbumListApi: () => get("v1/user/album_list"), //獲取相冊列表
//   deleteAlbumApi: p => get("v1/user/album_del?img_id=" + p), //刪除相冊
//   pubAlbumApi: p => post("v1/user/album_upload", p), //上傳
//   pubBase64AlbumApi: p => post("v1/images/base64", p), //上傳base64
//   setAlbumApi: p => post("v1/user/album", p), //相冊設置
//   getFirePic: data => get("v1/user/album_find", data), //阅后即焚图片
//   setPhotoPropApi: data => post("v1/user/album", data),
//   uploadAlbumItem: data => post("v1/user/album_upload", data) //上傳修改相片
// };
// //vip
// export const vip = {
//   getVipListApi: () => get("v1/vip/list") //獲取充值產品列表
// };
// export const uploadImgBase64 = data => post("v1/images/base64", data); //上傳base64
//
// export const getLineQr = () => get('v1/site_setting');