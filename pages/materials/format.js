// pages/materials/format.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    formData: {
      client_id: "",
      format_id: "44",
      format_name: "",
      client_creator: "",
      client_createtime: "",
      client_updator: "",
      client_updatetime: ""
    },
    result:''
  },
  getScancode() {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: res => {
        console.log(res)
        var result = res.result;
        let dataObj=result.replace(/\s*/g,"")
        dataObj=JSON.parse(dataObj)
        _this.setData({
          result: result,
          ["formData.format_id"]:dataObj.format_id,
          ["formData.format_name"]:dataObj.format_name
          // formData:dataObj
        })
        console.log(dataObj.format_id)
        // this.onLoad()
      },
    });
  },
  formatIdInput(e){
    this.setData({
      ["formData.format_id"]:e.detail.value
    })
  },
  formatNameInput(e){
    this.setData({
      ["formData.format_name"]:e.detail.value
    })
  },
  submitFrom(){
    // let xxx=this.data.result.replace(/\s*/g,"")
    // xxx=JSON.parse(xxx)
    console.log(this.data.formData)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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