(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),c=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),l=a("TSYQ"),d=a.n(l),m=a("QH2O"),p=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(p.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.text},a)))))},g=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,s=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),O=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),o=r===n,s=new RegExp(n+"/?(#.*)?$"),b=a.replace(s,r);return Object(p.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=o,t),O.listItem)},Object(p.b)(c.Link,{className:O.link,to:""+b},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:O.list},r))))))},t}(r.a.Component),T=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,l=void 0===o?{}:o,d=t.relativePagePath,m=t.titleType,g=l.tabs,j=l.title,O=l.theme,v=l.description,w=l.keywords,y=Object(c.useStaticQuery)("2456312558").site.pathPrefix,k=y?n.pathname.replace(y,""):n.pathname,P=g?k.split("/").filter(Boolean).slice(-1)[0]||i()(g[0],{lower:!0}):"";return Object(p.b)(b.a,{tabs:g,homepage:!1,theme:O,pageTitle:j,pageDescription:v,pageKeywords:w,titleType:m},Object(p.b)(u,{title:r?Object(p.b)(r,null):j,label:"label",tabs:g}),g&&Object(p.b)(f,{slug:k,tabs:g,currentTab:P}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(x,{relativePagePath:d})),Object(p.b)(h.a,{pageContext:t,location:n,slug:k,tabs:g,currentTab:P}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},TCRD:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=s("PageDescription"),l=s("ArtDirection"),d=i.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"On the web, ",Object(o.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Art_direction",parentName:"p"},"art direction")," refers to changing the image rendered at different display sizes. The ",Object(o.b)("inlineCode",{parentName:"p"},"ArtDirection")," component allows you to provide multiple images achieve this goal.")),Object(o.b)("h2",null,"Example"),Object(o.b)(l,{mdxType:"ArtDirection"}),Object(o.b)("h2",null,"Code"),Object(o.b)("p",null,"You can place up to three images inside of the ArtDirection component. The first will be used for mobile, the second for tablet, and the third for desktop. If only two images are provided, the second image will be used for both tablet and desktop."),Object(o.b)("pre",null,Object(o.b)("code",{className:"language-markdown",metastring:"path=components/ArtDirection.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ArtDirection",path:"components/ArtDirection.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ArtDirection",parentName:"pre"},"<ArtDirection>\n\n![Mobile image](./mobile.jpg)\n![Tablet image](./tablet.jpg)\n![Desktop image](./desktop.jpg)\n\n</ArtDirection>\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-art-direction-index-mdx-1321317ec92e9a7637d0.js.map