// pages/order/order.js
var dateTimePicker = require('../../utils/dateTimePicker.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      client_id: '',
      order_id: '',
      customers_id: '',
      order_date: '',
      order_outdate: '',
      client_creator: '',
      client_createtime: '',
      client_updator: '',
      client_updatetime: ''
    },
    customersIdIndex: 0 ,
    add_customers_id: ["dd11", "dd22", "dd33", "dd44", "dd55", "dd66"],
    orderDateArray: null,
    orderDate: null,
    orderOutdateArray: null,
    orderOutdate: null,
    startYear: 2000,
    endYear: 2100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);


    this.setData({
      orderDate: obj.dateTime,
      orderDateArray: obj.dateTimeArray,
      orderOutdate: obj1.dateTime,
      orderOutdateArray: obj1.dateTimeArray
    });
  },
  changeOrderDate(e) {
    this.setData({ orderDate: e.detail.value });
  },
  changeOrderDateColumn(e) {
    var arr = this.data.orderDate, dateArr = this.data.orderDateArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      orderDateArray: dateArr,
      orderDate: arr
    });
  },
  changeOrderOutdate(e) {
    this.setData({ orderOutdate: e.detail.value });
  },
  changeOrderOutdateColumn(e) {
    var arr = this.data.orderOutdate, dateArr = this.data.orderOutdateArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      orderOutdateArray: dateArr,
      orderOutdate: arr
    });
  },
  bindCustomersIdChange(e) {
    this.setData({
      customersIdIndex: e.detail.value
    });
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})