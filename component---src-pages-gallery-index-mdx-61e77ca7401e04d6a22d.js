(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),c=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),d=a.n(l),u=a("QH2O"),m=a("qKvR"),p=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},g=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,b=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),O=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0,strict:!0}),i=r===n,b=new RegExp(n+"/?(#.*)?$"),s=a.replace(b,r);return Object(m.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=i,t),O.listItem)},Object(m.b)(c.Link,{className:O.link,to:""+s},e))}));return Object(m.b)("div",{className:O.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:O.list},r))))))},t}(r.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,l=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,g=l.tabs,j=l.title,O=l.theme,T=l.description,w=l.keywords,y=Object(c.useStaticQuery)("2456312558").site.pathPrefix,I=y?n.pathname.replace(y,""):n.pathname,k=g?I.split("/").filter(Boolean).slice(-1)[0]||o()(g[0],{lower:!0}):"";return Object(m.b)(s.a,{tabs:g,homepage:!1,theme:O,pageTitle:j,pageDescription:T,pageKeywords:w,titleType:u},Object(m.b)(p,{title:r?Object(m.b)(r,null):j,label:"label",tabs:g}),g&&Object(m.b)(f,{slug:I,tabs:g,currentTab:k}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(x,{relativePagePath:d})),Object(m.b)(h.a,{pageContext:t,location:n,slug:I,tabs:g,currentTab:k}),Object(m.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},VWXa:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},s=b("PageDescription"),l=b("FeatureCard"),d=o.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(n.a)({},a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"PageDescription"},Object(i.b)("p",null,"We have a multitude of sites using the gatsby theme for both public and internal sites. Using this theme we’ve been able to propogate features and fixes throughout the ecosystem quickly and easily.")),Object(i.b)("h2",null,"IBM Design for AI"),Object(i.b)(l,{title:"IBM Design for AI",actionIcon:"arrowRight",href:"https://ibm.com/design/ai/",color:"dark",mdxType:"FeatureCard"}),Object(i.b)("h2",null,"IBM Design Language"),Object(i.b)(l,{title:"IBM Design Language",actionIcon:"arrowRight",href:"https://www.ibm.com/design/language/",color:"dark",mdxType:"FeatureCard"}),Object(i.b)("h2",null,"Carbon Design System"),Object(i.b)(l,{title:"Carbon Design System",actionIcon:"arrowRight",href:"http://carbondesignsystem.com/",color:"dark",mdxType:"FeatureCard"}),Object(i.b)("h2",null,"IBM Design Research"),Object(i.b)(l,{title:"IBM Design Research",actionIcon:"arrowRight",href:"https://ibm.com/design/research/",color:"dark",mdxType:"FeatureCard"}),Object(i.b)("h2",null,"IBM Design Event"),Object(i.b)(l,{title:"IBM Design Event",actionIcon:"arrowRight",href:"https://ibm.com/design/event/",color:"dark",mdxType:"FeatureCard"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gallery-index-mdx-61e77ca7401e04d6a22d.js.map