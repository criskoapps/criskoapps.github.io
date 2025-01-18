import{j as e,r as t}from"./chunks/index-ycoutxhihi.module.js";import{r}from"./chunks/index-3jn0o15lwh.module.js";import{I as o,a as s,e as a}from"./chunks/base-kotvp0jcnm.module.js";import{F as n,a as i,U as d}from"./chunks/utils-5llq1ltvwr.module.js";import{U as l}from"./chunks/updateterms-0shtxzy31w.module.js";import{S as m}from"./chunks/modal-wytt7m1gol.module.js";import{s as c,A as h}from"./chunks/styled-components.browser.esm-k4wpfcn1n5.module.js";import{S as p}from"./chunks/styledutils-5ko0qfbxcd.module.js";import{U as u}from"./chunks/url-uhxnixgn.module.js";import{C as x,W as g,F as f}from"./chunks/variables-ailypepbte.module.js";import"./chunks/_commonhelpers-uc47qmi7ob.module.js";import"./chunks/index-kshk6yylq1.module.js";const b="#5769EF",j="#f1f1f1",w="#4a4a4a",k="#A126C3",y=c.div`
    width: 90px;
    height: 90px;
    padding: 45px;
    object-fit: contain;
    border-radius: 100%;
    margin-bottom: 20px;
    background-size: 45px;
    background-repeat: no-repeat;
    background-position: 20px center;
    background-color: ${j};
    background-image: url(${u.image("doc-terms.svg")});
`,v=c.img.attrs((()=>({src:u.image("loader/inverted.svg")})))`
    width: 1.375em;
    object-fit: contain;
`,T=c.a`
    width: 100%;
    display: flex;
    cursor: pointer;
    height: 2.9375em;
    align-items: center;
    border-radius: 20px;
    padding: 0.8125em 30px;
    justify-content: center;
    background-color: ${k};
    box-shadow: 0 0 3px 0 ${p.transparentize(x.BLACK,.6)};

    > span {
        font-size: 1em;
        pointer-events: none;
        color: ${x.WHITE};
    }

    @media (hover: hover) {
        &:hover {
            text-decoration: none;
        }
    }
`,$=h`
    max-height: 80vh;

    ${T} {
        display: block;
        text-align: center;
    }
`,L=c.div`
    width: 90vw;
    height: auto;
    font-size: 16px;
    max-height: 90vh;
    overflow-y: scroll;
    padding: 40px 20px 20px;
    
    @media only screen and (min-width: ${g.TABLET.MIN}) {
        overflow-y: hidden;
        max-width: 25.625em;
    }

    p,
    h1,
    h2,
    small {
        margin: 0;
        padding: 0;
        line-height: normal;
        color: ${w};
    }
    
    h1,
    h2,
    small {
        text-align: center;
    }
    
    h1,
    h2 {
        font-size: 1.625em;
    }
    
    h1 {
        font-weight: ${f.NORMAL};
    }
    
    h2 {
        font-weight: ${f.BOLD};
    }
    
    p {
        font-size: 1em;
        text-align: left;
        line-height: 1.47;
    
        > a {
            cursor: pointer;
            text-decoration: underline;
            color: ${b};
            font-weight: ${f.BOLD};
        }
    
        &:nth-of-type(1) {
            margin: 1.25em 0;
        }
    }
    
    small {
        display: block;
        font-size: 0.875em;
        margin: 1.25em 0 0.9375em;
        color: ${x.GREY.TWENTY};
    }
    
    ${o.apple.phone&&$}
`,I=c.div`
    display: flex;
    max-height: 90%;
    overflow-y: scroll;
    align-items: center;
    margin-bottom: 10px;
    flex-direction: column;
    max-height: calc(70vh - 150px);

    ::-webkit-scrollbar {
        width: 3px;
        display: initial;
    }
    
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px ${p.transparentize(x.BLACK,.3)};
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px ${p.transparentize(x.BLACK,.3)};
    }
`,z={showModal:!1,btnLoading:!1},A=({handleCloseModal:t})=>{const[o,s]=r.useState(z),a=new l;return r.useEffect((()=>{if(!o.btnLoading)return;(async()=>{try{await a.postTermsIsAccept()}finally{t()}})()}),[o.btnLoading]),e.jsxs(L,{id:"terms-modal",children:[e.jsxs(I,{children:[e.jsx(y,{}),e.jsx(n,{id:"updateTerms.update",children:t=>e.jsx("h1",{children:t})}),e.jsx(n,{id:"updateTerms.terms",children:t=>e.jsx("h2",{children:t})}),e.jsx(i,{id:"updateTerms.paragraph.1",children:t=>e.jsx("p",{dangerouslySetInnerHTML:{__html:t}})}),e.jsx(i,{id:"updateTerms.paragraph.2",values:{date:"14/10/2021"},children:t=>e.jsx("p",{dangerouslySetInnerHTML:{__html:t}})})]}),e.jsx(n,{id:"updateTerms.onAccept",children:t=>e.jsx("small",{children:t})}),e.jsx(T,{onClick:()=>s({...o,btnLoading:!0}),children:o.btnLoading?e.jsx(v,{}):e.jsx(n,{id:"updateTerms.acceptTerms"})})]})},S=()=>{const[t,o]=r.useState(!1),n=new l,i=window.location.href.indexOf(`/${d.getIntl().messages["updateTerms.urlTerms"]}`)>=0,c=localStorage.getItem("interact-terms-modal"),h=!i&&!c&&s.get(a);return r.useEffect((()=>{if(!h)return;(async()=>{try{await n.fetchTermsIsAccept(),localStorage.setItem("interact-terms-modal","true")}catch(e){o(!0)}})()}),[]),h?e.jsx(m,{openModal:t,dataTestId:"modal-update-terms",children:e.jsx(A,{handleCloseModal:()=>{localStorage.setItem("interact-terms-modal","true"),o(!1)}})}):null};(()=>{const r=document.querySelector("update-terms-modal");t.render(e.jsx(S,{}),r)})();