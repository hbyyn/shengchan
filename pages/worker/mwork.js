// pages/worker/mwork.js
var dateTimePicker = require('../../utils/dateTimePicker.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      client_id: '',
      material_id: '',
      work_id: '',
      material_work_begindate: '',
      material_work_enddate: '',
      client_creator: '',
      client_createtime: '',
      client_updator: '',
      client_updatetime: ''
    },
    materialIdIndex: 0 ,
    add_material_id: ["dd11", "dd22", "dd33", "dd44", "dd55", "dd66"],
    workIdIndex: 0 ,
    add_work_id: ["dd11", "dd22", "dd33", "dd44", "dd55", "dd66"],
    materialWorkBegindateArray: null,
    materialWorkBegindate: null,
    materialWorkEnddateArray: null,
    materialWorkEnddate: null,
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
      materialWorkBegindate: obj.dateTime,
      materialWorkBegindateArray: obj.dateTimeArray,
      materialWorkEnddate: obj1.dateTime,
      materialWorkEnddateArray: obj1.dateTimeArray
    });
  },
  changeMaterialWorkBegindate(e) {
    this.setData({ materialWorkBegindate: e.detail.value });
  },
  changeMaterialWorkBegindateColumn(e) {
    var arr = this.data.materialWorkBegindate, dateArr = this.data.materialWorkBegindateArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      materialWorkBegindateArray: dateArr,
      materialWorkBegindate: arr
    });
  },
  changeMaterialWorkEnddate(e) {
    this.setData({ materialWorkEnddate: e.detail.value });
  },
  changeMaterialWorkEnddateColumn(e) {
    var arr = this.data.materialWorkEnddate, dateArr = this.data.materialWorkEnddateArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      materialWorkEnddateArray: dateArr,
      materialWorkEnddate: arr
    });
  },
  bindMaterialIdChange(e) {
    this.setData({
      materialIdIndex: e.detail.value
    });
  },
  bindWorkIdChange(e) {
    this.setData({
      workIdIndex: e.detail.value
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