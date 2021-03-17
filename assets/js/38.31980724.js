(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{440:function(e,t,s){"use strict";s.r(t);var a=s(27),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"run-rust-sgx-applications-in-mesalock-linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-rust-sgx-applications-in-mesalock-linux"}},[e._v("#")]),e._v(" Run Rust SGX Applications in Mesalock Linux")]),e._v(" "),s("p",[e._v("MesaLock Linux is a general purpose Linux distribution which aims to provide a safe and secure user space environment. To eliminate high-severe vulnerabilities caused by memory corruption, the whole user space applications are rewritten in memory-safe programming languages like Rust and Go. This extremely reduces attack surfaces of an operating system exposed in the wild, leaving the remaining attack surfaces auditable and restricted.  Therefore, MesaLock Linux can substantially improve the security of the Linux ecosystem. Additionally, thanks to the Linux kernel, MesaLock Linux supports a broad hardware environment, making it deployable in many places. Two main usage scenarios of MesaLock Linux are for containers and security-sensitive embedded devices. With the growth of the ecosystem, MesaLock Linux would also be adopted in the server environment in the future.")]),e._v(" "),s("p",[e._v("We believe that running Rust SGX applications inside Mesalock Linux could improve the security of SGX applications and reduce their attack surface significantly.")]),e._v(" "),s("h2",{attrs:{id:"is-it-safe-to-run-rust-sgx-applications-in-mesalock-linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#is-it-safe-to-run-rust-sgx-applications-in-mesalock-linux"}},[e._v("#")]),e._v(" Is it safe to run Rust SGX applications in Mesalock Linux?")]),e._v(" "),s("p",[e._v("A typical Rust SGX application has at least to components: one enclave, and one untrusted component. The enclave is self-contained and doesn't need dynamic loading. The untrusted component depends on "),s("code",[e._v("liburts")]),e._v(" (untrusted runtime service library), which depends on the Application Enclave Services Manager library.")]),e._v(" "),s("p",[e._v("We show the dependency tree as follows. In this tree, we hide all the dynamic libraries which already exist in Mesalock Linux.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SGX Application\n├── Enclave (statically linked)\n└── Untrusted component\n    └── SGX untrusted runtime (libsgx_urts.so)\n        ├── libstdc++ (libstdc++.so.6)\n        └── AESM service library (libsgx_uae_service.so)\n            └── libprotobuf (libprotobuf.so.9)\n                ├── libstdc++ (libstdc++.so.6)\n                └── zlib (libz.so.1)    \n")])])]),s("p",[e._v("We can see that, to support Rust SGX applications in Mesalock Linux, the minimum set of required shared library is : libsgx_urts.so, libsgx_uae_service.so, libstdc++.so.6, libz.so.1 and libprotobuf.so.9.")]),e._v(" "),s("p",[e._v("We refined the rules-of-thumb for hybrid memory-safe architecture designing and here is the refined version.")]),e._v(" "),s("ol",[s("li",[e._v("Unsafe components must not taint safe components, especially for public APIs and data structures.")]),e._v(" "),s("li",[e._v("Unsafe components should be as small as possible and decoupled from safe components.")]),e._v(" "),s("li",[e._v("Unsafe components should be explicitly marked during deployment and ready to upgrade.")])]),e._v(" "),s("p",[e._v("Hence, we believe that running Rust SGX applications in Mesalock Linux could provide better security guarantees if they follow the memory safety principles.")]),e._v(" "),s("h2",{attrs:{id:"solution-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solution-overview"}},[e._v("#")]),e._v(" Solution Overview")]),e._v(" "),s("p",[e._v("The whole solution contains two steps:")]),e._v(" "),s("ol",[s("li",[e._v("Build Rust SGX applications in dev environment, such as Rust SGX docker container.")]),e._v(" "),s("li",[e._v("Run Rust SGX application in Mesalock Linux docker container.")])]),e._v(" "),s("p",[e._v("Step 1 is trivial.")]),e._v(" "),s("p",[e._v("For step 2, the Intel AESM service is required. Technically, Intel AESM service listens at a domain socket "),s("code",[e._v("/var/run/aesmd/aesm.socket")]),e._v(" and provide service via this domain socket. To interact with CPU, Intel AESM service needs to access "),s("code",[e._v("/dev/isgx")]),e._v(".")]),e._v(" "),s("p",[e._v("There are two options for running the aesm service: (1) start "),s("code",[e._v("aesmd")]),e._v(" inside the Mesalock Linux container, or (2) start "),s("code",[e._v("aesmd")]),e._v(" on the host OS and provide service to the SGX application inside the container. The first method provides better isolation for "),s("code",[e._v("aesmd")]),e._v(", but it would start a set of infrastructure enclaves for each docker container, wasting the limited EPC memory. The second one only launches one set of infrastructure enclaves for all SGX containers and we believe it is more efficient.")]),e._v(" "),s("p",[e._v("In our current solution, we put the AESM service process "),s("code",[e._v("aesmd")]),e._v(" outside the Mesalock Linux docker container and only expose the domain socket "),s("code",[e._v("/var/run/aesm/aesm.socket")]),e._v(" to the container. In this way, we isolate the AESM service along with the six foundation enclaves (Launch Enclave/Quoting Enclave/Provisioning Enclave/Provisioning Certification Enclave/Platform Service Enclave for long term pairing/Platform Service Enclave for session management) from Mesalock Linux docker container.")]),e._v(" "),s("p",[s("img",{attrs:{src:"mesa.png",alt:"overview"}})]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v("Rust SGX SDK and docker")]),e._v(" "),s("h2",{attrs:{id:"step-by-step-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-guide"}},[e._v("#")]),e._v(" Step-by-step Guide")]),e._v(" "),s("p",[e._v("Step 1 : build SGX application in Rust SGX dev docker container.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ git pull git@github.com:apache/teaclave-sgx-sdk.git\n$ docker run -v /path/to/rust-sgx-sdk:/root/sgx -ti --device /dev/isgx baiduxlab/sgx-rust\n")])])]),s("p",[e._v("In the Rust SGX dev docker container:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ cd /root/sgx/samplecode/hello-rust\n$ make\n...(ignored many lines)...\n</EnclaveConfiguration>\ntcs_num 1, tcs_max_num 1, tcs_min_pool 1\nThe required memory is 1732608B.\nSucceed.\nSIGN =>  bin/enclave.signed.so\n$ exit\n")])])]),s("p",[e._v("Now the "),s("code",[e._v("hello-rust")]),e._v(" sample has been compiled successfully.")]),e._v(" "),s("p",[e._v("Step 2 : run SGX application in Mesalock Linux docker container")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker run --rm -ti \\\n             --device /dev/isgx \\                               # forward isgx device\n             -v /path/to/rust-sgx-sdk:/root/sgx \\               # add SDK\n             -v /path/to/rust-sgx-sdk/mesalock-rt:/opt/sgxrt \\  # add runtime lib\n             -v /var/run/aesmd:/var/run/aesmd \\                 # forward domain socket\n             -e LD_LIBRARY_PATH=/opt/sgxrt \\                    # set lib path\n             -w /root/sgx/samplecode/hello-rust/bin \\           # set working dir\n             mesalocklinux/mesalock-linux\n")])])]),s("p",[e._v("Now the Mesalock Linux docker container has been initiated using method (2) and an Ion shell has been launched. In the container, we execute:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(":/root/sgx/samplecode/hello-rust/bin$ ./app\n[+] Home dir is /root\n[-] Open token file /root/enclave.token error! Will create one.\n[+] Saved updated launch token!\n[+] Init Enclave Successful 2!\nThis is a normal world string passed into Enclave!\nThis is a in-Enclave Rust string!\n[+] say_something success...\n")])])]),s("h2",{attrs:{id:"mesalock-rt-runtime-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mesalock-rt-runtime-details"}},[e._v("#")]),e._v(" mesalock-rt Runtime Details")]),e._v(" "),s("p",[e._v("All these runtime shared libraries come from official releases, including Intel SGX SDK v2.0 release and Ubuntu 16.04 package archive.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("File")]),e._v(" "),s("th",[e._v("Size")]),e._v(" "),s("th",[e._v("SHA256")]),e._v(" "),s("th",[e._v("Comes from")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("libprotobuf.so.9")]),e._v(" "),s("td",[e._v("1170328")]),e._v(" "),s("td",[e._v("abd8b868f0f06584c30edbee90e27e2f8546ffe5bbe938922f62c5821b243925")]),e._v(" "),s("td",[s("a",{attrs:{href:"http://archive.ubuntu.com/ubuntu/pool/main/p/protobuf/libprotobuf9v5_2.6.1-1.3_amd64.deb",target:"_blank",rel:"noopener noreferrer"}},[e._v("libprotobuf9v5_2.6.1-1.3_amd64.deb")])])]),e._v(" "),s("tr",[s("td",[e._v("libsgx_uae_service.so")]),e._v(" "),s("td",[e._v("359944")]),e._v(" "),s("td",[e._v("67de93140307268871eb0e00ade9fc800bf3f45371b68ac79157c71b454edbaa")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://download.01.org/intel-sgx/linux-2.0/sgx_linux_ubuntu16.04.1_x64_psw_2.0.100.40950.bin",target:"_blank",rel:"noopener noreferrer"}},[e._v("sgx_linux_ubuntu16.04.1_x64_psw_2.0.100.40950.bin")])])]),e._v(" "),s("tr",[s("td",[e._v("libsgx_urts.so")]),e._v(" "),s("td",[e._v("166376")]),e._v(" "),s("td",[e._v("05a15c27432bded48b49b98f94649b4e90abaedbb4ce8f3c44baa1ff5ce2493d")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://download.01.org/intel-sgx/linux-2.0/sgx_linux_ubuntu16.04.1_x64_psw_2.0.100.40950.bin",target:"_blank",rel:"noopener noreferrer"}},[e._v("sgx_linux_ubuntu16.04.1_x64_psw_2.0.100.40950.bin")])])]),e._v(" "),s("tr",[s("td",[e._v("libstdc++.so.6")]),e._v(" "),s("td",[e._v("1594800")]),e._v(" "),s("td",[e._v("5e68ec758e36fb2db90f6be673cf4112d144a2f29ba400cd5c6e0c8e56ad9408")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://launchpad.net/~ubuntu-toolchain-r/+archive/ubuntu/test/+files/libstdc++6_7.2.0-1ubuntu1~16.04_amd64.deb",target:"_blank",rel:"noopener noreferrer"}},[e._v("libstdc++6_7.2.0-1ubuntu1~16.04_amd64.deb")])])]),e._v(" "),s("tr",[s("td",[e._v("libz.so.1")]),e._v(" "),s("td",[e._v("104864")]),e._v(" "),s("td",[e._v("a04cab74df9c7f96f82b34286bda5d4ee810feaac92dd2e8bcfe931d9c8baef4")]),e._v(" "),s("td",[s("a",{attrs:{href:"http://us.archive.ubuntu.com/ubuntu/pool/main/z/zlib/zlib1g_1.2.11.dfsg-0ubuntu1_amd64.deb",target:"_blank",rel:"noopener noreferrer"}},[e._v("zlib1g_1.2.11.dfsg-0ubuntu1_amd64.deb")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);