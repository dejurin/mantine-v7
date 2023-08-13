(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9023],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},32605:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-list-state",function(){return n(34527)}])},34527:function(e,t,n){"use strict";n.r(t);var i=n(85893),s=n(11151),a=n(19905),r=n(9904),o=n(77092);let l=(0,a.A)(r.us.useListState);function c(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,s.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"use-list-state"})," provides an API to work with list state:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"const [values, handlers] = useListState([{ a: 1 }]);\n\n// add one or more items to the end of the list\nconst append = () => handlers.append({ a: 2 });\n// values -> [{ a: 1 }, { a: 2 }]\n\n// add one or more items to the start of the list\nconst prepend = () => handlers.prepend({ a: 3 }, { a: 4 });\n// values -> [{ a: 3 }, { a: 4 }, { a: 1 }, { a: 2 }]\n\n// remove items at given positions\nconst remove = () => handlers.remove(0, 2);\n// values -> [{ a: 4 }, { a: 2 }]\n\n// insert one or more items at given position\nconst insert = () => handlers.insert(1, { a: 5 });\n// values -> [{ a: 4 }, { a: 5 }, { a: 2 }]\n\n// apply function to each element of the list\nconst apply = () => handlers.apply((item, index) => ({ a: item.a * index }));\n// values -> [{ a: 0 }, { a: 5 }, { a: 4 }]\n\n// move item from one position to another\nconst reorder = () => handlers.reorder({ from: 2, to: 0 });\n// values -> [{ a: 4 }, { a: 0 }, { a: 5 }]\n\n// apply function to each element that matches condition\nconst applyWhere = () =>\n  handlers.applyWhere(\n    (item) => item.a > 0,\n    (item) => ({ a: item.a + 2 })\n  );\n// values -> [{ a: 6 }, { a: 0 }, { a: 7 }]\n\n// set entirely new state\nconst setState = () => handlers.setState([{ a: 6 }, { a: 7 }]);\n// values -> [{ a: 6 }, { a: 7 }]\n\n// set individual item at given position\nconst setItem = () => handlers.setItem(0, { a: 8 });\n// values -> [{ a: 8 }, { a: 7 }]\n\n// set item property at given position\nconst setItemProp = () => handlers.setItemProp(1, 'a', 'new-prop');\n// values -> [{ a: 8 }, { a: 'new-prop' }]\n\n// filter objects that have a = 'new-prop'\nconst filter = () => handlers.filter((item) => item.a === 'new-prop');\n// values -> [{ a: 'new-prop' }]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"use-list-state"})," takes an array as a single argument and\nreturns a list of values and handlers to change them in a tuple, similar to ",(0,i.jsx)(t.code,{children:"useState"})," hook."]}),"\n",(0,i.jsx)(t.p,{children:"The hook provides handlers to work with array data:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"append"})," – add items to the end of the list"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"prepend"})," – add items to the start of the list"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"pop"})," – remove last item"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"shift"})," – remove first item"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"insert"})," – insert items at given index"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"remove"})," – remove items at given indices"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"reorder"})," – move item from one position to another"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"apply"})," – apply given function to all items in the list"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"applyWhere"})," - apply given function to selective items using condition"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"setItem"})," – replace item at given index"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"setItemProp"})," – set item property at given index"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"setState"})," – set list state with react action"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"filter"})," - filter values with callback function"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"indeterminate-state-checkbox-example",children:"Indeterminate state checkbox example"}),"\n",(0,i.jsx)(n,{data:o.N,demoProps:{toggle:!0}}),"\n",(0,i.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"function useListState<T>(initialValue: T[] = []): [\n  T[],\n  {\n    setState: Dispatch<SetStateAction<T[]>>;\n    append: (...items: T[]) => void;\n    prepend: (...items: T[]) => void;\n    insert: (index: number, ...items: T[]) => void;\n    apply: (fn: (item: T, index?: number) => T) => void;\n    pop: () => void;\n    shift: () => void;\n    applyWhere: (\n      condition: (item: T, index?: number) => boolean,\n      fn: (item: T, index?: number) => T)\n    ) => void;\n    remove: (...indices: number[]) => void;\n    reorder: ({ from, to }: { from: number; to: number }) => void;\n    setItem: (index: number, item: T) => void;\n    setItemProp: <K extends keyof T, U extends T[K]>(index: number, prop: K, value: U) => void;\n    filter: (fn: (item: T, i: number) => boolean) => void;\n  }\n];\n"})}),"\n",(0,i.jsx)(t.h2,{id:"set-item-type",children:"Set item type"}),"\n",(0,i.jsxs)(t.p,{children:["By default, ",(0,i.jsx)(t.code,{children:"use-list-state"})," will use type from ",(0,i.jsx)(t.code,{children:"initialValues"}),".\nIf you call the hook with an empty array, you must specify item type:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"useListState(['hello']); // ok, item type is string\nuseListState([]); // not ok, item type is any\nuseListState<string>([]); // ok, item type is string\n"})})]})}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(l,Object.assign({},e,{children:(0,i.jsx)(c,e)}))}},77092:function(e,t,n){"use strict";n.d(t,{N:function(){return P}});var i=n(67294),s=n(41249),a=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&h(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&h(e,n,t[n]);return e},u=(e,t)=>r(e,o(t)),m=n(56746),v=n(51227),f=Object.defineProperty,k=Object.defineProperties,y=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&b(e,n,t[n]);if(x)for(var n of x(t))j.call(t,n)&&b(e,n,t[n]);return e},I=(e,t)=>k(e,y(t));let M=`
import { useListState, randomId } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: randomId() },
  { label: 'Receive sms notifications', checked: false, key: randomId() },
  { label: 'Receive push notifications', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </>
  );
}
`,O=[{label:"Receive email notifications",checked:!1,key:(0,s.k)()},{label:"Receive sms notifications",checked:!1,key:(0,s.k)()},{label:"Receive push notifications",checked:!1,key:(0,s.k)()}],P={type:"code",code:M,component:function(){let[e,t]=function(e=[]){let[t,n]=(0,i.useState)(e),s=(...e)=>n(t=>[...t,...e]),a=(...e)=>n(t=>[...e,...t]),r=(e,...t)=>n(n=>[...n.slice(0,e),...t,...n.slice(e)]),o=e=>n(t=>t.map((t,n)=>e(t,n))),l=(...e)=>n(t=>t.filter((t,n)=>!e.includes(n))),c=()=>n(e=>{let t=[...e];return t.pop(),t}),d=()=>n(e=>{let t=[...e];return t.shift(),t}),h=({from:e,to:t})=>n(n=>{let i=[...n],s=n[e];return i.splice(e,1),i.splice(t,0,s),i}),m=(e,t)=>n(n=>{let i=[...n];return i[e]=t,i}),v=(e,t,i)=>n(n=>{let s=[...n];return s[e]=u(p({},s[e]),{[t]:i}),s}),f=(e,t)=>n(n=>n.map((n,i)=>e(n,i)?t(n,i):n)),k=e=>{n(t=>t.filter(e))};return[t,{setState:n,append:s,prepend:a,insert:r,pop:c,shift:d,apply:o,applyWhere:f,remove:l,reorder:h,setItem:m,setItemProp:v,filter:k}]}(O),n=e.every(e=>e.checked),s=e.some(e=>e.checked)&&!n,a=e.map((e,n)=>i.createElement(m.X,{mt:"xs",ml:33,label:e.label,key:e.key,checked:e.checked,onChange:e=>t.setItemProp(n,"checked",e.currentTarget.checked)}));return i.createElement(v.x,{maw:400,mx:"auto"},i.createElement(m.X,{checked:n,indeterminate:s,label:"Receive all notifications",onChange:()=>t.setState(e=>e.map(e=>I(w({},e),{checked:!n})))}),a)}}}},function(e){e.O(0,[9905,9774,2888,179],function(){return e(e.s=32605)}),_N_E=e.O()}]);