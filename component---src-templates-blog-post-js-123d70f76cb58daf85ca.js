(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{EYWl:function(e,t,a){"use strict";a("91GP");var n=a("c/e4"),r=a("q1tI"),l=a.n(r),o=a("TJpk"),i=a.n(o),s=a("Wbzz");function c(e){var t=e.meta,a=e.image,r=e.title,o=e.description,c=e.slug,m=e.lang,u=void 0===m?"en":m;return l.a.createElement(s.StaticQuery,{query:"3236765318",render:function(e){var n=e.site.siteMetadata,s=o||n.description,m=a?n.siteUrl+"/"+a:null,p=""+n.siteUrl+c;return l.a.createElement(i.a,Object.assign({htmlAttributes:{lang:u}},r?{titleTemplate:"%s — "+n.title,title:r}:{title:n.title+" — A blog by Dan Abramov"},{meta:[{name:"description",content:s},{property:"og:url",content:p},{property:"og:title",content:r||n.title},{property:"og:description",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.social.twitter},{name:"twitter:title",content:r||n.title},{name:"twitter:description",content:s}].concat(m?[{property:"og:image",content:m},{name:"twitter:image",content:m}]:[]).concat(t)}))},data:n})}c.defaultProps={meta:[],title:"",slug:""},t.a=c},JLKy:function(e,t,a){"use strict";a("91GP");var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.children,a=e.style,n=void 0===a?{}:a;return r.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},n)},t)}},L6NH:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l}));a("XfO3"),a("HEwt"),a("a1Th"),a("Btvt"),a("rE2o"),a("ioFf"),a("rGqo"),a("bHtr");function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function l(e,t){var a;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(a=e).toLocaleDateString.apply(a,n(r))}},Nr18:function(e,t,a){"use strict";var n=a("S/j/"),r=a("d/Gc"),l=a("ne8i");e.exports=function(e){for(var t=n(this),a=l(t.length),o=arguments.length,i=r(o>1?arguments[1]:void 0,a),s=o>2?arguments[2]:void 0,c=void 0===s?a:r(s,a);c>i;)t[i++]=e;return t}},SbOt:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("caJ7"),o=a.n(l),i=a("p3AD");var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(i.a)(2)}},r.a.createElement("img",{src:o.a,alt:"Dan Abramov",style:{marginRight:Object(i.a)(.5),marginBottom:0,width:Object(i.a)(2),height:Object(i.a)(2),borderRadius:"50%"}}),r.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",r.a.createElement("a",{href:"https://mobile.twitter.com/dan_abramov"},"Dan Abramov"),"."," ","I explain with words and code."))},n}(r.a.Component);t.a=s},bHtr:function(e,t,a){var n=a("XKFU");n(n.P,"Array",{fill:a("Nr18")}),a("nGyu")("fill")},"c/e4":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Lifegorithms","author":"Arthur Papailhau","description":"Personal blog by Arthur Papailhau.","siteUrl":"https://lifegorithms.io","social":{"twitter":"@papay0"}}}}}')},caJ7:function(e,t,a){e.exports=a.p+"static/profile-pic-c715447ce38098828758e525a1128b87.jpg"},k7Sn:function(e,t){t.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",he:"עברית",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}},yZlL:function(e,t,a){"use strict";a.r(t);a("91GP"),a("Vd3H"),a("Oyvg"),a("pIFo");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("mwIZ"),i=a.n(o),s=(a("vPK/"),a("SbOt")),c=a("7oih"),m=a("EYWl");a("MvKu");var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e;switch(this.props.cta){case"react":e={id:"1181861",title:"Learn to Build Resilient React Components",subTitle:"Get a one week email course and learn how I think about writing React components based on 4 Principles.",buttonText:"Start Learning"};break;default:e={id:"812047",title:"Subscribe to the Newsletter",subTitle:"Subscribe to get my latest content by email.",buttonText:"Subscribe"}}return r.a.createElement("form",{action:"https://app.convertkit.com/forms/"+e.id+"/subscriptions",className:"seva-form formkit-form",method:"post","min-width":"400 500 600 700 800",style:{boxShadow:"var(--form-shadow)",backgroundColor:"var(--bg)",borderRadius:"6px"}},r.a.createElement("div",{"data-style":"full"},r.a.createElement("div",{"data-element":"column",className:"formkit-column",style:{backgroundColor:"var(--bg-secondary)"}},r.a.createElement("h1",{className:"formkit-header","data-element":"header",style:{color:"var(--textTitle)",fontSize:"20px",fontWeight:700}},e.title),r.a.createElement("div",{"data-element":"subheader",className:"formkit-subheader",style:{color:"var(--textNormal)"}},r.a.createElement("p",null,e.subTitle)),r.a.createElement("div",{className:"formkit-image"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"46",height:"46",viewBox:"0 0 46 46",style:{maxWidth:"100%"}},r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("path",{fill:"#DD92AB",d:"M23,36 C22.813,36 22.627,35.948 22.463,35.844 L0.463,21.844 C0.159,21.651 -0.017,21.308 0.001,20.948 C0.02,20.589 0.23,20.266 0.553,20.105 L23,6 L45.447,20.105 C45.769,20.266 45.98,20.588 45.999,20.948 C46.018,21.308 45.841,21.65 45.537,21.844 L23.537,35.844 C23.373,35.948 23.187,36 23,36 Z"}),r.a.createElement("path",{fill:"#FFF",d:"M38,37 L8,37 L8,1 C8,0.448 8.448,0 9,0 L37,0 C37.552,0 38,0.448 38,1 L38,37 Z"}),r.a.createElement("path",{fill:"#FFA7C4",d:"M45,46 C44.916,46 44.831,45.989 44.748,45.968 L21.748,39.968 L22,33 L46,21 L46,45 C46,45.31 45.856,45.602 45.611,45.792 C45.435,45.928 45.219,46 45,46 Z"}),r.a.createElement("path",{fill:"#FFC3D7",d:"M45,46 L1,46 C0.447,46 0,45.552 0,45 L0,21 L45.479,44.122 C45.88,44.341 46.083,44.804 45.969,45.247 C45.856,45.69 45.457,46 45,46 Z"}),r.a.createElement("path",{fill:"#FFA7C4",d:"M19 20.414L14.293 15.707C13.902 15.316 13.902 14.684 14.293 14.293L19 9.586 20.414 11 16.414 15 20.414 19 19 20.414zM27 20.414L25.586 19 29.586 15 25.586 11 27 9.586 31.707 14.293C32.098 14.684 32.098 15.316 31.707 15.707L27 20.414z"}))))),r.a.createElement("div",{"data-element":"column",className:"formkit-column"},r.a.createElement("ul",{className:"formkit-alert formkit-alert-error","data-element":"errors","data-group":"alert"}),r.a.createElement("div",{"data-element":"fields",className:"seva-fields formkit-fields"},r.a.createElement("div",{className:"formkit-field"},r.a.createElement("input",{className:"formkit-input","aria-label":"Your first name",name:"fields[first_name]",placeholder:"Your first name",type:"text",style:{borderColor:"rgb(227, 227, 227)",borderRadius:"4px",color:"rgb(0, 0, 0)",fontWeight:400},required:!0})),r.a.createElement("div",{className:"formkit-field"},r.a.createElement("input",{className:"formkit-input",name:"email_address","aria-label":"Your email address",placeholder:"Your email address",required:!0,type:"email",style:{borderColor:"rgb(227, 227, 227)",borderRadius:"4px",color:"rgb(0, 0, 0)",fontWeight:400}})),r.a.createElement("button",{"data-element":"submit",className:"formkit-submit formkit-submit",style:{backgroundColor:"hsl(340, 63%, 55%)",borderRadius:"24px",color:"white",fontWeight:700}},r.a.createElement("div",{className:"formkit-spinner"}),r.a.createElement("span",null,e.buttonText))),r.a.createElement("div",{"data-element":"guarantee",className:"formkit-guarantee",style:{color:"var(--textNormal)",fontSize:"13px",fontWeight:400}},r.a.createElement("p",null,"I won’t send you spam."),r.a.createElement("p",null,"Unsubscribe at ",r.a.createElement("em",null,"any")," time.")))))},n}(r.a.Component),p=a("JLKy"),d=a("L6NH"),f=a("p3AD"),b=(a("SRfc"),a("k7Sn")),h={"https://reactjs.org":{"pt-br":"https://pt-br.reactjs.org"}},g=function(e){return b.supportedLanguages[e].replace(/ /g," ")};function y(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}a.d(t,"pageQuery",(function(){return w}));var E='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif',v=function(e){function t(){return e.apply(this,arguments)||this}return y(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,a=e.lang,n=e.languageLink,o=e.editUrl,i=t.filter((function(e){return"ru"!==e})),s=-1!==t.indexOf("ru");return r.a.createElement("div",{className:"translations"},r.a.createElement(p.a,{style:{fontFamily:E}},t.length>0&&r.a.createElement("span",null,s&&r.a.createElement("span",null,"Originally written in:"," ","en"===a?r.a.createElement("b",null,g("en")):r.a.createElement(l.Link,{to:n("en")},"English")," • ","ru"===a?r.a.createElement("b",null,"Русский (авторский перевод)"):r.a.createElement(l.Link,{to:n("ru")},"Русский (авторский перевод)"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("span",null,"Translated by readers into: "),i.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:e},e===a?r.a.createElement("b",null,g(e)):r.a.createElement(l.Link,{to:n(e)},g(e)),t===i.length-1?"":" • ")}))),"en"!==a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),"ru"!==a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Link,{to:n("en")},"Read the original")," • ",r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • "),r.a.createElement(l.Link,{to:"/"+a},"View all translated posts")," ")))},t}(r.a.Component),k=function(e){function t(){return e.apply(this,arguments)||this}return y(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=i()(this.props,"data.site.siteMetadata.title"),n=this.props.pageContext,o=n.previous,p=n.next,y=n.slug,k=n.translations,w=n.translatedLinks,L=e.fields.langKey,x=e.html;x=function(e,t){var a=e.match(/https?:\/\/(www)?[^\/\s)"?]+/gm);return a&&b.supportedLanguages[t]?(a.forEach((function(a){h[a]&&h[a][t]&&(e=e.replace(a,h[a][t]))})),e):e}(x,L),w.forEach((function(e){var t="/"+L+e;x=x.replace(new RegExp('"'+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"',"g"),'"'+t+'"')})),(k=k.slice()).sort((function(e,t){return g(e)<g(t)?-1:1})),function(e){switch(e){case"ru":case"bg":a.e(0).then(a.t.bind(null,"EsZP",7)),a.e(0).then(a.t.bind(null,"s85H",7));break;case"uk":a.e(0).then(a.t.bind(null,"EsZP",7)),a.e(0).then(a.t.bind(null,"s85H",7)),a.e(0).then(a.t.bind(null,"Mq6Z",7)),a.e(0).then(a.t.bind(null,"e/YJ",7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"he":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":a.e(0).then(a.t.bind(null,"Mq6Z",7)),a.e(0).then(a.t.bind(null,"e/YJ",7));break;case"vi":a.e(0).then(a.t.bind(null,"Vjog",7)),a.e(0).then(a.t.bind(null,"Pf5Y",7));break;case"fa":a.e(0).then(a.t.bind(null,"BiVN",7));break;case"ar":a.e(0).then(a.t.bind(null,"xpFW",7))}}(L);var C=function(e,t){var a=e.replace(t+"/","");return function(e){return"en"===e?a:""+e+a}}(y,L),S=C("en"),j="https://github.com/gaearon/overreacted.io/edit/master/src/pages/"+S.slice(1,S.length-1)+"/index"+("en"===L?"":"."+L)+".md",N="https://mobile.twitter.com/search?q="+encodeURIComponent("https://overreacted.io"+S);return r.a.createElement(c.a,{location:this.props.location,title:t},r.a.createElement(m.a,{lang:L,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),r.a.createElement("main",null,r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-.8)})},Object(d.a)(e.frontmatter.date,L)," • "+Object(d.b)(e.timeToRead)),k.length>0&&r.a.createElement(v,{translations:k,editUrl:j,languageLink:C,lang:L})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:x}}),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("a",{href:N,target:"_blank",rel:"noopener noreferrer"},"Discuss on Twitter")," • ",r.a.createElement("a",{href:j,target:"_blank",rel:"noopener noreferrer"},"Edit on GitHub"))))),r.a.createElement("aside",null,r.a.createElement("div",{style:{margin:"90px 0 40px 0",fontFamily:E}},r.a.createElement(u,{cta:e.frontmatter.cta})),r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(f.a)(.25)}},r.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--pink)"},to:"/"},"Overreacted")),r.a.createElement(s.a,null),r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,o&&r.a.createElement(l.Link,{to:o.fields.slug,rel:"prev",style:{marginRight:20}},"← ",o.frontmatter.title)),r.a.createElement("li",null,p&&r.a.createElement(l.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))))))},t}(r.a.Component),w=(t.default=k,"934310520")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-123d70f76cb58daf85ca.js.map