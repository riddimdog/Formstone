/*! formstone v1.4.9 [range.js] 2018-07-30 | GPL-3.0 License | formstone.it */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./touch"],a):a(jQuery,Formstone)}(function(a,e){"use strict";function t(){v=a(h.element)}function l(a){a.stepCount=(a.max-a.min)/a.step,a.offset=a.$track.offset(),a.vertical?(a.trackHeight=a.$track.outerHeight(),a.handleHeight=a.$handle.outerHeight(),a.increment=a.trackHeight/a.stepCount):(a.trackWidth=a.$track.outerWidth(),a.handleWidth=a.$handle.outerWidth(),a.increment=a.trackWidth/a.stepCount),c(a,(a.$el.val()-a.min)/(a.max-a.min),!0)}function i(a){b.killEvent(a);var e=a.data;e.disabled||(l(e),n(a),e.$container.addClass(u.focus))}function n(a){b.killEvent();var e=a.data;e.disabled||c(e,e.vertical?1-(a.pageY-e.offset.top)/e.trackHeight:(a.pageX-e.offset.left)/e.trackWidth)}function s(a){b.killEvent(a);var e=a.data;e.disabled||e.$container.removeClass(u.focus)}function r(a){a.data.$container.addClass(u.focus)}function o(a){a.data.$container.removeClass(u.focus)}function c(a,e,t){a.increment>1&&(e=a.vertical?Math.round(e*a.stepCount)*a.increment/a.trackHeight:Math.round(e*a.stepCount)*a.increment/a.trackWidth),e<0&&(e=0),e>1&&(e=1);var l=(a.min-a.max)*e;l=-parseFloat(l.toFixed(a.digits)),a.$fill.css(a.vertical?"height":"width",100*e+"%"),a.$handle.css(a.vertical?"bottom":"left",100*e+"%"),(l+=a.min)!==a.value&&!1!==l&&!0!==t&&(a.$el.val(l).trigger(p.raw.change,[!0]),a.value=l)}function d(a,e){var t=a.data;e||t.disabled||c(t,(t.$el.val()-t.min)/(t.max-t.min))}function m(a){var e=a.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}var f=e.Plugin("range",{widget:!0,defaults:{customClass:"",fill:!1,formatter:!1,labels:{max:!1,min:!1},theme:"fs-light",vertical:!1},classes:["track","handle","fill","marker","labels","label","label_min","label_max","vertical","focus","disabled"],methods:{_construct:function(a){a.formatter||(a.formatter=m),a.min=parseFloat(this.attr("min"))||0,a.max=parseFloat(this.attr("max"))||100,a.step=parseFloat(this.attr("step"))||1,a.digits=a.step.toString().length-a.step.toString().indexOf("."),a.value=parseFloat(this.val())||a.min+(a.max-a.min)/2;var e="";a.vertical="vertical"===this.attr("orient")||a.vertical,a.disabled=this.is(":disabled")||this.is("[readonly]"),e+='<div class="'+u.track+'" aria-hidden="true">',a.fill&&(e+='<span class="'+u.fill+'"></span>'),e+='<div class="'+u.handle+'" role="slider">',e+='<span class="'+u.marker+'"></span>',e+="</div>",e+="</div>";var c=[u.base,a.theme,a.customClass,a.vertical?u.vertical:"",a.labels?u.labels:"",a.disabled?u.disabled:""];if(this.addClass(u.element).wrap('<div class="'+c.join(" ")+'"></div>').after(e),a.$container=this.parents(h.base),a.$track=a.$container.find(h.track),a.$fill=a.$container.find(h.fill),a.$handle=a.$container.find(h.handle),a.$output=a.$container.find(h.output),a.labels){var f='<span class="'+[u.label,u.label_max].join(" ")+'">'+a.formatter.call(this,a.labels.max?a.labels.max:a.max)+"</span>",b='<span class="'+[u.label,u.label_min].join(" ")+'">'+a.formatter.call(this,a.labels.max?a.labels.min:a.min)+"</span>";a.$container.prepend(a.vertical?f:b).append(a.vertical?b:f)}a.$labels=a.$container.find(h.label),this.on(p.focus,a,r).on(p.blur,a,o).on(p.change,a,d),a.$container.fsTouch({pan:!0,axis:a.vertical?"y":"x"}).on(p.panStart,a,i).on(p.pan,a,n).on(p.panEnd,a,s),t(),l.call(this,a)},_destruct:function(a){a.$container.off(p.namespace).fsTouch("destroy"),a.$track.remove(),a.$labels.remove(),this.unwrap().removeClass(u.element).off(p.namespace),t()},_resize:function(a){b.iterate.call(v,l)},enable:function(a){a.disabled&&(this.prop("disabled",!1),a.$container.removeClass(u.disabled),a.disabled=!1)},disable:function(a){a.disabled||(this.prop("disabled",!0),a.$container.addClass(u.disabled),a.disabled=!0)},resize:l,update:function(a){a.min=parseFloat(a.$el.attr("min"))||0,a.max=parseFloat(a.$el.attr("max"))||100,a.step=parseFloat(a.$el.attr("step"))||1,a.digits=a.step.toString().length-a.step.toString().indexOf("."),a.value=parseFloat(this.val())||a.min+(a.max-a.min)/2,a.labels&&(a.$labels.filter(h.label_max).html(a.formatter.call(this,a.labels.max?a.labels.max:a.max)),a.$labels.filter(h.label_min).html(a.formatter.call(this,a.labels.max?a.labels.min:a.min))),l.call(this,a)}}}),h=f.classes,u=h.raw,p=f.events,b=f.functions,v=[]});