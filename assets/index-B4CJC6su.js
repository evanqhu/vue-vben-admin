import{_ as h}from"./BasicTable.vue_vue_type_script_setup_true_lang-Dd5KHkLi.js";import"./TableImg.vue_vue_type_style_index_0_lang-BLMqZIxM.js";import{_ as b}from"./index-B42XR5lD.js";import{u as g}from"./useTable-xpHWq1L8.js";import{c as C}from"./system-Cq9wYoB5.js";import{u as k}from"./index-sq5T0dO4.js";import{_ as x,c as w,s as y}from"./RoleDrawer.vue_vue_type_script_setup_true_lang-FYPwfPeQ.js";import{d as R,a7 as S,Z as a,_ as B,k as o,a9 as r,G as D,a8 as T,u as e,ab as v}from"./vue-BjERyvPm.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-D1MSY_Uz.js";import"./FormItem.vue_vue_type_script_lang-Be1HVPP_.js";import"./componentMap-GXf_BQ5w.js";import"./useFormItem-B4KjxddK.js";import"./antd-BmrhB3rb.js";import"./entry/index-CYfXVXMO-1716388892461.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DaaBssF2.js";import"./index-CKqCNj4G.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CBr79iZx.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-9UdJywDi.js";import"./index-Ch1NJZUP.js";import"./index-sWrvd-Qr.js";import"./useWindowSizeFn-wTRiggdH.js";import"./base64Conver-bBv-IO2K.js";import"./helper-DvZLEqZs.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BrIkfK-Q.js";import"./useForm-CMMPpSvZ.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-DcvTUt7V.js";import"./useSortable-nHRKg9hn.js";import"./download-tg6aREs_.js";import"./index-Wikev8G2.js";import"./useContextMenu-DIH9UmHd.js";const ce=R({name:"RoleManagement",__name:"index",setup(N){const[m,{openDrawer:i}]=k(),[s,{reload:l}]=g({title:"角色列表",api:C,columns:w,formConfig:{labelWidth:120,schemas:y},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function u(t){}function d(){l()}return(t,V)=>{const f=S("a-button");return a(),B("div",null,[o(e(h),{onRegister:e(s)},{toolbar:r(()=>[o(f,{type:"primary",onClick:p},{default:r(()=>[D(" 新增角色 ")]),_:1})]),bodyCell:r(({column:_,record:n})=>[_.key==="action"?(a(),T(e(b),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:c.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:u.bind(null,n)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),o(x,{onRegister:e(m),onSuccess:d},null,8,["onRegister"])])}}});export{ce as default};
