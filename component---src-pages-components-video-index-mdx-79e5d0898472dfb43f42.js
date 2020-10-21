(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("NmYn"),b=a.n(o),c=a("Wbzz"),i=a("Xrax"),s=a("k4MR"),d=a("TSYQ"),m=a.n(d),l=a("QH2O"),p=a("qKvR"),j=function(e){var t,a=e.title,r=e.tabs,n=void 0===r?[]:r;return Object(p.b)("div",{className:m()(l.pageHeader,(t={},t[l.withTabs]=n.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:l.text},a)))))},u=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,r=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,o=n.baseUrl,b=n.subDirectory,i=o+"/edit/"+n.branch+b+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+u.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:u.link,href:i},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("dI71"),N=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=b()(e,{lower:!0,strict:!0}),o=n===r,i=new RegExp(r+"/?(#.*)?$"),s=a.replace(i,n);return Object(p.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(p.b)(c.Link,{className:N.link,to:""+s},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:N.list},n))))))},t}(n.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,o=t.frontmatter,d=void 0===o?{}:o,m=t.relativePagePath,l=t.titleType,u=d.tabs,h=d.title,N=d.theme,y=d.description,T=d.keywords,f=Object(c.useStaticQuery)("2456312558").site.pathPrefix,V=f?r.pathname.replace(f,""):r.pathname,k=u?V.split("/").filter(Boolean).slice(-1)[0]||b()(u[0],{lower:!0}):"";return Object(p.b)(s.a,{tabs:u,homepage:!1,theme:N,pageTitle:h,pageDescription:y,pageKeywords:T,titleType:l},Object(p.b)(j,{title:n?Object(p.b)(n,null):h,label:"label",tabs:u}),u&&Object(p.b)(x,{slug:V,tabs:u,currentTab:k}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:m})),Object(p.b)(g.a,{pageContext:t,location:r,slug:V,tabs:u,currentTab:k}),Object(p.b)(i.a,null))}},"48Wm":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return m})),a.d(t,"default",(function(){return g}));var r=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),b=a("013z"),c=a("gTqz"),i=a.n(c),s=a("zKcW"),d=a.n(s),m=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},p=l("PageDescription"),j=l("Title"),u=l("Video"),O=b.a;function g(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(O,Object(r.a)({},a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(p,{mdxType:"PageDescription"},Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<Video>")," component can render a Vimeo player or a html video player.")),Object(o.b)("h2",null,"Example"),Object(o.b)(j,{mdxType:"Title"},Object(o.b)("p",null,"Vimeo")),Object(o.b)(u,{title:"Carbon homepage video",vimeoId:"359578263",mdxType:"Video"}),Object(o.b)(j,{mdxType:"Title"},Object(o.b)("p",null,"Video")),Object(o.b)(u,{src:"/videos/hero-video.mp4",poster:"/images/poster.jpg",mdxType:"Video"},Object(o.b)("track",{kind:"captions",default:!0,src:"/videos/vtt/hero-video.vtt",srcLang:"en"})),Object(o.b)(j,{mdxType:"Title"},Object(o.b)("p",null,"Video in MDX")),Object(o.b)(u,{src:i.a,poster:d.a,mdxType:"Video"}),Object(o.b)("h2",null,"Code"),Object(o.b)(j,{mdxType:"Title"},Object(o.b)("p",null,"Vimeo")),Object(o.b)("pre",null,Object(o.b)("code",{className:"language-jsx",metastring:"path=components/Video/Video.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Video",path:"components/Video/Video.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Video",parentName:"pre"},'<Video title="Carbon homepage video" vimeoId="322021187" />\n')),Object(o.b)(j,{mdxType:"Title"},Object(o.b)("p",null,"Video")),Object(o.b)("pre",null,Object(o.b)("code",{className:"language-jsx",metastring:"path=components/Video/Video.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Video",path:"components/Video/Video.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Video",parentName:"pre"},'<Video src="/videos/hero-video.mp4" poster="/images/poster.jpg">\n  <track kind="captions" default src="/videos/vtt/hero-video.vtt" srcLang="en" />\n</Video>\n')),Object(o.b)(j,{mdxType:"Title"},Object(o.b)("p",null,"Video in MDX")),Object(o.b)("pre",null,Object(o.b)("code",{className:"language-markdown",metastring:"path=components/Video.mdx src=https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/example/src/pages/components/Video/index.mdx",path:"components/Video.mdx",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/example/src/pages/components/Video/index.mdx",parentName:"pre"},"import localVideo from './local-video.mp4';\nimport localPoster from './local-poster.jpg';\n\n<Video src={localVideo} poster={localPoster} />\n")),Object(o.b)("h3",null,"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr"},"property"),Object(o.b)("th",{parentName:"tr"},"propType"),Object(o.b)("th",{parentName:"tr"},"required"),Object(o.b)("th",{parentName:"tr"},"default"),Object(o.b)("th",{parentName:"tr"},"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr"},"vimeoId"),Object(o.b)("td",{parentName:"tr"},"string"),Object(o.b)("td",{parentName:"tr"}),Object(o.b)("td",{parentName:"tr"}),Object(o.b)("td",{parentName:"tr"},"To find your ",Object(o.b)("inlineCode",{parentName:"td"},"vimeoId"),", go to the Vimeo page and find the video you want to put on your website. Once it is loaded, look at the URL and look for the numbers that come after the slash (/).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr"},"src"),Object(o.b)("td",{parentName:"tr"},"string"),Object(o.b)("td",{parentName:"tr"}),Object(o.b)("td",{parentName:"tr"}),Object(o.b)("td",{parentName:"tr"},"Use the html ",Object(o.b)("inlineCode",{parentName:"td"},"<video>")," player with a local ",Object(o.b)("inlineCode",{parentName:"td"},".mp4")," video")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr"},"title"),Object(o.b)("td",{parentName:"tr"},"string"),Object(o.b)("td",{parentName:"tr"}),Object(o.b)("td",{parentName:"tr"}),Object(o.b)("td",{parentName:"tr"},"Vimeo title")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr"},"poster"),Object(o.b)("td",{parentName:"tr"},"string"),Object(o.b)("td",{parentName:"tr"}),Object(o.b)("td",{parentName:"tr"}),Object(o.b)("td",{parentName:"tr"},"Provides an image to show before the video loads, only works with ",Object(o.b)("inlineCode",{parentName:"td"},"src"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr"},"children"),Object(o.b)("td",{parentName:"tr"},Object(o.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track",parentName:"td"},Object(o.b)("inlineCode",{parentName:"a"},"<track>"))),Object(o.b)("td",{parentName:"tr"}),Object(o.b)("td",{parentName:"tr"}),Object(o.b)("td",{parentName:"tr"},Object(o.b)("em",{parentName:"td"},"non-vimeo only")," – Provide ",Object(o.b)("inlineCode",{parentName:"td"},".vtt")," file in your static directory to make your videos more accessible. Then add a track element with a src pointing to it Check out ",Object(o.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#Tutorial_on_how_to_write_a_WebVTT_file",parentName:"td"},"this simple tutorial")," for getting started with writing vtt files.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr"},"autoPlay"),Object(o.b)("td",{parentName:"tr"},"boolean"),Object(o.b)("td",{parentName:"tr"}),Object(o.b)("td",{parentName:"tr"}),Object(o.b)("td",{parentName:"tr"},"Whether or not the video should autoplay.")))))}g.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-video-index-mdx-79e5d0898472dfb43f42.js.map