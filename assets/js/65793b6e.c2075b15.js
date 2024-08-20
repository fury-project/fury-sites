"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[8971],{9620:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var n=a(5893),r=a(1151);const t={slug:"fury_blazing_fast_multiple_language_serialization_framework",title:"Apache Fury: A blazing fast multi-language serialization framework powered by JIT and zero-copy",authors:["chaokunyang"],tags:["fury"]},s=void 0,o={permalink:"/blog/fury_blazing_fast_multiple_language_serialization_framework",editUrl:"https://github.com/apache/fury-site/tree/main/i18n/en-us/docusaurus-plugin-content-blog/2024-04-25-fury_blazing_fast_multiple_language_serialization_framework.md",source:"@site/i18n/en-us/docusaurus-plugin-content-blog/2024-04-25-fury_blazing_fast_multiple_language_serialization_framework.md",title:"Apache Fury: A blazing fast multi-language serialization framework powered by JIT and zero-copy",description:"Apache Fury (incubating) is a multi-language serialization framework powered by JIT dynamic compilation and zero copy. It implements multi-language SDKs: Java, Python, Golang, JavaScript, Rust, C++. It provides automatic multi-language objects serialization features, and 170x speedup compared to JDK serialization.",date:"2024-04-25T00:00:00.000Z",formattedDate:"April 25, 2024",tags:[{label:"fury",permalink:"/blog/tags/fury"}],readingTime:11.63,hasTruncateMarker:!0,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_blazing_fast_multiple_language_serialization_framework",title:"Apache Fury: A blazing fast multi-language serialization framework powered by JIT and zero-copy",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,prevItem:{title:"Fury v0.5.0 Released",permalink:"/blog/fury_0_5_0_release"},nextItem:{title:"Fury 0.4.1 Released",permalink:"/blog/fury_0_4_1_release"}},l={authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",level:2},{value:"What is Apache Fury?",id:"what-is-apache-fury",level:2},{value:"Core Serialization Capabilities",id:"core-serialization-capabilities",level:2},{value:"Serialization Primitives",id:"serialization-primitives",level:3},{value:"Zero-copy Serialization",id:"zero-copy-serialization",level:3},{value:"JIT dynamic compilation acceleration",id:"jit-dynamic-compilation-acceleration",level:3},{value:"Static code generation",id:"static-code-generation",level:3},{value:"Cache optimization",id:"cache-optimization",level:3},{value:"Multi-protocol Design and Implementation",id:"multi-protocol-design-and-implementation",level:2},{value:"Java serialization",id:"java-serialization",level:3},{value:"Cross-language object graph serialization",id:"cross-language-object-graph-serialization",level:3},{value:"Row-format",id:"row-format",level:3},{value:"Performance Comparison",id:"performance-comparison",level:2},{value:"Roadmap",id:"roadmap",level:2},{value:"Join us",id:"join-us",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Apache Fury (incubating) is a multi-language serialization framework powered by JIT dynamic compilation and zero copy. It implements multi-language SDKs: Java, Python, Golang, JavaScript, Rust, C++. It provides automatic multi-language objects serialization features, and 170x speedup compared to JDK serialization."}),"\n",(0,n.jsxs)(i.p,{children:["The GitHub address of fury repository is: ",(0,n.jsx)(i.a,{href:"https://github.com/apache/fury",children:"https://github.com/apache/fury"})]}),"\n",(0,n.jsx)("img",{alt:"fury banner",src:"/img/fury_banner.png"}),"\n",(0,n.jsx)(i.h2,{id:"background",children:"Background"}),"\n",(0,n.jsxs)(i.p,{children:["Serialization is a basic component of system communication, and widely used in big data, AI framework, cloud native and other distributed systems. ",(0,n.jsx)(i.strong,{children:"Data transfer between processes, languages, nodes, or object persistence, state read-write and copy"}),", all need serialization. The performance and ease-of-use of serialization affects ",(0,n.jsx)(i.strong,{children:"runtime and development efficiency"})," of the system."]}),"\n",(0,n.jsxs)(i.p,{children:["Static serialization frameworks like ",(0,n.jsx)(i.a,{href:"https://github.com/protocolbuffers/protobuf",children:"Protobuf"})," or ",(0,n.jsx)(i.a,{href:"https://github.com/google/flatbuffers",children:"FlatBuffers"})," cannot be used for cross-language ",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Domain-driven_design",children:"application development"})," directly, because they ",(0,n.jsx)(i.strong,{children:"don't support shared reference and polymorphism"}),", and also need to ",(0,n.jsx)(i.strong,{children:"generate code ahead"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Dynamic serialization frameworks such as JDK serialization, Kryo, Fst, Hessian, Pickle provide ease-of-use and dynamics, but ",(0,n.jsx)(i.strong,{children:"don't support cross-language"})," and suffer significant ",(0,n.jsx)(i.strong,{children:"performance issues"}),", which is unsuitable for high throughput, low latency, and large-scale data transfer scenarios."]}),"\n",(0,n.jsxs)(i.p,{children:["Therefore, we developed a new multi-language serialization framework ",(0,n.jsx)(i.strong,{children:"Apache Fury"}),", which is open-sourced on ",(0,n.jsx)(i.a,{href:"https://github.com/apache/fury",children:"https://github.com/apache/fury"}),". Through ",(0,n.jsx)(i.strong,{children:"highly optimized serialization primitives, JIT dynamic compilation and zero-copy"})," technologies, Fury is both fast and easy-to-use. It can ",(0,n.jsx)(i.strong,{children:"cross-language serialize any object automatically"})," and provides ",(0,n.jsx)(i.strong,{children:"ultimate performance"})," at the same time."]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("img",{width:"44%",alt:"serialization",src:"/img/case1.png"}),(0,n.jsx)("img",{width:"44%",alt:"deserialization",src:"/img/case2.png"})]}),"\n",(0,n.jsx)(i.h2,{id:"what-is-apache-fury",children:"What is Apache Fury?"}),"\n",(0,n.jsx)(i.p,{children:"Apache Fury is a multi-language serialization framework powered by JIT dynamic compilation and zero copy, providing blazing\nfast speed and ease of use:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Multiple languages"}),": Java, Python, C++, Golang, JavaScript, Rust. Other languages can be added easily."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Highly optimized serialization primitives"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Zero-copy"}),": Support ",(0,n.jsx)(i.a,{href:"https://peps.python.org/pep-0574/",children:"out-of-band"})," serialization and off-heap read/write."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"High performance"}),": Use JIT to generate serialization code at runtime in an async multithreaded way, which can optimize methods inlining, code cache, dead code elimination, hash lookup, meta writing and memory read/write."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Multi protocols"}),": Provide flexibility and ease of use of dynamic serialization, as well as the cross-language of static serialization.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Java Serialization"}),":","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Drop-in replaces JDK, Kryo, and Hessian. No need to modify user code, but providing 170x speed up at most, which can improve efficiency of rpc, data transfer and object persistence significantly."}),"\n",(0,n.jsxs)(i.li,{children:["100% JDK compatible, support JDK custom serialization methods ",(0,n.jsx)(i.code,{children:"writeObject"}),", ",(0,n.jsx)(i.code,{children:"readObject"}),", ",(0,n.jsx)(i.code,{children:"writeReplace"}),", ",(0,n.jsx)(i.code,{children:"readResolve"}),", ",(0,n.jsx)(i.code,{children:"readObjectNoData"})," natively."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Cross-language object graph"}),":","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Cross-language serialize any objects automatically, no need for IDL, schema compilation, and object/protocol conversion."}),"\n",(0,n.jsx)(i.li,{children:"Cross-language serialize shared/circular reference, no data duplication or recursion error."}),"\n",(0,n.jsx)(i.li,{children:"Support object polymorphism, multiple children type objects can be serialized simultaneously."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Row format"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"A cache-friendly binary random-access format, supports skipping deserialization and lazy deserialization, efficient for high-performance computing and large-scale data transfer."}),"\n",(0,n.jsx)(i.li,{children:"Support automatic conversion to Apache Arrow."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"core-serialization-capabilities",children:"Core Serialization Capabilities"}),"\n",(0,n.jsx)(i.p,{children:"Although different scenarios require different serialization protocols, the underlying operations of serialization are\nsimilar."}),"\n",(0,n.jsxs)(i.p,{children:["Therefore, Fury defines and implements ",(0,n.jsx)(i.strong,{children:"a set of basic serialization capabilities"}),", which can be used for quickly building new multi-language serialization protocols and get speedup by JIT acceleration and other optimizations."]}),"\n",(0,n.jsx)(i.p,{children:"At the same time, performance optimization for a protocol on the primitives can also benefit all other protocols."}),"\n",(0,n.jsx)(i.h3,{id:"serialization-primitives",children:"Serialization Primitives"}),"\n",(0,n.jsx)(i.p,{children:"Common serialization operations contains:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Bitmap operations"}),"\n",(0,n.jsx)(i.li,{children:"Number encoding and decoding"}),"\n",(0,n.jsx)(i.li,{children:"Compression for int and long"}),"\n",(0,n.jsx)(i.li,{children:"String creation and copy"}),"\n",(0,n.jsx)(i.li,{children:"String encoding: ASCII, UTF8, UTF16"}),"\n",(0,n.jsx)(i.li,{children:"Memory copy"}),"\n",(0,n.jsx)(i.li,{children:"Array copy and compression"}),"\n",(0,n.jsx)(i.li,{children:"Meta encoding, compression, and cache"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Fury use SIMD and other advanced language features to make basic operations extremely fast in every languages."}),"\n",(0,n.jsx)(i.h3,{id:"zero-copy-serialization",children:"Zero-copy Serialization"}),"\n",(0,n.jsxs)(i.p,{children:["Large-scale data transfer often has multiple binary buffers in an object graph. Some serialization frameworks will write the binaries into an intermediate buffer and introduce multiple time-consuming memory copies. Fury implemented an ",(0,n.jsx)(i.strong,{children:"out-of-band serialization protocol"})," inspired by ",(0,n.jsx)(i.a,{href:"https://peps.python.org/pep-0574/",children:"pickle5"}),", Ray and Apache Arrow, which can ",(0,n.jsx)(i.strong,{children:"capture all binary buffers"})," in an object graph to avoid intermediate copies of these buffers."]}),"\n",(0,n.jsx)(i.p,{children:"The following figure shows the serialization process of zero-copy:"}),"\n",(0,n.jsx)("img",{alt:"fury zero copy",src:"/img/fury_zero_copy.jpeg"}),"\n",(0,n.jsx)(i.p,{children:"Currently, Fury supports the following types of zero-copy:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Java: all basic types of arrays, ",(0,n.jsx)(i.code,{children:"ByteBuffer"}),", ",(0,n.jsx)(i.code,{children:"ArrowRecordBatch"}),", and ",(0,n.jsx)(i.code,{children:"VectorSchemaRoot"})]}),"\n",(0,n.jsxs)(i.li,{children:["Python: all arrays of the array module, numpy arrays, ",(0,n.jsx)(i.code,{children:"pyarrow.Table"}),", and ",(0,n.jsx)(i.code,{children:"pyarrow.RecordBatch"})]}),"\n",(0,n.jsx)(i.li,{children:"Golang: byte slice"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"You can also add the new zero copy type based on the Fury interface."}),"\n",(0,n.jsx)(i.h3,{id:"jit-dynamic-compilation-acceleration",children:"JIT dynamic compilation acceleration"}),"\n",(0,n.jsx)(i.p,{children:"Custom type objects usually contain lots of type information, Fury used this information to generate efficient serialization code at runtime, which can push lots of runtime operations into the dynamic compilation stage. By inlining more methods, better code cache, reducing virtual method calls, conditional branches, hash lookup, metadata writes, and memory reads/writes, the serialization performance is greatly accelerated."}),"\n",(0,n.jsxs)(i.p,{children:["For Java, Fury implements a ",(0,n.jsx)(i.strong,{children:"runtime codegen framework"})," and defines an ",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Intermediate_representation",children:"operator expression IR"}),". Then fury can perform type inference based on the generic type information of the object at runtime to build an expression tree that describes the logic of serialized code."]}),"\n",(0,n.jsxs)(i.p,{children:["The codegen framework will generate efficient Java code from the expression tree, then pass to ",(0,n.jsx)(i.a,{href:"https://github.com/janino-compiler/janino",children:"Janino"})," to compile it into bytecode, and load it into the user's ClassLoader or the ClassLoader created by Fury, and finally compile it into efficient assembly code through Java JIT."]}),"\n",(0,n.jsxs)(i.p,{children:["Since JVM JIT skips Big method compilation and inlining, Fury also implements an optimizer to ",(0,n.jsx)(i.strong,{children:"split big methods into small methods recursively"}),", thus ensuring that all code can be compiled and inlined."]}),"\n",(0,n.jsx)("img",{alt:"fury java codegen",src:"/img/fury_java_codegen.png"}),"\n",(0,n.jsxs)(i.p,{children:["Fury also supports ",(0,n.jsx)(i.strong,{children:"asynchronous multithreaded compilation"})," by running the codegen tasks in a thread pool, and using interpretation mode until JIT finishes to ensure no serialization burrs. Users can skip warm up serialization of objects."]}),"\n",(0,n.jsx)(i.p,{children:"Python and JavaScript codegen are similar. Generating source code is easier for development and troubleshooting problems."}),"\n",(0,n.jsxs)(i.p,{children:["Since serialization will manipulate objects extensively in each programming language, and the language does not expose the low-level API of the memory model, native methods call has a large cost too, so we cannot use ",(0,n.jsx)(i.a,{href:"https://www.llvm.org/",children:"LLVM"})," to build a unified serializer JIT framework. Instead, we implemented a codegen framework for every language separately."]}),"\n",(0,n.jsx)(i.h3,{id:"static-code-generation",children:"Static code generation"}),"\n",(0,n.jsx)(i.p,{children:"Although JIT compilation can greatly improve serialization efficiency and generate better serialization code based on the statistical distribution of data at runtime, languages like C++ do not support reflection, have no virtual machines, and no low-level API for memory models. We cannot generate serialization code dynamically for such languages through JIT."}),"\n",(0,n.jsxs)(i.p,{children:["In such scenarios, Fury is implementing an ",(0,n.jsx)(i.strong,{children:"AOT codegen framework"}),", which generates the serialized code statically according to the object schema, and objects can be serialized automatically using the generated serializer. For Rust, Rust macro is used to generate code statically."]}),"\n",(0,n.jsx)(i.h3,{id:"cache-optimization",children:"Cache optimization"}),"\n",(0,n.jsxs)(i.p,{children:["When serializing a custom type, fury will ",(0,n.jsx)(i.strong,{children:"reorder fields"})," to ensure that fields of the same type are serialized in order. This can hit more data cache and CPU instruction cache."]}),"\n",(0,n.jsxs)(i.p,{children:["The basic type fields are written ",(0,n.jsx)(i.strong,{children:"in descending order by byte size"}),". In this way, if the initial addresses are aligned, subsequent read and write operations will occur at the position where the memory addresses are aligned, making CPU execution more efficient."]}),"\n",(0,n.jsx)(i.h2,{id:"multi-protocol-design-and-implementation",children:"Multi-protocol Design and Implementation"}),"\n",(0,n.jsx)(i.p,{children:"Based on the multi-language serialization features provided by Fury core, we have built three serialization protocols for different scenarios:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Java serialization"}),": Suitable for pure Java serialization scenarios and provides up to 170x speed up;"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Cross-language object graph serialization"}),": Suitable for application-oriented multi-language programming and\nhigh-performance cross-language serialization;"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Row-format serialization"}),": Suitable for distributed computing engines such as Apache Spark, Apache Flink, Apache Doris, Velox, and features frameworks."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"In the future, we will add new protocols for other core scenarios. Users can also build their own protocols based on Fury's serialization framework."}),"\n",(0,n.jsx)(i.h3,{id:"java-serialization",children:"Java serialization"}),"\n",(0,n.jsxs)(i.p,{children:["Java is widely used in ",(0,n.jsx)(i.strong,{children:"big data, cloud native, microservices, and enterprise applications"}),". Therefore, Fury made lots of optimizations for Java serialization, which reduces system latency and server costs a lot, and improves throughput significantly. Our implementation has the following highlights:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Blazing fast performance: Based on Java types, JIT compilation and Unsafe low-level operations, ",(0,n.jsx)(i.strong,{children:"Fury is 170x faster than JDK, and 50~110x faster than Kryo/Hessian"})," at most."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"100% JDK serialization API compatibility"})," : Supports all JDK custom serialization methods ",(0,n.jsx)(i.code,{children:"writeObject"}),", ",(0,n.jsx)(i.code,{children:"readObject"}),", ",(0,n.jsx)(i.code,{children:"writeReplace"}),", ",(0,n.jsx)(i.code,{children:"readResolve"}),", ",(0,n.jsx)(i.code,{children:"readObjectNoData"})," natively to ensure the serialization correctness in any scenario. Kryo and Hessian have some correctness issues in these scenarios."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Type compatibility"}),": When the deserialization and serialization class schema are inconsistent, it can still deserialize correctly. It supports application upgrade and deployment, add/delete fields independently. Fury type-compatible mode is implemented with no performance loss compared to type-consistent mode."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Metadata sharing"})," : share metadata(class name, field name&type, etc.) across multiple serializations under a context (TCP connection), meta will be sent to the peer only for the first serialization, the peer can reconstruct the same deserializer based on this information. Subsequent serialization will skip transferring metadata, which can reduce network traffic, and support type compatibility automatically."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Zero-copy support"}),": supports out-of-band zero copy and off-heap memory read and write."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"cross-language-object-graph-serialization",children:"Cross-language object graph serialization"}),"\n",(0,n.jsx)(i.p,{children:"Fury cross-language object graph serialization is primarily used for scenarios that require higher dynamics and ease-of-use."}),"\n",(0,n.jsx)(i.p,{children:"Although frameworks like Protobuf or FlatBuffers support cross-language serialization, they still have limitations:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["They require ",(0,n.jsx)(i.strong,{children:"pre-defined IDLs and generate code statically ahead"}),", lacking sufficient dynamics and flexibility;"]}),"\n",(0,n.jsxs)(i.li,{children:["The generated classes ",(0,n.jsx)(i.strong,{children:"don't conform to object-oriented design"})," and it's impossible to add behavior to classes, which make them unsuitable for use as domain objects in cross-language application development."]}),"\n",(0,n.jsxs)(i.li,{children:["They ",(0,n.jsx)(i.strong,{children:"don't support polymorphism"}),". Object-oriented programming uses interfaces to invoke subclass methods, but this pattern isn't supported well in those frameworks. Although FlatBuffers offers ",(0,n.jsx)(i.code,{children:"Union"}),", and Protobuf provides ",(0,n.jsx)(i.code,{children:"OneOf/Any"}),", those API require check object type during serialization and deserialization, which isn't polymorphic."]}),"\n",(0,n.jsxs)(i.li,{children:["They ",(0,n.jsx)(i.strong,{children:"don't support circular references and shared references"}),". Users need to define a set of IDLs for domain objects\nand implement reference resolution by themselves, as well as writing code to convert between domain objects and protocol objects in each language. If the object graph depth is deep, more code needs to be written."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Due to the above limitations, Fury implemented a cross-language object graph serialization protocol that:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Automatically serializes any object across multiple languages"}),": By defining classes in the serialization and deserialization peer, objects in one language can be automatically serialized into objects in another language without creating IDL files, compiling schema to generate code, or writing conversion code."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Automatically serializes shared and circular references"})," across multiple languages."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Supports object type polymorphism"}),", consistent with the object-oriented programming paradigm, and multiple subtypes can be automatically deserialized without manual intervention."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Out-of-band zero-copy"})," is also supported in this protocol."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Example of Automatic Cross-Language Serialization:"}),"\n",(0,n.jsx)("img",{alt:"xlang serialization example",src:"/img/xlang_serialization_example.png"}),"\n",(0,n.jsx)(i.h3,{id:"row-format",children:"Row-format"}),"\n",(0,n.jsxs)(i.p,{children:["For ",(0,n.jsx)(i.strong,{children:"high-performance computing and large-scale data transfer"})," scenarios, data serialization and transfer are often the ",(0,n.jsx)(i.strong,{children:"performance bottlenecks"})," of the system. If users only need to read part of the data or filter data based on some field of an object, deserializing the entire data will result in unnecessary overhead. Therefore, Fury provides a binary data structure for ",(0,n.jsx)(i.strong,{children:"direct reading and writing on binary data to avoid serialization"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://arrow.apache.org/",children:"Apache Arrow"})," is a standardized columnar storage format that supports binary read and write. However, ",(0,n.jsx)(i.strong,{children:"columnar format is not suitable for all scenarios"}),". Data in online and streaming computing are naturally stored row by row, and row is also used in columnar computing engines when involving data updates, Hash/Join/Aggregation operations."]}),"\n",(0,n.jsxs)(i.p,{children:["However, there is no standardized implementation for row format. ",(0,n.jsx)(i.strong,{children:"Computing engines such as Spark/Flink/Doris/Velox all defined their row format, which doesn't support cross-language and can only be used internally by themselves"}),". FlatBuffers does support ",(0,n.jsx)(i.strong,{children:"lazy deserialization"}),", but it requires static compilation of schema IDL and management of offset, which is impossible for complex scenarios."]}),"\n",(0,n.jsxs)(i.p,{children:["Therefore, Fury implemented a ",(0,n.jsx)(i.strong,{children:"binary row format"})," inspired by ",(0,n.jsx)(i.a,{href:"https://databricks.com/blog/2015/04/28/project-tungsten-bringing-spark-closer-to-bare-metal.html",children:"Spark Tungsten"})," and ",(0,n.jsx)(i.a,{href:"https://arrow.apache.org/docs/format/Columnar.html",children:"Apache Arrow format"}),", which allows ",(0,n.jsx)(i.strong,{children:"random access and partial deserialization"}),". Currently, Java/Python/C++ versions have been implemented, allowing direct reading and writing on binary data to avoid all serialization overhead, and can convert to arrow format automatically."]}),"\n",(0,n.jsx)("img",{alt:"xlang serialization example",src:"/img/row_format.png"}),"\n",(0,n.jsxs)(i.p,{children:["This format is densely stored, byte aligned and cache-friendly, which enables faster read and write operations. By avoiding deserialization, it reduces Java GC pressure and Python overhead. Based on Python's dynamics, Fury's data structure implements special methods such as ",(0,n.jsx)(i.code,{children:"getattr"}),", ",(0,n.jsx)(i.code,{children:"getitem"}),", ",(0,n.jsx)(i.code,{children:"slice"}),", etc., ensuring behavior consistency with Python ",(0,n.jsx)(i.code,{children:"dataclass"}),", ",(0,n.jsx)(i.code,{children:"list"}),", ",(0,n.jsx)(i.code,{children:"object"}),", and users have no perception of this."]}),"\n",(0,n.jsx)(i.h2,{id:"performance-comparison",children:"Performance Comparison"}),"\n",(0,n.jsx)(i.p,{children:'Here are some Java serialization performance data, where charts with "compatible" in the title are performance data under type compatible mode: Support type forward vs. Backward compatibility. Charts without "compatible" in the title are performance data without type compatibility: class schema must be same between serialization and deserialization.'}),"\n",(0,n.jsx)(i.p,{children:"For fairness, Fury disabled the zero-copy feature for all tests."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("img",{width:"44%",alt:"serialization",src:"/img/case1.png"}),(0,n.jsx)("img",{width:"44%",alt:"deserialization",src:"/img/case2.png"})]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("img",{width:"44%",alt:"bench_serialize_compatible_MEDIA_CONTENT_to_array_tps",src:"/img/benchmarks/serialization/bench_serialize_compatible_MEDIA_CONTENT_to_array_tps.png"}),(0,n.jsx)("img",{width:"44%",alt:"bench_deserialize_compatible_MEDIA_CONTENT_from_array_tps",src:"/img/benchmarks/deserialization/bench_deserialize_compatible_MEDIA_CONTENT_from_array_tps.png"})]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("img",{width:"44%",alt:"bench_serialize_STRUCT_to_array_tps",src:"/img/benchmarks/serialization/bench_serialize_STRUCT_to_array_tps.png"}),(0,n.jsx)("img",{width:"44%",alt:"bench_serialize_SAMPLE_to_array_tps",src:"/img/benchmarks/serialization/bench_serialize_SAMPLE_to_array_tps.png"})]}),"\n",(0,n.jsx)(i.h2,{id:"roadmap",children:"Roadmap"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Meta compression, auto meta sharing and cross-language schema compatibility."}),"\n",(0,n.jsx)(i.li,{children:"AOT Framework for C++ and Golang to generate code statically."}),"\n",(0,n.jsx)(i.li,{children:"Object graph serialization support for C++ and Rust"}),"\n",(0,n.jsx)(i.li,{children:"Row format support for Golang, Rust, and NodeJS"}),"\n",(0,n.jsx)(i.li,{children:"Protobuf compatibility support"}),"\n",(0,n.jsx)(i.li,{children:"Protocols for features and knowledge graph serialization"}),"\n",(0,n.jsx)(i.li,{children:"Continuously improve our serialization infrastructure for any new protocols"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"join-us",children:"Join us"}),"\n",(0,n.jsx)(i.p,{children:"We are committed to building Apache Fury into an open and neutral community project that pursues passion and innovation. The development and discussion are open-sourced and transparent in the community. Any form of participation is welcome, including but not limited to questions, code contributions, technical discussions, etc. We are looking forward to receiving your ideas and feedback, participating in the project together, pushing the project forward and creating a better serialization framework."}),"\n",(0,n.jsxs)(i.p,{children:["The GitHub address of the fury repository is: ",(0,n.jsx)(i.a,{href:"https://github.com/apache/fury",children:"https://github.com/apache/fury"})]}),"\n",(0,n.jsxs)(i.p,{children:["Official website: ",(0,n.jsx)(i.a,{href:"https://fury.apache.org",children:"https://fury.apache.org"})]}),"\n",(0,n.jsx)(i.p,{children:"All issues, PR, and Discussion are welcome."})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,i,a)=>{a.d(i,{Z:()=>o,a:()=>s});var n=a(7294);const r={},t=n.createContext(r);function s(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);