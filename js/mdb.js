/* Material Design for Bootstrap 
www.mdbootstrap.com */


/*
1. Waves
2. Buttons
3. Velocity
4. Global
5. Dropdown
6. Jquery easing
7. Carousel
8. Collapsible
9. Tooltip (initialization)

*/




/* TOOLTIP */

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({animation: true, delay: {show: 300, hide: 300}});   
});

/* COLLAPSIBLE */

(function ($) {
  $.fn.collapsible = function(options) {
    var defaults = {
        accordion: undefined
    };

    options = $.extend(defaults, options);


    return this.each(function() {

      var $this = $(this);

      var $panel_headers = $(this).find('> li > .collapsible-header');

      var collapsible_type = $this.data("collapsible");

      // Turn off any existing event handlers
       $this.off('click.collapse', '.collapsible-header');
       $panel_headers.off('click.collapse');


       /****************
       Helper Functions
       ****************/

      // Accordion Open
      function accordionOpen(object) {
        $panel_headers = $this.find('> li > .collapsible-header');
        if (object.hasClass('active')) {
            object.parent().addClass('active');
        }
        else {
            object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
        else{
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }

        $panel_headers.not(object).removeClass('active').parent().removeClass('active');
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).slideUp(
          {
            duration: 350,
            easing: "easeOutQuart",
            queue: false,
            complete:
              function() {
                $(this).css('height', '');
              }
          });
      }

      // Expandable Open
      function expandableOpen(object) {
        if (object.hasClass('active')) {
            object.parent().addClass('active');
        }
        else {
            object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
        else{
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
      }

      /**
       * Check if object is children of panel header
       * @param  {Object}  object Jquery object
       * @return {Boolean} true if it is children
       */
      function isChildrenOfPanelHeader(object) {

        var panelHeader = getPanelHeader(object);

        return panelHeader.length > 0;
      }

      /**
       * Get panel header from a children element
       * @param  {Object} object Jquery object
       * @return {Object} panel header object
       */
      function getPanelHeader(object) {

        return object.closest('li > .collapsible-header');
      }

      /*****  End Helper Functions  *****/



      if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
        // Add click handler to only direct collapsible header children
        $panel_headers = $this.find('> li > .collapsible-header');
        $panel_headers.on('click.collapse', function (e) {
          var element = $(e.target);

          if (isChildrenOfPanelHeader(element)) {
            element = getPanelHeader(element);
          }

          element.toggleClass('active');
          accordionOpen(element);
        });
        // Open first active
        accordionOpen($panel_headers.filter('.active').first());
      }
      else { // Handle Expandables
        $panel_headers.each(function () {
          // Add click handler to only direct collapsible header children
          $(this).on('click.collapse', function (e) {
            var element = $(e.target);
            if (isChildrenOfPanelHeader(element)) {
              element = getPanelHeader(element);
            }
            element.toggleClass('active');
            expandableOpen(element);
          });
          // Open any bodies that have the active class
          if ($(this).hasClass('active')) {
            expandableOpen($(this));
          }

        });
      }

    });
  };

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
}( jQuery ));



/* CAROUSEL */

var $myCarousel = $('#carousel-example-generic');

// Initialize carousel
$myCarousel.carousel();

function doAnimations(elems) {
  var animEndEv = 'webkitAnimationEnd animationend';
  
  elems.each(function () {
    var $this = $(this),
        $animationType = $this.data('animation');

    // Add animate.css classes to
    // the elements to be animated 
    // Remove animate.css classes
    // once the animation event has ended
    $this.addClass($animationType).one(animEndEv, function () {
      $this.removeClass($animationType);
    });
  });
}

// Select the elements to be animated
// in the first slide on page load
var $firstAnimatingElems = $myCarousel.find('.item:first')
                           .find('[data-animation ^= "animated"]');

// Apply the animation using our function
doAnimations($firstAnimatingElems);

// Pause the carousel 
$myCarousel.carousel('pause');

// Attach our doAnimations() function to the
// carousel's slide.bs.carousel event 
$myCarousel.on('slide.bs.carousel', function (e) { 
  // Select the elements to be animated inside the active slide 
  var $animatingElems = $(e.relatedTarget)
                        .find("[data-animation ^= 'animated']");
  doAnimations($animatingElems);
});



/* JQUERY EASING 1.3 */

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */



/* DROPDOWN */

(function ($) {

  // Add posibility to scroll to selected option
  // usefull for select for example
  $.fn.scrollTo = function(elem) {
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
    return this;
  };

  $.fn.dropdown = function (option) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Constrains width of dropdown to the activator
      hover: false,
      gutter: 0, // Spacing from edge
      belowOrigin: false
    };

    this.each(function(){
    var origin = $(this);
    var options = $.extend({}, defaults, option);

    // Dropdown menu
    var activates = $("#"+ origin.attr('data-activates'));

    function updateOptions() {
      if (origin.data('induration') !== undefined)
        options.inDuration = origin.data('inDuration');
      if (origin.data('outduration') !== undefined)
        options.outDuration = origin.data('outDuration');
      if (origin.data('constrainwidth') !== undefined)
        options.constrain_width = origin.data('constrainwidth');
      if (origin.data('hover') !== undefined)
        options.hover = origin.data('hover');
      if (origin.data('gutter') !== undefined)
        options.gutter = origin.data('gutter');
      if (origin.data('beloworigin') !== undefined)
        options.belowOrigin = origin.data('beloworigin');
    }

    updateOptions();

    // Attach dropdown to its activator
    origin.after(activates);

    /*
      Helper function to position and resize dropdown.
      Used in hover and click handler.
    */
    function placeDropdown() {
      // Check html data attributes
      updateOptions();

      // Set Dropdown state
      activates.addClass('active');

      // Constrain width
      if (options.constrain_width === true) {
        activates.css('width', origin.outerWidth());
      }
      var offset = 0;
      if (options.belowOrigin === true) {
        offset = origin.height();
      }

      // Handle edge alignment
      var offsetLeft = origin.offset().left;
      var width_difference = 0;
      var gutter_spacing = options.gutter;


      if (offsetLeft + activates.innerWidth() > $(window).width()) {
        width_difference = origin.innerWidth() - activates.innerWidth();
        gutter_spacing = gutter_spacing * -1;
      }

      // Position dropdown
      activates.css({
        position: 'absolute',
        top: origin.position().top + offset,
        left: origin.position().left + width_difference + gutter_spacing
      });



      // Show dropdown
      activates.stop(true, true).css('opacity', 0)
        .slideDown({
        queue: false,
        duration: options.inDuration,
        easing: 'easeOutCubic',
        complete: function() {
          $(this).css('height', '');
        }
      })
        .animate( {opacity: 1}, {queue: false, duration: options.inDuration, easing: 'easeOutSine'});
    }

    function hideDropdown() {
      activates.fadeOut(options.outDuration);
      activates.removeClass('active');
    }

    // Hover
    if (options.hover) {
      var open = false;
      origin.unbind('click.' + origin.attr('id'));
      // Hover handler to show dropdown
      origin.on('mouseenter', function(e){ // Mouse over
        if (open === false) {
          placeDropdown();
          open = true;
        }
      });
      origin.on('mouseleave', function(e){
        // If hover on origin then to something other than dropdown content, then close
        var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
        if(!$(toEl).closest('.dropdown-content').is(activates)) {
          activates.stop(true, true);
          hideDropdown();
          open = false;
        }
      });

      activates.on('mouseleave', function(e){ // Mouse out
        var toEl = e.toElement || e.relatedTarget;
        if(!$(toEl).closest('.dropdown-button').is(origin)) {
          activates.stop(true, true);
          hideDropdown();
          open = false;
        }
      });

    // Click
    } else {

      // Click handler to show dropdown
      origin.unbind('click.' + origin.attr('id'));
      origin.bind('click.'+origin.attr('id'), function(e){

        if ( origin[0] == e.currentTarget && ($(e.target).closest('.dropdown-content').length === 0) ) {
          e.preventDefault(); // Prevents button click from moving window
          placeDropdown();

        }
        // If origin is clicked and menu is open, close menu
        else {
          if (origin.hasClass('active')) {
            hideDropdown();
            $(document).unbind('click.' + activates.attr('id'));
          }
        }
        // If menu open, add click close handler to document
        if (activates.hasClass('active')) {
          $(document).bind('click.'+ activates.attr('id'), function (e) {
            if (!activates.is(e.target) && !origin.is(e.target) && (!origin.find(e.target).length > 0) ) {
              hideDropdown();
              $(document).unbind('click.' + activates.attr('id'));
            }
          });
        }
      });

    } // End else

    // Listen to open and close event - useful for select component
    origin.on('open', placeDropdown);
    origin.on('close', hideDropdown);


   });
  }; // End dropdown plugin

  $(document).ready(function(){
    $('.dropdown-button').dropdown();
  });
}( jQuery ));



