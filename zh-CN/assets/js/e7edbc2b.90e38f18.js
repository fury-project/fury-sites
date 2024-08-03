"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[8438],{3606:(a,i,e)=>{e.r(i),e.d(i,{assets:()=>h,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var l=e(5893),t=e(1151);const r={slug:"fury_0_4_0_release",title:"Fury 0.4.0 Released",authors:["chaokunyang"],tags:["fury"]},n="Fury v0.4.0 released",s={permalink:"/zh-CN/blog/fury_0_4_0_release",source:"@site/blog/2023-11-29-fury_0_4_0_release.md",title:"Fury 0.4.0 Released",description:"This release was made before Fury joined the Apache Incubator and thus it's a non-ASF release.",date:"2023-11-29T00:00:00.000Z",formattedDate:"2023\u5e7411\u670829\u65e5",tags:[{label:"fury",permalink:"/zh-CN/blog/tags/fury"}],readingTime:2.815,hasTruncateMarker:!0,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_0_4_0_release",title:"Fury 0.4.0 Released",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,prevItem:{title:"Fury 0.4.1 Released",permalink:"/zh-CN/blog/fury_0_4_1_release"},nextItem:{title:"Fury v0.3.1 released",permalink:"/zh-CN/blog/fury_0_3_1_release"}},h={authorsImageUrls:[void 0]},u=[{value:"Highlight",id:"highlight",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2}];function c(a){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...a.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.admonition,{type:"info",children:(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"This release was made before Fury joined the Apache Incubator and thus it's a non-ASF release."})})}),"\n",(0,l.jsxs)(i.p,{children:["I'm pleased to announce the 0.4.0 release of the Fury. With this release, ",(0,l.jsx)(i.a,{href:"https://www.graalvm.org/latest/reference-manual/native-image/",children:"GraalVM native image"})," and C++ row format automatic encoder based on compile-time reflection are supported. Please try it out and share your feedbacks with us."]}),"\n",(0,l.jsxs)(i.p,{children:["Author: ",(0,l.jsx)(i.a,{href:"https://github.com/chaokunyang",children:"chaokunyang"})]}),"\n",(0,l.jsxs)(i.p,{children:["I'm pleased to announce the 0.4.0 release of the Fury. With this release, ",(0,l.jsx)(i.a,{href:"https://www.graalvm.org/latest/reference-manual/native-image/",children:"GraalVM native image"})," and C++ row format automatic encoder based on compile-time reflection are supported. Please try it out and share your feedbacks with us."]}),"\n",(0,l.jsx)(i.h2,{id:"highlight",children:"Highlight"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["[Java] Support Graalvm native image. The implementation will generate all serialization code at image build time, the runtime will be extremely fast, see ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/blob/main/docs/guide/graalvm_guide.md",children:"fury graalvm usage doc"})]}),"\n",(0,l.jsx)(i.li,{children:"[Java] Fury vs JDK benchmark on Graalvm native image"}),"\n",(0,l.jsx)(i.li,{children:"[Scala] Serialization support for package scoped object"}),"\n",(0,l.jsx)(i.li,{children:"[C++] Reflection support by macro/template programing"}),"\n",(0,l.jsx)(i.li,{children:"[C++] Automatic row format encoder"}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"whats-changed",children:"What's Changed"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["[Python] fix python release by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1125",children:"https://github.com/alipay/fury/pull/1125"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] make unsafe offset compatible with graalvm by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1117",children:"https://github.com/alipay/fury/pull/1117"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Scala] Fix scala package object JIT error by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1130",children:"https://github.com/alipay/fury/pull/1130"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] Refine maven pom config by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1126",children:"https://github.com/alipay/fury/pull/1126"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Rust]  add rust building by @caicancai in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1129",children:"https://github.com/alipay/fury/pull/1129"})]}),"\n",(0,l.jsxs)(i.li,{children:["[C++] Remove useless overload of Writer::WriteString by @PragmaTwice in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1136",children:"https://github.com/alipay/fury/pull/1136"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Rust] fix typo by @caicancai in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1133",children:"https://github.com/alipay/fury/pull/1133"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Rust]  add mesaage about rust ci by @caicancai in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1131",children:"https://github.com/alipay/fury/pull/1131"})]}),"\n",(0,l.jsxs)(i.li,{children:["[C++] Add move ctor/assign op to Status by @PragmaTwice in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1134",children:"https://github.com/alipay/fury/pull/1134"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Rust] fix cargo test error by @wangweipeng2 in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1135",children:"https://github.com/alipay/fury/pull/1135"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Rust] improve rust ci by @caicancai in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1138",children:"https://github.com/alipay/fury/pull/1138"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Scala] Fix scala collection serialization nested in pojo by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1140",children:"https://github.com/alipay/fury/pull/1140"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] make sting builder serializer codegen eager by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1141",children:"https://github.com/alipay/fury/pull/1141"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Rust] fix rust ci bug by @caicancai in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1139",children:"https://github.com/alipay/fury/pull/1139"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] support add static fields in fury codegen by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1147",children:"https://github.com/alipay/fury/pull/1147"})]}),"\n",(0,l.jsxs)(i.li,{children:["[C++] Add the basic row format serializer for C++ class types via reflection by @PragmaTwice in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1144",children:"https://github.com/alipay/fury/pull/1144"})]}),"\n",(0,l.jsxs)(i.li,{children:["[C++] Add duplicated fields detection in ",(0,l.jsx)(i.code,{children:"FURY_FIELD_INFO"})," macro by @PragmaTwice in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1151",children:"https://github.com/alipay/fury/pull/1151"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] support create serializer when register class by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1154",children:"https://github.com/alipay/fury/pull/1154"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] Support graalvm native image by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1143",children:"https://github.com/alipay/fury/pull/1143"})]}),"\n",(0,l.jsxs)(i.li,{children:["[C++] Support string type in RowEncoder by @PragmaTwice in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1158",children:"https://github.com/alipay/fury/pull/1158"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Scala] add graalvm support for scala singleton by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1159",children:"https://github.com/alipay/fury/pull/1159"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Scala] Fix scala singleton map/collection serialization in struct by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1160",children:"https://github.com/alipay/fury/pull/1160"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] add read resolve circular test suite by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1161",children:"https://github.com/alipay/fury/pull/1161"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] Remove load arrow serializers by default by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1163",children:"https://github.com/alipay/fury/pull/1163"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] Support thread safe fury for graalvm native image by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1164",children:"https://github.com/alipay/fury/pull/1164"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Scala] Fix package object serialization in scala App by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1166",children:"https://github.com/alipay/fury/pull/1166"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] add graalvm usage doc by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1168",children:"https://github.com/alipay/fury/pull/1168"})]}),"\n",(0,l.jsxs)(i.li,{children:["[C++] Split util.h to bit_util.h and time_util.h by @PragmaTwice in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1171",children:"https://github.com/alipay/fury/pull/1171"})]}),"\n",(0,l.jsxs)(i.li,{children:["[C++] Support cv-qualified types in row encoder by @PragmaTwice in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1172",children:"https://github.com/alipay/fury/pull/1172"})]}),"\n",(0,l.jsxs)(i.li,{children:["[C++] Add support for nested class types in row encoder by @PragmaTwice in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1173",children:"https://github.com/alipay/fury/pull/1173"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] Add graalvm benchmark by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1178",children:"https://github.com/alipay/fury/pull/1178"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] Fix string key serializer ref tracking by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1174",children:"https://github.com/alipay/fury/pull/1174"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Java] Add graalvm benchmark test results by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1180",children:"https://github.com/alipay/fury/pull/1180"})]}),"\n",(0,l.jsxs)(i.li,{children:["[Scala] fix package object inaccessible from source code by @chaokunyang in ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/pull/1181",children:"https://github.com/alipay/fury/pull/1181"})]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Full Changelog"}),": ",(0,l.jsx)(i.a,{href:"https://github.com/alipay/fury/compare/v0.3.1...v0.4.0",children:"https://github.com/alipay/fury/compare/v0.3.1...v0.4.0"})]})]})}function p(a={}){const{wrapper:i}={...(0,t.a)(),...a.components};return i?(0,l.jsx)(i,{...a,children:(0,l.jsx)(c,{...a})}):c(a)}},1151:(a,i,e)=>{e.d(i,{Z:()=>s,a:()=>n});var l=e(7294);const t={},r=l.createContext(t);function n(a){const i=l.useContext(r);return l.useMemo((function(){return"function"==typeof a?a(i):{...i,...a}}),[i,a])}function s(a){let i;return i=a.disableParentContext?"function"==typeof a.components?a.components(t):a.components||t:n(a.components),l.createElement(r.Provider,{value:i},a.children)}}}]);