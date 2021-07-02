(this["webpackJsonpweb-dev-reference"]=this["webpackJsonpweb-dev-reference"]||[]).push([[2,5,6,7],{70:function(e,n,t){"use strict";t.r(n),t.d(n,"ReferenceCodeSnippet",(function(){return o}));var c=t(64),r=t(65),i=t(58),s=t(2),o=function(e){var n=e.children;return Object(s.jsx)("div",{className:"bg-dark rounded pt-3 pb-3 mb-4 codeSnippet",children:Object(s.jsxs)(r.a,{children:[Object(s.jsx)(i.a,{md:11,children:Object(s.jsx)("pre",{className:"px-3 mt-1 mb-0",children:Object(s.jsx)("code",{style:{color:"#e83e8c"},children:n})})}),Object(s.jsx)(i.a,{md:1,children:Object(s.jsx)(c.a,{id:"copyButton",variant:"outline-info",size:"sm",onClick:function(){navigator.clipboard.writeText(n)},children:"Copy"})})]})})};n.default=o},71:function(e,n,t){"use strict";t.r(n),t.d(n,"ReferenceSectionHeader",(function(){return r}));var c=t(2),r=function(e){var n=e.children,t=e.link;return Object(c.jsx)("h2",{className:"text py-3 cursorPointer",onClick:function(){window.location.href=t.toString()},children:n})};n.default=r},72:function(e,n,t){"use strict";t.r(n),t.d(n,"ReferenceSectionText",(function(){return r}));var c=t(2),r=function(e){var n=e.children,t=e.className;return Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:t,children:n})})};n.default=r},75:function(e,n,t){"use strict";t.r(n);var c=t(71),r=t(72),i=t(70),s=t(2);n.default=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(c.ReferenceSectionHeader,{link:"https://create-react-app.dev/docs/deployment/",children:"Deploying your React app"}),Object(s.jsx)("h3",{className:"py-2",children:"Deploying to a GitHub page"}),Object(s.jsx)(r.ReferenceSectionText,{children:"Import gh-pages package with:"}),Object(s.jsx)(i.ReferenceCodeSnippet,{children:"npm install gh-pages"}),Object(s.jsx)(r.ReferenceSectionText,{children:"Add a few lines to package.json:"}),Object(s.jsx)(i.ReferenceCodeSnippet,{children:'"homepage": "Link to the website adress here",\n            \n"scripts": {\n    predeploy": "npm run build",\n    "deploy": "gh-pages -d build",\n    }'}),Object(s.jsx)(r.ReferenceSectionText,{children:"Make a gh-pages branch of the repository and make sure that pages are using it in the settings."}),Object(s.jsx)(r.ReferenceSectionText,{children:"Run comand to build and publish the website automatically:"}),Object(s.jsx)(i.ReferenceCodeSnippet,{children:"npm run deploy"}),Object(s.jsx)(r.ReferenceSectionText,{className:"text-danger",children:"If using Router components add to the Router component: "}),Object(s.jsx)(i.ReferenceCodeSnippet,{children:"<Router basename = {process.env.PUBLIC_URL}>"})]})}}}]);
//# sourceMappingURL=2.d2d3b929.chunk.js.map