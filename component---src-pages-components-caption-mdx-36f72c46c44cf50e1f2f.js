(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"013z":function(t,e,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),c=a.n(r),o=a("Wbzz"),i=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),p=a.n(l),m=a("QH2O"),d=a("qKvR"),u=function(t){var e,a=t.title,n=t.tabs,b=void 0===n?[]:n;return Object(d.b)("div",{className:p()(m.pageHeader,(e={},e[m.withTabs]=b.length,e))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},a)))))},j=a("BAC9"),O=function(t){var e=t.relativePagePath,a=t.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,c=b.subDirectory,i=r+"/edit/"+b.branch+c+"/src/pages"+e;return r?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),g=a("dI71"),x=a("I8xM"),N=function(t){function e(){return t.apply(this,arguments)||this}return Object(g.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.tabs,a=t.slug,n=a.split("/").filter(Boolean).slice(-1)[0],b=e.map((function(t){var e,b=c()(t,{lower:!0,strict:!0}),r=b===n,i=new RegExp(n+"/?(#.*)?$"),s=a.replace(i,b);return Object(d.b)("li",{key:t,className:p()((e={},e[x.selectedItem]=r,e),x.listItem)},Object(d.b)(o.Link,{className:x.link,to:""+s},t))}));return Object(d.b)("div",{className:x.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:x.list},b))))))},e}(b.a.Component),T=a("MjG9");e.a=function(t){var e=t.pageContext,a=t.children,n=t.location,b=t.Title,r=e.frontmatter,l=void 0===r?{}:r,p=e.relativePagePath,m=e.titleType,j=l.tabs,g=l.title,x=l.theme,y=l.description,w=l.keywords,f=Object(o.useStaticQuery)("2456312558").site.pathPrefix,C=f?n.pathname.replace(f,""):n.pathname,v=j?C.split("/").filter(Boolean).slice(-1)[0]||c()(j[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:j,homepage:!1,theme:x,pageTitle:g,pageDescription:y,pageKeywords:w,titleType:m},Object(d.b)(u,{title:b?Object(d.b)(b,null):g,label:"label",tabs:j}),j&&Object(d.b)(N,{slug:C,tabs:j,currentTab:v}),Object(d.b)(T.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:p})),Object(d.b)(h.a,{pageContext:e,location:n,slug:C,tabs:j,currentTab:v}),Object(d.b)(i.a,null))}},BAC9:function(t,e,a){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(t,e,a){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(t,e,a){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},got8:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return o})),a.d(e,"default",(function(){return d}));var n=a("wx14"),b=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),o=(a("qKvR"),{}),i=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}},s=i("PageDescription"),l=i("Title"),p=i("Caption"),m=c.a;function d(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(r.b)(m,Object(n.a)({},a,{components:e,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<Caption>")," component is typically used below images or videos. They will default to 4 columns wide unless placed inside a ",Object(r.b)("inlineCode",{parentName:"p"},"<Row>")," component. In this case, it will assume the full width of its containing column.")),Object(r.b)("h2",null,"Example"),Object(r.b)(l,{mdxType:"Title"},Object(r.b)("p",null,"Normal")),Object(r.b)(p,{mdxType:"Caption"},Object(r.b)("p",null,"This is a regular caption. It will attempt to respond to it’s container\nelement appropriately.")),Object(r.b)(l,{mdxType:"Title"},Object(r.b)("p",null,"Full-width")),Object(r.b)(p,{fullWidth:!0,mdxType:"Caption"},Object(r.b)("p",null,"This is a full width caption. With this prop, the caption’s width will be 100%\nso it will fill its container.")),Object(r.b)("h2",null,"Code"),Object(r.b)(l,{mdxType:"Title"},Object(r.b)("p",null,"Normal")),Object(r.b)("pre",null,Object(r.b)("code",{className:"language-jsx",metastring:"path=components/Caption/Caption.js src= https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Caption",path:"components/Caption/Caption.js",src:"","https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Caption":!0,parentName:"pre"},"<Caption>\n  This is a regular caption. It will attempt to respond to it’s container\n  element appropriately.\n</Caption>\n")),Object(r.b)("p",null,Object(r.b)(l,{mdxType:"Title"},"Full"),"-width"),Object(r.b)("pre",null,Object(r.b)("code",{className:"language-jsx",metastring:"path=components/Caption/Caption.js src= https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Caption",path:"components/Caption/Caption.js",src:"","https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Caption":!0,parentName:"pre"},"<Caption fullWidth>\n  This is a full width caption. With this prop, the caption’s width will be 100%\n  so it will fill its container.\n</Caption>\n")),Object(r.b)("h3",null,"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr"},"property"),Object(r.b)("th",{parentName:"tr"},"propType"),Object(r.b)("th",{parentName:"tr"},"required"),Object(r.b)("th",{parentName:"tr"},"default"),Object(r.b)("th",{parentName:"tr"},"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr"},"children"),Object(r.b)("td",{parentName:"tr"},"node"),Object(r.b)("td",{parentName:"tr"}),Object(r.b)("td",{parentName:"tr"}),Object(r.b)("td",{parentName:"tr"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr"},"fullWidth"),Object(r.b)("td",{parentName:"tr"},"bool"),Object(r.b)("td",{parentName:"tr"}),Object(r.b)("td",{parentName:"tr"}),Object(r.b)("td",{parentName:"tr"},"Set to full width")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr"},"className"),Object(r.b)("td",{parentName:"tr"},"string"),Object(r.b)("td",{parentName:"tr"}),Object(r.b)("td",{parentName:"tr"}),Object(r.b)("td",{parentName:"tr"},"Add custom class name")))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-caption-mdx-36f72c46c44cf50e1f2f.js.map