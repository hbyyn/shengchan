// pages/order/orderproduct.js
var dateTimePicker = require("../../utils/dateTimePicker.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      client_id: "",
      order_id: "",
      product_id: "",
      order_product_date: "",
      client_creator: "",
      client_createtime: "",
      client_updator: "",
      client_updatetime: ""
    },
    orderIdIndex: 0,
    add_order_id: ["dd11", "dd22", "dd33", "dd44", "dd55", "dd66"],
    productIdIndex: 0,
    add_product_id: ["dd11", "dd22", "dd33", "dd44", "dd55", "dd66"],
    orderProductDateArray: null,
    orderProductDate: null,
    startYear: 2000,
    endYear: 2100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(
      this.data.startYear,
      this.data.endYear
    );

    this.setData({
      orderProductDate: obj.dateTime,
      orderProductDateArray: obj.dateTimeArray
    });
  },

  changeDateTime(e) {
    this.setData({ orderProductDate: e.detail.value });
  },
  changeDateTimeColumn(e) {
    var arr = this.data.orderProductDate,
      dateArr = this.data.orderProductDateArray;
    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(
      dateArr[0][arr[0]],
      dateArr[1][arr[1]]
    );

    this.setData({
      orderProductDateArray: dateArr,
      orderProductDate: arr
    });
  },
  bindOrderIdChange(e) {
    this.setData({
      orderIdIndex: e.detail.value
    });
  },
  bindProductIdChange(e) {
    this.setData({
      productIdIndex: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
