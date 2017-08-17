/*! formstone v1.3.3 [mediaquery.js] 2017-08-17 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function i(){m={unit:s.unit};for(var e in u)if(u.hasOwnProperty(e))for(var i in l[e])if(l[e].hasOwnProperty(i)){var n="Infinity"===i?1/0:parseInt(i,10),a=u[e].indexOf("width")>-1?t.fallbackWidth:t.fallbackHeight,r=e.indexOf("max")>-1;t.support.nativeMatchMedia?l[e][i].matches&&(r?(!m[e]||n<m[e])&&(m[e]=n):(!m[e]||n>m[e])&&(m[e]=n)):r?!m[e]&&n>a&&(m[e]=n):(!m[e]&&0!==m[e]||n>m[e]&&n<a)&&(m[e]=n)}}function n(){i(),c.trigger(h.mqChange,[m])}function a(e){var t=r(e.media),i=v[t],n=e.matches,a=n?h.enter:h.leave;if(i&&(i.active||!i.active&&n)){for(var o in i[a])i[a].hasOwnProperty(o)&&i[a][o].apply(i.mq);i.active=!0}}function r(e){return e.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}var o=t.Plugin("mediaquery",{utilities:{_initialize:function(t){t=t||{};for(var i in u)u.hasOwnProperty(i)&&(s[i]=t[i]?e.merge(t[i],s[i]):s[i]);(s=e.extend(s,t)).minWidth.sort(f.sortDesc),s.maxWidth.sort(f.sortAsc),s.minHeight.sort(f.sortDesc),s.maxHeight.sort(f.sortAsc);for(var a in u)if(u.hasOwnProperty(a)){l[a]={};for(var r in s[a])if(s[a].hasOwnProperty(r)){var o=window.matchMedia("("+u[a]+": "+(s[a][r]===1/0?1e5:s[a][r])+s.unit+")");o.addListener(n),l[a][s[a][r]]=o}}n()},state:function(){return m},bind:function(e,t,i){var n=d.matchMedia(t),o=r(n.media);v[o]||(v[o]={mq:n,active:!0,enter:{},leave:{}},v[o].mq.addListener(a));for(var s in i)i.hasOwnProperty(s)&&v[o].hasOwnProperty(s)&&(v[o][s][e]=i[s]);var c=v[o],f=n.matches;f&&c[h.enter].hasOwnProperty(e)?(c[h.enter][e].apply(n),c.active=!0):!f&&c[h.leave].hasOwnProperty(e)&&(c[h.leave][e].apply(n),c.active=!1)},unbind:function(e,t){if(e)if(t){var i=r(t);v[i]&&(v[i].enter[e]&&delete v[i].enter[e],v[i].leave[e]&&delete v[i].leave[e])}else for(var n in v)v.hasOwnProperty(n)&&(v[n].enter[e]&&delete v[n].enter[e],v[n].leave[e]&&delete v[n].leave[e])}},events:{mqChange:"mqchange"}}),s={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},h=e.extend(o.events,{enter:"enter",leave:"leave"}),c=t.$window,d=c[0],f=o.functions,m=null,v=[],l={},u={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}});