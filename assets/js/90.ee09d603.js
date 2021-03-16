(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{491:function(e,t,s){"use strict";s.r(t);var r=s(27),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"rust-op-tee-trustzone-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rust-op-tee-trustzone-sdk"}},[e._v("#")]),e._v(" Rust OP-TEE TrustZone SDK")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://travis-ci.com/sccommunity/rust-optee-trustzone-sdk",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.com/sccommunity/rust-optee-trustzone-sdk.svg?branch=master",alt:"Build Status"}})])]),e._v(" "),s("p",[e._v("Rust OP-TEE TrustZone SDK provides abilities to build safe TrustZone\napplications in Rust. The SDK is based on the "),s("a",{attrs:{href:"https://www.op-tee.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OP-TEE")]),e._v("\nproject which follows "),s("a",{attrs:{href:"https://globalplatform.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GlobalPlatform")]),e._v(" TEE\nspecifications and provides ergonomic APIs. In addition, it enables capability\nto write TrustZone applications with Rust's standard library and many\nthird-party libraries (i.e., crates).")]),e._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),s("p",[e._v("To get started, you need to clone the project, initialize related submodules,\nand install building dependencies (The complete list of prerequisites can be found here: "),s("a",{attrs:{href:"https://optee.readthedocs.io/en/latest/building/prerequisites.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("OP-TEE Prerequisites")]),e._v(").\nAlternatively, you can use a docker container built with our "),s("a",{attrs:{href:"Dockerfile"}},[e._v("Dockerfile")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# clone the project and initialize related submodules\n$ git clone git@github.com:sccommunity/rust-optee-trustzone-sdk.git\n$ cd rust-optee-trustzone-sdk\n$ git submodule update --init\n$ (cd rust/compiler-builtins && git submodule update --init libm)\n$ (cd rust/rust && git submodule update --init src/stdsimd src/llvm-project)\n\n# install dependencies\n$ sudo apt-get install android-tools-adb android-tools-fastboot autoconf \\\n        automake bc bison build-essential ccache cscope curl device-tree-compiler \\\n        expect flex ftp-upload gdisk iasl libattr1-dev libc6:i386 libcap-dev \\\n        libfdt-dev libftdi-dev libglib2.0-dev libhidapi-dev libncurses5-dev \\\n        libpixman-1-dev libssl-dev libstdc++6:i386 libtool libz1:i386 make \\\n        mtools netcat python-crypto python3-crypto python-pyelftools \\\n        python3-pycryptodome python3-pyelftools python-serial python3-serial \\\n        rsync unzip uuid-dev xdg-utils xterm xz-utils zlib1g-dev\n\n# install Rust and select a proper version\n$ curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain nightly-2019-07-08\n$ source $HOME/.cargo/env\n$ rustup component add rust-src && rustup target install aarch64-unknown-linux-gnu arm-unknown-linux-gnueabihf\n\n# install Xargo\n$ rustup default 1.44.0 && cargo +1.44.0 install xargo\n# switch to nightly\n$ rustup default nightly-2019-07-08\n")])])]),s("p",[e._v("Then, download ARM toolchains and build OP-TEE libraries. Note that the OP-TEE\ntarget is QEMUv8, and you can modify the Makefile to other targets accordingly.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ make optee\n")])])]),s("p",[e._v("Before building examples, the environment should be properly setup.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ source environment\n")])])]),s("p",[e._v("By default, the target platform is "),s("code",[e._v("aarch64")]),e._v(". If you want to build for the "),s("code",[e._v("arm")]),e._v("\ntarget, you can setup "),s("code",[e._v("ARCH")]),e._v(" before source the environment like this:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ export ARCH=arm\n$ source environment\n")])])]),s("p",[e._v("At last, you can get started with our examples.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ make examples\n")])])]),s("p",[e._v("Please read detailed\n"),s("a",{attrs:{href:"https://github.com/mesalock-linux/rust-optee-trustzone-sdk/wiki/Getting-started-with-OPTEE-for-QEMU-ARMv8",target:"_blank",rel:"noopener noreferrer"}},[e._v("instructions")]),e._v("\nto run these examples on OP-TEE for QEMU. For other supported devices, please find\nmore documents "),s("a",{attrs:{href:"https://optee.readthedocs.io/en/latest/general/platforms.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"contributing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),s("p",[e._v("Contributions are very welcome, please submit issues or send pull requests.")]),e._v(" "),s("h2",{attrs:{id:"publication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publication"}},[e._v("#")]),e._v(" Publication")]),e._v(" "),s("p",[e._v("More details about the design and implementation can be found in our paper\npublished in ACSAC 2020:\n"),s("a",{attrs:{href:"https://csis.gmu.edu/ksun/publications/ACSAC20_RusTEE_2020.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("RusTEE: Developing Memory-Safe ARM TrustZone Applications")]),e._v(".\nHere is the BiBTeX record for your reference.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@inproceedings{wan20rustee,\n    author    = "Shengye Wan and Mingshen Sun and Kun Sun and Ning Zhang and Xu He",\n    title     = "{RusTEE: Developing Memory-Safe ARM TrustZone Applications}",\n    booktitle = "Proceedings of the 36th Annual Computer Security Applications Conference",\n    series    = "ACSAC \'20",\n    year      = "2020",\n    month     = "12",\n}\n')])])]),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),s("p",[e._v("Rust OP-TEE TrustZone SDK is distributed under the Apache License (Version 2.0).\nSee "),s("a",{attrs:{href:"LICENSE"}},[e._v("LICENSE")]),e._v(" for details.")])])}),[],!1,null,null,null);t.default=n.exports}}]);