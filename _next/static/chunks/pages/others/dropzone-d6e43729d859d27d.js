(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4762],{4598:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/dropzone",function(){return o(46214)}])},46214:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return eG}});var r=o(85893),t=o(11151),i=o(19905),l=o(9904),c=o(67294),a=o(74378),s=o(46393),d=o(77048),p=o(30904),m=o(97283),u=o(17339),f=o(13279),h=o(75144),x=o(35577),v=o(25637),j=o(19732),g=o(58549),y=o(51227),b=o(78901),D=o(26263),z=o(95553),E=o(71350),w=o(7264),O=o(382),I=o(16371);let[P,k]=(0,I.R)("Dropzone component was not found in tree");var M=o(488),_=o(72521),S=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,A=(e,n)=>{var o={};for(var r in e)R.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&S)for(var r of S(e))0>n.indexOf(r)&&T.call(e,r)&&(o[r]=e[r]);return o};function N(e){let n=n=>{let o=(0,x.w)(`Dropzone${(0,M.j)(e)}`,{},n),{children:r}=o,t=A(o,["children"]),i=k(),l=(0,_.k)(r)?r:c.createElement("span",null,r);return i[e]?(0,c.cloneElement)(l,t):null};return n.displayName=`@mantine/dropzone/${(0,M.j)(e)}`,n}let G=N("accept"),F=N("reject"),C=N("idle");var L={root:"m-d46a4834",inner:"m-b85f7144",fullScreen:"m-96f6e9ad",dropzone:"m-7946116d"},Y=Object.defineProperty,B=Object.defineProperties,U=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,W=(e,n,o)=>n in e?Y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,q=(e,n)=>{for(var o in n||(n={}))X.call(n,o)&&W(e,o,n[o]);if(Z)for(var o of Z(n))H.call(n,o)&&W(e,o,n[o]);return e},K=(e,n)=>B(e,U(n)),$=(e,n)=>{var o={};for(var r in e)X.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&Z)for(var r of Z(e))0>n.indexOf(r)&&H.call(e,r)&&(o[r]=e[r]);return o};let V={loading:!1,multiple:!0,maxSize:1/0,autoFocus:!1,activateOnClick:!0,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,useFsAccessApi:!0,variant:"light",rejectColor:"red"},J=(0,z.Z)((e,{radius:n,variant:o,acceptColor:r,rejectColor:t})=>{let i=e.variantColorResolver({color:r||e.primaryColor,theme:e,variant:o}),l=e.variantColorResolver({color:t||"red",theme:e,variant:o});return{root:{"--dropzone-radius":(0,E.H5)(n),"--dropzone-accept-color":i.color,"--dropzone-accept-bg":i.background,"--dropzone-reject-color":l.color,"--dropzone-reject-bg":l.background}}}),Q=(0,h.d)((e,n)=>{let o=(0,x.w)("Dropzone",V,e),{classNames:r,className:t,style:i,styles:l,unstyled:a,vars:s,radius:d,disabled:p,loading:m,multiple:u,maxSize:f,accept:h,children:j,onDropAny:g,onDrop:b,onReject:z,openRef:E,name:I,maxFiles:k,autoFocus:M,activateOnClick:_,activateOnDrag:S,dragEventsBubbling:R,activateOnKeyboard:T,onDragEnter:A,onDragLeave:N,onDragOver:G,onFileDialogCancel:F,onFileDialogOpen:C,preventDropOnDocument:Y,useFsAccessApi:B,getFilesFromEvent:U,validator:Z,rejectColor:X,acceptColor:H}=o,W=$(o,["classNames","className","style","styles","unstyled","vars","radius","disabled","loading","multiple","maxSize","accept","children","onDropAny","onDrop","onReject","openRef","name","maxFiles","autoFocus","activateOnClick","activateOnDrag","dragEventsBubbling","activateOnKeyboard","onDragEnter","onDragLeave","onDragOver","onFileDialogCancel","onFileDialogOpen","preventDropOnDocument","useFsAccessApi","getFilesFromEvent","validator","rejectColor","acceptColor"]),Q=(0,v.y)({name:"Dropzone",classes:L,props:o,className:t,style:i,classNames:r,styles:l,unstyled:a,vars:s,varsResolver:J}),{getRootProps:ee,getInputProps:en,isDragAccept:eo,isDragReject:er,open:et}=(0,D.uI)(q({onDrop:g,onDropAccepted:b,onDropRejected:z,disabled:p||m,accept:Array.isArray(h)?h.reduce((e,n)=>K(q({},e),{[n]:[]}),{}):h,multiple:u,maxSize:f,maxFiles:k,autoFocus:M,noClick:!_,noDrag:!S,noDragEventsBubbling:!R,noKeyboard:!T,onDragEnter:A,onDragLeave:N,onDragOver:G,onFileDialogCancel:F,onFileDialogOpen:C,preventDropOnDocument:Y,useFsAccessApi:B,validator:Z},U?{getFilesFromEvent:U}:null));(0,O.kR)(E,et);let ei=!eo&&!er;return c.createElement(P,{value:{accept:eo,reject:er,idle:ei}},c.createElement(y.x,K(q(q(q({},W),ee({ref:n})),Q("root",{focusable:!0})),{mod:{accept:eo,reject:er,idle:ei,loading:m,"activate-on-click":_}}),c.createElement(w.f,{visible:m,overlayProps:{radius:d},unstyled:a}),c.createElement("input",K(q({},en()),{name:I})),c.createElement("div",K(q({},Q("inner")),{"data-disable-pointer-events":!_||void 0}),j)))});Q.classes=L,Q.displayName="@mantine/dropzone/Dropzone",Q.Accept=G,Q.Idle=C,Q.Reject=F;var ee=Object.defineProperty,en=Object.defineProperties,eo=Object.getOwnPropertyDescriptors,er=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,ei=Object.prototype.propertyIsEnumerable,el=(e,n,o)=>n in e?ee(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,ec=(e,n)=>{for(var o in n||(n={}))et.call(n,o)&&el(e,o,n[o]);if(er)for(var o of er(n))ei.call(n,o)&&el(e,o,n[o]);return e},ea=(e,n)=>en(e,eo(n)),es=(e,n)=>{var o={};for(var r in e)et.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&er)for(var r of er(e))0>n.indexOf(r)&&ei.call(e,r)&&(o[r]=e[r]);return o};let ed={loading:!1,maxSize:1/0,activateOnClick:!1,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,active:!0,zIndex:(0,f.w)("max"),withinPortal:!0},ep=(0,h.d)((e,n)=>{let o=(0,x.w)("DropzoneFullScreen",ed,e),{classNames:r,className:t,style:i,styles:l,unstyled:a,vars:s,active:d,onDrop:p,onReject:m,zIndex:u,withinPortal:f,portalProps:h}=o,D=es(o,["classNames","className","style","styles","unstyled","vars","active","onDrop","onReject","zIndex","withinPortal","portalProps"]),z=(0,v.y)({name:"DropzoneFullScreen",classes:L,props:o,className:t,style:i,classNames:r,styles:l,unstyled:a,rootSelector:"fullScreen"}),{resolvedClassNames:E,resolvedStyles:w}=(0,j.h)({classNames:r,styles:l,props:o}),[O,I]=c.useState(0),[P,{open:k,close:M}]=(0,b.q)(!1),_=e=>{var n;(null==(n=e.dataTransfer)?void 0:n.types.includes("Files"))&&(I(e=>e+1),k())},S=()=>{I(e=>e-1)};return(0,c.useEffect)(()=>{0===O&&M()},[O]),(0,c.useEffect)(()=>{if(d)return document.addEventListener("dragenter",_,!1),document.addEventListener("dragleave",S,!1),()=>{document.removeEventListener("dragenter",_,!1),document.removeEventListener("dragleave",S,!1)}},[d]),c.createElement(g.q,ea(ec({},h),{withinPortal:f}),c.createElement(y.x,ea(ec({},z("fullScreen",{style:{opacity:P?1:0,pointerEvents:P?"all":"none",zIndex:u}})),{ref:n}),c.createElement(Q,ea(ec({},D),{classNames:E,styles:w,unstyled:a,className:L.dropzone,onDrop:e=>{null==p||p(e),M()},onReject:e=>{null==m||m(e),M()}}))))});ep.classes=L,ep.displayName="@mantine/dropzone/DropzoneFullScreen",Q.FullScreen=ep;let em={png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",avif:"image/avif",mp4:"video/mp4",zip:"application/zip",csv:"text/csv",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},eu=[em.png,em.gif,em.jpeg,em.svg,em.webp,em.avif],ef=[em.pdf],eh=[em.doc,em.docx],ex=[em.xls,em.xlsx],ev=[em.ppt,em.pptx];function ej(){return(0,r.jsxs)(a.Z,{justify:"center",gap:"xl",mih:220,style:{pointerEvents:"none"},children:[(0,r.jsx)(Q.Accept,{children:(0,r.jsx)(p.Z,{style:{width:(0,s.h)(52),height:(0,s.h)(52),color:"var(--mantine-color-blue-6)"},stroke:1.5})}),(0,r.jsx)(Q.Reject,{children:(0,r.jsx)(m.Z,{style:{width:(0,s.h)(52),height:(0,s.h)(52),color:"var(--mantine-color-red-6)"},stroke:1.5})}),(0,r.jsx)(Q.Idle,{children:(0,r.jsx)(u.Z,{style:{width:(0,s.h)(52),height:(0,s.h)(52),color:"var(--mantine-color-dimmed)"},stroke:1.5})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(d.x,{size:"xl",inline:!0,children:"Drag images here or click to select files"}),(0,r.jsx)(d.x,{size:"sm",c:"dimmed",inline:!0,mt:7,children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}function eg(e){return(0,r.jsx)(Q,{onDrop:e=>console.log("accepted files",e),onReject:e=>console.log("rejected files",e),maxSize:3145728,accept:eu,...e,children:(0,r.jsx)(ej,{})})}em.exe;let ey={type:"code",component:eg,code:"\nimport { Group, Text, rem } from '@mantine/core';\nimport { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';\nimport { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';\n\nexport function BaseDemo(props: Partial<DropzoneProps>) {\n  return (\n    <Dropzone\n      onDrop={(files) => console.log('accepted files', files)}\n      onReject={(files) => console.log('rejected files', files)}\n      maxSize={3 * 1024 ** 2}\n      accept={IMAGE_MIME_TYPE}\n      {...props}\n    >\n      <Group justify=\"center\" gap=\"xl\" mih={220} style={{ pointerEvents: 'none' }}>\n        <Dropzone.Accept>\n          <IconUpload\n            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}\n            stroke={1.5}\n          />\n        </Dropzone.Accept>\n        <Dropzone.Reject>\n          <IconX\n            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}\n            stroke={1.5}\n          />\n        </Dropzone.Reject>\n        <Dropzone.Idle>\n          <IconPhoto\n            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}\n            stroke={1.5}\n          />\n        </Dropzone.Idle>\n\n        <div>\n          <Text size=\"xl\" inline>\n            Drag images here or click to select files\n          </Text>\n          <Text size=\"sm\" c=\"dimmed\" inline mt={7}>\n            Attach as many files as you like, each file should not exceed 5mb\n          </Text>\n        </div>\n      </Group>\n    </Dropzone>\n  );\n}\n"},eb={type:"code",component:function(){return(0,r.jsx)(eg,{loading:!0})},code:"\nimport { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone loading onDrop={() => {}}>\n      {/* children */}\n    </Dropzone>\n  );\n}\n"};var eD=o(58204),ez=o.n(eD);let eE={type:"code",component:function(){return(0,r.jsx)(eg,{disabled:!0,className:ez().disabled})},code:[{fileName:"Demo.tsx",code:"\nimport { Dropzone } from '@mantine/dropzone';\nimport classes from './Demo.module.css';\n\nfunction Demo() {\n  return <BaseDemo disabled className={classes.disabled} />;\n}\n",language:"tsx"},{fileName:"Demo.module.css",code:"\n.disabled {\n  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));\n  border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));\n  cursor: not-allowed;\n\n  & * {\n    color: light-dark(var(--mantine-color-gray-5), var(--mantine-color-dark-3));\n  }\n}\n",language:"scss"}]};var ew=o(55899);let eO={type:"code",component:function(){let e=(0,c.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(eg,{openRef:e}),(0,r.jsx)(a.Z,{justify:"center",mt:"md",children:(0,r.jsx)(ew.z,{onClick:()=>{var n;return null===(n=e.current)||void 0===n?void 0:n.call(e)},children:"Select files"})})]})},code:"\nimport { useRef } from 'react';\nimport { Button, Group } from '@mantine/core';\nimport { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  const openRef = useRef<() => void>(null);\n\n  return (\n    <>\n      <Dropzone openRef={openRef} onDrop={() => {}}>\n        {/* children */}\n      </Dropzone>\n\n      <Group justify=\"center\" mt=\"md\">\n        <Button onClick={() => openRef.current?.()}>Select files</Button>\n      </Group>\n    </>\n  );\n}\n"},eI={type:"code",component:function(){let e=(0,c.useRef)(null);return(0,r.jsx)(Q,{openRef:e,onDrop:()=>{},activateOnClick:!1,styles:{inner:{pointerEvents:"all"}},children:(0,r.jsx)(a.Z,{justify:"center",children:(0,r.jsx)(ew.z,{onClick:()=>{var n;return null===(n=e.current)||void 0===n?void 0:n.call(e)},children:"Select files"})})})},code:"\nimport { useRef } from 'react';\nimport { Button, Group } from '@mantine/core';\nimport { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  const openRef = useRef<() => void>(null);\n\n  return (\n    <Dropzone\n      openRef={openRef}\n      onDrop={() => {}}\n      activateOnClick={false}\n      styles={{ inner: { pointerEvents: 'all' } }}\n    >\n      <Group justify=\"center\">\n        <Button onClick={() => openRef.current?.()}>Select files</Button>\n      </Group>\n    </Dropzone>\n  );\n}\n"},eP={type:"code",component:function(){let[e,n]=(0,c.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{justify:"center",children:(0,r.jsxs)(ew.z,{color:e?"red":"blue",onClick:()=>n(e=>!e),children:[e?"Deactivate":"Activate"," full screen dropzone"]})}),(0,r.jsx)(Q.FullScreen,{active:e,accept:eu,onDrop:e=>{console.log(e),n(!1)},children:(0,r.jsx)(ej,{})})]})},code:"\nimport { useState } from 'react';\nimport { Group, Text, Button, rem } from '@mantine/core';\nimport { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';\nimport { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';\n\nfunction Demo() {\n  const [active, setActive] = useState(false);\n\n  return (\n    <>\n      <Group justify=\"center\">\n        <Button color={active ? 'red' : 'blue'} onClick={() => setActive((d) => !d)}>\n          {active ? 'Deactivate' : 'Activate'} full screen dropzone\n        </Button>\n      </Group>\n\n      <Dropzone.FullScreen\n        active={active}\n        accept={IMAGE_MIME_TYPE}\n        onDrop={(files) => {\n          console.log(files);\n          setActive(false);\n        }}\n      >\n        <Group justify=\"center\" gap=\"xl\" mih={220} style={{ pointerEvents: 'none' }}>\n          <Dropzone.Accept>\n            <IconUpload\n              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}\n              stroke={1.5}\n            />\n          </Dropzone.Accept>\n          <Dropzone.Reject>\n            <IconX\n              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}\n              stroke={1.5}\n            />\n          </Dropzone.Reject>\n          <Dropzone.Idle>\n            <IconPhoto\n              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}\n              stroke={1.5}\n            />\n          </Dropzone.Idle>\n\n          <div>\n            <Text size=\"xl\" inline>\n              Drag images here or click to select files\n            </Text>\n            <Text size=\"sm\" c=\"dimmed\" inline mt={7}>\n              Attach as many files as you like, each file should not exceed 5mb\n            </Text>\n          </div>\n        </Group>\n      </Dropzone.FullScreen>\n    </>\n  );\n}\n"};var ek=o(81549),eM=o.n(ek);let e_={type:"code",component:function(){return(0,r.jsx)(Q,{onDrop:()=>{},accept:eu,className:eM().root,children:(0,r.jsx)(d.x,{ta:"center",children:"Drop images here"})})},code:[{fileName:"Demo.tsx",code:"\nimport { Text } from '@mantine/core';\nimport { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';\nimport classes from './Demo.module.css';\n\nfunction Demo() {\n  return (\n    <Dropzone onDrop={() => {}} accept={IMAGE_MIME_TYPE} className={classes.root}>\n      <Text ta=\"center\">Drop images here</Text>\n    </Dropzone>\n  );\n}\n",language:"tsx"},{fileName:"Demo.module.css",code:"\n.root {\n  min-height: rem(120px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));\n\n  &[data-accept] {\n    color: var(--mantine-color-white);\n    background-color: var(--mantine-color-blue-6);\n  }\n\n  &[data-reject] {\n    color: var(--mantine-color-white);\n    background-color: var(--mantine-color-red-6);\n  }\n}\n\n",language:"scss"}]};var eS=o(42249),eR=o(32887);let eT={type:"code",component:function(){let[e,n]=(0,c.useState)([]),o=e.map((e,n)=>{let o=URL.createObjectURL(e);return(0,r.jsx)(eS.E,{src:o,onLoad:()=>URL.revokeObjectURL(o)},n)});return(0,r.jsxs)("div",{children:[(0,r.jsx)(Q,{accept:eu,onDrop:n,children:(0,r.jsx)(d.x,{ta:"center",children:"Drop images here"})}),(0,r.jsx)(eR.M,{cols:{base:1,sm:4},mt:o.length>0?"xl":0,children:o})]})},code:"\nimport { useState } from 'react';\nimport { Text, Image, SimpleGrid } from '@mantine/core';\nimport { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';\n\nfunction Demo() {\n  const [files, setFiles] = useState<FileWithPath[]>([]);\n\n  const previews = files.map((file, index) => {\n    const imageUrl = URL.createObjectURL(file);\n    return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;\n  });\n\n  return (\n    <div>\n      <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>\n        <Text ta=\"center\">Drop images here</Text>\n      </Dropzone>\n\n      <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? 'xl' : 0}>\n        {previews}\n      </SimpleGrid>\n    </div>\n  );\n}\n"},eA=(0,i.A)(l.us.Dropzone);function eN(e){let n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",ul:"ul",li:"li"},(0,t.ah)(),e.components),{InstallScript:o,Demo:i,DataTable:l}=n;return l||eF("DataTable",!0),i||eF("Demo",!0),o||eF("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(o,{packages:"@mantine/dropzone"}),"\n",(0,r.jsx)(n.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/dropzone/styles.css';\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dropzone"})," lets you capture one or more files from user.\nComponent is based on ",(0,r.jsx)(n.a,{href:"https://react-dropzone.js.org/",children:"react-dropzone"})," and support all of its core features:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Accepts/rejects files based on provided mime types"}),"\n",(0,r.jsx)(n.li,{children:"Limits individual file size"}),"\n",(0,r.jsx)(n.li,{children:"Renders given children and provides context based component to display elements based on current status"}),"\n"]}),"\n",(0,r.jsx)(i,{data:ey}),"\n",(0,r.jsx)(n.h2,{id:"dropzoneaccept-dropzonereject-and-dropzoneidle",children:"Dropzone.Accept, Dropzone.Reject and Dropzone.Idle"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dropzone.Accept"}),", ",(0,r.jsx)(n.code,{children:"Dropzone.Reject"})," and ",(0,r.jsx)(n.code,{children:"Dropzone.Idle"})," components are visible only when the user performs certain action:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Dropzone.Accept"})," is visible only when the user drags file that can be accepted over the dropzone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Dropzone.Reject"})," is visible only when the user drags file that cannot be accepted over the dropzone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Dropzone.Idle"})," is visible when the user does not drag anything over dropzone"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"loading"})," prop to indicate loading state with ",(0,r.jsx)(n.a,{href:"/core/loading-overlay/",children:"LoadingOverlay"})," component.\nWhen ",(0,r.jsx)(n.code,{children:"loading"})," props is true user cannot drop or select new files (",(0,r.jsx)(n.code,{children:"Dropzone"})," becomes disabled):"]}),"\n",(0,r.jsx)(i,{data:eb}),"\n",(0,r.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to implement your own loading state you can disable ",(0,r.jsx)(n.code,{children:"Dropzone"})," without ",(0,r.jsx)(n.code,{children:"LoadingOverlay"}),".\nSame as with ",(0,r.jsx)(n.code,{children:"loading"}),", when ",(0,r.jsx)(n.code,{children:"Dropzone"})," is disabled user cannot drop or select new files:"]}),"\n",(0,r.jsx)(i,{data:eE}),"\n",(0,r.jsx)(n.h2,{id:"open-file-browser-manually",children:"Open file browser manually"}),"\n",(0,r.jsxs)(n.p,{children:["To open files browser from outside of component use ",(0,r.jsx)(n.code,{children:"openRef"})," prop to get function that will trigger file browser:"]}),"\n",(0,r.jsx)(i,{data:eO}),"\n",(0,r.jsx)(n.h2,{id:"enable-child-pointer-event",children:"Enable child pointer event"}),"\n",(0,r.jsxs)(n.p,{children:["By default, Dropzone disables pointer events on its children for dragging events to work. So when we set ",(0,r.jsx)(n.code,{children:"activateOnClick"})," to ",(0,r.jsx)(n.code,{children:"false"}),",\nclicking on any children inside Dropzone will do nothing. However, You can set style ",(0,r.jsx)(n.code,{children:"pointerEvents: 'all'"})," to make children events to work:"]}),"\n",(0,r.jsx)(i,{data:eI}),"\n",(0,r.jsx)(n.h2,{id:"mime-types",children:"Mime types"}),"\n",(0,r.jsxs)(n.p,{children:["To specify file types provide an object with the keys set to the ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",children:"mime type"}),"\nand the values as an array of file extensions. Find more examples of accepting specific file types\nin the ",(0,r.jsx)(n.a,{href:"https://react-dropzone.js.org/#section-accepting-specific-file-types",children:"react-dropzone documentation"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={{\n        'image/*': [], // All images\n        'text/html': ['.html', '.htm'],\n      }}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also specify file types by providing an array of mime types to ",(0,r.jsx)(n.code,{children:"accept"})," prop:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone accept={['image/png', 'image/jpeg', 'image/sgv+xml', 'image/gif']}>\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To save some research time you can use ",(0,r.jsx)(n.code,{children:"MIME_TYPES"})," variable exported from ",(0,r.jsx)(n.code,{children:"@mantine/dropzone"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone, MIME_TYPES } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg, MIME_TYPES.gif]}>\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MIME_TYPES"})," includes following data:"]}),"\n",(0,r.jsx)(l,{head:["Key","Mime type"],data:Object.keys(em).map(e=>[e,em[e]])}),"\n",(0,r.jsx)(n.p,{children:"Additionally you can use grouped mime types:"}),"\n",(0,r.jsx)(l,{head:["Variable","Mime types"],data:[["IMAGE_MIME_TYPE",eu.join(", ")],["PDF_MIME_TYPE",ef.join(", ")],["MS_WORD_MIME_TYPE",eh.join(", ")],["MS_EXCEL_MIME_TYPE",ex.join(", ")],["MS_POWERPOINT_MIME_TYPE",ev.join(", ")]]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { IMAGE_MIME_TYPE, Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return <Dropzone accept={IMAGE_MIME_TYPE}>{/* children */}</Dropzone>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dropzone"})," root element has the following data attributes to change styles based on current status:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data-loading"})," – when ",(0,r.jsx)(n.code,{children:"loading"})," prop is ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data-accept"})," – when user drags files that can be accepted over the dropzone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data-reject"})," – when user drags files that cannot be accepted over the dropzone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data-idle"})," – default state – user does not drag any files over dropzone"]}),"\n"]}),"\n",(0,r.jsx)(i,{data:e_}),"\n",(0,r.jsx)(n.h2,{id:"images-previews",children:"Images previews"}),"\n",(0,r.jsx)(i,{data:eT}),"\n",(0,r.jsx)(n.h2,{id:"get-ref",children:"Get ref"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useRef, useEffect } from 'react';\nimport { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  const dropzoneRef = useRef<HTMLDivElement>(null);\n\n  useEffect(() => {\n    dropzoneRef.current.focus();\n  }, []);\n\n  return <Dropzone ref={dropzoneRef}>{/* children */}</Dropzone>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"dropzonefullscreen-component",children:"Dropzone.FullScreen component"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dropzone.FullScreen"})," lets you capture files dropped to browser window instead of specific area.\nIt supports the same props as ",(0,r.jsx)(n.code,{children:"Dropzone"})," component."]}),"\n",(0,r.jsx)(n.p,{children:"To preview component click button and drop images to browser window:"}),"\n",(0,r.jsx)(i,{data:eP})]})}var eG=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(eA,Object.assign({},e,{children:(0,r.jsx)(eN,e)}))};function eF(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},81549:function(e){e.exports={root:"Dropzone_demo_stylesApi_root__G1_mq"}},58204:function(e){e.exports={disabled:"Dropzone_disabled_disabled__GYxj7"}},42249:function(e,n,o){"use strict";o.d(n,{E:function(){return z}});var r=o(67294),t={root:"m-9e117634"},i=o(70656),l=o(35577),c=o(25637),a=o(51227),s=o(95553),d=o(71350),p=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,v=(e,n,o)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,j=(e,n)=>{for(var o in n||(n={}))h.call(n,o)&&v(e,o,n[o]);if(f)for(var o of f(n))x.call(n,o)&&v(e,o,n[o]);return e},g=(e,n)=>m(e,u(n)),y=(e,n)=>{var o={};for(var r in e)h.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&f)for(var r of f(e))0>n.indexOf(r)&&x.call(e,r)&&(o[r]=e[r]);return o};let b={radius:0},D=(0,s.Z)((e,{radius:n,fit:o})=>({root:{"--image-radius":(0,d.H5)(n),"--image-object-fit":o}})),z=(0,i.b)((e,n)=>{let o=(0,l.w)("Image",b,e),{classNames:i,className:s,style:d,styles:p,unstyled:m,vars:u,onError:f,src:h,radius:x,fit:v,fallbackSrc:z}=o,E=y(o,["classNames","className","style","styles","unstyled","vars","onError","src","radius","fit","fallbackSrc"]),[w,O]=(0,r.useState)(!h);(0,r.useEffect)(()=>O(!h),[h]);let I=(0,c.y)({name:"Image",classes:t,props:o,className:s,style:d,classNames:i,styles:p,unstyled:m,vars:u,varsResolver:D});return w&&z?r.createElement(a.x,j(g(j({component:"img",src:z},I("root")),{onError:f,mod:"fallback"}),E)):r.createElement(a.x,j(g(j({component:"img",ref:n},I("root")),{src:h,onError:e=>{null==f||f(e),O(!0)}}),E))});z.classes=t,z.displayName="@mantine/core/Image"},7264:function(e,n,o){"use strict";o.d(n,{f:function(){return I}});var r=o(67294),t={root:"m-6e45937b",loader:"m-e8eb006c",overlay:"m-df587f17"},i=o(45493),l=o(35552),c=o(52569),a=o(75144),s=o(35577),d=o(49441),p=o(25637),m=o(51227),u=o(13279),f=o(95553),h=Object.defineProperty,x=Object.defineProperties,v=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,b=(e,n,o)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,D=(e,n)=>{for(var o in n||(n={}))g.call(n,o)&&b(e,o,n[o]);if(j)for(var o of j(n))y.call(n,o)&&b(e,o,n[o]);return e},z=(e,n)=>x(e,v(n)),E=(e,n)=>{var o={};for(var r in e)g.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&j)for(var r of j(e))0>n.indexOf(r)&&y.call(e,r)&&(o[r]=e[r]);return o};let w={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,u.w)("overlay")},O=(0,f.Z)((e,{zIndex:n})=>({root:{"--lo-z-index":null==n?void 0:n.toString()}})),I=(0,a.d)((e,n)=>{let o=(0,s.w)("LoadingOverlay",w,e),{classNames:a,className:u,style:f,styles:h,unstyled:x,vars:v,transitionProps:j,loaderProps:g,overlayProps:y,visible:b,zIndex:I}=o,P=E(o,["classNames","className","style","styles","unstyled","vars","transitionProps","loaderProps","overlayProps","visible","zIndex"]),k=(0,d.rZ)(),M=(0,p.y)({name:"LoadingOverlay",classes:t,props:o,className:u,style:f,classNames:a,styles:h,unstyled:x,vars:v,varsResolver:O}),_=D(D({},w.overlayProps),y);return r.createElement(i.u,z(D({transition:"fade"},j),{mounted:!!b}),e=>r.createElement(m.x,D(z(D({},M("root",{style:e})),{ref:n}),P),r.createElement(l.a,D(D({},M("loader")),g)),r.createElement(c.a,z(D(D({},_),M("overlay")),{"data-light":!0,unstyled:x,color:(null==y?void 0:y.color)||k.white})),r.createElement(c.a,z(D(D({},_),M("overlay")),{"data-dark":!0,unstyled:x,color:(null==y?void 0:y.color)||k.colors.dark[5]}))))});I.classes=t,I.displayName="@mantine/core/LoadingOverlay"},32887:function(e,n,o){"use strict";o.d(n,{M:function(){return k}});var r=o(67294),t=o(49441),i=o(56882),l=o(71350),c=o(80931),a=o(40342),s=o(89305),d=o(40128);function p({spacing:e,verticalSpacing:n,cols:o,selector:p}){var m;let u=(0,t.rZ)(),f=(0,i.L)({"--sg-spacing-x":(0,l.bG)((0,c.v)(e)),"--sg-spacing-y":(0,l.bG)((0,c.v)(n)),"--sg-cols":null==(m=(0,c.v)(o))?void 0:m.toString()}),h=(0,a.X)(u.breakpoints).reduce((r,t)=>(r[t]||(r[t]={}),"object"==typeof e&&void 0!==e[t]&&(r[t]["--sg-spacing-x"]=(0,l.bG)(e[t])),"object"==typeof n&&void 0!==n[t]&&(r[t]["--sg-spacing-y"]=(0,l.bG)(n[t])),"object"==typeof o&&void 0!==o[t]&&(r[t]["--sg-cols"]=o[t]),r),{}),x=(0,s.I)((0,a.X)(h),u).filter(e=>(0,a.X)(h[e.value]).length>0),v=x.map(e=>({query:`(min-width: ${u.breakpoints[e.value]})`,styles:h[e.value]}));return r.createElement(d.f,{styles:f,media:v,selector:p})}var m={root:"m-2415a157"},u=o(75144),f=o(35577),h=o(25637),x=o(6937),v=o(51227),j=Object.defineProperty,g=Object.defineProperties,y=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,E=(e,n,o)=>n in e?j(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,w=(e,n)=>{for(var o in n||(n={}))D.call(n,o)&&E(e,o,n[o]);if(b)for(var o of b(n))z.call(n,o)&&E(e,o,n[o]);return e},O=(e,n)=>g(e,y(n)),I=(e,n)=>{var o={};for(var r in e)D.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&b)for(var r of b(e))0>n.indexOf(r)&&z.call(e,r)&&(o[r]=e[r]);return o};let P={cols:1,spacing:"md",verticalSpacing:"md"},k=(0,u.d)((e,n)=>{let o=(0,f.w)("SimpleGrid",P,e),{classNames:t,className:i,style:l,styles:c,unstyled:a,vars:s,cols:d,verticalSpacing:u,spacing:j}=o,g=I(o,["classNames","className","style","styles","unstyled","vars","cols","verticalSpacing","spacing"]),y=(0,h.y)({name:"SimpleGrid",classes:m,props:o,className:i,style:l,classNames:t,styles:c,unstyled:a,vars:s}),b=(0,x.m)();return r.createElement(r.Fragment,null,r.createElement(p,O(w({},o),{selector:`.${b}`})),r.createElement(v.x,w(w({ref:n},y("root",{className:b})),g)))});k.classes=m,k.displayName="@mantine/core/SimpleGrid"},80931:function(e,n,o){"use strict";function r(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}o.d(n,{v:function(){return r}})},29376:function(e,n,o){"use strict";o.d(n,{o:function(){return t}});var r=o(94389);function t(e,n){return e in n.breakpoints?(0,r.px)(n.breakpoints[e]):(0,r.px)(e)}},89305:function(e,n,o){"use strict";o.d(n,{I:function(){return t}});var r=o(29376);function t(e,n){let o=e.map(e=>({value:e,px:(0,r.o)(e,n)}));return o.sort((e,n)=>e.px-n.px),o}},78901:function(e,n,o){"use strict";o.d(n,{q:function(){return t}});var r=o(67294);function t(e=!1,n){let{onOpen:o,onClose:t}=n||{},[i,l]=(0,r.useState)(e),c=(0,r.useCallback)(()=>{l(e=>e||(null==o||o(),!0))},[o]),a=(0,r.useCallback)(()=>{l(e=>e?(null==t||t(),!1):e)},[t]),s=(0,r.useCallback)(()=>{i?a():c()},[a,c,i]);return[i,{open:c,close:a,toggle:s}]}}},function(e){e.O(0,[761,9905,9774,2888,179],function(){return e(e.s=4598)}),_N_E=e.O()}]);