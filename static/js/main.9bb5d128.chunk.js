(this.webpackJsonpoliwier_pakula_photography=this.webpackJsonpoliwier_pakula_photography||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t),i.d(t,"photosArray",(function(){return y}));var s=i(1),n=i.n(s),a=i(9),c=(i(14),i(2)),o=i(3),r=i(5),l=i(4),d=(i(15),i(16),i(0)),h=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"header",id:"top",children:Object(d.jsx)("picture",{className:"header__logo"})})}}]),i}(n.a.Component),m=i(6),_=(i(18),i(19),function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"menuItemTransition",value:function(){var e=document.querySelectorAll(".menu__list__item__content");e.forEach((function(t){t.addEventListener("mouseover",(function(){e.forEach((function(e){e.style.color="gray"})),t.style.color="white"})),t.addEventListener("mouseout",(function(){e.forEach((function(e){e.style.color="white"}))}))}))}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.menuItemTransition()}),500)}},{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"menu",children:[Object(d.jsx)("div",{className:"menu__exit",onClick:this.props.exit}),Object(d.jsxs)("ul",{className:"menu__list",children:[Object(d.jsx)("li",{className:"menu__list__item",children:Object(d.jsx)("a",{className:"menu__list__item__content",onClick:this.props.linkTo,children:"FEATURED"})}),Object(d.jsx)("li",{className:"menu__list__item",children:Object(d.jsx)("a",{className:"menu__list__item__content",onClick:this.props.linkTo,children:"PEOPLE"})}),Object(d.jsx)("li",{className:"menu__list__item",children:Object(d.jsx)("a",{className:"menu__list__item__content",onClick:this.props.linkTo,children:"NATURE"})}),Object(d.jsx)("li",{className:"menu__list__item",children:Object(d.jsx)("a",{className:"menu__list__item__content",onClick:this.props.linkTo,children:"ACTS"})}),Object(d.jsx)("li",{className:"menu__list__item",children:Object(d.jsx)("a",{className:"menu__list__item__content",onClick:this.props.linkTo,children:"CONTACT"})})]})]})}}]),i}(n.a.Component)),u=(i(20),i(21),function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={id:s.props.id,src:s.props.src,alt:s.props.alt,title:s.props.title,width:s.props.style.width,height:s.props.style.height},s.handleNextPhoto=s.handleNextPhoto.bind(Object(m.a)(s)),s.handlePreviousPhoto=s.handlePreviousPhoto.bind(Object(m.a)(s)),s.handleArrows=s.handleArrows.bind(Object(m.a)(s)),s}return Object(o.a)(i,[{key:"reviewButtonsTransition",value:function(){[document.querySelector(".photo-review__previous"),document.querySelector(".photo-review__next")].forEach((function(e){e.addEventListener("mouseover",(function(){e.children[0].style.backgroundColor="#FFFFFF",e.children[1].style.backgroundColor="#FFFFFF"})),e.addEventListener("mouseout",(function(){e.children[0].style.backgroundColor="#828282",e.children[1].style.backgroundColor="#828282"}))}))}},{key:"exitIconTransformer",value:function(e){var t=document.querySelector(".photo-review__exit").children;e?(t[0].style.cssText="\n        width: 100%;\n        top: 50%;\n        transform: rotate(-45deg);\n        background: #828282",t[1].style.cssText="\n        opacity: 0",t[2].style.cssText="\n        width: 100%;\n        top: 50%;\n        transform: rotate(45deg);\n        background: #828282"):(t[0].style.cssText="\n        width: 100%;\n        transform: rotate(0deg);\n        background: #FFFFFF",t[1].style.cssText="\n        opacity: 1",t[2].style.cssText="\n        width: 25%;\n        transform: rotate(0deg);\n        background: #FFFFFF")}},{key:"handleNextPhoto",value:function(){console.log(this.state.id),this.state.id+1===y.length?this.setState({id:0,src:y[0].src,title:y[0].title,alt:y[0].alt,width:y[0].width,height:y[0].height}):this.setState({id:this.state.id+1,src:y[this.state.id+1].src,title:y[this.state.id+1].title,alt:y[this.state.id+1].alt,width:y[this.state.id+1].width,height:y[this.state.id+1].height})}},{key:"handlePreviousPhoto",value:function(){0===this.state.id?this.setState({id:y.length-1,src:y[y.length-1].src,title:y[y.length-1].title,alt:y[y.length-1].alt,width:y[y.length-1].width,height:y[y.length-1].height}):this.setState({id:this.state.id-1,src:y[this.state.id-1].src,title:y[this.state.id-1].title,alt:y[this.state.id-1].alt,width:y[this.state.id-1].width,height:y[this.state.id-1].height})}},{key:"animatePhotoChange",value:function(){var e=document.querySelector(".photo-review").children;e[1].classList.contains("photo-review__picture--animate")&&(e[1].style.opacity="0",e[2].style.opacity="0",e[1].classList.remove("photo-review__picture--animate"),e[2].classList.remove("photo-review__title--animate")),setTimeout((function(){e[1].classList.add("photo-review__picture--animate"),e[2].classList.add("photo-review__title--animate")}),100)}},{key:"handleArrows",value:function(e){"ArrowRight"===e.nativeEvent.key&&this.handleNextPhoto(),"ArrowLeft"===e.nativeEvent.key&&this.handlePreviousPhoto()}},{key:"componentDidMount",value:function(){var e=this;this.reviewButtonsTransition(),this.animatePhotoChange(),setTimeout((function(){e.exitIconTransformer(!0)}),50)}},{key:"componentDidUpdate",value:function(){this.animatePhotoChange()}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"photo-review",onKeyUp:this.handleArrows,children:[Object(d.jsxs)("button",{className:"photo-review__previous",onClick:this.handlePreviousPhoto,children:[Object(d.jsx)("span",{className:"photo-review__previous__top-bar"}),Object(d.jsx)("span",{className:"photo-review__previous__bottom-bar"})]}),Object(d.jsx)("img",{className:"photo-review__picture",src:this.state.src,alt:this.state.alt,id:this.state.id}),Object(d.jsx)("h3",{className:"photo-review__title",children:this.state.title?this.state.title:""}),Object(d.jsxs)("button",{className:"photo-review__next",onClick:this.handleNextPhoto,children:[Object(d.jsx)("span",{className:"photo-review__next__top-bar"}),Object(d.jsx)("span",{className:"photo-review__next__bottom-bar"})]}),Object(d.jsxs)("button",{className:"photo-review__exit",onClick:this.props.onClosed,children:[Object(d.jsx)("span",{className:"photo-review__exit__top-bar"}),Object(d.jsx)("span",{className:"photo-review__exit__middle-bar"}),Object(d.jsx)("span",{className:"photo-review__exit__bottom-bar"})]})]})}}]),i}(n.a.Component)),j=0,p=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={isReviewMounted:!1},s.pictureStyle={width:y[s.props.data].width,height:y[s.props.data].height},s.handleReviewMounting=s.handleReviewMounting.bind(Object(m.a)(s)),s.handleReviewUnmounting=s.handleReviewUnmounting.bind(Object(m.a)(s)),s}return Object(o.a)(i,[{key:"exitIconTransformer",value:function(e){var t=document.querySelector(".photo-review__exit").children;e?(t[0].style.cssText="\n        width: 100%;\n        top: 50%;\n        transform: rotate(-45deg);\n        background: #828282",t[1].style.cssText="\n        opacity: 0",t[2].style.cssText="\n        width: 100%;\n        top: 50%;\n        transform: rotate(45deg);\n        background: #828282"):(t[0].style.cssText="\n        width: 100%;\n        transform: rotate(0deg);\n        background: #FFFFFF",t[1].style.cssText="\n        opacity: 1",t[2].style.cssText="\n        width: 25%;\n        transform: rotate(0deg);\n        background: #FFFFFF")}},{key:"bodyFreezer",value:function(e){var t=document.querySelector("body");e?(j=document.documentElement.scrollTop,t.style.cssText="\n        top: ".concat(-document.documentElement.scrollTop,"px;\n        position: fixed")):(t.style.cssText="\n        top: ".concat(-document.documentElement.scrollTop,"px;\n        position: static"),window.scroll(0,j))}},{key:"menuIconDisplayChanger",value:function(e){document.querySelector(".main__menu-icon").style.display=e?"block":"none"}},{key:"handleReviewMounting",value:function(){this.setState({isReviewMounted:!0}),document.querySelector("picture").style.pointerEvents="none",this.menuIconDisplayChanger(!1),this.bodyFreezer(!0)}},{key:"handleReviewUnmounting",value:function(){var e=this,t=document.querySelector(".photo-review"),i=document.querySelector(".photo-review").children;i[0].classList.contains("photo-review__previous--animate-exit")?(i[0].classList.remove("photo-review__previous--animate-exit"),i[1].classList.remove("photo-review__picture--animate-exit"),i[2].classList.remove("photo-review__title--animate-exit"),i[3].classList.remove("photo-review__next--animate-exit")):(i[0].classList.add("photo-review__previous--animate-exit"),i[1].classList.add("photo-review__picture--animate-exit"),i[2].classList.add("photo-review__title--animate-exit"),i[3].classList.add("photo-review__next--animate-exit")),t.classList.contains("photo-review--animate-exit")?t.classList.remove("photo-review--animate-exit"):t.classList.add("photo-review--animate-exit"),this.exitIconTransformer(!1),setTimeout((function(){e.setState({isReviewMounted:!1}),document.querySelector("picture").style.pointerEvents="auto",e.menuIconDisplayChanger(!0)}),400),this.bodyFreezer(!1)}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("picture",{id:this.props.data,className:"picture",style:this.pictureStyle,onClick:this.handleReviewMounting,children:Object(d.jsx)("img",{src:y[this.props.data].src,className:"picture__img"})}),this.state.isReviewMounted?Object(d.jsx)(u,{id:this.props.data,src:y[this.props.data].src,alt:y[this.props.data].alt,title:y[this.props.data].title,style:this.pictureStyle,onClosed:this.handleReviewUnmounting}):null]})}}]),i}(n.a.Component),b=0,x=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={isMenuOpened:!1},s.handleMenu=s.handleMenu.bind(Object(m.a)(s)),s.menuClose=s.menuClose.bind(Object(m.a)(s)),s.menuOpen=s.menuOpen.bind(Object(m.a)(s)),s.linkToId=s.linkToId.bind(Object(m.a)(s)),s}return Object(o.a)(i,[{key:"bodyFreezer",value:function(e){var t=document.querySelector("body");e?(b=document.documentElement.scrollTop,t.style.cssText="\n        top: ".concat(-document.documentElement.scrollTop,"px;\n        position: fixed")):(t.style.cssText="\n        top: ".concat(-document.documentElement.scrollTop,"px;\n        position: static"),window.scroll(0,b))}},{key:"menuDisplayChanger",value:function(e){var t=document.querySelector(".menu");t.style.cssText="\n        top: ".concat(-document.documentElement.scrollTop,e?"px;\n        display: flex":"px;\n        display: none")}},{key:"menuIconTransformer",value:function(e){var t=document.querySelector(".main__menu-icon").children;e?(t[0].style.cssText="\n        width: 100%;\n        top: 50%;\n        transform: rotate(-45deg);\n        background: #828282",t[1].style.cssText="\n        opacity: 0",t[2].style.cssText="\n        width: 100%;\n        top: 50%;\n        transform: rotate(45deg);\n        background: #828282"):(t[0].style.cssText="\n        width: 100%;\n        transform: rotate(0deg);\n        background: #FFFFFF",t[1].style.cssText="\n        opacity: 1",t[2].style.cssText="\n        width: 25%;\n        transform: rotate(0deg);\n        background: #FFFFFF")}},{key:"menuIconTransition",value:function(e){var t=document.querySelector(".main__menu-icon"),i=t.children,s=function(){i[0].style.cssText="width: 40%",i[1].style.cssText="width: 100%",i[2].style.cssText="width: 55%"},n=function(){i[0].style.cssText="width: 100%",i[1].style.cssText="width: 60%",i[2].style.cssText="width: 25%"};e?(t.addEventListener("mouseover",s),t.addEventListener("mouseout",n)):(t.removeEventListener("mouseover",s),t.removeEventListener("mouseout",n))}},{key:"menuClose",value:function(){this.menuIconTransformer(!1),this.menuDisplayChanger(!1)}},{key:"menuOpen",value:function(){this.menuIconTransformer(!0),this.menuDisplayChanger(!0)}},{key:"handleMenu",value:function(){var e=this,t=document.querySelector(".menu"),i=document.querySelector(".main__menu-icon");!0===this.state.isMenuOpened?(t.classList.add("menu--animate"),t.classList.remove("menu--animateOpening"),t.classList.add("menu--animateClosing"),i.style.pointerEvents="none",t.children[0].style.pointerEvents="none",t.children[1].style.pointerEvents="none",this.menuIconTransformer(!1),this.bodyFreezer(!1),setTimeout((function(){e.menuDisplayChanger(!1),e.setState({isMenuOpened:!1}),i.style.pointerEvents="auto",t.children[0].style.pointerEvents="auto",t.children[1].style.pointerEvents="auto"}),400)):(this.setState({isMenuOpened:!0}),t.classList.remove("menu--animate"),t.classList.remove("menu--animateClosing"),t.classList.add("menu--animateOpening"),this.menuIconTransformer(!0),this.bodyFreezer(!0),this.menuDisplayChanger(!0))}},{key:"componentDidMount",value:function(){this.menuIconTransformer(!1)}},{key:"linkToId",value:function(e){var t;t="featured"!==e.target.innerText.toLowerCase()?document.querySelector("#"+e.target.innerText.toLowerCase()):document.querySelector("#top"),this.menuClose(),this.setState({isMenuOpened:!this.state.isMenuOpened}),t.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsx)(_,{exit:this.handleMenu,linkTo:this.linkToId}),Object(d.jsxs)("button",{className:"main__menu-icon",onClick:this.handleMenu,href:"",children:[Object(d.jsx)("span",{className:"main__menu-icon__top-bar"}),Object(d.jsx)("span",{className:"main__menu-icon__middle-bar"}),Object(d.jsx)("span",{className:"main__menu-icon__bottom-bar"})]}),Object(d.jsxs)("section",{className:"main__grid",children:[Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:0})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:1})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:2})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)("h2",{className:"main__grid__item__title",id:"featured",children:"FEATURED"})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:3})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:4})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:5})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:6})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:7})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:8})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:9})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:10})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:0})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:1})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)("h2",{className:"main__grid__item__title",id:"people",children:"PEOPLE"})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:2})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:3})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:4})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:5})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:6})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:7})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:8})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)("h2",{className:"main__grid__item__title",id:"nature",children:"NATURE"})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:9})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:10})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:0})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:1})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:2})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:3})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:4})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:5})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:6})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)("h2",{className:"main__grid__item__title",id:"acts",children:"ACTS"})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:7})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:8})}),Object(d.jsx)("div",{className:"main__grid__item",children:Object(d.jsx)(p,{data:9})})]})]})}}]),i}(n.a.Component),v=(i(22),i(7)),O=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("footer",{className:"footer",id:"contact",children:[Object(d.jsxs)("section",{className:"footer__social-media",children:[Object(d.jsx)("a",{className:"footer__social-media__link",href:"https://www.facebook.com/OliwierPakulaPhotography",target:"blank",children:Object(d.jsx)("span",{className:"footer__social-media__link__icon",children:Object(d.jsx)(v.b,{})})}),Object(d.jsx)("a",{className:"footer__social-media__link",href:"https://www.instagram.com/oliwier.pakula.photography",target:"blank",children:Object(d.jsx)("span",{className:"footer__social-media__link__icon",children:Object(d.jsx)(v.c,{})})}),Object(d.jsx)("a",{className:"footer__social-media__link",href:"mailto:oliwierpakula@gmail.com",children:Object(d.jsx)("span",{className:"footer__social-media__link__icon",children:Object(d.jsx)(v.a,{})})}),Object(d.jsx)("a",{className:"footer__social-media__link",href:"tel:+48 420 420 420",children:Object(d.jsx)("span",{className:"footer__social-media__link__icon",children:Object(d.jsx)(v.d,{})})})]}),Object(d.jsx)("span",{className:"footer__copyright",children:Object(d.jsx)("a",{className:"footer__copyright__text",href:"https://github.com/karoljurczynski",target:"blank",children:"\xa9 2021 Karol Jurczy\u0144ski"})})]})}}]),i}(n.a.Component),g=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(e){return Object(c.a)(this,i),t.call(this,e)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(h,{}),Object(d.jsx)(x,{}),Object(d.jsx)(O,{})]})}}]),i}(n.a.Component),y=[{src:"https://i.ibb.co/gvBgY9X/1.jpg",alt:"First photo",title:"First photo"},{src:"https://i.ibb.co/99gnxjk/2.jpg",alt:"Second photo",title:"Second photo"},{src:"https://i.ibb.co/yBH6PHC/3.jpg",alt:"Third photo",title:"Third photo"},{src:"https://i.ibb.co/93SHWBz/4.jpg",alt:"Fourth photo",title:"Fourth photo"},{src:"https://i.ibb.co/BtMGmhH/5.jpg",alt:"Fifth photo",title:"Fifth photo"},{src:"https://i.ibb.co/Fg1PjYj/9.jpg",alt:"Sixth photo",title:"Sixth photo"},{src:"https://i.ibb.co/hYc8px8/10.jpg",alt:"Seventh photo",title:"Seventh photo"},{src:"https://i.ibb.co/KXgHmQV/11.jpg",alt:"Eighth photo",title:"Eighth photo"},{src:"https://i.ibb.co/YfxT2PY/12.jpg",alt:"Ninth photo",title:"Ninth photo"},{src:"https://i.ibb.co/zHh3z64/13.jpg",alt:"Tenth photo",title:"Tenth photo"},{src:"https://i.ibb.co/JpQdSQx/14.jpg",alt:"Eleventh photo",title:"Eleventh photo"}];Object(a.render)(Object(d.jsx)(g,{}),document.querySelector("#root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.9bb5d128.chunk.js.map