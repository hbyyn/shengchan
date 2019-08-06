var dateTimePicker = require('../../utils/dateTimePicker.js');

Page({
  data: {
    formData: {
      client_id: "",
      material_id: "",
      material_type: "",
      material_name: "",
      format_id: "",
      material_unit: "",
      supplier_id: "",
      material_erpid: "",
      material_indate: "",
      material_storeid: "",
      material_operaterid: "",
      material_operaterdate: "",
      parent_id: "",
      product_id: "",
      client_creator: "",
      client_createtime: "",
      client_updator: "",
      client_updatetime: ""
    },
    formatIdIndex: 0 ,
    add_format_id: ["dd11", "dd22", "dd33", "dd44", "dd55", "dd66"],
    supplierIdIndex: 0 ,
    add_supplier_id: ["dd11", "dd22", "dd33", "dd44", "dd55", "dd66"],
    productIdIndex:0,
    add_product_id:["dd11", "dd22", "dd33", "dd44", "dd55", "dd66"],
    date: '2016-09-01',
    time: '12:01',
    dateTimeArray: null,
    dateTime: null,
    startYear: 2000,
    endYear: 2100


    // ,
    // columns: [
    //   { id: 2, prop: "material_id", label: "物料编号" },
    //   { id: 4, prop: "material_name", label: "物料名称" },
    //   { id: 3, prop: "material_type", label: "物料类型" },
    //   { id: 13, prop: "format_id", label: "规格编号" },
    //   { id: 5, prop: "material_unit", label: "物料单位" },
    //   { id: 6, prop: "supplier_id", label: "供应商编号" },
    //   { id: 7, prop: "material_erpid", label: "ERP编号" },
    //   { id: 8, prop: "material_indate", label: "EPR入库日期" },
    //   { id: 9, prop: "material_storeid", label: "EPR入库编号" },
    //   { id: 10, prop: "material_operaterid", label: "领料人" },
    //   { id: 11, prop: "material_operaterdate", label: "领料时间" },
    //   { id: 12, prop: "parent_id", label: "父级编号" },
    //   { id: 18, prop: "product_id", label: "产品编号" },
    //   { id: 14, prop: "client_creator", label: "创建人" },
    //   { id: 15, prop: "client_createtime", label: "创建时间" },
    //   { id: 16, prop: "client_updator", label: "修改人" },
    //   { id: 17, prop: "client_updatetime", label: "修改时间" }
    // ]
  },
  onLoad() {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);


    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray
    });
  },
  changeDateTime(e) {
    this.setData({ dateTime: e.detail.value });
  },
  changeDateTimeColumn(e) {
    var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      dateTimeArray: dateArr,
      dateTime: arr
    });
  },
  bindFormatIdChange(e) {
    this.setData({
      formatIdIndex: e.detail.value
    });
  },
  bindSupplierIdChange(e) {
    this.setData({
      supplierIdIndex: e.detail.value
    });
  },
  bindProductIdChange(e){
    this.setData({
      productIdIndex: e.detail.value
    });
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  }
});
