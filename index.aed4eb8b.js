document.querySelectorAll(".js-scroll").forEach((function(o){o.addEventListener("click",(function(){var o,e,t,l,c,n,r,i=this.getAttribute("href");o=i,e=500,t=document.querySelector(".scroll-to")?document.querySelector(".scroll-to").clientHeight:0,l=document.querySelector(o).getBoundingClientRect().top-t,c=window.pageYOffset,n=null,r=function(o){null===n&&(n=o);var t,i,s,u=o-n,d=(t=u,i=c,s=l,(t/=e/2)<1?s/2*t*t+i:-s/2*(--t*(t-2)-1)+i);window.scrollTo(0,d),u<e&&requestAnimationFrame(r)},requestAnimationFrame(r)}))})),scrollToTop=document.querySelector("[data-scroll-to-top]"),window.onscroll=function(){document.body.scrollTop>200||document.documentElement.scrollTop>200?scrollToTop.classList.add("is-active"):scrollToTop.classList.remove("is-active")};
//# sourceMappingURL=index.aed4eb8b.js.map
