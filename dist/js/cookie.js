/*! formstone v1.3.3 [cookie.js] 2017-08-17 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(e,n){"use strict";function t(n,t,i){var r=!1,o=new Date;i.expires&&"number"===e.type(i.expires)&&(o.setTime(o.getTime()+i.expires),r=o.toGMTString());var l=i.domain?"; domain="+i.domain:"",s=r?"; expires="+r:"",c=r?"; max-age="+i.expires/1e3:"",f=i.path?"; path="+i.path:"",a=i.secure?"; secure":"";u.cookie=n+"="+t+s+c+l+f+a}function i(e){for(var n=e+"=",t=u.cookie.split(";"),i=0;i<t.length;i++){for(var r=t[i];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return null}function r(n,i){t(n,"",e.extend({},i,{expires:-6048e5})),console.log(u.cookie)}n.Plugin("cookie",{utilities:{_delegate:function(n,u,l){if("object"===e.type(n))o=e.extend(o,n);else if(l=e.extend({},o,l||{}),"undefined"!==e.type(n)){if("undefined"===e.type(u))return i(n);null===u?r(n,l):t(n,u,l)}return null}}});var o={domain:null,expires:6048e5,path:null,secure:null},u=n.document});