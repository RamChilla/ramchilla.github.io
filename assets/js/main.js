// Load Css Async
(function(w){"use strict";var loadCSS=function(href,before,media){var doc=w.document;var ss=doc.createElement("link");var ref;if(before){ref=before;}else{var refs=(doc.body||doc.getElementsByTagName("head")[0]).childNodes;ref=refs[refs.length-1];}var sheets=doc.styleSheets;ss.rel="stylesheet";ss.href=href;ss.media="only x";function ready(cb){if(doc.body){return cb();}setTimeout(function(){ready(cb);});}ready(function(){ref.parentNode.insertBefore(ss,(before?ref:ref.nextSibling));});var onloadcssdefined=function(cb){var resolvedHref=ss.href;var i=sheets.length;while(i--){if(sheets[i].href===resolvedHref){return cb();}}setTimeout(function(){onloadcssdefined(cb);});};function loadCB(){if(ss.addEventListener){ss.removeEventListener("load",loadCB);}ss.media=media||"all";}if(ss.addEventListener){ss.addEventListener("load",loadCB);}ss.onloadcssdefined=onloadcssdefined;onloadcssdefined(loadCB);return ss;};if(typeof exports!=="undefined"){exports.loadCSS=loadCSS;}else{w.loadCSS=loadCSS;}}(typeof global!=="undefined"?global:this));(function(w){if(!w.loadCSS){return;}var rp=loadCSS.relpreload={};rp.support=function(){try{return w.document.createElement("link").relList.supports("preload");}catch(e){return false;}};rp.poly=function(){var links=w.document.getElementsByTagName("link");for(var i=0;i<links.length;i++){var link=links[i];if(link.rel==="preload"&&link.getAttribute("as")==="style"){w.loadCSS(link.href,link,link.getAttribute("media"));link.rel=null;}}};if(!rp.support()){rp.poly();var run=w.setInterval(rp.poly,300);if(w.addEventListener){w.addEventListener("load",function(){rp.poly();w.clearInterval(run);});}if(w.attachEvent){w.attachEvent("onload",function(){w.clearInterval(run);})}}}(this));

// setup listeners
(function(){
    //nav burger listener
    document.addEventListener('DOMContentLoaded', function () {

      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
    
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
    
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);
    
            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
            $target.classList.toggle('fadeInDown');

            $el.setAttribute('aria-expanded', $el.classList.contains('is-active'));
    
          });
        });
      }
    
    });
})();

// main
(function(){})();