/* GLOBAL */

Materialize = {};

// Unique ID
Materialize.guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

Materialize.elementOrParentIsFixed = function(element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function(){
        if ($(this).css("position") === "fixed") {
            isFixed = true;
            return false;
        }
    });
    return isFixed;
};

// Velocity has conflicts when loaded with jQuery, this will check for it
var Vel;
if ($) {
  Vel = $.Velocity;
}
else {
  Vel = Velocity;
}


/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function (e) {
    function t(e) {
        var t = e.length,
            r = $.type(e);
        return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    if (!e.jQuery) {
        var $ = function (e, t) {
            return new $.fn.init(e, t)
        };
        $.isWindow = function (e) {
            return null != e && e == e.window
        }, $.type = function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
        }, $.isArray = Array.isArray || function (e) {
            return "array" === $.type(e)
        }, $.isPlainObject = function (e) {
            var t;
            if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            for (t in e);
            return void 0 === t || n.call(e, t)
        }, $.each = function (e, r, a) {
            var n, o = 0,
                i = e.length,
                s = t(e);
            if (a) {
                if (s)
                    for (; i > o && (n = r.apply(e[o], a), n !== !1); o++);
                else
                    for (o in e)
                        if (n = r.apply(e[o], a), n === !1) break
            } else if (s)
                for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++);
            else
                for (o in e)
                    if (n = r.call(e[o], o, e[o]), n === !1) break; return e
        }, $.data = function (e, t, a) {
            if (void 0 === a) {
                var n = e[$.expando],
                    o = n && r[n];
                if (void 0 === t) return o;
                if (o && t in o) return o[t]
            } else if (void 0 !== t) {
                var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                return r[n] = r[n] || {}, r[n][t] = a, a
            }
        }, $.removeData = function (e, t) {
            var a = e[$.expando],
                n = a && r[a];
            n && $.each(t, function (e, t) {
                delete n[t]
            })
        }, $.extend = function () {
            var e, t, r, a, n, o, i = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), s === l && (i = this, s--); l > s; s++)
                if (null != (n = arguments[s]))
                    for (a in n) e = i[a], r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
            return i
        }, $.queue = function (e, r, a) {
            function n(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? ! function (e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a;) e[n++] = t[a++];
                    if (r !== r)
                        for (; void 0 !== t[a];) e[n++] = t[a++];
                    return e.length = n, e
                }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
            }
            if (e) {
                r = (r || "fx") + "queue";
                var o = $.data(e, r);
                return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || []
            }
        }, $.dequeue = function (e, t) {
            $.each(e.nodeType ? [e] : e, function (e, r) {
                t = t || "fx";
                var a = $.queue(r, t),
                    n = a.shift();
                "inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), n.call(r, function () {
                    $.dequeue(r, t)
                }))
            })
        }, $.fn = $.prototype = {
            init: function (e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function () {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function () {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                    e = e.apply(t),
                    r = this.offset(),
                    a = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : $(e).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: r.top - a.top,
                    left: r.left - a.left
                }
            }
        };
        var r = {};
        $.expando = "velocity" + (new Date).getTime(), $.uuid = 0;
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
        $.fn.init.prototype = $.fn, e.Velocity = {
            Utilities: $
        }
    }
}(window),
function (e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function () {
    return function (e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
                var n = e[t];
                n && a.push(n)
            }
            return a
        }

        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
        }

        function i(e) {
            var t = $.data(e, "velocity");
            return null === t ? a : t
        }

        function s(e) {
            return function (t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function i(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e
            }

            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t)
            }

            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o) return r;
                    var i = l(r, e, a) - t;
                    r -= i / o
                }
                return r
            }

            function p() {
                for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a)
            }

            function f(t, r, n) {
                var o, i, s = 0;
                do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
                return i
            }

            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n]),
                    s = r + i * x,
                    l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x)
            }

            function g() {
                V = !0, (e != r || a != n) && p()
            }
            var m = 4,
                y = .001,
                h = 1e-7,
                v = 10,
                b = 11,
                x = 1 / (b - 1),
                S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var P = 0; 4 > P; ++P)
                if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b),
                V = !1,
                C = function (t) {
                    return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
                };
            C.getControlPoints = function () {
                return [{
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: n
                }]
            };
            var T = "generateBezier(" + [e, r, a, n] + ")";
            return C.toString = function () {
                return T
            }, C
        }

        function u(e, t) {
            var r = e;
            return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r
        }

        function c(e) {
            if (e) {
                var t = (new Date).getTime(),
                    r = v.State.calls.length;
                r > 1e4 && (v.State.calls = n(v.State.calls));
                for (var o = 0; r > o; o++)
                    if (v.State.calls[o]) {
                        var s = v.State.calls[o],
                            l = s[0],
                            u = s[2],
                            f = s[3],
                            d = !!f,
                            m = null;
                        f || (f = v.State.calls[o][3] = t - 16);
                        for (var y = Math.min((t - f) / u.duration, 1), h = 0, b = l.length; b > h; h++) {
                            var S = l[h],
                                w = S.element;
                            if (i(w)) {
                                var V = !1;
                                if (u.display !== a && null !== u.display && "none" !== u.display) {
                                    if ("flex" === u.display) {
                                        var C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        $.each(C, function (e, t) {
                                            x.setPropertyValue(w, "display", t)
                                        })
                                    }
                                    x.setPropertyValue(w, "display", u.display)
                                }
                                u.visibility !== a && "hidden" !== u.visibility && x.setPropertyValue(w, "visibility", u.visibility);
                                for (var T in S)
                                    if ("element" !== T) {
                                        var k = S[T],
                                            A, F = g.isString(k.easing) ? v.Easings[k.easing] : k.easing;
                                        if (1 === y) A = k.endValue;
                                        else {
                                            var E = k.endValue - k.startValue;
                                            if (A = k.startValue + E * F(y, u, E), !d && A === k.currentValue) continue
                                        }
                                        if (k.currentValue = A, "tween" === T) m = A;
                                        else {
                                            if (x.Hooks.registered[T]) {
                                                var j = x.Hooks.getRoot(T),
                                                    H = i(w).rootPropertyValueCache[j];
                                                H && (k.rootPropertyValue = H)
                                            }
                                            var N = x.setPropertyValue(w, T, k.currentValue + (0 === parseFloat(A) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                                            x.Hooks.registered[T] && (i(w).rootPropertyValueCache[j] = x.Normalizations.registered[j] ? x.Normalizations.registered[j]("extract", null, N[1]) : N[1]), "transform" === N[0] && (V = !0)
                                        }
                                    }
                                u.mobileHA && i(w).transformCache.translate3d === a && (i(w).transformCache.translate3d = "(0px, 0px, 0px)", V = !0), V && x.flushTransformCache(w)
                            }
                        }
                        u.display !== a && "none" !== u.display && (v.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (v.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], y, Math.max(0, f + u.duration - t), f, m), 1 === y && p(o)
                    }
            }
            v.State.isTicking && P(c)
        }

        function p(e, t) {
            if (!v.State.calls[e]) return !1;
            for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
                    var f = !1;
                    $.each(x.Lists.transforms3D, function (e, t) {
                        var r = /^scale/.test(t) ? 1 : 0,
                            n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, delete i(p).transformCache[t])
                    }), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), x.Values.removeClass(p, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && u === c - 1) try {
                    o.complete.call(n, n)
                } catch (d) {
                    setTimeout(function () {
                        throw d
                    }, 1)
                }
                s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && ($.each(i(p).tweensContainer, function (e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), v(p, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), o.queue !== !1 && $.dequeue(p, o.queue)
            }
            v.State.calls[e] = !1;
            for (var g = 0, m = v.State.calls.length; m > g; g++)
                if (v.State.calls[g] !== !1) {
                    l = !0;
                    break
                }
            l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
        }
        var f = function () {
                if (r.documentMode) return r.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = r.createElement("div");
                    if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                }
                return a
            }(),
            d = function () {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                    var r = (new Date).getTime(),
                        a;
                    return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function () {
                        t(r + a)
                    }, a)
                }
            }(),
            g = {
                isString: function (e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function (e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function (e) {
                    return e && e.nodeType
                },
                isNodeList: function (e) {
                    return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                },
                isWrapped: function (e) {
                    return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                },
                isSVG: function (e) {
                    return t.SVGElement && e instanceof t.SVGElement
                },
                isEmptyObject: function (e) {
                    for (var t in e) return !1;
                    return !0
                }
            },
            $, m = !1;
        if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var y = 400,
            h = "swing",
            v = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: r.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: $,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: y,
                    easing: h,
                    begin: a,
                    complete: a,
                    progress: a,
                    display: a,
                    visibility: a,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function (e) {
                    $.data(e, "velocity", {
                        isSVG: g.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
        t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
        var b = function () {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, r, a) {
                var n = {
                    x: t.x + a.dx * r,
                    v: t.v + a.dv * r,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: n.v,
                    dv: e(n)
                }
            }

            function r(r, a) {
                var n = {
                        dx: r.v,
                        dv: e(r)
                    },
                    o = t(r, .5 * a, n),
                    i = t(r, .5 * a, o),
                    s = t(r, a, i),
                    l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
                    u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r
            }
            return function a(e, t, n) {
                var o = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    i = [0],
                    s = 0,
                    l = 1e-4,
                    u = .016,
                    c, p, f;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, o.friction = t, c = null !== n, c ? (s = a(e, t), p = s / n * u) : p = u;;)
                    if (f = r(f || o, p), i.push(1 + f.x), s += 16, !(Math.abs(f.x) > l && Math.abs(f.v) > l)) break;
                return c ? function (e) {
                    return i[e * (i.length - 1) | 0]
                } : s
            }
        }();
        v.Easings = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function (e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, $.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
            v.Easings[t[0]] = l.apply(null, t[1])
        });
        var x = v.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function () {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var r, a, n;
                    if (f)
                        for (r in x.Hooks.templates) {
                            a = x.Hooks.templates[r], n = a[0].split(" ");
                            var o = a[1].match(x.RegEx.valueSplit);
                            "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), x.Hooks.templates[r] = [n.join(" "), o.join(" ")])
                        }
                    for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        for (var e in n) {
                            var i = r + n[e],
                                s = e;
                            x.Hooks.registered[i] = [r, s]
                        }
                    }
                },
                getRoot: function (e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function (e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                },
                extractValue: function (e, t) {
                    var r = x.Hooks.registered[e];
                    if (r) {
                        var a = r[0],
                            n = r[1];
                        return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n]
                    }
                    return t
                },
                injectValue: function (e, t, r) {
                    var a = x.Hooks.registered[e];
                    if (a) {
                        var n = a[0],
                            o = a[1],
                            i, s;
                        return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), i[o] = t, s = i.join(" ")
                    }
                    return r
                }
            },
            Normalizations: {
                registered: {
                    clip: function (e, t, r) {
                        switch (e) {
                        case "name":
                            return "clip";
                        case "extract":
                            var a;
                            return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
                        case "inject":
                            return "rect(" + r + ")"
                        }
                    },
                    blur: function (e, t, r) {
                        switch (e) {
                        case "name":
                            return v.State.isFirefox ? "filter" : "-webkit-filter";
                        case "extract":
                            var a = parseFloat(r);
                            if (!a && 0 !== a) {
                                var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                a = n ? n[1] : 0
                            }
                            return a;
                        case "inject":
                            return parseFloat(r) ? "blur(" + r + ")" : "none"
                        }
                    },
                    opacity: function (e, t, r) {
                        if (8 >= f) switch (e) {
                        case "name":
                            return "filter";
                        case "extract":
                            var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                            return r = a ? a[1] / 100 : 1;
                        case "inject":
                            return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                        } else switch (e) {
                        case "name":
                            return "opacity";
                        case "extract":
                            return r;
                        case "inject":
                            return r
                        }
                    }
                },
                register: function () {
                    9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function () {
                        var t = x.Lists.transformsBase[e];
                        x.Normalizations.registered[t] = function (e, r, n) {
                            switch (e) {
                            case "name":
                                return "transform";
                            case "extract":
                                return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
                            case "inject":
                                var o = !1;
                                switch (t.substr(0, t.length - 1)) {
                                case "translate":
                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                    break;
                                case "scal":
                                case "scale":
                                    v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                                    break;
                                case "skew":
                                    o = !/(deg|\d)$/i.test(n);
                                    break;
                                case "rotate":
                                    o = !/(deg|\d)$/i.test(n)
                                }
                                return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t]
                            }
                        }
                    }();
                    for (var e = 0; e < x.Lists.colors.length; e++) ! function () {
                        var t = x.Lists.colors[e];
                        x.Normalizations.registered[t] = function (e, r, n) {
                            switch (e) {
                            case "name":
                                return t;
                            case "extract":
                                var o;
                                if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;
                                else {
                                    var i, s = {
                                        black: "rgb(0, 0, 0)",
                                        blue: "rgb(0, 0, 255)",
                                        gray: "rgb(128, 128, 128)",
                                        green: "rgb(0, 128, 0)",
                                        red: "rgb(255, 0, 0)",
                                        white: "rgb(255, 255, 255)"
                                    };
                                    /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                }
                                return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                            case "inject":
                                return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function (e) {
                    return e.replace(/-(\w)/g, function (e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function (e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                },
                prefixCheck: function (e) {
                    if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function (e) {
                                return e.toUpperCase()
                            }), g.isString(v.State.prefixElement.style[n])) return v.State.prefixMatches[e] = n, [n, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function (e) {
                    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                        a;
                    return e = e.replace(t, function (e, t, r, a) {
                        return t + t + r + r + a + a
                    }), a = r.exec(e), a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function (e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function (e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function (e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                },
                addClass: function (e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function (e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function (e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && x.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= f) l = $.css(e, r);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(), c
                            }
                            if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return n(), p
                            }
                        }
                        var d;
                        d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], ("" === l || null === l) && (l = e.style[r]), n()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px")
                    }
                    return l
                }
                var l;
                if (x.Hooks.registered[r]) {
                    var u = r,
                        c = x.Hooks.getRoot(u);
                    n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), l = x.Hooks.extractValue(u, n)
                } else if (x.Normalizations.registered[r]) {
                    var p, d;
                    p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), l = x.Normalizations.registered[r]("extract", e, d)
                }
                if (!/^[\d-]/.test(l))
                    if (i(e) && i(e).isSVG && x.Names.SVGAttribute(r))
                        if (/^(height|width)$/i.test(r)) try {
                            l = e.getBBox()[r]
                        } catch (g) {
                            l = 0
                        } else l = e.getAttribute(r);
                        else l = s(e, x.Names.prefixCheck(r)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), l
            },
            setPropertyValue: function (e, r, a, n, o) {
                var s = r;
                if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
                else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];
                else {
                    if (x.Hooks.registered[r]) {
                        var l = r,
                            u = x.Hooks.getRoot(r);
                        n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u
                    }
                    if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f) try {
                        e.style[s] = a
                    } catch (c) {
                        v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
                    } else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                }
                return [s, a]
            },
            flushTransformCache: function (e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t))
                }
                var r = "";
                if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
                    var a = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    $.each(i(e).transformCache, function (e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e])
                    })
                } else {
                    var n, o;
                    $.each(i(e).transformCache, function (t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(r += t + n + " "))
                    }), o && (r = "perspective" + o + " " + r)
                }
                x.setPropertyValue(e, "transform", r)
            }
        };
        x.Hooks.register(), x.Normalizations.register(), v.hook = function (e, t, r) {
            var n = a;
            return e = o(e), $.each(e, function (e, o) {
                if (i(o) === a && v.init(o), r === a) n === a && (n = v.CSS.getPropertyValue(o, t));
                else {
                    var s = v.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && v.CSS.flushTransformCache(o), n = s
                }
            }), n
        };
        var S = function () {
            function e() {
                return l ? T.promise || null : f
            }

            function n() {
                function e(e) {
                    function p(e, t) {
                        var r = a,
                            i = a,
                            s = a;
                        return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? s = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (i = t ? e[1] : u(e[1], o.duration), e[2] !== a && (s = e[2]))) : r = e, t || (i = i || o.easing), g.isFunction(r) && (r = r.call(n, w, P)), g.isFunction(s) && (s = s.call(n, w, P)), [r || 0, i, s]
                    }

                    function f(e, t) {
                        var r, a;
                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                            return r = e, ""
                        }), r || (r = x.Values.getUnitType(e)), [a, r]
                    }

                    function d() {
                        var e = {
                                myParent: n.parentNode || r.body,
                                position: x.getPropertyValue(n, "position"),
                                fontSize: x.getPropertyValue(n, "fontSize")
                            },
                            a = e.position === N.lastPosition && e.myParent === N.lastParent,
                            o = e.fontSize === N.lastFontSize;
                        N.lastParent = e.myParent, N.lastPosition = e.position, N.lastFontSize = e.fontSize;
                        var s = 100,
                            l = {};
                        if (o && a) l.emToPx = N.lastEmToPx, l.percentToPxWidth = N.lastPercentToPxWidth, l.percentToPxHeight = N.lastPercentToPxHeight;
                        else {
                            var u = i(n).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            v.init(u), e.myParent.appendChild(u), $.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                v.CSS.setPropertyValue(u, t, "hidden")
                            }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                v.CSS.setPropertyValue(u, t, s + "%")
                            }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = N.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                        }
                        return null === N.remToPx && (N.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), null === N.vwToPx && (N.vwToPx = parseFloat(t.innerWidth) / 100, N.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = N.remToPx, l.vwToPx = N.vwToPx, l.vhToPx = N.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), n), l
                    }
                    if (o.begin && 0 === w) try {
                        o.begin.call(m, m)
                    } catch (y) {
                        setTimeout(function () {
                            throw y
                        }, 1)
                    }
                    if ("scroll" === k) {
                        var S = /^x$/i.test(o.axis) ? "Left" : "Top",
                            V = parseFloat(o.offset) || 0,
                            C, A, F;
                        o.container ? g.isWrapped(o.container) || g.isNode(o.container) ? (o.container = o.container[0] || o.container, C = o.container["scroll" + S], F = C + $(n).position()[S.toLowerCase()] + V) : o.container = null : (C = v.State.scrollAnchor[v.State["scrollProperty" + S]], A = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], F = $(n).offset()[S.toLowerCase()] + V), s = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: C,
                                currentValue: C,
                                endValue: F,
                                unitType: "",
                                easing: o.easing,
                                scrollData: {
                                    container: o.container,
                                    direction: S,
                                    alternateValue: A
                                }
                            },
                            element: n
                        }, v.debug && console.log("tweensContainer (scroll): ", s.scroll, n)
                    } else if ("reverse" === k) {
                        if (!i(n).tweensContainer) return void $.dequeue(n, o.queue);
                        "none" === i(n).opts.display && (i(n).opts.display = "auto"), "hidden" === i(n).opts.visibility && (i(n).opts.visibility = "visible"), i(n).opts.loop = !1, i(n).opts.begin = null, i(n).opts.complete = null, b.easing || delete o.easing, b.duration || delete o.duration, o = $.extend({}, i(n).opts, o);
                        var E = $.extend(!0, {}, i(n).tweensContainer);
                        for (var j in E)
                            if ("element" !== j) {
                                var H = E[j].startValue;
                                E[j].startValue = E[j].currentValue = E[j].endValue, E[j].endValue = H, g.isEmptyObject(b) || (E[j].easing = o.easing), v.debug && console.log("reverse tweensContainer (" + j + "): " + JSON.stringify(E[j]), n)
                            }
                        s = E
                    } else if ("start" === k) {
                        var E;
                        i(n).tweensContainer && i(n).isAnimating === !0 && (E = i(n).tweensContainer), $.each(h, function (e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = p(t, !0),
                                    n = r[0],
                                    o = r[1],
                                    i = r[2];
                                if (x.RegEx.isHex.test(n)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var f = [l[c]];
                                        o && f.push(o), u !== a && f.push(u[c]), h[e + s[c]] = f
                                    }
                                    delete h[e]
                                }
                            }
                        });
                        for (var R in h) {
                            var O = p(h[R]),
                                z = O[0],
                                q = O[1],
                                M = O[2];
                            R = x.Names.camelCase(R);
                            var I = x.Hooks.getRoot(R),
                                B = !1;
                            if (i(n).isSVG || "tween" === I || x.Names.prefixCheck(I)[1] !== !1 || x.Normalizations.registered[I] !== a) {
                                (o.display !== a && null !== o.display && "none" !== o.display || o.visibility !== a && "hidden" !== o.visibility) && /opacity|filter/.test(R) && !M && 0 !== z && (M = 0), o._cacheValues && E && E[R] ? (M === a && (M = E[R].endValue + E[R].unitType), B = i(n).rootPropertyValueCache[I]) : x.Hooks.registered[R] ? M === a ? (B = x.getPropertyValue(n, I), M = x.getPropertyValue(n, R, B)) : B = x.Hooks.templates[I][1] : M === a && (M = x.getPropertyValue(n, R));
                                var W, G, D, X = !1;
                                if (W = f(R, M), M = W[0], D = W[1], W = f(R, z), z = W[0].replace(/^([+-\/*])=/, function (e, t) {
                                        return X = t, ""
                                    }), G = W[1], M = parseFloat(M) || 0, z = parseFloat(z) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(R) ? (z /= 100, G = "em") : /^scale/.test(R) ? (z /= 100, G = "") : /(Red|Green|Blue)$/i.test(R) && (z = z / 100 * 255, G = "")), /[\/*]/.test(X)) G = D;
                                else if (D !== G && 0 !== M)
                                    if (0 === z) G = D;
                                    else {
                                        l = l || d();
                                        var Y = /margin|padding|left|right|width|text|word|letter/i.test(R) || /X$/.test(R) || "x" === R ? "x" : "y";
                                        switch (D) {
                                        case "%":
                                            M *= "x" === Y ? l.percentToPxWidth : l.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            M *= l[D + "ToPx"]
                                        }
                                        switch (G) {
                                        case "%":
                                            M *= 1 / ("x" === Y ? l.percentToPxWidth : l.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            M *= 1 / l[G + "ToPx"]
                                        }
                                    }
                                switch (X) {
                                case "+":
                                    z = M + z;
                                    break;
                                case "-":
                                    z = M - z;
                                    break;
                                case "*":
                                    z = M * z;
                                    break;
                                case "/":
                                    z = M / z
                                }
                                s[R] = {
                                    rootPropertyValue: B,
                                    startValue: M,
                                    currentValue: M,
                                    endValue: z,
                                    unitType: G,
                                    easing: q
                                }, v.debug && console.log("tweensContainer (" + R + "): " + JSON.stringify(s[R]), n)
                            } else v.debug && console.log("Skipping [" + I + "] due to a lack of browser support.")
                        }
                        s.element = n
                    }
                    s.element && (x.Values.addClass(n, "velocity-animating"), L.push(s), "" === o.queue && (i(n).tweensContainer = s, i(n).opts = o), i(n).isAnimating = !0, w === P - 1 ? (v.State.calls.push([L, m, o, null, T.resolver]), v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : w++)
                }
                var n = this,
                    o = $.extend({}, v.defaults, b),
                    s = {},
                    l;
                switch (i(n) === a && v.init(n), parseFloat(o.delay) && o.queue !== !1 && $.queue(n, o.queue, function (e) {
                    v.velocityQueueEntryFlag = !0, i(n).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(o.delay)),
                        next: e
                    }
                }), o.duration.toString().toLowerCase()) {
                case "fast":
                    o.duration = 200;
                    break;
                case "normal":
                    o.duration = y;
                    break;
                case "slow":
                    o.duration = 600;
                    break;
                default:
                    o.duration = parseFloat(o.duration) || 1
                }
                v.mock !== !1 && (v.mock === !0 ? o.duration = o.delay = 1 : (o.duration *= parseFloat(v.mock) || 1, o.delay *= parseFloat(v.mock) || 1)), o.easing = u(o.easing, o.duration), o.begin && !g.isFunction(o.begin) && (o.begin = null), o.progress && !g.isFunction(o.progress) && (o.progress = null), o.complete && !g.isFunction(o.complete) && (o.complete = null), o.display !== a && null !== o.display && (o.display = o.display.toString().toLowerCase(), "auto" === o.display && (o.display = v.CSS.Values.getDisplayType(n))), o.visibility !== a && null !== o.visibility && (o.visibility = o.visibility.toString().toLowerCase()), o.mobileHA = o.mobileHA && v.State.isMobile && !v.State.isGingerbread, o.queue === !1 ? o.delay ? setTimeout(e, o.delay) : e() : $.queue(n, o.queue, function (t, r) {
                    return r === !0 ? (T.promise && T.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void e(t))
                }), "" !== o.queue && "fx" !== o.queue || "inprogress" === $.queue(n)[0] || $.dequeue(n)
            }
            var s = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)),
                l, f, d, m, h, b;
            if (g.isWrapped(this) ? (l = !1, d = 0, m = this, f = this) : (l = !0, d = 1, m = s ? arguments[0].elements || arguments[0].e : arguments[0]), m = o(m)) {
                s ? (h = arguments[0].properties || arguments[0].p, b = arguments[0].options || arguments[0].o) : (h = arguments[d], b = arguments[d + 1]);
                var P = m.length,
                    w = 0;
                if (!/^(stop|finish)$/i.test(h) && !$.isPlainObject(b)) {
                    var V = d + 1;
                    b = {};
                    for (var C = V; C < arguments.length; C++) g.isArray(arguments[C]) || !/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]) ? g.isString(arguments[C]) || g.isArray(arguments[C]) ? b.easing = arguments[C] : g.isFunction(arguments[C]) && (b.complete = arguments[C]) : b.duration = arguments[C]
                }
                var T = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                l && v.Promise && (T.promise = new v.Promise(function (e, t) {
                    T.resolver = e, T.rejecter = t
                }));
                var k;
                switch (h) {
                case "scroll":
                    k = "scroll";
                    break;
                case "reverse":
                    k = "reverse";
                    break;
                case "finish":
                case "stop":
                    $.each(m, function (e, t) {
                        i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer)
                    });
                    var A = [];
                    return $.each(v.State.calls, function (e, t) {
                        t && $.each(t[1], function (r, n) {
                            var o = b === a ? "" : b;
                            return o === !0 || t[2].queue === o || b === a && t[2].queue === !1 ? void $.each(m, function (r, a) {
                                a === n && ((b === !0 || g.isString(b)) && ($.each($.queue(a, g.isString(b) ? b : ""), function (e, t) {
                                    g.isFunction(t) && t(null, !0)
                                }), $.queue(a, g.isString(b) ? b : "", [])), "stop" === h ? (i(a) && i(a).tweensContainer && o !== !1 && $.each(i(a).tweensContainer, function (e, t) {
                                    t.endValue = t.currentValue
                                }), A.push(e)) : "finish" === h && (t[2].duration = 1))
                            }) : !0
                        })
                    }), "stop" === h && ($.each(A, function (e, t) {
                        p(t, !0)
                    }), T.promise && T.resolver(m)), e();
                default:
                    if (!$.isPlainObject(h) || g.isEmptyObject(h)) {
                        if (g.isString(h) && v.Redirects[h]) {
                            var F = $.extend({}, b),
                                E = F.duration,
                                j = F.delay || 0;
                            return F.backwards === !0 && (m = $.extend(!0, [], m).reverse()), $.each(m, function (e, t) {
                                parseFloat(F.stagger) ? F.delay = j + parseFloat(F.stagger) * e : g.isFunction(F.stagger) && (F.delay = j + F.stagger.call(t, e, P)), F.drag && (F.duration = parseFloat(E) || (/^(callout|transition)/.test(h) ? 1e3 : y), F.duration = Math.max(F.duration * (F.backwards ? 1 - e / P : (e + 1) / P), .75 * F.duration, 200)), v.Redirects[h].call(t, t, F || {}, e, P, m, T.promise ? T : a)
                            }), e()
                        }
                        var H = "Velocity: First argument (" + h + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return T.promise ? T.rejecter(new Error(H)) : console.log(H), e()
                    }
                    k = "start"
                }
                var N = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    L = [];
                $.each(m, function (e, t) {
                    g.isNode(t) && n.call(t)
                });
                var F = $.extend({}, v.defaults, b),
                    R;
                if (F.loop = parseInt(F.loop), R = 2 * F.loop - 1, F.loop)
                    for (var O = 0; R > O; O++) {
                        var z = {
                            delay: F.delay,
                            progress: F.progress
                        };
                        O === R - 1 && (z.display = F.display, z.visibility = F.visibility, z.complete = F.complete), S(m, "reverse", z)
                    }
                return e()
            }
        };
        v = $.extend(S, v), v.animate = S;
        var P = t.requestAnimationFrame || d;
        return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function () {
            r.hidden ? (P = function (e) {
                return setTimeout(function () {
                    e(!0)
                }, 16)
            }, c()) : P = t.requestAnimationFrame || d
        }), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), $.each(["Down", "Up"], function (e, t) {
            v.Redirects["slide" + t] = function (e, r, n, o, i, s) {
                var l = $.extend({}, r),
                    u = l.begin,
                    c = l.complete,
                    p = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    f = {};
                l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                    u && u.call(i, i);
                    for (var r in p) {
                        f[r] = e.style[r];
                        var a = v.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [a, 0] : [0, a]
                    }
                    f.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function () {
                    for (var t in f) e.style[t] = f[t];
                    c && c.call(i, i), s && s.resolver(i)
                }, v(e, p, l)
            }
        }), $.each(["In", "Out"], function (e, t) {
            v.Redirects["fade" + t] = function (e, r, n, o, i, s) {
                var l = $.extend({}, r),
                    u = {
                        opacity: "In" === t ? 1 : 0
                    },
                    c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function () {
                    c && c.call(i, i), s && s.resolver(i)
                }, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l)
            }
        }), v
    }(window.jQuery || window.Zepto || window, window, document)
});



/* Buttons */

(function ($) {
    $(document).ready(function () {

        // jQuery reverse
        $.fn.reverse = [].reverse;

        $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn', function (e) {
            var $this = $(this);
            openFABMenu($this);

        });

        $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn', function (e) {
            var $this = $(this);
            closeFABMenu($this);
        });

    });

    $.fn.extend({
        openFAB: function () {
            var $this = $(this);
            openFABMenu($this);
        },
        closeFAB: function () {
            closeFABMenu($this);
        }
    });


    var openFABMenu = function (btn) {
        $this = btn;
        if ($this.hasClass('active') === false) {
            $this.addClass('active');
            $this.find('ul .btn-floating').velocity({
                scaleY: ".4",
                scaleX: ".4",
                translateY: "40px"
            }, {
                duration: 0
            });

            var time = 0;
            $this.find('ul .btn-floating').reverse().each(function () {
                $(this).velocity({
                    opacity: "1",
                    scaleX: "1",
                    scaleY: "1",
                    translateY: "0"
                }, {
                    duration: 80,
                    delay: time
                });
                time += 40;
            });
        }
    };

    var closeFABMenu = function (btn) {
        $this = btn;
        $this.removeClass('active');
        var time = 0;
        $this.find('ul .btn-floating').velocity("stop", true);
        $this.find('ul .btn-floating').velocity({
            opacity: "0",
            scaleX: ".4",
            scaleY: ".4",
            translateY: "40px"
        }, {
            duration: 80
        });
    };


}(jQuery));



/*!
 * Waves v0.6.4
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */

;
(function (window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = {
                top: 0,
                left: 0
            },
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 750,

        show: function (e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos = offset(el);
            var relativeY = (e.pageY - pos.top);
            var relativeX = (e.pageX - pos.left);
            var scale = 'scale(' + ((el.clientWidth / 100) * 10) + ')';

            // Support for touch devices
            if ('touches' in e) {
                relativeY = (e.touches[0].pageY - pos.top);
                relativeX = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY + 'px',
                'left': relativeX + 'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['transition-duration'] = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function (e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }

            var relativeX = ripple.getAttribute('data-x');
            var relativeY = ripple.getAttribute('data-y');
            var scale = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function () {
                var style = {
                    'top': relativeY + 'px',
                    'left': relativeX + 'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function () {
                    try {
                        el.removeChild(ripple);
                    } catch (e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function (elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,
        allowEvent: function (e) {
            var allow = true;

            if (e.type === 'touchstart') {
                TouchHandler.touches += 1; //push
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function () {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1; //pop after 500ms
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }

            return allow;
        },
        touchup: function (e) {
            TouchHandler.allowEvent(e);
        }
    };


    /**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentElement !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
                element = target;
                break;
            } else if (target.classList.contains('waves-effect')) {
                element = target;
                break;
            }
            target = target.parentElement;
        }

        return element;
    }

    /**
     * Bubble the click and show effect if .waves-effect elem was found
     */
    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
        }
    }

    Waves.displayEffect = function (options) {
        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        //Wrap input inside <i> tag
        Effect.wrapInput($$('.waves-effect'));

        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }

        document.body.addEventListener('mousedown', showEffect, false);
    };

    /**
     * Attach Waves to an input element (or any element which doesn't
     * bubble mouseup/mousedown events).
     *   Intended to be used with dynamically loaded forms/inputs, or
     * where the user doesn't want a delegated click handler.
     */
    Waves.attach = function (element) {
        //FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentElement;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function () {
        Waves.displayEffect();
    }, false);

})(window);