//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    navList: [
      {
        id: 1,
        urlname: "物料",
        navChildList: [
          { id: 11, urlname: "物料表", url: "/materials/materials" },
          { id: 12, urlname: "供应商表", url: "/materials/supplier" },
          { id: 13, urlname: "规格表", url: "/materials/format" },
          { id: 14, urlname: "产品表", url: "/materials/product" },
          { id: 15, urlname: "产品组成报表", url: "/materials/productcharts" }
        ]
      },
      {
        id: 3,
        urlname: "返修",
        navChildList: [
          { id: 31, urlname: "产品返修表", url: "/repair/mrepair" },
          { id: 32, urlname: "返修表", url: "/repair/repair" },
          { id: 35, urlname: "返修报表", url: "/repair/repaircharts" }
        ]
      },
      {
        id: 2,
        urlname: "订购",
        navChildList: [
          { id: 21, urlname: "产品订单", url: "/order/orderproduct" },
          { id: 24, urlname: "订单表", url: "/order/order" },
          { id: 22, urlname: "客户表", url: "/order/customers" }
        ]
      },
      {
        id: 4,
        urlname: "工序",
        navChildList: [
          { id: 42, urlname: "物料工序", url: "/worker/mwork" },
          { id: 43, urlname: "工序", url: "/worker/work" },
          { id: 45, urlname: "工序报表", url: "/worker/workcharts" }
        ]
      }
    ],
    num: "",
    ishow: false,

  },

  tabClick(e) {
    let index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      num: index,
      ishow: !this.data.ishow
    });
    //  this.data.ishow=!this.data.ishow
    console.log(this.data.ishow);
  }
});
