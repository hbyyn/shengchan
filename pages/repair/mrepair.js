// pages/repair/mrepair.js
var dateTimePicker = require('../../utils/dateTimePicker.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      client_id: '',
      material_id: '',
      repair_id: '',
      material_repair_begindate: '',
      material_repair_enddate: '',
      client_creator: '',
      client_createtime: '',
      client_updator: '',
      client_updatetime: ''
    },
    materialIdIndex: 0 ,
    add_material_id: ["dd11", "dd22", "dd33", "dd44", "dd55", "dd66"],
    repairIdIndex: 0 ,
    add_repair_id: ["dd11", "dd22", "dd33", "dd44", "dd55", "dd66"],
    materialRepairBegindateArray: null,
    materialRepairBegindate: null,
    materialRepairEnddateArray: null,
    materialRepairEnddate: null,
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
      materialRepairBegindate: obj.dateTime,
      materialRepairBegindateArray: obj.dateTimeArray,
      materialRepairEnddate: obj1.dateTime,
      materialRepairEnddateArray: obj1.dateTimeArray
    });
  },
  changeMaterialRepairBegindate(e) {
    this.setData({ materialRepairBegindate: e.detail.value });
  },
  changeMaterialRepairBegindateColumn(e) {
    var arr = this.data.materialRepairBegindate, dateArr = this.data.materialRepairBegindateArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      materialRepairBegindateArray: dateArr,
      materialRepairBegindate: arr
    });
  },
  changeDateTime(e) {
    this.setData({ materialRepairEnddate: e.detail.value });
  },
  changeDateTimeColumn(e) {
    var arr = this.data.materialRepairEnddate, dateArr = this.data.materialRepairEnddateArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      materialRepairEnddateArray: dateArr,
      materialRepairEnddate: arr
    });
  },
  bindMaterialIdChange(e) {
    this.setData({
      materialIdIndex: e.detail.value
    });
  },
  bindRepairIdChange(e) {
    this.setData({
      repairIdIndex: e.detail.value
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