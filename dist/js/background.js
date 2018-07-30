/*! formstone v1.4.9 [background.js] 2018-07-30 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],e):e(jQuery,Formstone)}(function(e,i){"use strict";function o(){(C=Y.scrollTop()+i.windowHeight)<0&&(C=0),P.iterate.call(I,v)}function t(){j=e(b.base),I=e(b.lazy),P.iterate.call(I,h)}function a(e){if(e.visible){var i=e.source;e.source=null,n(e,i,!0)}}function n(i,o,t){if(o!==i.source&&i.visible){if(i.source=o,i.responsive=!1,i.isYouTube=!1,"object"===e.type(o)&&"string"===e.type(o.video)){var a=o.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);a&&a.length>=1&&(i.isYouTube=!0,i.videoId=a[1])}var n=!i.isYouTube&&"object"===e.type(o)&&(o.hasOwnProperty("mp4")||o.hasOwnProperty("ogg")||o.hasOwnProperty("webm"));if(i.video=i.isYouTube||n,i.playing=!1,i.isYouTube)i.playerReady=!1,i.posterLoaded=!1,u(i,o,t);else if("object"===e.type(o)&&o.hasOwnProperty("poster"))d(i,o,t);else{var l=o;if("object"===e.type(o)){var c,p=[],y=[];for(c in o)o.hasOwnProperty(c)&&y.push(c);y.sort(P.sortAsc);for(c in y)y.hasOwnProperty(c)&&p.push({width:parseInt(y[c]),url:o[y[c]],mq:$.matchMedia("(min-width: "+parseInt(y[c])+"px)")});i.responsive=!0,i.sources=p,l=r(i)}s(i,l,!1,t)}}else i.$el.trigger(T.loaded)}function r(e){var o=e.source;if(e.responsive){o=e.sources[0].url;for(var t in e.sources)e.sources.hasOwnProperty(t)&&(i.support.matchMedia?e.sources[t].mq.matches&&(o=e.sources[t].url):e.sources[t].width<i.fallbackWidth&&(o=e.sources[t].url))}return o}function s(i,o,t,a){var n=[w.media,w.image,!0!==a?w.animated:""].join(" "),r=e('<div class="'+n+'" aria-hidden="true"><img alt="'+i.alt+'"></div>'),s=r.find("img"),d=o;s.one(T.load,function(){R&&r.addClass(w.native).css({backgroundImage:"url('"+d+"')"}),r.fsTransition({property:"opacity"},function(){t||l(i)}).css({opacity:1}),f(i),t&&!a||i.$el.trigger(T.loaded)}).one(T.error,i,c).attr("src",d),i.responsive&&r.addClass(w.responsive),i.$container.append(r),(s[0].complete||4===s[0].readyState)&&s.trigger(T.load),i.currentSource=d}function d(i,o,t){i.source&&i.source.poster&&(s(i,i.source.poster,!0,!0),t=!1);var a='<div class="'+[w.media,w.video,!0!==t?w.animated:""].join(" ")+'" aria-hidden="true">';a+="<video playsinline",i.loop&&(a+=" loop"),i.mute&&(a+=" muted"),i.autoPlay&&(a+=" autoplay"),a+=">",i.source.webm&&(a+='<source src="'+i.source.webm+'" type="video/webm" />'),i.source.mp4&&(a+='<source src="'+i.source.mp4+'" type="video/mp4" />'),i.source.ogg&&(a+='<source src="'+i.source.ogg+'" type="video/ogg" />'),a+="</video>";var n=e(a+="</div>");n.find("video").one(T.loadedMetaData,function(e){n.fsTransition({property:"opacity"},function(){l(i)}).css({opacity:1}),f(i),i.$el.trigger(T.loaded),i.autoPlay&&p(i)}),i.$container.append(n)}function u(i,o,t){if(!i.videoId){var a=o.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);i.videoId=a[1]}if(i.posterLoaded||(i.source.poster||(i.source.poster="//img.youtube.com/vi/"+i.videoId+"/0.jpg"),i.posterLoaded=!0,s(i,i.source.poster,!0,t),t=!1),e("script[src*='youtube.com/iframe_api']").length||e("head").append('<script src="//www.youtube.com/iframe_api"><\/script>'),z){var n=i.guid+"_"+i.youTubeGuid++,r='<div class="'+[w.media,w.embed,!0!==t?w.animated:""].join(" ")+'" aria-hidden="true">';r+='<div id="'+n+'"></div>';var d=e(r+="</div>"),u=e.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:n,loop:i.loop?1:0,autoplay:1,origin:$.location.protocol+"//"+$.location.host},i.youtubeOptions);u.autoplay=1,i.$container.append(d),i.player&&(i.oldPlayer=i.player,i.player=null),i.player=new $.YT.Player(n,{videoId:i.videoId,playerVars:u,events:{onReady:function(e){i.playerReady=!0,i.mute&&i.player.mute(),i.autoPlay||i.player.pauseVideo()},onStateChange:function(e){i.playing||e.data!==$.YT.PlayerState.PLAYING?i.loop&&i.playing&&e.data===$.YT.PlayerState.ENDED&&i.player.playVideo():(i.playing=!0,d.fsTransition({property:"opacity"},function(){l(i)}).css({opacity:1}),f(i),i.$el.trigger(T.loaded)),i.$el.find(b.embed).addClass(w.ready)},onPlaybackQualityChange:function(e){},onPlaybackRateChange:function(e){},onError:function(e){c({data:i})},onApiChange:function(e){}}}),f(i)}else O.push({data:i,source:o})}function l(e){var i=e.$container.find(b.media);i.length>=1&&(i.not(":last").remove(),e.oldPlayer=null)}function c(e){e.data.$el.trigger(T.error)}function p(e){if(e.video&&!e.playing)if(e.isYouTube)e.playerReady?e.player.playVideo():e.autoPlay=!0;else{var i=e.$container.find("video");i.length&&i[0].play(),e.playing=!0}}function y(e){if(e.visible)if(e.responsive){var i=r(e);i!==e.currentSource?s(e,i,!1,!0):f(e)}else f(e)}function f(e){for(var i=e.$container.find(b.media),o=0,t=i.length;o<t;o++){var a=i.eq(o),n=e.isYouTube?"iframe":a.find("video").length?"video":"img",r=a.find(n);if(r.length&&("img"!==n||!R)){var s=e.$el.outerWidth(),d=e.$el.outerHeight(),u=g(e,r);e.width=u.width,e.height=u.height,e.left=0,e.top=0;var l=e.isYouTube?e.embedRatio:e.width/e.height;e.height=d,e.width=e.height*l,e.width<s&&(e.width=s,e.height=e.width/l),e.left=-(e.width-s)/2,e.top=-(e.height-d)/2,a.css({height:e.height,width:e.width,left:e.left,top:e.top})}}}function h(e){e.scrollTop=e.$el.offset().top}function v(e){!e.visible&&e.scrollTop<C+e.lazyEdge&&(e.visible=!0,a(e))}function g(i,o){if(i.isYouTube)return{height:500,width:500/i.embedRatio};if(o.is("img")){var t=o[0];if("undefined"!==e.type(t.naturalHeight))return{height:t.naturalHeight,width:t.naturalWidth};var a=new Image;return a.src=t.src,{height:a.height,width:a.width}}return{height:o[0].videoHeight,width:o[0].videoWidth}}var m=i.Plugin("background",{widget:!0,defaults:{alt:"",autoPlay:!0,customClass:"",embedRatio:1.777777,lazy:!1,lazyEdge:100,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready","lazy"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_construct:function(i){i.youTubeGuid=0,i.$container=e('<div class="'+w.container+'"></div>').appendTo(this),i.thisClasses=[w.base,i.customClass],i.visible=!0,i.lazy&&(i.visible=!1,i.thisClasses.push(w.lazy)),this.addClass(i.thisClasses.join(" ")),t(),i.lazy?(h(i),v(i)):a(i)},_destruct:function(e){e.$container.remove(),this.removeClass(e.thisClasses.join(" ")).off(T.namespace),t()},_resize:function(){P.iterate.call(j,y),P.iterate.call(I,h),P.iterate.call(I,v)},play:p,pause:function(e){if(e.video&&e.playing){if(e.isYouTube)e.playerReady?e.player.pauseVideo():e.autoPlay=!1;else{var i=e.$container.find("video");i.length&&i[0].pause()}e.playing=!1}},mute:function(e){if(e.video)if(e.isYouTube&&e.playerReady)e.player.mute();else{var i=e.$container.find("video");i.length&&(i[0].muted=!0)}e.mute=!0},unmute:function(e){if(e.video){if(e.isYouTube&&e.playerReady)e.player.unMute();else{var i=e.$container.find("video");i.length&&(i[0].muted=!1)}e.playing=!0}e.mute=!1},resize:f,load:n,unload:function(e){var i=e.$container.find(b.media);i.length>=1&&i.fsTransition({property:"opacity"},function(){i.remove(),delete e.source}).css({opacity:0})}}}),b=m.classes,w=b.raw,T=m.events,P=m.functions,$=i.window,Y=i.$window,C=0,j=[],I=[],R="backgroundSize"in i.document.documentElement.style,z=!1,O=[];i.Ready(function(){o(),Y.on("scroll",o)}),$.onYouTubeIframeAPIReady=function(){z=!0;for(var e in O)O.hasOwnProperty(e)&&u(O[e].data,O[e].source);O=[]}});