(window.webpackJsonp=window.webpackJsonp||[]).push([[1082],{1484:function(e,t,i){"use strict";i.r(t);var n=i(27),a=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"file-agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-agent"}},[this._v("#")]),this._v(" File Agent")]),this._v(" "),t("p",[this._v("The file agent is a component in the execution service. The main function is to\nhandle file downloading/uploading from and to various storage service providers\n(e.g., AWS S3).")]),this._v(" "),t("p",[this._v("Before executing a task, the execution service will use the file agent to\nprepare any registered input files that come with the task. For example, the\nregistered file input could be a presigned URL from AWS S3. The file agent will\ndownload and prepare the file in local. With these files in the local storage,\nthe executor can finally invoke the function. Similarly, after the task is\nsuccessfully executed, the file agent will help to upload the output files to\na remote file storage like S3.")])])}),[],!1,null,null,null);t.default=a.exports}}]);