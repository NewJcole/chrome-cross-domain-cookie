var e=function(e,n,r,t){return new(r||(r=Promise))((function(o,a){function u(e){try{i(t.next(e))}catch(e){a(e)}}function s(e){try{i(t.throw(e))}catch(e){a(e)}}function i(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(u,s)}i((t=t.apply(e,n||[])).next())}))};const n=new Map;function r(){return e(this,void 0,void 0,(function*(){chrome.webRequest.onBeforeSendHeaders.addListener((e=>(t(),o(e))),{urls:["<all_urls>"]},["blocking","requestHeaders","extraHeaders"])}))}function t(){chrome.cookies.getAll({},(e=>{n.clear(),e.forEach((({domain:e,name:r,value:t})=>n.set(e,`${n.has(e)?`${n.get(e)};`:""}${r}=${t}`)))}))}function o(e){if(function(e){var n;return null===(n=e.requestHeaders)||void 0===n?void 0:n.some((({name:e})=>"Cookie"===e))}(e))return;const r=function(e){var n,r;if("localhost"===e)return e;const t=e.replace(/(^\w+:|^)\/\//,""),o=/^(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/,a=/.[^.]*\.[^.]{2,3}(?:\.[^.]{2,3})?$/,u=null===(n=t.match(o))||void 0===n?void 0:n[0];if(!u)return;return null===(r=u.match(a))||void 0===r?void 0:r[0]}(e.url);if(!r)return;let t=n.get(r);return t?(e.requestHeaders||(e.requestHeaders=[]),e.requestHeaders.push({name:"Cookie",value:t}),{requestHeaders:e.requestHeaders}):void 0}t(),chrome.storage.onChanged.addListener((function(e){"enable"in e&&(e.enable.newValue?r():chrome.webRequest.onBeforeSendHeaders.removeListener(o))})),chrome.storage.local.set({enable:!0},r);
