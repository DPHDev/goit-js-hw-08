!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,b=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var o,i,u,a,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(h,t),d?y(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?b(n,u-(e-l)):n}(e))}function w(e){return f=void 0,m&&o?y(e):(o=i=void 0,a)}function T(){var e=p(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(h,t),y(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=S(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},T.flush=function(){return void 0===f?a:w(p())},T}function g(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=a.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),O=document.querySelector('input[type="email"]'),h=document.querySelector('textarea[name="message"]'),w=(document.querySelector('button[type="submit"]'),localStorage.getItem("feedback-form-state"));w&&(O.value=JSON.parse(w).email,h.value=JSON.parse(w).message),j.addEventListener("input",e(t)((function(){var e={email:O.value,message:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),5e3)),j.addEventListener("submit",(console.log(formObject),void localStorage.removeItem("feedback-form-state")))}();
//# sourceMappingURL=03-feedback.19589cc9.js.map
