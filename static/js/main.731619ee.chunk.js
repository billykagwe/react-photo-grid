(this["webpackJsonptailwind-react"]=this["webpackJsonptailwind-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=a(6),s=a(1);function m(e){var t=e.image,a=t.tags.split(",");return r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg"},r.a.createElement("img",{src:t.webformatURL,alt:"",className:"w-full"}),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold text-purple-500 text-xl mb-2"},"Photo by ",t.user),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Views: "),t.views),r.a.createElement("li",null,r.a.createElement("strong",null,"Downloads: "),t.downloads),r.a.createElement("li",null,r.a.createElement("strong",null,"Likes: "),t.likes))),r.a.createElement("div",{className:"px-6 py-4"},a.map((function(e){return r.a.createElement("span",{key:t.id,className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},"#",e)}))))}var i=function(e){var t=e.searchText,a=Object(n.useState)(""),l=Object(s.a)(a,2),c=l[0],o=l[1];return r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c)},className:"w-full max-w-sm"},r.a.createElement("div",{className:"flex items-center border-b border-b-2 border-teal-500 py-2"},r.a.createElement("input",{onChange:function(e){return o(e.target.value)},className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Search Image Term..."}),r.a.createElement("button",{className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit"},"Search"))))};console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/billykagwe/react-photo-grid",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_PIXABAY_API_KEY:"16008495-b0adcea827b4c1759df654813"}).PIXABAY_API_KEY);var u=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),u=Object(s.a)(c,2),d=u[0],p=u[1],b=Object(n.useState)(""),E=Object(s.a)(b,2),f=E[0],g=E[1];return console.log(a.length),Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("16008495-b0adcea827b4c1759df654813","&q=").concat(f,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){l(Object(o.a)(e.hits)),p(!1)})).catch((function(e){return console.log(e)}))}),[f]),r.a.createElement("div",{className:"container mx-auto px-2 "},r.a.createElement(i,{searchText:function(e){return g(e)}}),!d&&0===a.length&&r.a.createElement("h1",{className:"text-5xl text-center mx-auto mt-32"},"No images Found"),d?r.a.createElement("h1",{className:"text-6xl text-center mx-auto mt-32"},"Loading..."):r.a.createElement("div",{className:"grid md:grid-cols-3 grid-flow-row gap-4"},a.map((function(e){return r.a.createElement(m,{key:e.id,image:e})}))))};a(12);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.731619ee.chunk.js.map