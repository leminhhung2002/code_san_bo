(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08439ab0"],{"5d73":function(t,e,s){},ea22:function(t,e,s){"use strict";s("5d73")},f9b7:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-list-container",attrs:{id:"list-bet-trade"}},[s("vs-prompt",{staticClass:"export-options",attrs:{title:"Export To Excel","accept-text":"Export",active:t.activePrompt},on:{cancle:t.clearFields,accept:t.exportToExcel,close:t.clearFields,"update:active":function(e){t.activePrompt=e}}},[s("vs-input",{staticClass:"w-full",attrs:{placeholder:"Enter File Name.."},model:{value:t.fileName,callback:function(e){t.fileName=e},expression:"fileName"}}),s("v-select",{staticClass:"my-4",attrs:{options:t.formats},model:{value:t.selectedFormat,callback:function(e){t.selectedFormat=e},expression:"selectedFormat"}}),s("div",{staticClass:"flex"},[s("span",{staticClass:"mr-4"},[t._v("Cell Auto Width:")]),s("vs-switch",{model:{value:t.cellAutoWidth,callback:function(e){t.cellAutoWidth=e},expression:"cellAutoWidth"}},[t._v("Cell Auto Width")])],1)],1),s("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-corners"}},[s("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":t.itemsPerPage,search:"",data:t.products},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return[s("tbody",t._l(a,(function(e,a){return s("vs-tr",{key:a,attrs:{data:e}},[e.type_account?[s("vs-td",[s("p",{staticClass:"bet-description font-medium truncate"},[t._v("Email: "+t._s(e.email))]),s("p",{staticClass:"bet-description font-medium truncate"},[t._v("ID: "+t._s(e.id_account))]),e.type_account?s("p",{staticClass:"bet-description font-medium truncate"},[t._v("Live Account")]):s("p",{staticClass:"bet-description font-medium truncate"},[t._v("Demo Account")])]),s("vs-td",[s("p",{staticClass:"bet-currency"},[t._v(t._s(e.currency)),s("br"),e.marketing?s("span",{staticStyle:{"text-decoration":"underline",color:"#84f98d"}},[t._v("Marketing")]):s("span",[t._v("Thường")])])]),s("vs-td",["buy"==e.buy_sell?s("p",{staticClass:"bet-buy_sell"},[s("span",{staticClass:"text-success"},[t._v("MUA")])]):s("p",{staticClass:"bet-buy_sell"},[s("span",{staticClass:"text-danger"},[t._v("BÁN")])])]),s("vs-td",[s("p",{staticClass:"bet-amount"},[s("IconCrypto",{staticStyle:{width:"20px"},attrs:{coinname:"USD",color:"color",format:"svg"}}),s("font",{attrs:{color:"#00ff5c"}},[t._v(t._s(t.getAmountDecimal("vn",e.amount_bet)))])],1)]),s("vs-td",[s("p",{staticClass:"bet-win_lose"},[s("span",{staticStyle:{color:"#fb9494","font-weight":"bold","text-shadow":"0px 0px 5px #f00"}},[t._v(t._s(0!=e.amount_win?"+"+e.amount_win:"-"+e.amount_lose))])])]),s("vs-td",[0!=e.amount_win?s("p",{staticClass:"bet-result_bet"},[s("span",{staticClass:"text-success"},[t._v("Thắng")])]):s("p",{staticClass:"bet-result_bet"},[s("span",{staticClass:"text-danger"},[t._v("Thua")])])]),s("vs-td",[s("p",{staticClass:"bet-open_close"},[t._v(t._s(e.open+" -> "+e.close))]),s("p",[t._v("Phiên: "+t._s(e.session))])]),s("vs-td",[s("p",{staticClass:"de-create"},[t._v(t._s(t.formatDate(e.created_at)))])]),s("vs-td",{staticClass:"whitespace-no-wrap text-center"},[1==e.status?s("vx-tooltip",{staticStyle:{float:"left"},attrs:{color:"danger",text:"Xóa"}},[s("vs-button",{attrs:{color:"dark",type:"line","icon-pack":"feather",icon:"icon-trash"},on:{click:function(s){return s.stopPropagation(),t.deleteBet(e.id,a,0)}}})],1):s("vx-tooltip",{staticStyle:{float:"left"},attrs:{color:"warning",text:"Thu hồi"}},[s("vs-button",{attrs:{color:"dark",type:"line","icon-pack":"feather",icon:"icon-arrow-up-left"},on:{click:function(s){return s.stopPropagation(),t.deleteBet(e.id,a,1)}}})],1)],1)]:t._e()],2)})),1)]}}]),model:{value:t.selectedUser,callback:function(e){t.selectedUser=e},expression:"selectedUser"}},[s("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"flex flex-wrap-reverse items-center data-list-btn-container"},[s("vs-dropdown",{staticClass:"dd-actions cursor-pointer mr-4 mb-4",attrs:{"vs-trigger-click":""}},[s("div",{staticClass:"p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full"},[s("span",{staticClass:"mr-2"},[t._v("Tác vụ")]),s("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),s("vs-dropdown-menu",[s("vs-dropdown-item",[t.showDeleteMultiBt?s("span",{staticClass:"flex items-center",on:{click:t.deleteMultiple}},[s("feather-icon",{staticClass:"mr-2",attrs:{icon:"TrashIcon",svgClasses:"h-4 w-4"}}),s("span",[t._v("Xóa")])],1):t._e()]),s("vs-dropdown-item",[s("span",{staticClass:"flex items-center",on:{click:function(e){t.activePrompt=!0}}},[s("feather-icon",{staticClass:"mr-2",attrs:{icon:"FileIcon",svgClasses:"h-4 w-4"}}),s("span",[t._v("In")])],1)])],1)],1),s("div",{staticClass:"btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-danger border border-solid border-danger",on:{click:t.trashDataBet}},[s("feather-icon",{attrs:{icon:"TrashIcon",svgClasses:"h-4 w-4"}}),s("span",{staticClass:"ml-2 text-base text-danger"},[t._v("Thùng rác")])],1),s("div",{staticClass:"btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-success border border-solid border-success",on:{click:t.reloadList}},[s("feather-icon",{attrs:{icon:"ArrowLeftIcon",svgClasses:"h-4 w-4"}}),s("span",{staticClass:"ml-2 text-base text-sucess"},[t._v("Trở về")])],1)],1),s("vs-dropdown",{staticClass:"cursor-pointer mb-4 mr-4 items-per-page-handler",attrs:{"vs-trigger-click":""}},[s("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[s("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.itemsPerPage-(t.itemsPerPage-1))+" - "+t._s(t.products.length-t.currentPage*t.itemsPerPage>0?t.currentPage*t.itemsPerPage:t.products.length)+" of "+t._s(t.queriedItems))]),s("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),s("vs-dropdown-menu",[s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=4}}},[s("span",[t._v("4")])]),s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=10}}},[s("span",[t._v("10")])]),s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=15}}},[s("span",[t._v("15")])]),s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=20}}},[s("span",[t._v("20")])])],1)],1)],1),s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"description"}},[t._v("Mô tả")]),s("vs-th",{attrs:{"sort-key":"type"}},[t._v("Loại")]),s("vs-th",{attrs:{"sort-key":"buy_sell"}},[t._v("Mua / Bán")]),s("vs-th",{attrs:{"sort-key":"amount"}},[t._v("Số tiền cược")]),s("vs-th",{attrs:{"sort-key":"win_lose"}},[t._v("Thắng / Thua")]),s("vs-th",{attrs:{"sort-key":"result_bet"}},[t._v("Kết quả")]),s("vs-th",{attrs:{"sort-key":"open_close"}},[t._v("Open / Close")]),s("vs-th",{attrs:{"sort-key":"datecreate"}},[t._v("Thời gian")])],1)],2)],1)],1)},n=[],o=s("4a7a"),r=s.n(o),i=s("c5b9"),c=s("c1df"),l=s.n(c),d=s("2b0e"),u={components:{vSelect:r.a},data:function(){return{showDeleteMultiBt:!0,activePrompt:!1,selectedUser:[],fileName:"",formats:["xlsx","csv","txt"],cellAutoWidth:!0,selectedFormat:"xlsx",headerTitle:["ID","Mô tả","Loại","Số Tiền","Ghi Chú","Ngày Giao Dịch"],headerVal:["id","description","type","amount","note","datecreate"],productsFake:[{id:1,id_account:"134242",type_account:1,buy_sell:"buy",amount_win:9.5,amount_lose:0,amount_bet:9.5,currency:"BTC",open:50552.98,close:50541.01,session:154242443,created_at:"00:00:00 02-04-2021"}],itemsPerPage:10,isMounted:!1}},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0},products:function(){return this.productsFake},queriedItems:function(){return this.$refs.table?this.$refs.table.queriedResults.length:this.productsFake.length}},methods:{deleteMultiple:function(){var t=this,e=localStorage.getItem("token");if(this.$store.dispatch("setToken",e),0==this.selectedUser.length)return this.$vs.notify({text:"Hãy chọn đối tượng cần xóa",color:"warning",iconPack:"feather",icon:"icon-check"});for(var s=this.selectedUser.length-1;s>=0;s--){var a=this.selectedUser[s]["id"],n={id:a,val:1};i["a"].deleteBetsTrash(n).then((function(e){e.data.success||(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){})))})),d["default"].delete(this.productsFake,s)}return this.selectedUser=[],this.$vs.notify({text:"Đã xóa thành công",color:"success",iconPack:"feather",icon:"icon-check"})},deleteBet:function(t,e,s){var a=this,n=localStorage.getItem("token");this.$store.dispatch("setToken",n);var o={id:t,val:s};i["a"].deleteBetsTrash(o).then((function(t){if(t.data.success)return d["default"].delete(a.productsFake,e),a.popupDeleteActive=!1,a.$vs.notify({text:"Đã xóa thành công",color:"success",iconPack:"feather",icon:"icon-check"});localStorage.removeItem("token"),a.$router.push("/pages/login").catch((function(){}))}))},trashDataBet:function(){var t=this;this.showDeleteMultiBt=!1;var e=localStorage.getItem("token");this.$store.dispatch("setToken",e),i["a"].getBetsListHisTrash().then((function(e){e.data.success?t.productsFake=e.data.data:(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){})))}))},getOrderStatusColor:function(t){return 0==t?"warning":1==t?"success":"warning"},getOrderStatusColorText:function(t){return 0==t?"Chờ xử lý":1==t?"Hoàn thành":"Chờ xử lý"},getIconType:function(t){var e=t.toUpperCase();return e},formatDate:function(t){if(t)return l()(String(t)).format("MM/DD/YYYY HH:mm:ss")},getAmountDecimal:function(t,e){var s="$",a=t.toUpperCase(),n=2;"BTC"==a&&(n=6),"ETH"==a&&(n=4),"USDT"==a&&(n=2),"VN"==a&&(n=0);var o=new Intl.NumberFormat("en-US",{minimumFractionDigits:n});return s+o.format(e)},toggleDataSidebar:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.addNewDataSidebar=t},exportToExcel:function(){var t=this;if(0==this.selectedUser.length)return this.$vs.notify({title:"Xuất dữ liệu",text:"Vui lòng chọn nội dung để hoàn thành",color:"danger",iconPack:"feather",icon:"icon-heart"});Promise.all([s.e("chunk-2a72a530"),s.e("chunk-e3d782c8")]).then(s.bind(null,"4bf8d")).then((function(e){var s=t.selectedUser,a=t.formatJson(t.headerVal,s);e.export_json_to_excel({header:t.headerTitle,data:a,filename:t.fileName,autoWidth:t.cellAutoWidth,bookType:t.selectedFormat}),t.clearFields()}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},clearFields:function(){this.fileName="",this.cellAutoWidth=!0,this.selectedFormat="xlsx"},reloadList:function(){var t=this;this.showDeleteMultiBt=!0;var e=localStorage.getItem("token");this.$store.dispatch("setToken",e),i["a"].getBetsListHistory().then((function(e){t.$vs.loading.close("#loading-corners > .con-vs-loading"),e.data.success?t.productsFake=e.data.data:(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){})))}))},openLoadingInDiv:function(){this.$vs.loading({container:"#loading-corners",type:"corners",scale:.6})}},created:function(){this.reloadList()},mounted:function(){this.isMounted=!0,this.openLoadingInDiv()}},p=u,h=(s("ea22"),s("2877")),m=Object(h["a"])(p,a,n,!1,null,null,null);e["default"]=m.exports}}]);