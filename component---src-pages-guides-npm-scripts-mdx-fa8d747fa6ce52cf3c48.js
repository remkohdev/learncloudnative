(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("NmYn"),r=a.n(l),b=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),o=a("TSYQ"),u=a.n(o),d=a("QH2O"),p=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(p.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,l=i.baseUrl,r=i.subDirectory,c=l+"/edit/"+i.branch+r+"/src/pages"+t;return l?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("dI71"),x=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=r()(e,{lower:!0,strict:!0}),l=i===n,c=new RegExp(n+"/?(#.*)?$"),s=a.replace(c,i);return Object(p.b)("li",{key:e,className:u()((t={},t[x.selectedItem]=l,t),x.listItem)},Object(p.b)(b.Link,{className:x.link,to:""+s},e))}));return Object(p.b)("div",{className:x.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:x.list},i))))))},t}(i.a.Component),f=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,l=t.frontmatter,o=void 0===l?{}:l,u=t.relativePagePath,d=t.titleType,j=o.tabs,h=o.title,x=o.theme,y=o.description,v=o.keywords,w=Object(b.useStaticQuery)("2456312558").site.pathPrefix,T=w?n.pathname.replace(w,""):n.pathname,C=j?T.split("/").filter(Boolean).slice(-1)[0]||r()(j[0],{lower:!0}):"";return Object(p.b)(s.a,{tabs:j,homepage:!1,theme:x,pageTitle:h,pageDescription:y,pageKeywords:v,titleType:d},Object(p.b)(m,{title:i?Object(p.b)(i,null):h,label:"label",tabs:j}),j&&Object(p.b)(N,{slug:T,tabs:j,currentTab:C}),Object(p.b)(f.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:u})),Object(p.b)(g.a,{pageContext:t,location:n,slug:T,tabs:j,currentTab:C}),Object(p.b)(c.a,null))}},"2qMs":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n,i=a("wx14"),l=a("zLVn"),r=(a("q1tI"),a("7ljp")),b=a("013z"),c=(a("qKvR"),{}),s=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),o=b.a;function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)(o,Object(i.a)({},a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},Object(r.b)("p",null,"Site’s built with the Carbon Gatsby theme starter come ready to go with some helpful npm scripts. You can run these commands by typing ",Object(r.b)("inlineCode",{parentName:"p"},"yarn [command]")," or ",Object(r.b)("inlineCode",{parentName:"p"},"npm run [command]"))),Object(r.b)("h2",null,"Clean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"clean")," - this is used to clean gatsby’s cache and public directory. It should be used sparingly, only when you’re experiencing weird errors or caching issues.")),Object(r.b)("h2",null,"Develop"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"develop")," - this is your primary for starting up your gatsby site for development"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"develop:clean")," - this is provided as a convenience; it first runs ",Object(r.b)("inlineCode",{parentName:"li"},"clean")," then ",Object(r.b)("inlineCode",{parentName:"li"},"develop"))),Object(r.b)("h2",null,"Build"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"build")," - this is what you’ll use to bundle your site. Gatsby will minimize your images and create a static, blazing fast site in your ",Object(r.b)("inlineCode",{parentName:"li"},"public")," directory"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"serve")," - this can be run to serve the bundle locally after running ",Object(r.b)("inlineCode",{parentName:"li"},"build"),". It can be used to debug locally if any issues are encountered durring build."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"build:clean")," - this is a provided as a convenience, it first runs ",Object(r.b)("inlineCode",{parentName:"li"},"clean")," then ",Object(r.b)("inlineCode",{parentName:"li"},"build")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"build:prefix")," - this will append all of your links with a ",Object(r.b)("a",{href:"https://www.gatsbyjs.org/docs/path-prefix/",parentName:"li"},Object(r.b)("inlineCode",{parentName:"a"},"pathPrefix"))," specified in your ",Object(r.b)("inlineCode",{parentName:"li"},"gatsby-config.js")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"serve:prefix")," - this will allow you to serve the file locally using a prefixed site built with ",Object(r.b)("inlineCode",{parentName:"li"},"build:prefix")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"test:prefix")," - this is provided as a convenience; it first runs ",Object(r.b)("inlineCode",{parentName:"li"},"build:prefix")," then ",Object(r.b)("inlineCode",{parentName:"li"},"test:prefix")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"build:analyze")," - this will run build while also running ",Object(r.b)("a",{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",parentName:"li"},"webpack-bundle-analyzer")," to help debug bundle size issues\n")))}u.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-guides-npm-scripts-mdx-fa8d747fa6ce52cf3c48.js.map