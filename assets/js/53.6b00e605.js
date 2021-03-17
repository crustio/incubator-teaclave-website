(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{455:function(e,t,a){"use strict";a.r(t);var o=a(27),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sgx-code-coverage-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sgx-code-coverage-support"}},[e._v("#")]),e._v(" SGX Code Coverage Support")]),e._v(" "),a("p",[e._v("Prerequisite:")]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v("lcov")]),e._v(". Install via "),a("code",[e._v("sudo apt-get install lcov")])])]),e._v(" "),a("li",[a("p",[e._v("Either of "),a("code",[e._v("gcov <= 7")]),e._v(", or "),a("code",[e._v("llvm-cov >= 11")])])])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("gcov <= 7")]),e._v(". Install gcc "),a("code",[e._v("sudo apt-get install gcc")]),e._v(". For more information around managing multiple gcc/toolchains, please refer to "),a("a",{attrs:{href:"https://linuxize.com/post/how-to-install-gcc-compiler-on-ubuntu-18-04/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this article")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("llvm-cov >= 11")]),e._v(". You can either install using apt/yum/dnf, or the official LLVM installation script:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wget https://apt.llvm.org/llvm.sh\nchmod +x llvm.sh\nsudo ./llvm.sh 11\n")])])]),a("p",[e._v("If your platform cannot install either of them, you can use another platform to analyze the generated "),a("code",[e._v("gcno")]),e._v(" and "),a("code",[e._v("gcda")]),e._v(" files. Ubuntu 18.04 has gcc-7 by default, and can install llvm 11 using the above script.")]),e._v(" "),a("h2",{attrs:{id:"one-shot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#one-shot"}},[e._v("#")]),e._v(" One shot")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ make COV=1\n$ cd bin && ./app && cd ..\n$ make gen_cov_html\n")])])]),a("p",[e._v("Then open "),a("code",[e._v("html/index.html")]),e._v(", where amazing happens!")]),e._v(" "),a("p",[e._v("sgx_cov supports xargo as well:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ XARGO_SGX=1 make COV=1\n$ cd bin && ./app && cd ..\n$ XARGO_SGX=1 make gen_cov_html\n")])])]),a("h2",{attrs:{id:"the-magic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-magic"}},[e._v("#")]),e._v(" The Magic")]),e._v(" "),a("ul",[a("li",[e._v("Enable feature "),a("code",[e._v("global_exit")]),e._v(" for "),a("code",[e._v("sgx_urts")])]),e._v(" "),a("li",[e._v("Inject an "),a("code",[e._v("on exit")]),e._v(" function using "),a("code",[e._v("global_dtors_object!")]),e._v(" macro, and invoke "),a("code",[e._v("sgx_cov::cov_writeout()")])]),e._v(" "),a("li",[a("code",[e._v(".gcno")]),e._v(" would be generated during compile time at "),a("code",[e._v("Target_Dir")])]),e._v(" "),a("li",[a("code",[e._v(".gcna")]),e._v(" would be generated during run time at "),a("code",[e._v("Target_dir")])]),e._v(" "),a("li",[a("code",[e._v("make gen_cov_html")]),e._v(" would process "),a("code",[e._v(".gcno")]),e._v(" and "),a("code",[e._v(".gcna")]),e._v(" and generate html results.")])]),e._v(" "),a("h2",{attrs:{id:"more-about-the-magic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-about-the-magic"}},[e._v("#")]),e._v(" More about the magic")]),e._v(" "),a("p",[e._v("To be continued ...")])])}),[],!1,null,null,null);t.default=c.exports}}]);