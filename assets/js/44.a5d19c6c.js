(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{432:function(e,t,s){"use strict";s.r(t);var a=s(27),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"trusted-multi-player-computing-that-use-sgx-as-trust-computing-base"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trusted-multi-player-computing-that-use-sgx-as-trust-computing-base"}},[e._v("#")]),e._v(" Trusted Multi-player computing that use sgx as trust-computing base")]),e._v(" "),s("p",[e._v("This code implements the trusted mpc use sgx as trust-computing base.")]),e._v(" "),s("p",[e._v("This code sample contains an implementation of "),s("a",{attrs:{href:"https://github.com/cloud-security-research/sgx-ra-tls/blob/master/whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Integrating Remote Attestation with Transport Layer Security")]),e._v(", with the modification of the untrusted side.")]),e._v(" "),s("h2",{attrs:{id:"design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),s("p",[e._v("The same combination of (hardware,enviroment,context) will generates the same "),s("code",[e._v("mr_enclave")]),e._v(" measurement. And it is almost impossible to counterfeit it.")]),e._v(" "),s("p",[e._v("We could achieve trust computing and data privacy based on this feature.")]),e._v(" "),s("p",[e._v("Assuming that there are two players: Alice and Bob.")]),e._v(" "),s("ul",[s("li",[e._v("Alice wants to get data from bob and compute its hash.")]),e._v(" "),s("li",[e._v("Bob does not want to let Alice know the origin data.")])]),e._v(" "),s("p",[e._v("With Intel SGX, and baiduxlab/sgx-rust image, we could do this in the following steps:")]),e._v(" "),s("ul",[s("li",[e._v("Alice shares the hash-computing code which will be run in SGX enclave with Bob.")]),e._v(" "),s("li",[e._v("Bob checks whether there exists any security risk in this code.")]),e._v(" "),s("li",[e._v("Alice tells Bob the context of compiling enviroment and builds her enclave.signed.so.")]),e._v(" "),s("li",[e._v("Bob compiles the code and runs his enclave and gets the corresoponding "),s("code",[e._v("mr_enclave")]),e._v(".")]),e._v(" "),s("li",[e._v("Bod tries to connect with Alice's enclave and gets the "),s("code",[e._v("mr_enclave")]),e._v(" from report and compares it with his.")]),e._v(" "),s("li",[e._v("If passed, Bob sends data to Alice's enclave through TLS.")]),e._v(" "),s("li",[e._v("Alice's enclave gets the data and computs hash of it.")])]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v("To use this code sample, one needs to register at "),s("a",{attrs:{href:"https://api.portal.trustedservices.intel.com/EPID-attestation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel website")]),e._v(" for dev IAS service access. Once the registration is finished, the following stuff should be ready:")]),e._v(" "),s("ol",[s("li",[e._v("An SPID assigned by Intel")]),e._v(" "),s("li",[e._v("IAS API Key assigned by Intel")])]),e._v(" "),s("p",[e._v("Both of these information could be found in the new "),s("a",{attrs:{href:"https://api.portal.trustedservices.intel.com/developer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Trusted Services API Management Portal")]),e._v('. Please log into this portal and switch to "Manage subscriptions" page on the top right corner to see your SPID and API keys. Either primary key or secondary key works.')]),e._v(" "),s("p",[e._v("Save them to tr-mpc-server's "),s("code",[e._v("bin/spid.txt")]),e._v(" and "),s("code",[e._v("bin/key.txt")]),e._v(" respectively. Size of these two files should be 32 or 33.")]),e._v(" "),s("h2",{attrs:{id:"custom-ca-client-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-ca-client-setup"}},[e._v("#")]),e._v(" Custom CA/client setup")]),e._v(" "),s("p",[e._v("To establish a TLS channel, we need a CA and generates a client cert for mutual authentication. We store them at "),s("code",[e._v("cert")]),e._v(".")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Generate CA private key\nopenssl ecparam -genkey -name prime256v1 -out ca.key")])]),e._v(" "),s("li",[s("p",[e._v("Generate CA cert\nopenssl req -x509 -new -SHA256 -nodes -key ca.key -days 3650 -out ca.crt")])]),e._v(" "),s("li",[s("p",[e._v("Generate Client private key\nopenssl ecparam -genkey -name prime256v1 -out client.key")])]),e._v(" "),s("li",[s("p",[e._v("Export the keys to pkcs8 unencrypted format\nopenssl pkcs8 -topk8 -nocrypt -in client.key -out client.pkcs8")])]),e._v(" "),s("li",[s("p",[e._v("Generate Client CSR\nopenssl req -new -SHA256 -key client.key -nodes -out client.csr")])]),e._v(" "),s("li",[s("p",[e._v('Generate Client Cert\nopenssl x509 -req -extfile <(printf "subjectAltName=DNS:localhost,DNS:www.example.com") -days 3650 -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt')])]),e._v(" "),s("li",[s("p",[e._v("Intel CA report signing pem. Download and uncompress:\nhttps://software.intel.com/sites/default/files/managed/7b/de/RK_PUB.zip")])])]),e._v(" "),s("h2",{attrs:{id:"embedding-ias-credentials-to-tr-mpc-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#embedding-ias-credentials-to-tr-mpc-server"}},[e._v("#")]),e._v(" Embedding IAS credentials to tr-mpc-server")]),e._v(" "),s("p",[s("code",[e._v("enclave/src/lib.rs")]),e._v(" contains two funcs "),s("code",[e._v("load_spid")]),e._v(" and "),s("code",[e._v("get_ias_api_key")]),e._v(". These two functions are configured to load spid/api key from "),s("code",[e._v("spid.txt")]),e._v(" and "),s("code",[e._v("key.txt")]),e._v(" from "),s("code",[e._v("bin")]),e._v(" directory respectively. One can either adjust the file paths/names or copy the spid/key to "),s("code",[e._v("bin")]),e._v(". "),s("code",[e._v("spid.txt")]),e._v(" and "),s("code",[e._v("key.txt")]),e._v(" should only contain one line of 32 chars such as "),s("code",[e._v("DEADBEAFDEADBEAFDEADBEAFDEADBEAF")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[e._v("#")]),e._v(" Run")]),e._v(" "),s("p",[e._v("Start Bob's verify server")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd tr-mpc-server\nmake\ncd bin\n./app --verify(add --unlink if your spid's type is unlinkable)\n")])])]),s("p",[e._v("Start Alice's server")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd tr-mpc-server\ncd bin\n./app (add --unlink if your spid's type is unlinkable)\n")])])]),s("p",[e._v("Start Bob's client")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd tr-mpc-client\ncargo run\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);