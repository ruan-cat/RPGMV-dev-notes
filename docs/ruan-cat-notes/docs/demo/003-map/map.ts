const medicalData = [
	{ labl_name_chn: "医疗机构代码", category: "医疗机构", list_name_chn: "基本信息" },
	{ labl_name_chn: "统一社会信用代码", category: "医疗机构", list_name_chn: "基本信息" },
	{ labl_name_chn: "医疗机构名称", category: "医疗机构", list_name_chn: "基本信息" },
	{ labl_name_chn: "医疗机构简称", category: "医疗机构", list_name_chn: "基本信息" },
	{ labl_name_chn: "主要负责人", category: "医疗机构", list_name_chn: "基本信息" },
	// ... 其他数据项
	{ labl_name_chn: "信用等级名称", category: "医疗机构", list_name_chn: "基本信息" },
	{ labl_name_chn: "上级医疗机构代码", category: "医疗机构", list_name_chn: "基本信息" },
	{ labl_name_chn: "机构性质", category: "医疗机构", list_name_chn: "基本信息" },
];

const ds = [
	{
		obj_id: "1",
		code: null,
		list_id: "11111111111111111111",
		poolarea_no: "370100",
		labl_id: "11111111111111111110",
		labl_name: "MedicalIinstitutionCode",
		labl_name_chn: "医疗机构代码",
		col_name: "MedicalIinstitutionCode",
		list_name_chn: "基本信息",
		updt_frqu: null,
		data_ymd: null,
		datatype: "String",
		act_stas: "1",
		data_fmt: null,
	},
];

const dsItem = ds[0];

type DsItem = typeof dsItem;

const res = medicalData.map<DsItem>((medical) => {
	return Object.assign({}, dsItem, {
		labl_name_chn: medical.labl_name_chn,
		list_name_chn: medical.list_name_chn,
	});
});

console.log(" ? res ", res);
