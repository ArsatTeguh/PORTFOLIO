import{j as t,a as i}from"./@restart-703e8f0f.js";import{r as c}from"./react-e09a1a9a.js";import{u as d}from"./react-intersection-observer-c296a37d.js";import{u as p,m as h}from"./framer-motion-b9d7b195.js";import{A as u}from"./react-icons-dedd1e56.js";import{u as n}from"./index-c6c0a0df.js";import{R as f,C as s}from"./react-bootstrap-87b8b574.js";import"./dom-helpers-4ed993c7.js";import"./react-dom-506482cc.js";import"./scheduler-04ce0582.js";import"./@chevrotain-7e5ab5c8.js";import"./lodash-4ed993c7.js";import"./tslib-e1678f6b.js";import"./style-value-types-41ff8549.js";import"./popmotion-443b1759.js";import"./hey-listen-f307a282.js";import"./framesync-a0d084c5.js";/* empty css                  */import"./react-transition-group-cf7ffa4c.js";import"./classnames-2e4736b8.js";import"./prop-types-extra-4ed993c7.js";const x=({children:e,showIn:a="kiri"})=>{const o=p(),[l,r]=d(),m={visible:{opacity:1,scale:1,x:0,transition:{duration:2,delay:.3,type:"spring",bounce:.5}},hidden:{opacity:0,x:a==="kiri"?-100:100}};return c.useEffect(()=>{r?o.start("visible"):o.start("hidden")},[o,r]),t(h.div,{style:{width:"100%",height:"100%"},ref:l,variants:m,initial:"hidden",animate:o,children:e})};const b=({children:e,...a})=>{const[o]=n();return t("button",{type:"button",className:"btn-outline",style:{color:o.thema?"white":"black"},...a,children:e})},y=()=>i("div",{className:"repo",style:{paddingTop:"30px"},children:[t("div",{style:{paddingBottom:"25px"},children:t("a",{href:"/ATS.pdf",download:!0,children:t(b,{children:"Get Curriculum Vitae"})})}),t("div",{className:"",style:{display:"flex",alignItems:"center",gap:"30px"},children:i("div",{className:"flex items-center",children:[t("span",{className:"icon-info !text-3xl ",children:t(u,{})}),i("span",{children:[i("span",{className:"font-info !text-xl items-center ",style:{paddingLeft:"8px"},children:["10+"," "]})," ","Repository"]})]})})]}),W=()=>{const[e,a]=n();return i("div",{className:` home ${e.thema?"mode-dark":""}`,children:[t("div",{className:"container singgah",children:i(f,{children:[t(s,{md:8,children:t(x,{children:i("div",{className:"homeText",children:[t("h2",{style:{color:e.thema?"white":"black"},children:"RESPONSIVE WEB DESIGN DEVELOPMENT"}),t("h2",{className:"text-prof gradient-text",style:{color:e.thema?"white":"black"},children:"WEB-DEVELOPER"}),t("span",{style:{fontWeight:"500",padding:"10px 0px",fontSize:"16px"},children:"not only a design issue, but the performance and stability of a website becomes more important."}),t("main",{children:t(y,{})})]})})}),t(s,{md:4})]})}),t("div",{className:"blurs"}),t("div",{className:"blur2"}),t("div",{className:"blur3"}),t("div",{className:"blur4"})]})};export{W as default};