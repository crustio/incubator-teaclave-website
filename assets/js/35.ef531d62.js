(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{437:function(e,t,s){"use strict";s.r(t);var o=s(27),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"developing-with-visual-studio-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#developing-with-visual-studio-code"}},[e._v("#")]),e._v(" Developing with Visual Studio Code")]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("ol",[s("li",[e._v("Use Visual Studio Code and the "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Remote - SSH")]),e._v(" plugin to establish a vscode-ssh session.")]),e._v(" "),s("li",[e._v("Tweak a project with a new "),s("code",[e._v("Cargo.toml")]),e._v(" workspace and all "),s("code",[e._v("Makefile")]),e._v("s. This enables "),s("code",[e._v("rls")]),e._v(".")]),e._v(" "),s("li",[e._v("Tweak the build options for compiling in debug mode.")]),e._v(" "),s("li",[e._v("Use "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=webfreak.debug",target:"_blank",rel:"noopener noreferrer"}},[e._v("Native Debug")]),e._v(" plugin for graphic debugging.")])]),e._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("ul",[s("li",[e._v("Visual Studio Code installed on your machine. OS is flexible.")]),e._v(" "),s("li",[e._v("Remote Linux supports Intel SGX, with SSH service started.")]),e._v(" "),s("li",[s("code",[e._v("rustup")]),e._v(", Intel SGX driver/PSW/SDKs are correctly installed. "),s("code",[e._v("hello-rust")]),e._v(" code sample works.")]),e._v(" "),s("li",[e._v("Remote Linux "),s("strong",[e._v("could")]),e._v(" be the same machine. Just ignore the "),s("code",[e._v("vscode-ssh")]),e._v(" plugin mentioned in this wiki page and you'll be fine.")])]),e._v(" "),s("h2",{attrs:{id:"known-bugs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-bugs"}},[e._v("#")]),e._v(" Known bugs")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("sgx-gdb")]),e._v(" throws Python exception on "),s("code",[e._v("gdb")]),e._v(" > 7.12 on some platforms, such as\nmine. But native sgx-gdb may not throw that error. Don't have a solution for\nVSCode yet.")])]),e._v(" "),s("h2",{attrs:{id:"steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),s("h3",{attrs:{id:"setup-the-vscode-ssh-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-the-vscode-ssh-session"}},[e._v("#")]),e._v(" Setup the vscode-ssh session.")]),e._v(" "),s("ol",[s("li",[e._v("Setup a convenient way for ssh login. I always append my "),s("code",[e._v("~/.ssh/id_rsa.pub")]),e._v(" to the remote "),s("code",[e._v("~/.ssh/authorized_keys")]),e._v(".")]),e._v(" "),s("li",[e._v("Install the "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Remote - SSH")]),e._v(" plugin.")]),e._v(" "),s("li",[e._v("Establish a vscode-ssh session to the remote Linux.")])]),e._v(" "),s("h3",{attrs:{id:"create-an-rls-friendly-teaclave-sgx-sdk-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-rls-friendly-teaclave-sgx-sdk-project"}},[e._v("#")]),e._v(" Create an rls-friendly Teaclave SGX SDK project.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/baidu/rust-sgx-sdk/tree/master/samplecode/hello-rust-vscode-debug",target:"_blank",rel:"noopener noreferrer"}},[e._v("hello-rust-vscode-debug")]),e._v("\nis an example. Differences between this and "),s("code",[e._v("hello-rust")]),e._v(" are:")]),e._v(" "),s("ol",[s("li",[e._v("An extra "),s("code",[e._v("Cargo.toml")]),e._v(" at the root, which contains two Rust crates: "),s("code",[e._v("app")]),e._v(" and "),s("code",[e._v("enclave")]),e._v(". This change would result in changing the path of "),s("code",[e._v("target")]),e._v(" folders.")]),e._v(" "),s("li",[e._v("Tweak "),s("code",[e._v("Makefile")]),e._v(" and "),s("code",[e._v("enclave/Makefile")]),e._v(" and correct the path of "),s("code",[e._v("target")]),e._v(" folders.")]),e._v(" "),s("li",[e._v("Tweak "),s("code",[e._v("Makefile")]),e._v(" and "),s("code",[e._v("enclave/Makefile")]),e._v(" to enable debug compilation. Changes\ninclude: (1) remove "),s("code",[e._v("--release")]),e._v(" in "),s("code",[e._v("cargo build")]),e._v(", (2) add "),s("code",[e._v("-ggdb")]),e._v(" to\n"),s("code",[e._v("SGX_COMMON_FLAGS")]),e._v(".")])]),e._v(" "),s("p",[e._v("After these steps, the "),s("code",[e._v("hello-rust-vscode-debug")]),e._v(' should be an rls-friendly\nproject. And open the remote folder of it in the VSCode main screen "Start -\nopen folder". Then autocompletion should work!')]),e._v(" "),s("h3",{attrs:{id:"setup-native-debug-with-sgx-gdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-native-debug-with-sgx-gdb"}},[e._v("#")]),e._v(" Setup Native Debug with sgx-gdb")]),e._v(" "),s("p",[e._v("Now we have a vscode-ssh session to the remote Linux and an opened folder of\n"),s("code",[e._v("hello-rust-vscode-debug")]),e._v(". The next step is to configure a correct "),s("code",[e._v("launch.json")]),e._v("\nfor Native Debug plugin. Now open the debug panel of VS code and click on the\ngear icon to open "),s("code",[e._v("launch.json")]),e._v(" in the editor.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n    // Use IntelliSense to learn about possible attributes.\n    // Hover to view descriptions of existing attributes.\n    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "Debug",\n            "type": "gdb",\n            "request": "launch",\n            "target": "app",\n            "cwd": "${workspaceRoot}/bin",\n            "valuesFormatting": "parseText",\n            "gdbpath": "sgx-gdb",\n            "ssh": {\n                "forwardX11": false,\n                "host": "xxx", // your IP\n                "cwd": "${workspaceRoot}/bin",\n                 // SSH private key on remote machine. Add the pub key to ~/.ssh/authorized_keys\n                 // This ssh configuration is established from host to host, because the current\n                 // vscode session is "within a ssh session established by vscode-ssh".\n                 // I think this might be a bug but can hardly be resolved.\n                "keyfile": "/home/ding/.ssh/id_rsa", // private key\n                "user": "xxx",\n                "bootstrap": "source /opt/sgxsdk/environment",\n                "port": 22\n            }\n        }\n    ]\n}\n')])])]),s("p",[s("code",[e._v("name")]),e._v(","),s("code",[e._v("type")]),e._v(","),s("code",[e._v("request")]),e._v(","),s("code",[e._v("valuesFormatting")]),e._v(" are default values.\n"),s("code",[e._v("cwd")]),e._v(" is the working directory we launch the app, so it should be the "),s("code",[e._v("bin")]),e._v("\nfolder. "),s("code",[e._v("target")]),e._v(" is the debugee executable so it should be the "),s("code",[e._v("app")]),e._v(". "),s("code",[e._v("host")]),e._v(" is\nthe IP address of your Linux machine. Then comes the tricky part: ssh. It means\nthat we use an extra ssh session for debugger, within the current vscode-ssh\nsession. This means that we are here creating an additional ssh session from\nremote machine to itself. Only in this way could we setup the environment using\nthe Intel's script before launching "),s("code",[e._v("sgx-gdb")]),e._v(". So we need to add the public key\n"),s("code",[e._v("~/.ssh/id_rsa")]),e._v(" to "),s("code",[e._v("~/.ssh/authorized_keys")]),e._v(" and demonstrate the corresponding\nprivate key as "),s("code",[e._v("~/.ssh/id_rsa")]),e._v(".")]),e._v(" "),s("p",[e._v("Having this "),s("code",[e._v("launch.json")]),e._v(" configured correctly, we could simply set up a\nbreakpoint on the first line of "),s("code",[e._v("say_something")]),e._v(" and start debugging. Enjoy!")])])}),[],!1,null,null,null);t.default=a.exports}}]);