(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),s=a("NmYn"),r=a.n(s),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),m=a("QH2O"),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(u.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=o.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,s=o.baseUrl,r=o.subDirectory,i=s+"/edit/"+o.branch+r+"/src/pages"+t;return s?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},g=a("FCXl"),O=a("dI71"),y=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=r()(e,{lower:!0,strict:!0}),s=o===n,i=new RegExp(n+"/?(#.*)?$"),c=a.replace(i,o);return Object(u.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=s,t),y.listItem)},Object(u.b)(l.Link,{className:y.link,to:""+c},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:y.list},o))))))},t}(o.a.Component),f=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,s=t.frontmatter,b=void 0===s?{}:s,p=t.relativePagePath,m=t.titleType,h=b.tabs,O=b.title,y=b.theme,w=b.description,v=b.keywords,x=Object(l.useStaticQuery)("2456312558").site.pathPrefix,k=x?n.pathname.replace(x,""):n.pathname,T=h?k.split("/").filter(Boolean).slice(-1)[0]||r()(h[0],{lower:!0}):"";return Object(u.b)(c.a,{tabs:h,homepage:!1,theme:y,pageTitle:O,pageDescription:w,pageKeywords:v,titleType:m},Object(u.b)(d,{title:o?Object(u.b)(o,null):O,label:"label",tabs:h}),h&&Object(u.b)(N,{slug:k,tabs:h,currentTab:T}),Object(u.b)(f.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:p})),Object(u.b)(g.a,{pageContext:t,location:n,slug:k,tabs:h,currentTab:T}),Object(u.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},zeqw:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a("wx14"),o=a("zLVn"),s=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",t)}},c=i("PageDescription"),b=i("AnchorLinks"),p=i("AnchorLink"),m=r.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)(m,Object(n.a)({},a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(c,{mdxType:"PageDescription"},Object(s.b)("p",null,"Use this guide to contribute to the theme. We’ll show you how to get the development environment set up as quickly as possible so you can start contributing.")),Object(s.b)(b,{mdxType:"AnchorLinks"},Object(s.b)(p,{mdxType:"AnchorLink"},Object(s.b)("p",null,"Project setup")),Object(s.b)(p,{mdxType:"AnchorLink"},Object(s.b)("p",null,"Development")),Object(s.b)(p,{mdxType:"AnchorLink"},Object(s.b)("p",null,"Work in a branch")),Object(s.b)(p,{mdxType:"AnchorLink"},Object(s.b)("p",null,"Sass and CSS Modules")),Object(s.b)(p,{mdxType:"AnchorLink"},Object(s.b)("p",null,"VS Code")),Object(s.b)(p,{mdxType:"AnchorLink"},Object(s.b)("p",null,"Test pages")),Object(s.b)(p,{mdxType:"AnchorLink"},Object(s.b)("p",null,"Publishing"))),Object(s.b)("h2",null,"Project setup"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Go to ",Object(s.b)("a",{href:"https://github.com/carbon-design-system/gatsby-theme-carbon",parentName:"p"},"gatsby-theme-carbon")," and click the ",Object(s.b)("inlineCode",{parentName:"p"},"Fork")," button in the top-right corner.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"After it’s finished, click on the ",Object(s.b)("inlineCode",{parentName:"p"},"Clone or Download")," button and copy the contents.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"In your terminal, clone the repo into your directory of choice"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{className:"language-sh",parentName:"pre"},"git clone [PASTE_URL_HERE]\ncd gatsby-theme-carbon\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"When you clone your forked repo the ",Object(s.b)("inlineCode",{parentName:"p"},"origin")," is set to your fork by default. You’ll want to add a remote that points to the upstream repo."),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{className:"language-sh",parentName:"pre"},"git remote add upstream git@github.com:carbon-design-system/gatsby-theme-carbon.git\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"In your terminal, verify that the remotes have been set"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{className:"language-sh",parentName:"pre"},"git remote -v\n")))),Object(s.b)("h2",null,"Development"),Object(s.b)("p",null,"We use ",Object(s.b)("a",{href:"https://yarnpkg.com/lang/en/docs/install/",parentName:"p"},"yarn")," and yarn workspaces to develop the Carbon Gatsby theme. This allows us to have a development environment that’s closely linked to the theme with minimal setup. Run ",Object(s.b)("inlineCode",{parentName:"p"},"yarn install")," to install all of the projects dependencies."),Object(s.b)("p",null,"This project has two packages: the actual theme package (",Object(s.b)("inlineCode",{parentName:"p"},"gatsby-theme-carbon"),") and the ",Object(s.b)("inlineCode",{parentName:"p"},"example")," package. The example package emulates a project which uses the theme. Its only dependencies are Gatsby, React, and the adjacent theme package. The ",Object(s.b)("inlineCode",{parentName:"p"},"example")," package also serves as the theme’s documentation and ",Object(s.b)("a",{href:"https://gatsby-theme-carbon.now.sh",parentName:"p"},"website"),"; it’s deployed on every merge to master."),Object(s.b)("p",null,"New theme development will happen in the theme package while documentation and testing of that change will occur through changes in the example directory."),Object(s.b)("h3",null,"Development scripts"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"yarn dev")," – start the development environment"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"yarn dev:clean")," – clear cache and restart dev"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"yarn format")," – format your code with prettier"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"yarn lint")," - check for errors in your javascript"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"yarn test:prefix")," – build and serve with a path prefix")),Object(s.b)("h2",null,"Work in a branch"),Object(s.b)("p",null,"You should always start a new project by pulling upstream changes into master and then creating a new branch. This workflow ensures you don’t accidentally commit anything to your master branch and get stuck when trying to open a pull request."),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-sh",parentName:"pre"},"git checkout master\ngit pull upstream master\ngit checkout -b my-branch-name\n")),Object(s.b)("h3",null,"Commit messages"),Object(s.b)("p",null,"For commit messages we use ",Object(s.b)("a",{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153#allowed-type",parentName:"p"},"Angular commit conventions")," to dictate whether a commit is for a feature, fix, docs, etc. You need to prefix your commits with one of the following:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"feat (feature)"),Object(s.b)("li",{parentName:"ul"},"fix (bug fix)"),Object(s.b)("li",{parentName:"ul"},"docs (documentation)"),Object(s.b)("li",{parentName:"ul"},"style (formatting, missing semi colons, …)"),Object(s.b)("li",{parentName:"ul"},"refactor"),Object(s.b)("li",{parentName:"ul"},"test (when adding missing tests)"),Object(s.b)("li",{parentName:"ul"},"chore (maintain)")),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-sh",parentName:"pre"},'git commit -m "chore: this is a test commit message"\n')),Object(s.b)("h3",null,"Opening a Pull request"),Object(s.b)("p",null,"When you’re ready to open a pull request, push to your origin remote."),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-sh",parentName:"pre"},"git push origin my-branch-name\n")),Object(s.b)("p",null,"You’ll get a message in your terminal with a URL to open up a pull request in the upstream repository. Navigate to that URL and be sure to give a detailed summary of your pull request in the title and body section of the form."),Object(s.b)("h2",null,"Sass and CSS Modules"),Object(s.b)("p",null,"For internal theme components we use ",Object(s.b)("a",{href:"https://sass-lang.com/documentation/syntax",parentName:"p"},"Sass")," and ",Object(s.b)("a",{href:"https://github.com/css-modules/css-modules#css-modules",parentName:"p"},"CSS Modules"),". This allows us to take advantage of the Carbon Design System resources while not worrying about className collisions. By default, each ",Object(s.b)("inlineCode",{parentName:"p"},".scss")," file will be supplied with all of the Carbon Sass ",Object(s.b)("a",{href:"https://github.com/carbon-design-system/carbon/blob/master/packages/components/src/globals/scss/_vars.scss",parentName:"p"},"variables"),": color, spacing, theme, and motion, as well as type and layout mixins, are imported automatically."),Object(s.b)("p",null,"You should colocate your stylesheet with the component(s) that import it. If the component is ",Object(s.b)("inlineCode",{parentName:"p"},"TreeView")," then the stylesheet should be ",Object(s.b)("inlineCode",{parentName:"p"},"TreeView.module.scss"),". All contained within the ",Object(s.b)("inlineCode",{parentName:"p"},"TreeView")," directory."),Object(s.b)("h3",null,"CSS Modules"),Object(s.b)("p",null,"You don’t need to prefix your classes as CSS Modules will generate unique class names for you. Import the class from the ",Object(s.b)("inlineCode",{parentName:"p"},".scss")," file."),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-scss",metastring:"path=TreeView.module.scss",path:"TreeView.module.scss",parentName:"pre"},".treeView {\n  color: $text-01;\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js",parentName:"pre"},'import { treeView } from "./style.css";\n\nconst TreeView = props => <div className={treeView} />;\n')),Object(s.b)("p",null,"For conditionally applying class names, use the ",Object(s.b)("inlineCode",{parentName:"p"},"classname")," library. Note how we’re using a ",Object(s.b)("a",{href:"https://tylermcginnis.com/computed-property-names/",parentName:"p"},"computed property name")," for the property being based to ",Object(s.b)("inlineCode",{parentName:"p"},"cx"),". That’s because the className isn’t literally ",Object(s.b)("inlineCode",{parentName:"p"},'"long"')," it’s a value generated by CSS Modules and placed in the ",Object(s.b)("inlineCode",{parentName:"p"},"long")," variable."),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js",parentName:"pre"},'import cx from "classname";\nimport { treeView, long } from "./style.css";\n\nconst TreeView = props => {\n  const className = cx(treeView, {\n    [long]: props.long\n  });\n  const TreeView = props => <div className={className} />;\n};\n')),Object(s.b)("p",null,"If you need to target a global class not processed by CSS Modules, you can do so with the ",Object(s.b)("a",{href:"https://github.com/css-modules/css-modules#exceptions",parentName:"p"},"global selector"),"."),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-scss",parentName:"pre"},':global(.bx--grid) .codeBlock {\n  @include carbon--type-style("code-01");\n}\n')),Object(s.b)("h2",null,"VS Code"),Object(s.b)("p",null,"To get linting error feedback while writing javascript and SCSS in VS Code, install the ",Object(s.b)("a",{href:"https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint",parentName:"p"},"stylelint")," and ",Object(s.b)("a",{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",parentName:"p"},"ESlint")," extensions. We use ESLint’s Prettier rules to format and lint all of our JavaScript in one pass. To get your code to format properly on save, add the following to a ",Object(s.b)("inlineCode",{parentName:"p"},".vscode/settings.json")," in the root of your project"),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-json",metastring:"path=.vscode/settings.json",path:".vscode/settings.json",parentName:"pre"},'{\n  "editor.formatOnSave": true,\n  "[javascript]": {\n    "editor.formatOnSave": false\n  },\n  "[javascriptreact]": {\n    "editor.formatOnSave": false\n  },\n  "eslint.autoFixOnSave": true,\n  "prettier.disableLanguages": ["javascript", "javascriptreact"]\n}\n')),Object(s.b)("p",null,"To lint the entire project and get errors in your ",Object(s.b)("inlineCode",{parentName:"p"},"Problems")," tray, you can add the following to a ",Object(s.b)("inlineCode",{parentName:"p"},".vscode/tasks.json")," file in the root of your project. You can run these tasks with ",Object(s.b)("inlineCode",{parentName:"p"},"cmd+shift+d")),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-json",metastring:"path=.vscode/tasks.json",path:".vscode/tasks.json",parentName:"pre"},'{\n  "version": "2.0.0",\n  "tasks": [\n    {\n      "type": "npm",\n      "script": "lint:js",\n      "problemMatcher": "$eslint-stylish"\n    },\n    {\n      "type": "npm",\n      "script": "lint:scss",\n      "problemMatcher": {\n        "owner": "stylelint",\n        "fileLocation": ["relative", "${workspaceFolder}"],\n        "pattern": [\n          {\n            "regexp": "^([^\\\\s].*)$",\n            "file": 1\n          },\n          {\n            "regexp": "^\\\\s+(\\\\d+):(\\\\d+)\\\\s+(✖|warning)\\\\s+(.*)\\\\s\\\\s+(.*)$",\n            "line": 1,\n            "column": 2,\n            "severity": 3,\n            "message": 4,\n            "code": 5,\n            "loop": true\n          }\n        ]\n      }\n    }\n  ]\n}\n')),Object(s.b)("h2",null,"Test pages"),Object(s.b)("p",null,"If you want to add examples of what you are working on or see changes you’ve made, you can add an MDX file to ",Object(s.b)("inlineCode",{parentName:"p"},"packages/src/pages/test")," that will be visible at ",Object(s.b)("inlineCode",{parentName:"p"},"(your-server-name)/test/(added-file)")," during development. If you do add a page to the ",Object(s.b)("inlineCode",{parentName:"p"},"/test")," directory, update the below list with the file you added and its purpose to be included with your pull request."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{href:"/learncloudnative/test/spacing-audit",parentName:"li"},Object(s.b)("inlineCode",{parentName:"a"},"Spacing audit")),": use this page to test spacing around components when combined in common patterns.")),Object(s.b)("h2",null,"Publishing"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"figure out if it’s patch or feature"),Object(s.b)("li",{parentName:"ol"},"from the root of the package run ",Object(s.b)("inlineCode",{parentName:"li"},"lerna publish patch")," or ",Object(s.b)("inlineCode",{parentName:"li"},"lerna publish minor")),Object(s.b)("li",{parentName:"ol"},"git push upstream master —follow-tags"),Object(s.b)("li",{parentName:"ol"},"In the project’s ",Object(s.b)("a",{href:"https://github.com/carbon-design-system/gatsby-theme-carbon/releases",parentName:"li"},"release tab"),", edit the new release to include a summary of new changes")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-contributions-mdx-bebf375fde2d898f9250.js.map