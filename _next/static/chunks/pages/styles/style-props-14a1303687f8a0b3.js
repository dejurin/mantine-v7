(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7993],{33507:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},44289:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/style-props",function(){return r(2082)}])},88932:function(e,n,r){"use strict";r.d(n,{T:function(){return c}});var t=r(85893);r(67294);var s=r(60721),o=r(2857),a=r(26564),l=r(3097);let i={color:"theme.colors",fontSize:"theme.fontSizes",spacing:"theme.spacing",lineHeight:"theme.lineHeights"};function c(e){let{source:n=s.p}=e,r=Object.keys(n).map(e=>{let r=n[e],s=i[r.type];return[(0,t.jsx)(o.E,{children:e},"1"),(0,t.jsx)(a.O,{separator:",",styles:{separator:{marginLeft:2,marginRight:2}},children:Array.isArray(r.property)?r.property.map(e=>(0,t.jsx)(o.E,{children:e},e)):(0,t.jsx)(o.E,{children:r.property})}),s?(0,t.jsx)(o.E,{children:s}):"–"]});return(0,t.jsx)(l.gw,{head:["Prop","CSS Property","Theme key"],data:r})}},2082:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u}});var t=r(85893),s=r(11151),o=r(19905),a=r(9904),l=r(67294),i=r(51227);let c=`
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg={{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }}
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
`,d={type:"code",component:function(){return l.createElement(i.x,{w:{base:200,sm:400,lg:500},py:{base:"xs",sm:"md",lg:"xl"},bg:{base:"blue.7",sm:"red.7",lg:"green.7"},c:"#fff",ta:"center",mx:"auto"},"Box with responsive style props")},code:c};var p=r(88932);let h=(0,o.A)(a.us.StyleProps);function m(e){let n=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",pre:"pre",code:"code",h2:"h2",ul:"ul",li:"li"},(0,s.ah)(),e.components),{Demo:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"style-props",children:"Style props"}),"\n",(0,t.jsxs)(n.p,{children:["With style props, you can add inline styles to any Mantine component.\nStyle props add styles to the ",(0,t.jsx)(n.strong,{children:"root"})," element, if you need to style nested elements,\nuse ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," instead."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Box } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Box mx="auto" maw={400} c="blue.6" bg="#fff">\n      Your component\n    </Box>\n  );\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"supported-props",children:"Supported props"}),"\n",(0,t.jsx)(n.p,{children:"All Mantine components that have root element support the following style props:"}),"\n",(0,t.jsx)(p.T,{}),"\n",(0,t.jsx)(n.h2,{id:"theme-values",children:"Theme values"}),"\n",(0,t.jsxs)(n.p,{children:["Some style props can reference values from theme, for example ",(0,t.jsx)(n.code,{children:"mt"})," will use ",(0,t.jsx)(n.code,{children:"theme.spacing"})," value\nif you set ",(0,t.jsx)(n.code,{children:"xs"}),", ",(0,t.jsx)(n.code,{children:"sm"}),", ",(0,t.jsx)(n.code,{children:"md"}),", ",(0,t.jsx)(n.code,{children:"lg"}),", ",(0,t.jsx)(n.code,{children:"xl"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Box } from \'@mantine/core\';\n\n// margin-top: theme.spacing.xs\n<Box mt="xs" />\n\n// margin-top: theme.spacing.md * -1\n<Box mt="-md" />\n\n// margin-top: auto\n<Box mt="auto" />\n\n// margin-top: 1rem\n<Box mt={16} />\n\n// margin-top: 5rem\n<Box mt="5rem" />\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"c"})," and ",(0,t.jsx)(n.code,{children:"bg"})," props you can reference colors from ",(0,t.jsx)(n.code,{children:"theme.colors"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Box } from \'@mantine/core\';\n\n// color: theme.colors.blue[theme.fn.primaryShade()]\n<Box c="blue" />\n\n// background: theme.colors.orange[1]\n<Box bg="orange.1" />\n\n// color: theme.colorScheme === \'dark\' ? theme.colors.dark[2] : theme.colors.gray[6]\n<Box c="dimmed" />\n\n// background: #EDFEFF\n<Box bg="#EDFEFF" />\n\n// background: rgba(0, 34, 45, 0.6)\n<Box bg="rgba(0, 34, 45, 0.6)" />\n'})}),"\n",(0,t.jsx)(n.h2,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,t.jsxs)(n.p,{children:["You can use object syntax to add responsive styles with style props.\nNote that responsive style props are ",(0,t.jsx)(n.a,{href:"/styles/styles-performance",children:"less performant"})," than regular style props,\nit is not recommended to use them in large lists of elements."]}),"\n",(0,t.jsx)(r,{data:d}),"\n",(0,t.jsx)(n.p,{children:"Responsive values are calculated the following way:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"base"})," value is used when none of breakpoint values are applied"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"xs"}),", ",(0,t.jsx)(n.code,{children:"sm"}),", ",(0,t.jsx)(n.code,{children:"md"}),", ",(0,t.jsx)(n.code,{children:"lg"}),", ",(0,t.jsx)(n.code,{children:"xl"})," values are used when the viewport width is larger that the value of corresponding breakpoint specified in ",(0,t.jsx)(n.a,{href:"/styles/responsive/",children:"theme.breakpoints"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\n<Box w={{ base: 320, sm: 480, lg: 640 }}} />\n"})}),"\n",(0,t.jsx)(n.p,{children:"In this case the element will have the following styles:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"/* Base styles added to element and then get overwritten with responsive values */\n.element {\n  width: 20rem;\n}\n\n/* 48em is theme.breakpoints.sm by default */\n@media (min-width: 48em) {\n  .element {\n    width: 30rem;\n  }\n}\n\n/* 75em is theme.breakpoints.lg by default */\n@media (min-width: 75em) {\n  .element {\n    width: 40rem;\n  }\n}\n"})})]})}var u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(h,Object.assign({},e,{children:(0,t.jsx)(m,e)}))}},26564:function(e,n,r){"use strict";r.d(n,{O:function(){return M}});var t=r(67294),s={root:"m-8b3717df",breadcrumb:"m-f678d540",separator:"m-3b8f2208"},o=r(75144),a=r(35577),l=r(25637),i=r(72521),c=r(51227),d=r(95553),p=r(71350),h=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,f=(e,n,r)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,v=(e,n)=>{for(var r in n||(n={}))x.call(n,r)&&f(e,r,n[r]);if(g)for(var r of g(n))y.call(n,r)&&f(e,r,n[r]);return e},j=(e,n)=>m(e,u(n)),b=(e,n)=>{var r={};for(var t in e)x.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&g)for(var t of g(e))0>n.indexOf(t)&&y.call(e,t)&&(r[t]=e[t]);return r};let k={separator:"/",separatorMargin:"xs"},w=(0,d.Z)((e,{separatorMargin:n})=>({root:{"--bc-separator-margin":(0,p.bG)(n)}})),M=(0,o.d)((e,n)=>{let r=(0,a.w)("Breadcrumbs",k,e),{classNames:o,className:d,style:p,styles:h,unstyled:m,vars:u,children:g,separator:x,separatorMargin:y}=r,f=b(r,["classNames","className","style","styles","unstyled","vars","children","separator","separatorMargin"]),M=(0,l.y)({name:"Breadcrumbs",classes:s,props:r,className:d,style:p,classNames:o,styles:h,unstyled:m,vars:u,varsResolver:w}),B=t.Children.toArray(g).reduce((e,n,r,s)=>{var o;let a=(0,i.k)(n)?t.cloneElement(n,j(v({},M("breadcrumb",{className:null==(o=n.props)?void 0:o.className})),{key:r})):t.createElement("div",j(v({},M("breadcrumb")),{key:r}),n);return e.push(a),r!==s.length-1&&e.push(t.createElement(c.x,j(v({},M("separator")),{key:`separator-${r}`}),x)),e},[]);return t.createElement(c.x,v(v({ref:n},M("root")),f),B)});M.classes=s,M.displayName="@mantine/core/Breadcrumbs"}},function(e){e.O(0,[9905,9774,2888,179],function(){return e(e.s=44289)}),_N_E=e.O()}]);