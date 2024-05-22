var D=(C,m,r)=>new Promise((b,p)=>{var _=a=>{try{u(r.next(a))}catch(l){p(l)}},e=a=>{try{u(r.throw(a))}catch(l){p(l)}},u=a=>a.done?b(a.value):Promise.resolve(a.value).then(_,e);u((r=r.apply(C,m)).next())});import{_ as F}from"./BasicForm.vue_vue_type_script_setup_true_lang-D1MSY_Uz.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BrIkfK-Q.js";import"./componentMap-GXf_BQ5w.js";import{u as V}from"./useForm-CMMPpSvZ.js";import{C as B,a as P,c as x}from"./entry/index-CYfXVXMO-1716388892461.js";import{P as S}from"./index-QDKBm-5j.js";import{Z as c,E as n,W as s,$ as h}from"./antd-BmrhB3rb.js";import{d as g,a7 as I,Z as U,a8 as q,a9 as i,k as t,u as d,l as O,G as f}from"./vue-BjERyvPm.js";import"./FormItem.vue_vue_type_script_lang-Be1HVPP_.js";import"./helper-DvZLEqZs.js";import"./index-sWrvd-Qr.js";import"./useWindowSizeFn-wTRiggdH.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DaaBssF2.js";import"./index-B42XR5lD.js";import"./uuid-D0SLUWHI.js";import"./useSortable-nHRKg9hn.js";import"./download-tg6aREs_.js";import"./base64Conver-bBv-IO2K.js";import"./index-CKqCNj4G.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CBr79iZx.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-9UdJywDi.js";import"./index-Ch1NJZUP.js";import"./useContentViewHeight-e2IMOLSx.js";import"./onMountedOrActivated-DcvTUt7V.js";const w=g({__name:"CustomerForm",setup(C){const m=e=>[{required:!0,validator:()=>D(this,null,function*(){if(!e.typeKey)return Promise.reject("请选择类型");if(!e.typeValue)return Promise.reject("请输入数据");Promise.resolve()})}],r=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled,rules:[{required:!0}],render:({model:e,field:u},{disabled:a})=>O(n,{placeholder:"请输入",value:e[u],onChange:l=>{e[u]=l.target.value},disabled:a})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled,rules:[{required:!0}],renderComponentContent:(e,{disabled:u})=>({suffix:()=>u?"suffix_disabled":"suffix_default"})},{field:"field3",label:"自定义Slot",slot:"f3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled,rules:[{required:!0}]},{field:"field4",component:"Input",renderColContent({model:e,field:u},{disabled:a}){return t(c,{name:"field4",label:"renderColContent渲染",rules:[{required:!0}]},{default:()=>[t(n,{placeholder:"请输入",value:e[u],"onUpdate:value":l=>e[u]=l,disabled:a},null)]})},colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled},{field:"field5",component:"Input",label:"自定义colSlot",colSlot:"colSlot_field5",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled},{required:!0,field:"typeKey2",defaultValue:"测试类型",fields:["typeValue2"],defaultValueObj:{typeValue2:"默认测试_文字"},component:"Input",label:"复合field render",render({model:e,field:u},{disabled:a}){return t(n.Group,{compact:!0},{default:()=>[t(s,{disabled:a,style:"width: 120px",allowClear:!0,value:e[u],"onUpdate:value":l=>e[u]=l},{default:()=>[t(s.Option,{value:"测试类型"},{default:()=>[f("测试类型")]}),t(s.Option,{value:"测试名称"},{default:()=>[f("测试名称")]})]}),t(c,{name:"typeValue2",class:"local_typeValue",rules:[{required:!0}]},{default:()=>[t(h,null,{default:()=>[t(n,{placeholder:"请输入",value:e.typeValue2,"onUpdate:value":l=>e.typeValue2=l,disabled:a},null)]})]})]})},colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field_disabled},{field:"typeKey",defaultValue:"公司名称",fields:["typeValue"],defaultValueObj:{typeValue:"默认文字"},component:"Input",renderColContent({model:e,field:u},{disabled:a}){return t(c,{name:"typeKey",label:"复合field renderColContent",rules:m(e)},{default:()=>[t(n.Group,{compact:!0},{default:()=>[t(s,{allowClear:!0,disabled:a,style:"width: 120px",value:e[u],"onUpdate:value":l=>e[u]=l},{default:()=>[t(s.Option,{value:"公司名称"},{default:()=>[f("公司名称")]}),t(s.Option,{value:"产品名称"},{default:()=>[f("产品名称")]})]}),t(h,null,{default:()=>[t(n,{style:"width: calc(100% - 120px); margin-left: -1px;",placeholder:"请输入",value:e.typeValue,"onUpdate:value":l=>e.typeValue=l,disabled:a},null)]})]})]})},colProps:{span:16},dynamicDisabled:({values:e})=>!!e.field_disabled},{field:"field_disabled",component:"Switch",label:"是否禁用 编辑字段",colProps:{span:8},labelWidth:200}],{createMessage:b}=P(),[p]=V({labelWidth:120,schemas:r,actionColOptions:{span:24}});function _(e){b.success("click search,values:"+JSON.stringify(e))}return(e,u)=>{const a=I("a-input");return U(),q(d(S),{title:"自定义组件示例"},{default:i(()=>[t(d(B),{title:"自定义表单"},{default:i(()=>[t(d(F),{class:"local_form",onRegister:d(p),onSubmit:_},{f3:i(({model:l,field:o,disabled:y})=>[t(a,{value:l[o],"onUpdate:value":v=>l[o]=v,disabled:y,placeholder:"自定义slot"},null,8,["value","onUpdate:value","disabled"])]),colSlot_field5:i(({model:l,field:o,disabled:y})=>[t(d(c),{name:o,label:"自定义colSlot",rules:[{required:!0}]},{default:i(()=>[t(a,{value:l[o],"onUpdate:value":v=>l[o]=v,disabled:y,placeholder:"自定义colSlot"},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name"])]),_:1},8,["onRegister"])]),_:1})]),_:1})}}}),ne=x(w,[["__scopeId","data-v-e6e08256"]]);export{ne as default};
