(function ($) {
	
	"use strict";

	$(document).ready(function() {

		// Comments
		$(".commentlist li").addClass("panel panel-default");
		$(".comment-reply-link").addClass("button");
	
		// Forms
		$('input[type=submit]').addClass('button');
		
		// You can put your own code in here

	});

}(jQuery));

!function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
function a(b,d){function e(a,b){return function(){return a.apply(b,arguments)}}var f;if(d=d||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=d.touchBoundary||10,this.layer=b,this.tapDelay=d.tapDelay||200,this.tapTimeout=d.tapTimeout||700,!a.notNeeded(b)){for(var g=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],h=this,i=0,j=g.length;j>i;i++)h[g[i]]=e(h[g[i]],h);c&&(b.addEventListener("mouseover",this.onMouse,!0),b.addEventListener("mousedown",this.onMouse,!0),b.addEventListener("mouseup",this.onMouse,!0)),b.addEventListener("click",this.onClick,!0),b.addEventListener("touchstart",this.onTouchStart,!1),b.addEventListener("touchmove",this.onTouchMove,!1),b.addEventListener("touchend",this.onTouchEnd,!1),b.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(b.removeEventListener=function(a,c,d){var e=Node.prototype.removeEventListener;"click"===a?e.call(b,a,c.hijacked||c,d):e.call(b,a,c,d)},b.addEventListener=function(a,c,d){var e=Node.prototype.addEventListener;"click"===a?e.call(b,a,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(b,a,c,d)}),"function"==typeof b.onclick&&(f=b.onclick,b.addEventListener("click",function(a){f(a)},!1),b.onclick=null)}}var b=navigator.userAgent.indexOf("Windows Phone")>=0,c=navigator.userAgent.indexOf("Android")>0&&!b,d=/iP(ad|hone|od)/.test(navigator.userAgent)&&!b,e=d&&/OS 4_\d(_\d)?/.test(navigator.userAgent),f=d&&/OS [6-7]_\d/.test(navigator.userAgent),g=navigator.userAgent.indexOf("BB10")>0;a.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(d&&"file"===a.type||a.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(a.className)},a.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!c;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},a.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},a.prototype.determineEventType=function(a){return c&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},a.prototype.focus=function(a){var b;d&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type&&"month"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},a.prototype.updateScrollParent=function(a){var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},a.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},a.prototype.onTouchStart=function(a){var b,c,f;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],d){if(f=window.getSelection(),f.rangeCount&&!f.isCollapsed)return!0;if(!e){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},a.prototype.touchHasMoved=function(a){var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},a.prototype.onTouchMove=function(a){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},a.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},a.prototype.onTouchEnd=function(a){var b,g,h,i,j,k=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(a.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,g=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,f&&(j=a.changedTouches[0],k=document.elementFromPoint(j.pageX-window.pageXOffset,j.pageY-window.pageYOffset)||k,k.fastClickScrollParent=this.targetElement.fastClickScrollParent),h=k.tagName.toLowerCase(),"label"===h){if(b=this.findControl(k)){if(this.focus(k),c)return!1;k=b}}else if(this.needsFocus(k))return a.timeStamp-g>100||d&&window.top!==window&&"input"===h?(this.targetElement=null,!1):(this.focus(k),this.sendClick(k,a),d&&"select"===h||(this.targetElement=null,a.preventDefault()),!1);return d&&!e&&(i=k.fastClickScrollParent,i&&i.fastClickLastScrollTop!==i.scrollTop)?!0:(this.needsClick(k)||(a.preventDefault(),this.sendClick(k,a)),!1)},a.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},a.prototype.onMouse=function(a){return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},a.prototype.onClick=function(a){var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},a.prototype.destroy=function(){var a=this.layer;c&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},a.notNeeded=function(a){var b,d,e,f;if("undefined"==typeof window.ontouchstart)return!0;if(d=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!c)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(d>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(g&&(e=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),e[1]>=10&&e[2]>=3&&(b=document.querySelector("meta[name=viewport]")))){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===a.style.msTouchAction||"manipulation"===a.style.touchAction?!0:(f=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],f>=27&&(b=document.querySelector("meta[name=viewport]"),b&&(-1!==b.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===a.style.touchAction||"manipulation"===a.style.touchAction?!0:!1)},a.attach=function(b,c){return new a(b,c)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?(module.exports=a.attach,module.exports.FastClick=a):window.FastClick=a}();

/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(count){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + count;
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );


/*! Lazy Load XT v1.0.6 2014-11-19
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */

(function ($, window, document, undefined) {
    // options
    var lazyLoadXT = 'lazyLoadXT',
        dataLazied = 'lazied',
        load_error = 'load error',
        classLazyHidden = 'lazy-hidden',
        docElement = document.documentElement || document.body,
    //  force load all images in Opera Mini and some mobile browsers without scroll event or getBoundingClientRect()
        forceLoad = (window.onscroll === undefined || !!window.operamini || !docElement.getBoundingClientRect),
        options = {
            autoInit: true, // auto initialize in $.ready
            selector: 'img[data-src]', // selector for lazyloading elements
            blankImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            throttle: 99, // interval (ms) for changes check
            forceLoad: forceLoad, // force auto load all images

            loadEvent: 'pageshow', // check AJAX-loaded content in jQueryMobile
            updateEvent: 'load orientationchange resize scroll touchmove focus', // page-modified events
            forceEvent: '', // force loading of all elements

            //onstart: null,
            oninit: {removeClass: 'lazy'}, // init handler
            onshow: {addClass: classLazyHidden}, // start loading handler
            onload: {removeClass: classLazyHidden, addClass: 'lazy-loaded'}, // load success handler
            onerror: {removeClass: classLazyHidden}, // error handler
            //oncomplete: null, // complete handler

            //scrollContainer: undefined,
            checkDuplicates: true
        },
        elementOptions = {
            srcAttr: 'data-src',
            edgeX: 0,
            edgeY: 0,
            visibleOnly: true
        },
        $window = $(window),
        $isFunction = $.isFunction,
        $extend = $.extend,
        $data = $.data || function (el, name) {
            return $(el).data(name);
        },
    // $.contains is not included into DOMtastic, so implement it there
        $contains = $.contains || function (parent, el) {
            while (el = el.parentNode) {
                if (el === parent) {
                    return true;
                }
            }
            return false;
        },
        elements = [],
        topLazy = 0,
    /*
     waitingMode=0 : no setTimeout
     waitingMode=1 : setTimeout, no deferred events
     waitingMode=2 : setTimeout, deferred events
     */
        waitingMode = 0;

    $[lazyLoadXT] = $extend(options, elementOptions, $[lazyLoadXT]);

    /**
     * Return options.prop if obj.prop is undefined, otherwise return obj.prop
     * @param {*} obj
     * @param {*} prop
     * @returns *
     */
    function getOrDef(obj, prop) {
        return obj[prop] === undefined ? options[prop] : obj[prop];
    }

    /**
     * @returns {number}
     */
    function scrollTop() {
        var scroll = window.pageYOffset;
        return (scroll === undefined) ? docElement.scrollTop : scroll;
    }

    /**
     * Add new elements to lazy-load list:
     * $(elements).lazyLoadXT() or $(window).lazyLoadXT()
     *
     * @param {object} [overrides] override global options
     */
    $.fn[lazyLoadXT] = function (overrides) {
        overrides = overrides || {};

        var blankImage = getOrDef(overrides, 'blankImage'),
            checkDuplicates = getOrDef(overrides, 'checkDuplicates'),
            scrollContainer = getOrDef(overrides, 'scrollContainer'),
            elementOptionsOverrides = {},
            prop;

        // empty overrides.scrollContainer is supported by both jQuery and Zepto
        $(scrollContainer).on('scroll', queueCheckLazyElements);

        for (prop in elementOptions) {
            elementOptionsOverrides[prop] = getOrDef(overrides, prop);
        }

        return this.each(function (index, el) {
            if (el === window) {
                $(options.selector).lazyLoadXT(overrides);
            } else {
                // prevent duplicates
                if (checkDuplicates && $data(el, dataLazied)) {
                    return;
                }

                var $el = $(el).data(dataLazied, 1);

                if (blankImage && el.tagName === 'IMG' && !el.src) {
                    el.src = blankImage;
                }

                // clone elementOptionsOverrides object
                $el[lazyLoadXT] = $extend({}, elementOptionsOverrides);

                triggerEvent('init', $el);

                elements.push($el);
            }
        });
    };


    /**
     * Process function/object event handler
     * @param {string} event suffix
     * @param {jQuery} $el
     */
    function triggerEvent(event, $el) {
        var handler = options['on' + event];
        if (handler) {
            if ($isFunction(handler)) {
                handler.call($el[0]);
            } else {
                if (handler.addClass) {
                    $el.addClass(handler.addClass);
                }
                if (handler.removeClass) {
                    $el.removeClass(handler.removeClass);
                }
            }
        }

        $el.trigger('lazy' + event, [$el]);

        // queue next check as images may be resized after loading of actual file
        queueCheckLazyElements();
    }


    /**
     * Trigger onload/onerror handler
     * @param {Event} e
     */
    function triggerLoadOrError(e) {
        triggerEvent(e.type, $(this).off(load_error, triggerLoadOrError));
    }


    /**
     * Load visible elements
     * @param {bool} [force] loading of all elements
     */
    function checkLazyElements(force) {
        if (!elements.length) {
            return;
        }

        force = force || options.forceLoad;

        topLazy = Infinity;

        var viewportTop = scrollTop(),
            viewportHeight = window.innerHeight || docElement.clientHeight,
            viewportWidth = window.innerWidth || docElement.clientWidth,
            i,
            length;

        for (i = 0, length = elements.length; i < length; i++) {
            var $el = elements[i],
                el = $el[0],
                objData = $el[lazyLoadXT],
                removeNode = false,
                visible = force,
                topEdge;

            // remove items that are not in DOM
            if (!$contains(docElement, el)) {
                removeNode = true;
            } else if (force || !objData.visibleOnly || el.offsetWidth || el.offsetHeight) {

                if (!visible) {
                    var elPos = el.getBoundingClientRect(),
                        edgeX = objData.edgeX,
                        edgeY = objData.edgeY;

                    topEdge = (elPos.top + viewportTop - edgeY) - viewportHeight;

                    visible = (topEdge <= viewportTop && elPos.bottom > -edgeY &&
                        elPos.left <= viewportWidth + edgeX && elPos.right > -edgeX);
                }

                if (visible) {
                    triggerEvent('show', $el);

                    var srcAttr = objData.srcAttr,
                        src = $isFunction(srcAttr) ? srcAttr($el) : el.getAttribute(srcAttr);
                    if (src) {
                        $el.on(load_error, triggerLoadOrError);
                        el.src = src;
                    }

                    removeNode = true;
                } else {
                    if (topEdge < topLazy) {
                        topLazy = topEdge;
                    }
                }
            }

            if (removeNode) {
                elements.splice(i--, 1);
                length--;
            }
        }

        if (!length) {
            triggerEvent('complete', $(docElement));
        }
    }


    /**
     * Run check of lazy elements after timeout
     */
    function timeoutLazyElements() {
        if (waitingMode > 1) {
            waitingMode = 1;
            checkLazyElements();
            setTimeout(timeoutLazyElements, options.throttle);
        } else {
            waitingMode = 0;
        }
    }


    /**
     * Queue check of lazy elements because of event e
     * @param {Event} [e]
     */
    function queueCheckLazyElements(e) {
        if (!elements.length) {
            return;
        }

        // fast check for scroll event without new visible elements
        if (e && e.type === 'scroll' && e.currentTarget === window) {
            if (topLazy >= scrollTop()) {
                return;
            }
        }

        if (!waitingMode) {
            setTimeout(timeoutLazyElements, 0);
        }
        waitingMode = 2;
    }


    /**
     * Initialize list of hidden elements
     */
    function initLazyElements() {
        $window.lazyLoadXT();
    }


    /**
     * Loading of all elements
     */
    function forceLoadAll() {
        checkLazyElements(true);
    }


    /**
     * Initialization
     */
    $(document).ready(function () {
        triggerEvent('start', $window);

        $window
            .on(options.loadEvent, initLazyElements)
            .on(options.updateEvent, queueCheckLazyElements)
            .on(options.forceEvent, forceLoadAll);

        $(document).on(options.updateEvent, queueCheckLazyElements);

        if (options.autoInit) {
            initLazyElements(); // standard initialization
        }
    });

})(window.jQuery || window.Zepto || window.$, window, document);

(function ($) {
    var options = $.lazyLoadXT;

    options.selector += ',video,iframe[data-src]';
    options.videoPoster = 'data-poster';

    $(document).on('lazyshow', 'video', function (e, $el) {
        var srcAttr = $el.lazyLoadXT.srcAttr,
            isFuncSrcAttr = $.isFunction(srcAttr);

        $el
            .attr('poster', $el.attr(options.videoPoster))
            .children('source,track')
            .each(function (index, el) {
                var $child = $(el);
                $child.attr('src', isFuncSrcAttr ? srcAttr($child) : $child.attr(srcAttr));
            });

        // reload video
        this.load();
    });

})(window.jQuery || window.Zepto || window.$);

/* JS */
if (parseInt(navigator.userAgent.toLowerCase().split('msie')[1] || 8, 10) < 8)
  $.lazyLoadXT.blankImage = '//upload.wikimedia.org/wikipedia/en/d/d0/Clear.gif';

/* Lazy Load XT 1.0.6 Widget Lazy| MIT License */
!function(a){var b=a.lazyLoadXT,c=b.widgetAttr||"data-lazy-widget",d=/<!--([\s\S]*)-->/;b.selector+=",["+c+"]",a(document).on("lazyshow","["+c+"]",function(){var b,e=a(this),f=e.attr(c);f&&(e=a("#"+f)),e.length&&(b=d.exec(e.html()),b&&e.replaceWith(a.trim(b[1])))})}(window.jQuery||window.Zepto||window.$);

/* https://github.com/anselmh/object-fit */
/*!  - v - 2015-06-08 */!function(ELEMENT){ELEMENT.matches=ELEMENT.matches||ELEMENT.mozMatchesSelector||ELEMENT.msMatchesSelector||ELEMENT.oMatchesSelector||ELEMENT.webkitMatchesSelector||function(selector){for(var element=this,elements=(element.document||element.ownerDocument).querySelectorAll(selector),index=0;elements[index]&&elements[index]!==element;)++index;return elements[index]?!0:!1},ELEMENT.closest=ELEMENT.closest||function(selector){for(var element=this;element&&!element.matches(selector);)element=element.parentElement;return element}}(Element.prototype),function(){if("function"!=typeof window.getMatchedCSSRules){var ELEMENT_RE=/[\w-]+/g,ID_RE=/#[\w-]+/g,CLASS_RE=/\.[\w-]+/g,ATTR_RE=/\[[^\]]+\]/g,PSEUDO_CLASSES_RE=/\:(?!not)[\w-]+(\(.*\))?/g,PSEUDO_ELEMENTS_RE=/\:\:?(after|before|first-letter|first-line|selection)/g,toArray=function(list){for(var items=[],i=0,listLength=list.length;listLength>i;i++)items.push(list[i]);return items},getCSSHost=function(href){var fakeLinkOfSheet=document.createElement("a");return fakeLinkOfSheet.href=href,fakeLinkOfSheet.host},getSheetRules=function(stylesheet){var sheetHost,sheetMedia=stylesheet.media&&stylesheet.media.mediaText;if("true"==objectFit.disableCrossDomain&&(sheetHost=getCSSHost(stylesheet.href),sheetHost!==window.location.host))return[];if(stylesheet.disabled)return[];if(window.matchMedia){if(sheetMedia&&sheetMedia.length&&!window.matchMedia(sheetMedia).matches)return[]}else if(sheetMedia&&sheetMedia.length)return[];return toArray(stylesheet.cssRules)},_find=function(string,re){string.match(re);return re?re.length:0},calculateScore=function(selector){for(var part,match,score=[0,0,0],parts=selector.split(" ");part=parts.shift(),"string"==typeof part;)match=_find(part,PSEUDO_ELEMENTS_RE),score[2]=match,match&&(part=part.replace(PSEUDO_ELEMENTS_RE,"")),match=_find(part,PSEUDO_CLASSES_RE),score[1]=match,match&&(part=part.replace(PSEUDO_CLASSES_RE,"")),match=_find(part,ATTR_RE),score[1]+=match,match&&(part=part.replace(ATTR_RE,"")),match=_find(part,ID_RE),score[0]=match,match&&(part=part.replace(ID_RE,"")),match=_find(part,CLASS_RE),score[1]+=match,match&&(part=part.replace(CLASS_RE,"")),score[2]+=_find(part,ELEMENT_RE);return parseInt(score.join(""),10)},getSpecificityScore=function(element,selectorText){for(var selector,score,selectors=selectorText.split(","),result=0;selector=selectors.shift();)element.closest(selector)&&(score=calculateScore(selector),result=score>result?score:result);return result},sortBySpecificity=function(element,rules){var compareSpecificity=function(a,b){return getSpecificityScore(element,b.selectorText)-getSpecificityScore(element,a.selectorText)};return rules.sort(compareSpecificity)};window.getMatchedCSSRules=function(element){var styleSheets,sheet,rules,rule,result=[];for(styleSheets=toArray(window.document.styleSheets);sheet=styleSheets.shift();)for(rules=getSheetRules(sheet);rule=rules.shift();)rule.styleSheet?rules=getSheetRules(rule.styleSheet).concat(rules):rule.media?rules=getSheetRules(rule).concat(rules):element.closest(rule.selectorText)&&result.push(rule);return sortBySpecificity(element,result)}}}(),function(window){for(var lastTime=0,vendors=["webkit","moz"],requestAnimationFrame=window.requestAnimationFrame,cancelAnimationFrame=window.cancelAnimationFrame,i=vendors.length;--i>=0&&!requestAnimationFrame;)requestAnimationFrame=window[vendors[i]+"RequestAnimationFrame"],cancelAnimationFrame=window[vendors[i]+"CancelAnimationFrame"];requestAnimationFrame&&cancelAnimationFrame||(requestAnimationFrame=function(callback){var now=+new Date,nextTime=Math.max(lastTime+16,now);return setTimeout(function(){callback(lastTime=nextTime)},nextTime-now)},cancelAnimationFrame=clearTimeout),window.requestAnimationFrame=requestAnimationFrame,window.cancelAnimationFrame=cancelAnimationFrame}(window),function(global){"use strict";var objectFit={};objectFit._debug=!1,objectFit.observer=null,objectFit.disableCrossDomain="false",objectFit.getComputedStyle=function(element,context){return context=context||window,context.getComputedStyle?context.getComputedStyle(element,null):element.currentStyle},objectFit.getDefaultComputedStyle=function(element){var newelement=element.cloneNode(!0),styles={},iframe=document.createElement("iframe");document.body.appendChild(iframe),iframe.contentWindow.document.open(),iframe.contentWindow.document.write("<body></body>"),iframe.contentWindow.document.body.appendChild(newelement),iframe.contentWindow.document.close();var value,property,defaultElement=iframe.contentWindow.document.querySelectorAll(element.nodeName.toLowerCase())[0],defaultComputedStyle=this.getComputedStyle(defaultElement,iframe.contentWindow);for(property in defaultComputedStyle)if(value=defaultComputedStyle.getPropertyValue===!0?defaultComputedStyle.getPropertyValue(property):defaultComputedStyle[property],null!==value)switch(property){default:styles[property]=value;break;case"width":case"height":case"minWidth":case"minHeight":case"maxWidth":case"maxHeight":}return document.body.removeChild(iframe),styles},objectFit.getMatchedStyle=function(element,property){var val=null,inlineval=null;element.style.getPropertyValue?inlineval=element.style.getPropertyValue(property):element.currentStyle&&(inlineval=element.currentStyle[property]);var r,important,rules=window.getMatchedCSSRules(element),i=rules.length;if(i)for(;i-->0&&(r=rules[i],important=r.style.getPropertyPriority(property),null!==val&&!important||(val=r.style.getPropertyValue(property),!important)););return val||null===inlineval||(val=inlineval),val},objectFit.orientation=function(replacedElement){if(replacedElement.parentNode&&"x-object-fit"===replacedElement.parentNode.nodeName.toLowerCase()){var width=replacedElement.naturalWidth||replacedElement.clientWidth,height=replacedElement.naturalHeight||replacedElement.clientHeight,parentWidth=replacedElement.parentNode.clientWidth,parentHeight=replacedElement.parentNode.clientHeight;!height||width/height>parentWidth/parentHeight?"wider"!==replacedElement.getAttribute("data-x-object-relation")&&(replacedElement.setAttribute("data-x-object-relation","wider"),replacedElement.className="x-object-fit-wider",this._debug&&window.console&&console.log("x-object-fit-wider")):"taller"!==replacedElement.getAttribute("data-x-object-relation")&&(replacedElement.setAttribute("data-x-object-relation","taller"),replacedElement.className="x-object-fit-taller",this._debug&&window.console&&console.log("x-object-fit-taller"))}},objectFit.process=function(args){if(args.selector&&args.replacedElements){switch(objectFit.disableCrossDomain=args.disableCrossDomain||"false",args.fittype=args.fittype||"none",args.fittype){default:return;case"none":case"fill":case"contain":case"cover":}var replacedElements=args.replacedElements;if(replacedElements.length)for(var i=0,replacedElementsLength=replacedElements.length;replacedElementsLength>i;i++)this.processElement(replacedElements[i],args)}},objectFit.processElement=function(replacedElement,args){var property,value,replacedElementStyles=objectFit.getComputedStyle(replacedElement),replacedElementDefaultStyles=objectFit.getDefaultComputedStyle(replacedElement),wrapperElement=document.createElement("x-object-fit");objectFit._debug&&window.console&&console.log("Applying to WRAPPER-------------------------------------------------------");for(property in replacedElementStyles)switch(property){default:value=objectFit.getMatchedStyle(replacedElement,property),null!==value&&""!==value&&(objectFit._debug&&window.console&&console.log(property+": "+value),wrapperElement.style[property]=value);break;case"length":case"parentRule":}objectFit._debug&&window.console&&console.log("Applying to REPLACED ELEMENT-------------------------------------------------------");for(property in replacedElementDefaultStyles)switch(property){default:value=replacedElementDefaultStyles[property],objectFit._debug&&window.console&&""!==value&&(console.log(property+": "+value),void 0===replacedElement.style[property]&&console.log("Indexed style properties (`"+property+"`) not supported in: "+window.navigator.userAgent)),replacedElement.style[property]?replacedElement.style[property]=value:replacedElement.style.property=value;break;case"length":case"parentRule":}wrapperElement.setAttribute("class","x-object-fit-"+args.fittype),replacedElement.parentNode.insertBefore(wrapperElement,replacedElement),wrapperElement.appendChild(replacedElement),objectFit.orientation(replacedElement);var resizeTimer=null,resizeAction=function(){null!==resizeTimer&&window.cancelAnimationFrame(resizeTimer),resizeTimer=window.requestAnimationFrame(function(){objectFit.orientation(replacedElement)})};switch(args.fittype){default:break;case"contain":case"cover":window.addEventListener?(replacedElement.addEventListener("load",resizeAction,!1),window.addEventListener("resize",resizeAction,!1),window.addEventListener("orientationchange",resizeAction,!1)):(replacedElement.attachEvent("onload",resizeAction),window.attachEvent("onresize",resizeAction))}},objectFit.listen=function(args){var domInsertedAction=function(element){for(var i=0,argsLength=args.length;argsLength>i;i++)(element.mozMatchesSelector&&element.mozMatchesSelector(args[i].selector)||element.msMatchesSelector&&element.msMatchesSelector(args[i].selector)||element.oMatchesSelector&&element.oMatchesSelector(args[i].selector)||element.webkitMatchesSelector&&element.webkitMatchesSelector(args[i].selector))&&(args[i].replacedElements=[element],objectFit.process(args[i]),objectFit._debug&&window.console&&console.log("Matching node inserted: "+element.nodeName))},domInsertedObserverFunction=function(element){objectFit.observer.disconnect(),domInsertedAction(element),objectFit.observer.observe(document.documentElement,{childList:!0,subtree:!0})},domInsertedEventFunction=function(event){window.removeEventListener("DOMNodeInserted",domInsertedEventFunction,!1),domInsertedAction(event.target),window.addEventListener("DOMNodeInserted",domInsertedEventFunction,!1)},domRemovedAction=function(element){"x-object-fit"===element.nodeName.toLowerCase()&&(element.parentNode.removeChild(element),objectFit._debug&&window.console&&console.log("Matching node removed: "+element.nodeName))},domRemovedObserverFunction=function(element){objectFit.observer.disconnect(),domRemovedAction(element),objectFit.observer.observe(document.documentElement,{childList:!0,subtree:!0})},domRemovedEventFunction=function(event){window.removeEventListener("DOMNodeRemoved",domRemovedEventFunction,!1),domRemovedAction(event.target.parentNode),window.addEventListener("DOMNodeRemoved",domRemovedEventFunction,!1)};window.MutationObserver?(objectFit._debug&&window.console&&console.log("DOM MutationObserver"),this.observer=new MutationObserver(function(mutations){mutations.forEach(function(mutation){if(mutation.addedNodes&&mutation.addedNodes.length)for(var nodes=mutation.addedNodes,i=0,nodesLength=nodes.length;nodesLength>i;i++)domInsertedObserverFunction(nodes[i]);mutation.removedNodes&&mutation.removedNodes.length&&domRemovedObserverFunction(mutation.target)})}),this.observer.observe(document.documentElement,{childList:!0,subtree:!0})):window.addEventListener&&(objectFit._debug&&window.console&&console.log("DOM Mutation Events"),window.addEventListener("DOMNodeInserted",domInsertedEventFunction,!1),window.addEventListener("DOMNodeRemoved",domRemovedEventFunction,!1))},objectFit.init=function(args){if(args){args instanceof Array||(args=[args]);for(var i=0,argsLength=args.length;argsLength>i;i++)args[i].replacedElements=document.querySelectorAll(args[i].selector),this.process(args[i]);this.listen(args)}},objectFit.polyfill=function(args){"objectFit"in document.documentElement.style==!1?(objectFit._debug&&window.console&&console.log("object-fit not natively supported"),"complete"===document.readyState?objectFit.init(args):window.addEventListener?window.addEventListener("load",function(){objectFit.init(args)},!1):window.attachEvent("onload",function(){objectFit.init(args)})):objectFit._debug&&window.console&&console.log("object-fit natively supported")},"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=objectFit:"function"==typeof define&&define.amd?define([],function(){return objectFit}):"object"==typeof global&&"object"==typeof global.document&&(global.objectFit=objectFit)}(window);


/*!
 * JavaScript Cookie v2.0.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = _OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				value = encodeURIComponent(String(value));
				value = value.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					cookie = converter && converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.get = api.set = api;
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init();
}));
