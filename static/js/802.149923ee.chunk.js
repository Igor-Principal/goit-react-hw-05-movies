"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[802],{802:function(e,s,t){t.r(s),t.d(s,{default:function(){return m}});var i=t(439),l=t(617),a=t(791),c=t(689),n=t(87),r={coverBack:"movieDetails_coverBack__BQ+Rc",button:"movieDetails_button__pnWLJ",mainInfo:"movieDetails_mainInfo__RRM5G",imgBlock:"movieDetails_imgBlock__hMYvZ",img:"movieDetails_img__jB64k",textBlock:"movieDetails_textBlock__OTmAg",mainTitle:"movieDetails_mainTitle__FyKf0",textScore:"movieDetails_textScore__eBHSC",textBolt:"movieDetails_textBolt__5sXEK",text:"movieDetails_text__fxvcJ",secondTitle:"movieDetails_secondTitle__BN3GR",listGenres:"movieDetails_listGenres__462GK",list:"movieDetails_list__WPgzG",blockOverview:"movieDetails_blockOverview__JmCcC"},o=t(184),m=function(){var e,s,t=(0,a.useState)({}),m=(0,i.Z)(t,2),_=m[0],v=m[1],d=(0,c.TH)(),x=(0,a.useRef)(null!==(e=null===(s=d.state)||void 0===s?void 0:s.from)&&void 0!==e?e:"/"),h=(0,c.UO)().movieId;(0,a.useEffect)((function(){h&&(0,l.DD)(h).then((function(e){return v(e)})).catch((function(e){return console.error(e)}))}),[h]);var u=_.release_date,j=new Date(Date.parse(u)).getFullYear();return(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("div",{className:r.coverBack,children:(0,o.jsx)(n.OL,{to:x.current,className:r.button,children:"Go back"})}),(0,o.jsxs)("div",{className:r.mainInfo,children:[(0,o.jsx)("div",{className:r.imgBlock,children:(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(_.poster_path),alt:_.title,className:r.img})}),(0,o.jsxs)("div",{className:r.textBlock,children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("h1",{className:r.mainTitle,children:[_.title,(0,o.jsx)("br",{}),"(",j,")"]}),(0,o.jsxs)("p",{className:r.textScore,children:[(0,o.jsx)("span",{className:r.textBolt,children:"User Score:"})," ",_.vote_average,"%"]})]}),(0,o.jsxs)("div",{className:r.blockOverview,children:[(0,o.jsx)("h2",{className:r.secondTitle,children:"Overview"}),(0,o.jsx)("p",{className:r.text,children:_.overview})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:r.secondTitle,children:"Genres"}),(0,o.jsx)("ul",{className:r.listGenres,children:_.poster_path&&_.genres.map((function(e){return(0,o.jsx)("li",{className:r.textGener,children:e.name},e.id)}))})]})]})]}),(0,o.jsxs)("ul",{className:r.list,children:[(0,o.jsx)("li",{children:(0,o.jsx)(n.OL,{to:"cast",className:r.button,children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n.OL,{to:"reviews",className:r.button,children:"Reviews"})})]}),(0,o.jsxs)(a.Suspense,{children:[" ",(0,o.jsx)(c.j3,{})]})]})}}}]);
//# sourceMappingURL=802.149923ee.chunk.js.map