function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var i,o,r,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function R(e){return l=e,f=setTimeout(j,t),c?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function j(){var e=g();if(S(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?d(n,r-(e-l)):n}(e))}function h(e){return f=void 0,v&&i?y(e):(i=o=void 0,a)}function w(){var e=g(),n=S(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return R(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(b(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=o=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const y={emailRef:document.querySelector('[name="email"]'),messageRef:document.querySelector('[name="message"]'),formRef:document.querySelector(".feedback-form"),submitBtn:document.querySelector("button")};if(null!==localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));y.emailRef.value=e.email,y.messageRef.value=e.message}y.formRef.addEventListener("input",e(t)((function(e){e.target===y.emailRef&&(R.email=e.target.value);e.target===y.messageRef&&(R.message=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(R))}),500));let R={email:y.emailRef.value,message:y.messageRef.value};y.submitBtn.addEventListener("click",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),console.log(R),y.emailRef.value="",y.messageRef.value="",R.email="",R.message=""}));
//# sourceMappingURL=03-feedback.6e747ac6.js.map
