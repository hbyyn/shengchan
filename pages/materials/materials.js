Page({
  data:{
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
    columns: [
      // { id: 1, prop: "client_id", label: "公司编号" },
      { id: 2, prop: "material_id", label: "物料编号" },
      { id: 4, prop: "material_name", label: "物料名称" },
      { id: 3, prop: "material_type", label: "物料类型" },
      { id: 13, prop: "format_id", label: "规格编号" },
      { id: 5, prop: "material_unit", label: "物料单位" },
      { id: 6, prop: "supplier_id", label: "供应商编号" },
      { id: 7, prop: "material_erpid", label: "ERP编号" },
      { id: 8, prop: "material_indate", label: "EPR入库日期" },
      { id: 9, prop: "material_storeid", label: "EPR入库编号" },
      { id: 10, prop: "material_operaterid", label: "领料人" },
      { id: 11, prop: "material_operaterdate", label: "领料时间" },
      { id: 12, prop: "parent_id", label: "父级编号" },
      { id: 18, prop: "product_id", label: "产品编号" },
      { id: 14, prop: "client_creator", label: "创建人" },
      { id: 15, prop: "client_createtime", label: "创建时间" },
      { id: 16, prop: "client_updator", label: "修改人" },
      { id: 17, prop: "client_updatetime", label: "修改时间" }
    ]
  }
})