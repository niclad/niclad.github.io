import{S as F,i as H,s as x,k as v,a as L,q as Y,C as ae,l as p,h as f,c as T,m as g,r as Z,n as c,D as _,b as N,B as S,E as ee,F as le,G as se,w as z,x as B,p as M,y as G,H as re,I as ne,J as oe,f as j,t as O,z as J}from"../../chunks/index-8eadb37a.js";import{b as te}from"../../chunks/paths-6cd3a76e.js";import{S as ce}from"../../chunks/social-links-0a5a93c8.js";function K(o,e,t){const l=o.slice();return l[3]=e[t],l}function Q(o){let e,t,l=o[3].label+"",a,s,n,r;function h(){return o[2](o[3])}return{c(){e=v("li"),t=v("a"),a=Y(l),s=L(),this.h()},l(b){e=p(b,"LI",{class:!0});var k=g(e);t=p(k,"A",{class:!0,href:!0});var u=g(t);a=Z(u,l),u.forEach(f),s=T(k),k.forEach(f),this.h()},h(){c(t,"class","nav-link"),c(t,"href",te+"#"+o[3].path),c(e,"class","nav-item")},m(b,k){N(b,e,k),_(e,t),_(t,a),_(e,s),n||(r=le(t,"click",h),n=!0)},p(b,k){o=b},d(b){b&&f(e),n=!1,r()}}}function ie(o){let e,t,l,a,s,n,r,h,b,k,u,i,$,y,A;document.title=e=o[0];let w=o[1],E=[];for(let d=0;d<w.length;d+=1)E[d]=Q(K(o,w,d));return{c(){t=v("meta"),a=L(),s=v("header"),n=v("nav"),r=v("div"),h=v("a"),b=Y("Nick Tedori"),k=L(),u=v("button"),i=v("span"),$=L(),y=v("div"),A=v("ul");for(let d=0;d<E.length;d+=1)E[d].c();this.h()},l(d){const I=ae("svelte-1waox68",document.head);t=p(I,"META",{name:!0,content:!0}),I.forEach(f),a=T(d),s=p(d,"HEADER",{class:!0,id:!0});var m=g(s);n=p(m,"NAV",{id:!0,class:!0});var D=g(n);r=p(D,"DIV",{class:!0});var U=g(r);h=p(U,"A",{class:!0,href:!0});var C=g(h);b=Z(C,"Nick Tedori"),C.forEach(f),k=T(U),u=p(U,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var P=g(u);i=p(P,"SPAN",{class:!0}),g(i).forEach(f),P.forEach(f),$=T(U),y=p(U,"DIV",{class:!0,id:!0});var R=g(y);A=p(R,"UL",{class:!0});var q=g(A);for(let V=0;V<E.length;V+=1)E[V].l(q);q.forEach(f),R.forEach(f),U.forEach(f),D.forEach(f),m.forEach(f),this.h()},h(){c(t,"name","description"),c(t,"content",l="Nicolas Tedori's "+o[0]+" page"),c(h,"class","navbar-brand"),c(h,"href",te+"/"),c(i,"class","navbar-toggler-icon"),c(u,"class","navbar-toggler"),c(u,"type","button"),c(u,"data-bs-toggle","collapse"),c(u,"data-bs-target","#navbarNav"),c(u,"aria-controls","navbarNav"),c(u,"aria-expanded","false"),c(u,"aria-label","Toggle navigation"),c(A,"class","navbar-nav"),c(y,"class","collapse navbar-collapse justify-content-end"),c(y,"id","navbarNav"),c(r,"class","container-xl nav-container"),c(n,"id","navbar"),c(n,"class","navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary"),c(s,"class","header sticky-top"),c(s,"id","nav-header")},m(d,I){_(document.head,t),N(d,a,I),N(d,s,I),_(s,n),_(n,r),_(r,h),_(h,b),_(r,k),_(r,u),_(u,i),_(r,$),_(r,y),_(y,A);for(let m=0;m<E.length;m+=1)E[m].m(A,null)},p(d,[I]){if(I&1&&e!==(e=d[0])&&(document.title=e),I&1&&l!==(l="Nicolas Tedori's "+d[0]+" page")&&c(t,"content",l),I&3){w=d[1];let m;for(m=0;m<w.length;m+=1){const D=K(d,w,m);E[m]?E[m].p(D,I):(E[m]=Q(D),E[m].c(),E[m].m(A,null))}for(;m<E.length;m+=1)E[m].d(1);E.length=w.length}},i:S,o:S,d(d){f(t),d&&f(a),d&&f(s),ee(E,d)}}}function ue(o,e,t){const l=[{label:"Home",path:""},{label:"About",path:"about"},{label:"Personal Projects",path:"personal-projects"},{label:"Experience",path:"experience"}];let a=l[0].label;return[a,l,n=>t(0,a=n.label)]}class fe extends F{constructor(e){super(),H(this,e,ue,ie,x,{})}}function W(o,e,t){const l=o.slice();return l[1]=e[t],l}function X(o){let e,t,l;return{c(){e=v("li"),t=v("a"),l=v("i"),this.h()},l(a){e=p(a,"LI",{class:!0});var s=g(e);t=p(s,"A",{class:!0,href:!0});var n=g(t);l=p(n,"I",{class:!0}),g(l).forEach(f),n.forEach(f),s.forEach(f),this.h()},h(){c(l,"class","bi bi-"+o[1].icon+" fs-4"),c(t,"class","nav-link svelte-5eos4z"),c(t,"href",o[1].link),c(e,"class","nav-item")},m(a,s){N(a,e,s),_(e,t),_(t,l)},p:S,d(a){a&&f(e)}}}function he(o){let e,t,l=o[0],a=[];for(let s=0;s<l.length;s+=1)a[s]=X(W(o,l,s));return{c(){e=v("footer"),t=v("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=p(s,"FOOTER",{class:!0});var n=g(e);t=p(n,"UL",{class:!0});var r=g(t);for(let h=0;h<a.length;h+=1)a[h].l(r);r.forEach(f),n.forEach(f),this.h()},h(){c(t,"class","nav navbar-dark bg-dark justify-content-center border-top border-secondary py-1"),c(e,"class","footer sticky-bottom")},m(s,n){N(s,e,n),_(e,t);for(let r=0;r<a.length;r+=1)a[r].m(t,null)},p(s,[n]){if(n&1){l=s[0];let r;for(r=0;r<l.length;r+=1){const h=W(s,l,r);a[r]?a[r].p(h,n):(a[r]=X(h),a[r].c(),a[r].m(t,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=l.length}},i:S,o:S,d(s){s&&f(e),ee(a,s)}}}function de(o){return[Object.values(ce)]}class _e extends F{constructor(e){super(),H(this,e,de,he,x,{})}}const me=""+new URL("../../assets/hero-img-28d1a833.webp",import.meta.url).href;function ve(o){let e,t,l,a,s,n,r,h,b;a=new fe({});const k=o[2].default,u=se(k,o,o[1],null);return h=new _e({}),{c(){e=v("div"),t=L(),l=v("div"),z(a.$$.fragment),s=L(),n=v("main"),u&&u.c(),r=L(),z(h.$$.fragment),this.h()},l(i){e=p(i,"DIV",{class:!0,style:!0}),g(e).forEach(f),t=T(i),l=p(i,"DIV",{class:!0});var $=g(l);B(a.$$.fragment,$),s=T($),n=p($,"MAIN",{class:!0,style:!0});var y=g(n);u&&u.l(y),y.forEach(f),r=T($),B(h.$$.fragment,$),$.forEach(f),this.h()},h(){c(e,"class","bg-image svelte-14nflst"),M(e,"--bg-img","url("+o[0]+")"),c(n,"class","mt-auto mb-auto"),M(n,"--bg-img","url("+o[0]+")"),c(l,"class","app cover-container d-flex w-100 p-0 flex-column svelte-14nflst")},m(i,$){N(i,e,$),N(i,t,$),N(i,l,$),G(a,l,null),_(l,s),_(l,n),u&&u.m(n,null),_(l,r),G(h,l,null),b=!0},p(i,[$]){u&&u.p&&(!b||$&2)&&re(u,k,i,i[1],b?oe(k,i[1],$,null):ne(i[1]),null)},i(i){b||(j(a.$$.fragment,i),j(u,i),j(h.$$.fragment,i),b=!0)},o(i){O(a.$$.fragment,i),O(u,i),O(h.$$.fragment,i),b=!1},d(i){i&&f(e),i&&f(t),i&&f(l),J(a),u&&u.d(i),J(h)}}}function pe(o,e,t){let{$$slots:l={},$$scope:a}=e;const s=me;return o.$$set=n=>{"$$scope"in n&&t(1,a=n.$$scope)},[s,a,l]}class Ee extends F{constructor(e){super(),H(this,e,pe,ve,x,{imgUrl:0})}get imgUrl(){return this.$$.ctx[0]}}export{Ee as default};
