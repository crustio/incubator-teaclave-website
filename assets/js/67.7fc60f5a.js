(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{451:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hashbrown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashbrown"}},[t._v("#")]),t._v(" hashbrown")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://travis-ci.com/rust-lang/hashbrown",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.com/rust-lang/hashbrown.svg?branch=master",alt:"Build Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://crates.io/crates/hashbrown",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/crates/v/hashbrown.svg",alt:"Crates.io"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://docs.rs/hashbrown",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://docs.rs/hashbrown/badge.svg",alt:"Documentation"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("This crate is a Rust port of Google's high-performance "),s("a",{attrs:{href:"https://abseil.io/blog/20180927-swisstables",target:"_blank",rel:"noopener noreferrer"}},[t._v("SwissTable"),s("OutboundLink")],1),t._v(" hash\nmap, adapted to make it a drop-in replacement for Rust's standard "),s("code",[t._v("HashMap")]),t._v("\nand "),s("code",[t._v("HashSet")]),t._v(" types.")]),t._v(" "),s("p",[t._v("The original C++ version of SwissTable can be found "),s("a",{attrs:{href:"https://github.com/abseil/abseil-cpp/blob/master/absl/container/internal/raw_hash_set.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(", and this\n"),s("a",{attrs:{href:"https://www.youtube.com/watch?v=ncHmEUmJZf4",target:"_blank",rel:"noopener noreferrer"}},[t._v("CppCon talk"),s("OutboundLink")],1),t._v(" gives an overview of how the algorithm works.")]),t._v(" "),s("p",[t._v("Since Rust 1.36, this is now the "),s("code",[t._v("HashMap")]),t._v(" implementation for the Rust standard\nlibrary. However you may still want to use this crate instead since it works\nin environments without "),s("code",[t._v("std")]),t._v(", such as embedded systems and kernels.")]),t._v(" "),s("h2",{attrs:{id:"change-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-log"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/sgx_tstd/hashbrown/CHANGELOG.html"}},[t._v("Change log")])],1),t._v(" "),s("h2",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),s("ul",[s("li",[t._v("Drop-in replacement for the standard library "),s("code",[t._v("HashMap")]),t._v(" and "),s("code",[t._v("HashSet")]),t._v(" types.")]),t._v(" "),s("li",[t._v("Uses "),s("code",[t._v("AHash")]),t._v(" as the default hasher, which is much faster than SipHash.")]),t._v(" "),s("li",[t._v("Around 2x faster than the previous standard library "),s("code",[t._v("HashMap")]),t._v(".")]),t._v(" "),s("li",[t._v("Lower memory usage: only 1 byte of overhead per entry instead of 8.")]),t._v(" "),s("li",[t._v("Compatible with "),s("code",[t._v("#[no_std]")]),t._v(" (but requires a global allocator with the "),s("code",[t._v("alloc")]),t._v(" crate).")]),t._v(" "),s("li",[t._v("Empty hash maps do not allocate any memory.")]),t._v(" "),s("li",[t._v("SIMD lookups to scan multiple hash entries in parallel.")])]),t._v(" "),s("h2",{attrs:{id:"performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[t._v("#")]),t._v(" Performance")]),t._v(" "),s("p",[t._v("Compared to the previous implementation of "),s("code",[t._v("std::collections::HashMap")]),t._v(" (Rust 1.35).")]),t._v(" "),s("p",[t._v("With the hashbrown default AHash hasher (not HashDoS-resistant):")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" name                       oldstdhash ns/iter  hashbrown ns/iter  diff ns/iter   diff %  speedup \n insert_ahash_highbits        20,846              7,397                   -13,449  -64.52%   x 2.82 \n insert_ahash_random          20,515              7,796                   -12,719  -62.00%   x 2.63 \n insert_ahash_serial          21,668              7,264                   -14,404  -66.48%   x 2.98 \n insert_erase_ahash_highbits  29,570              17,498                  -12,072  -40.83%   x 1.69 \n insert_erase_ahash_random    39,569              17,474                  -22,095  -55.84%   x 2.26 \n insert_erase_ahash_serial    32,073              17,332                  -14,741  -45.96%   x 1.85 \n iter_ahash_highbits          1,572               2,087                       515   32.76%   x 0.75 \n iter_ahash_random            1,609               2,074                       465   28.90%   x 0.78 \n iter_ahash_serial            2,293               2,120                      -173   -7.54%   x 1.08 \n lookup_ahash_highbits        3,460               4,403                       943   27.25%   x 0.79 \n lookup_ahash_random          6,377               3,911                    -2,466  -38.67%   x 1.63 \n lookup_ahash_serial          3,629               3,586                       -43   -1.18%   x 1.01 \n lookup_fail_ahash_highbits   5,286               3,411                    -1,875  -35.47%   x 1.55 \n lookup_fail_ahash_random     12,365              4,171                    -8,194  -66.27%   x 2.96 \n lookup_fail_ahash_serial     4,902               3,240                    -1,662  -33.90%   x 1.51 \n")])])]),s("p",[t._v("With the libstd default SipHash hasher (HashDoS-resistant):")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" name                       oldstdhash ns/iter  hashbrown ns/iter  diff ns/iter   diff %  speedup \n insert_std_highbits        32,598              20,199                  -12,399  -38.04%   x 1.61 \n insert_std_random          29,824              20,760                   -9,064  -30.39%   x 1.44 \n insert_std_serial          33,151              17,256                  -15,895  -47.95%   x 1.92 \n insert_erase_std_highbits  74,731              48,735                  -25,996  -34.79%   x 1.53 \n insert_erase_std_random    73,828              47,649                  -26,179  -35.46%   x 1.55 \n insert_erase_std_serial    73,864              40,147                  -33,717  -45.65%   x 1.84 \n iter_std_highbits          1,518               2,264                       746   49.14%   x 0.67 \n iter_std_random            1,502               2,414                       912   60.72%   x 0.62 \n iter_std_serial            6,361               2,118                    -4,243  -66.70%   x 3.00 \n lookup_std_highbits        21,705              16,962                   -4,743  -21.85%   x 1.28 \n lookup_std_random          21,654              17,158                   -4,496  -20.76%   x 1.26 \n lookup_std_serial          18,726              14,509                   -4,217  -22.52%   x 1.29 \n lookup_fail_std_highbits   25,852              17,323                   -8,529  -32.99%   x 1.49 \n lookup_fail_std_random     25,913              17,760                   -8,153  -31.46%   x 1.46 \n lookup_fail_std_serial     22,648              14,839                   -7,809  -34.48%   x 1.53 \n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("Add this to your "),s("code",[t._v("Cargo.toml")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("hashbrown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.8"')]),t._v("\n")])])]),s("p",[t._v("Then:")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" hashbrown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("HashMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" map "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HashMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This crate has the following Cargo features:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("nightly")]),t._v(": Enables nightly-only features: "),s("code",[t._v("#[may_dangle]")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("serde")]),t._v(": Enables serde serialization support.")]),t._v(" "),s("li",[s("code",[t._v("rayon")]),t._v(": Enables rayon parallel iterator support.")]),t._v(" "),s("li",[s("code",[t._v("raw")]),t._v(": Enables access to the experimental and unsafe "),s("code",[t._v("RawTable")]),t._v(" API.")]),t._v(" "),s("li",[s("code",[t._v("inline-more")]),t._v(": Adds inline hints to most functions, improving run-time performance at the cost\nof compilation time. (enabled by default)")]),t._v(" "),s("li",[s("code",[t._v("ahash")]),t._v(": Compiles with ahash as default hasher. (enabled by default)")]),t._v(" "),s("li",[s("code",[t._v("ahash-compile-time-rng")]),t._v(": Activates the "),s("code",[t._v("compile-time-rng")]),t._v(" feature of ahash, to increase the\nDOS-resistance, but can result in issues for "),s("code",[t._v("no_std")]),t._v(" builds. More details in\n"),s("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/issues/124",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue#124"),s("OutboundLink")],1),t._v(". (enabled by default)")])]),t._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("p",[t._v("Licensed under either of:")]),t._v(" "),s("ul",[s("li",[t._v("Apache License, Version 2.0, ("),s("a",{attrs:{href:"LICENSE-APACHE"}},[t._v("LICENSE-APACHE")]),t._v(" or http://www.apache.org/licenses/LICENSE-2.0)")]),t._v(" "),s("li",[t._v("MIT license ("),s("a",{attrs:{href:"LICENSE-MIT"}},[t._v("LICENSE-MIT")]),t._v(" or http://opensource.org/licenses/MIT)")])]),t._v(" "),s("p",[t._v("at your option.")]),t._v(" "),s("h3",{attrs:{id:"contribution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contribution"}},[t._v("#")]),t._v(" Contribution")]),t._v(" "),s("p",[t._v("Unless you explicitly state otherwise, any contribution intentionally submitted\nfor inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any\nadditional terms or conditions.")])])}),[],!1,null,null,null);a.default=n.exports}}]);