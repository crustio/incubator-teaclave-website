(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{443:function(e,t,a){"use strict";a.r(t);var n=a(27),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"is-x86-feature-detected-in-teaclave-sgx-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-x86-feature-detected-in-teaclave-sgx-sdk"}},[e._v("#")]),e._v(" "),a("code",[e._v("is_x86_feature_detected")]),e._v(" in Teaclave SGX SDK")]),e._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("Crates often use "),a("code",[e._v("is_x86_feature_detected")]),e._v(" to select appropriate implementations\n(such as AVX/SSE/SSSE/FMA). It triggers "),a("code",[e._v("cpuid")]),e._v(" instruction in default "),a("code",[e._v("libstd")]),e._v("\nimplementation on x86_64. We want to avoid such kind of SGX in-compatible\ninstructions and unnecessary AEX events.")]),e._v(" "),a("h2",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),a("p",[e._v("We found that Intel's SDK initializes its optimized libraries in a way of:")]),e._v(" "),a("ol",[a("li",[e._v("initialize a global cpu feature indicator by enclave initialization parameter\nin "),a("a",{attrs:{href:"https://github.com/intel/linux-sgx/blob/042849cef8db1f0384e52e8cebcd8820c7754398/psw/urts/enclave_creator_hw_com.cpp#L61",target:"_blank",rel:"noopener noreferrer"}},[e._v("urts")])])]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//Since CPUID instruction is NOT supported within enclave, we enumerate the cpu features here and send to tRTS.\nget_cpu_features(&info.cpu_features);\nget_cpu_features_ext(&info.cpu_features_ext);\ninit_cpuinfo((uint32_t *)info.cpuinfo_table);\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Initialize optimized libraries according to the global cpu feature indicator\nin "),a("a",{attrs:{href:"https://github.com/intel/linux-sgx/blob/042849cef8db1f0384e52e8cebcd8820c7754398/sdk/trts/init_enclave.cpp#L169",target:"_blank",rel:"noopener noreferrer"}},[e._v("trts")])])]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// optimized libs\nif (SDK_VERSION_2_0 < g_sdk_version || sys_features.size != 0)\n{\n  if (0 != init_optimized_libs(cpu_features, (uint32_t*)sys_features.cpuinfo_table, xfrm))\n  {\n    return -1;\n  }\n}\n")])])]),a("p",[e._v("We found that in "),a("code",[e._v("init_optimized_libs")]),e._v(", a global variable\n"),a("code",[e._v("g_cpu_feature_indicator")]),e._v(" is initialized to store the "),a("code",[e._v("feature_bit_array")]),e._v(" which\ncontains everything we need!")]),e._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("static int set_global_feature_indicator(uint64_t feature_bit_array, uint64_t xfrm) {\n    ......\n    g_cpu_feature_indicator = feature_bit_array;\n    return 0;\n}\n")])])]),a("p",[e._v("Since Rust SGX SDK depends on trts, we can simply re-use the\n"),a("code",[e._v("g_cpu_feature_indicator")]),e._v(" and simulate the "),a("code",[e._v("is_x86_feature_detected")]),e._v(" macro\neasily! First we import the value from trts:")]),e._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#[link(name = "sgx_trts")]\nextern {\n    static g_cpu_feature_indicator: uint64_t;\n    static EDMM_supported: c_int;\n}\n\n#[inline]\npub fn rsgx_get_cpu_feature() -> u64 {\n    unsafe { g_cpu_feature_indicator }\n}\n')])])]),a("p",[e._v("Then parse "),a("code",[e._v("g_cpu_feature_indicator")]),e._v(" like std_detect:")]),e._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#[macro_export]\nmacro_rules! is_cpu_feature_supported {\n    ($feature:expr) => ( (($feature & $crate::enclave::rsgx_get_cpu_feature()) != 0) )\n}\n\n#[macro_export]\nmacro_rules! is_x86_feature_detected {\n    ("ia32") => {\n        $crate::cpu_feature::check_for($crate::cpu_feature::Feature::ia32)\n    };\n    ...\n}\n')])])]),a("h2",{attrs:{id:"performance-concerns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-concerns"}},[e._v("#")]),e._v(" Performance concerns")]),e._v(" "),a("p",[e._v('We observed that some crates (such as matrixmultiply) are likely to use the\nhighest level of instructions for speed up. But it may not be the best solution.\nFor example, the "machine-learning" SGX sample depends on rusty-machine and\nmatrixmultiply, which intend to use AVX instruction if supported. However, if we\nuse the "fallback" mode, it\'ll be about 10x faster than the AVX version. The AVX\noptimiztion is pretty complicated and I have no time to read Intel\'s '),a("a",{attrs:{href:"https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel® 64\nand IA-32 Architectures Optimization Reference\nManual")]),e._v(".\nAnd I don't think either of crate's owner or llvm backend can optimize it\nideally. I recommend to choose the appropirate instruction set per workload.")])])}),[],!1,null,null,null);t.default=r.exports}}]);