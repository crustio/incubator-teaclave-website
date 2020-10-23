(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{489:function(e,t,a){"use strict";a.r(t);var r=a(27),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"keys-and-certificates-in-teaclave"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keys-and-certificates-in-teaclave"}},[e._v("#")]),e._v(" Keys and Certificates in Teaclave")]),e._v(" "),a("p",[e._v("This directory contains keys and certificates used in the Teaclave platform.\nNote that these are only for demonstration. "),a("em",[e._v("DO NOT use them in production.")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("enclave_signing_key.pem")]),e._v(": private key to sign SGX enclaves")]),e._v(" "),a("li",[a("code",[e._v("ias_root_ca_cert.pem")]),e._v(": attestation report root CA certificate for Intel SGX\nAttestation Service, obtained from the\n"),a("a",{attrs:{href:"https://api.portal.trustedservices.intel.com/EPID-attestation",target:"_blank",rel:"noopener noreferrer"}},[e._v("service website"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("dcap_root_ca_cert.pem")]),e._v(": root CA certificate used for connecting to the\nreference DCAP attestation server and verifying ECDSA attestation reports.")]),e._v(" "),a("li",[a("code",[e._v("dcap_server_cert.pem")]),e._v(" and "),a("code",[e._v("dcap_server_key.pem")]),e._v(": DCAP attestation server\nend-entity certificate and private key. Certificate is signed by DCAP root CA.")]),e._v(" "),a("li",[a("code",[e._v("auditors")]),e._v(": contains auditors' keys to sign the "),a("em",[e._v("enclave info")]),e._v(" for mutual\nattestation")])])])}),[],!1,null,null,null);t.default=n.exports}}]);