"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[281],{281:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(439),s=n(617),a=n(791),i=n(689),c={list:"reviews_list__Pe+AJ",name:"reviews_name__CxTsp",rating:"reviews_rating__a0bK8",content:"reviews_content__Ok-9W"},l=n(184),o=function(){var e=(0,i.UO)().movieId,t=(0,a.useState)([]),n=(0,r.Z)(t,2),o=n[0],u=n[1];(0,a.useEffect)((function(){(0,s.oO)(e).then((function(e){return u(e.results)})).catch((function(e){return console.error(e)}))}),[e]);var h=o.filter((function(e){return null!==e.author_details.rating})).slice(0,3).map((function(e){var t=e.author,n=e.content,r=e.id,s=e.author_details.rating;return(0,l.jsxs)("li",{className:c.item,children:[(0,l.jsxs)("h3",{className:c.name,children:["Author: ",t]}),(0,l.jsxs)("p",{className:c.rating,children:["Author rating: ",s]}),(0,l.jsx)("p",{className:c.content,children:n})]},r)}));return(0,l.jsx)("ul",{className:c.list,children:o.length>0?h:(0,l.jsx)("p",{children:"We don't have ane reviewsfor this movie."})})}}}]);
//# sourceMappingURL=281.bdc7a92f.chunk.js.map