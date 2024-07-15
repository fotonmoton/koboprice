(()=>{var Ue=Object.create;var B=Object.defineProperty,Ke=Object.defineProperties,Ze=Object.getOwnPropertyDescriptor,et=Object.getOwnPropertyDescriptors,tt=Object.getOwnPropertyNames,ce=Object.getOwnPropertySymbols,rt=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var se=(e,t,r)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))ue.call(t,r)&&se(e,r,t[r]);if(ce)for(var r of ce(t))nt.call(t,r)&&se(e,r,t[r]);return e},F=(e,t)=>Ke(e,et(t));var ot=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var at=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of tt(t))!ue.call(e,o)&&o!==r&&B(e,o,{get:()=>t[o],enumerable:!(n=Ze(t,o))||n.enumerable});return e};var it=(e,t,r)=>(r=e!=null?Ue(rt(e)):{},at(t||!e||!e.__esModule?B(r,"default",{value:e,enumerable:!0}):r,e));var Ge=ot((z,J)=>{(function(e,t){typeof z=="object"&&typeof J<"u"?J.exports=t():typeof define=="function"&&define.amd?define(t):(e=e||self,e.currency=t())})(z,function(){function e(a,i){if(!(this instanceof e))return new e(a,i);i=Object.assign({},r,i);var c=Math.pow(10,i.precision);this.intValue=a=t(a,i),this.value=a/c,i.increment=i.increment||1/c,i.groups=i.useVedic?o:n,this.s=i,this.p=c}function t(a,i){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:!0,s=i.decimal,f=i.errorOnInvalid,h=i.fromCents,y=Math.pow(10,i.precision),d=a instanceof e;if(d&&h)return a.intValue;if(typeof a=="number"||d)s=d?a.value:a;else if(typeof a=="string")f=new RegExp("[^-\\d"+s+"]","g"),s=new RegExp("\\"+s,"g"),s=(s=a.replace(/\((.*)\)/,"-$1").replace(f,"").replace(s,"."))||0;else{if(f)throw Error("Invalid Input");s=0}return h||(s=(s*y).toFixed(4)),c?Math.round(s):s}var r={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:function(a,i){var c=i.pattern,s=i.negativePattern,f=i.symbol,h=i.separator,y=i.decimal;i=i.groups;var d=(""+a).replace(/^-/,"").split("."),w=d[0];return d=d[1],(0<=a.value?c:s).replace("!",f).replace("#",w.replace(i,"$1"+h)+(d?y+d:""))},fromCents:!1},n=/(\d)(?=(\d{3})+\b)/g,o=/(\d)(?=(\d\d)+\d\b)/g;return e.prototype={add:function(a){var i=this.s,c=this.p;return e((this.intValue+t(a,i))/(i.fromCents?1:c),i)},subtract:function(a){var i=this.s,c=this.p;return e((this.intValue-t(a,i))/(i.fromCents?1:c),i)},multiply:function(a){var i=this.s;return e(this.intValue*a/(i.fromCents?1:Math.pow(10,i.precision)),i)},divide:function(a){var i=this.s;return e(this.intValue/t(a,i,!1),i)},distribute:function(a){var i=this.intValue,c=this.p,s=this.s,f=[],h=Math[0<=i?"floor":"ceil"](i/a),y=Math.abs(i-h*a);for(c=s.fromCents?1:c;a!==0;a--){var d=e(h/c,s);0<y--&&(d=d[0<=i?"add":"subtract"](1/c)),f.push(d)}return f},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(a){var i=this.s;return typeof a=="function"?a(this,i):i.format(this,Object.assign({},i,a))},toString:function(){var a=this.s,i=a.increment;return(Math.round(this.intValue/this.p/i)*i).toFixed(a.precision)},toJSON:function(){return this.value}},e})});globalThis.l=(...e)=>console.log("KOBOPRICE",...e);var de=[{countryCode:"ww",currencyCode:"usd"},{countryCode:"ca",currencyCode:"cad"},{countryCode:"us",currencyCode:"usd"},{countryCode:"in",currencyCode:"inr"},{countryCode:"za",currencyCode:"zar"},{countryCode:"au",currencyCode:"aud"},{countryCode:"hk",currencyCode:"hkd"},{countryCode:"jp",currencyCode:"jpy"},{countryCode:"my",currencyCode:"myr"},{countryCode:"nz",currencyCode:"nzd"},{countryCode:"ph",currencyCode:"php"},{countryCode:"sg",currencyCode:"sgd"},{countryCode:"tw",currencyCode:"twd"},{countryCode:"th",currencyCode:"usd"},{countryCode:"at",currencyCode:"eur"},{countryCode:"be",currencyCode:"eur"},{countryCode:"cy",currencyCode:"eur"},{countryCode:"cz",currencyCode:"czk"},{countryCode:"dk",currencyCode:"dkk"},{countryCode:"ee",currencyCode:"eur"},{countryCode:"fi",currencyCode:"eur"},{countryCode:"fr",currencyCode:"eur"},{countryCode:"de",currencyCode:"eur"},{countryCode:"gr",currencyCode:"eur"},{countryCode:"ie",currencyCode:"eur"},{countryCode:"it",currencyCode:"eur"},{countryCode:"lt",currencyCode:"eur"},{countryCode:"lu",currencyCode:"eur"},{countryCode:"mt",currencyCode:"eur"},{countryCode:"nl",currencyCode:"eur"},{countryCode:"no",currencyCode:"nok"},{countryCode:"pl",currencyCode:"pln"},{countryCode:"pt",currencyCode:"eur"},{countryCode:"ro",currencyCode:"ron"},{countryCode:"sk",currencyCode:"eur"},{countryCode:"si",currencyCode:"eur"},{countryCode:"es",currencyCode:"eur"},{countryCode:"se",currencyCode:"sek"},{countryCode:"ch",currencyCode:"chf"},{countryCode:"tr",currencyCode:"try"},{countryCode:"gb",currencyCode:"gbp"},{countryCode:"ar",currencyCode:"usd"},{countryCode:"br",currencyCode:"brl"},{countryCode:"cl",currencyCode:"clp"},{countryCode:"co",currencyCode:"cop"},{countryCode:"mx",currencyCode:"mxn"},{countryCode:"pe",currencyCode:"pen"}];var Q="KOBOPRICE",fe=()=>{localStorage.getItem(Q)||A({books:{},rates:null})},N=()=>JSON.parse(localStorage.getItem(Q)),A=e=>localStorage.setItem(Q,JSON.stringify(e)),me=()=>N().rates,le=e=>A(F(I({},N()),{rates:e})),he=e=>N().books[e],ye=(e,t)=>{let r=N();r.books[t]=e,A(r)};var pe=e=>{let t=/^https:\/\/www\.kobo\.com\/../,r="https://www.kobo.com/".concat(e),n=window.location.href.replace(t,r);return l("url for country",e,n),n};var ct=e=>new Promise(t=>setTimeout(t,e)),st=e=>new Promise((t,r)=>{ct(1e4).then(()=>r("price not found"));var n=new MutationObserver(()=>{var a;let o=(a=e==null?void 0:e.querySelector(".primary-right-container .pricing-details .active-price span"))==null?void 0:a.textContent;o&&(l("found price",o),n.disconnect(),t(o))});n.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}),ge=async e=>{try{l("going to",e);let t=document.createElement("iframe");t.src=e,t.hidden=!0,document.body.append(t),await new Promise(n=>t.contentWindow.onload=n),l("starting observing price on",e);let r=await st(t.contentDocument.body,e);return document.body.removeChild(t),r}catch(t){return l("getPriceForCountry",t,e),""}};function m(e){let t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function g(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}var ut=Math.pow(10,8)*24*60*60*1e3,fr=-ut,R=6048e5,we=864e5;var dt=3600;var xe=dt*24,mr=xe*7,ft=xe*365.2425,mt=ft/12,lr=mt*3;var lt={};function k(){return lt}function C(e,t){var c,s,f,h,y,d,w,b;let r=k(),n=(b=(w=(h=(f=t==null?void 0:t.weekStartsOn)!=null?f:(s=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:s.weekStartsOn)!=null?h:r.weekStartsOn)!=null?w:(d=(y=r.locale)==null?void 0:y.options)==null?void 0:d.weekStartsOn)!=null?b:0,o=m(e),a=o.getDay(),i=(a<n?7:0)+a-n;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function P(e){return C(e,{weekStartsOn:1})}function q(e){let t=m(e),r=t.getFullYear(),n=g(e,0);n.setFullYear(r+1,0,4),n.setHours(0,0,0,0);let o=P(n),a=g(e,0);a.setFullYear(r,0,4),a.setHours(0,0,0,0);let i=P(a);return t.getTime()>=o.getTime()?r+1:t.getTime()>=i.getTime()?r:r-1}function D(e){let t=m(e);return t.setHours(0,0,0,0),t}function X(e){let t=m(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function be(e,t){let r=D(e),n=D(t),o=+r-X(r),a=+n-X(n);return Math.round((o-a)/we)}function Ce(e){let t=q(e),r=g(e,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),P(r)}function Oe(e){return g(e,Date.now())}function ke(e,t){let r=D(e),n=D(t);return+r==+n}function Pe(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ve(e){if(!Pe(e)&&typeof e!="number")return!1;let t=m(e);return!isNaN(Number(t))}function De(e){let t=m(e),r=g(e,0);return r.setFullYear(t.getFullYear(),0,1),r.setHours(0,0,0,0),r}var ht={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Me=(e,t,r)=>{let n,o=ht[e];return typeof o=="string"?n=o:t===1?n=o.one:n=o.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};function L(e){return(t={})=>{let r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var yt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},pt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},gt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},We={date:L({formats:yt,defaultWidth:"full"}),time:L({formats:pt,defaultWidth:"full"}),dateTime:L({formats:gt,defaultWidth:"full"})};var wt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Se=(e,t,r,n)=>wt[e];function M(e){return(t,r)=>{let n=r!=null&&r.context?String(r.context):"standalone",o;if(n==="formatting"&&e.formattingValues){let i=e.defaultFormattingWidth||e.defaultWidth,c=r!=null&&r.width?String(r.width):i;o=e.formattingValues[c]||e.formattingValues[i]}else{let i=e.defaultWidth,c=r!=null&&r.width?String(r.width):e.defaultWidth;o=e.values[c]||e.values[i]}let a=e.argumentCallback?e.argumentCallback(t):t;return o[a]}}var xt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},bt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ct={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ot={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},kt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Pt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},vt=(e,t)=>{let r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Te={ordinalNumber:vt,era:M({values:xt,defaultWidth:"wide"}),quarter:M({values:bt,defaultWidth:"wide",argumentCallback:e=>e-1}),month:M({values:Ct,defaultWidth:"wide"}),day:M({values:Ot,defaultWidth:"wide"}),dayPeriod:M({values:kt,defaultWidth:"wide",formattingValues:Pt,defaultFormattingWidth:"wide"})};function W(e){return(t,r={})=>{let n=r.width,o=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;let i=a[0],c=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(c)?Mt(c,y=>y.test(i)):Dt(c,y=>y.test(i)),f;f=e.valueCallback?e.valueCallback(s):s,f=r.valueCallback?r.valueCallback(f):f;let h=t.slice(i.length);return{value:f,rest:h}}}function Dt(e,t){for(let r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function Mt(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function Ye(e){return(t,r={})=>{let n=t.match(e.matchPattern);if(!n)return null;let o=n[0],a=t.match(e.parsePattern);if(!a)return null;let i=e.valueCallback?e.valueCallback(a[0]):a[0];i=r.valueCallback?r.valueCallback(i):i;let c=t.slice(o.length);return{value:i,rest:c}}}var Wt=/^(\d+)(th|st|nd|rd)?/i,St=/\d+/i,Tt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Yt={any:[/^b/i,/^(a|c)/i]},Et={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},It={any:[/1/i,/2/i,/3/i,/4/i]},Ft={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Nt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Rt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},qt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Lt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},jt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ee={ordinalNumber:Ye({matchPattern:Wt,parsePattern:St,valueCallback:e=>parseInt(e,10)}),era:W({matchPatterns:Tt,defaultMatchWidth:"wide",parsePatterns:Yt,defaultParseWidth:"any"}),quarter:W({matchPatterns:Et,defaultMatchWidth:"wide",parsePatterns:It,defaultParseWidth:"any",valueCallback:e=>e+1}),month:W({matchPatterns:Ft,defaultMatchWidth:"wide",parsePatterns:Nt,defaultParseWidth:"any"}),day:W({matchPatterns:Rt,defaultMatchWidth:"wide",parsePatterns:qt,defaultParseWidth:"any"}),dayPeriod:W({matchPatterns:Lt,defaultMatchWidth:"any",parsePatterns:jt,defaultParseWidth:"any"})};var _={code:"en-US",formatDistance:Me,formatLong:We,formatRelative:Se,localize:Te,match:Ee,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ie(e){let t=m(e);return be(t,De(t))+1}function Fe(e){let t=m(e),r=+P(t)-+Ce(t);return Math.round(r/R)+1}function j(e,t){var h,y,d,w,b,T,Y,E;let r=m(e),n=r.getFullYear(),o=k(),a=(E=(Y=(w=(d=t==null?void 0:t.firstWeekContainsDate)!=null?d:(y=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:y.firstWeekContainsDate)!=null?w:o.firstWeekContainsDate)!=null?Y:(T=(b=o.locale)==null?void 0:b.options)==null?void 0:T.firstWeekContainsDate)!=null?E:1,i=g(e,0);i.setFullYear(n+1,0,a),i.setHours(0,0,0,0);let c=C(i,t),s=g(e,0);s.setFullYear(n,0,a),s.setHours(0,0,0,0);let f=C(s,t);return r.getTime()>=c.getTime()?n+1:r.getTime()>=f.getTime()?n:n-1}function Ne(e,t){var c,s,f,h,y,d,w,b;let r=k(),n=(b=(w=(h=(f=t==null?void 0:t.firstWeekContainsDate)!=null?f:(s=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:s.firstWeekContainsDate)!=null?h:r.firstWeekContainsDate)!=null?w:(d=(y=r.locale)==null?void 0:y.options)==null?void 0:d.firstWeekContainsDate)!=null?b:1,o=j(e,t),a=g(e,0);return a.setFullYear(o,0,n),a.setHours(0,0,0,0),C(a,t)}function Re(e,t){let r=m(e),n=+C(r,t)-+Ne(r,t);return Math.round(n/R)+1}function u(e,t){let r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}var O={y(e,t){let r=e.getFullYear(),n=r>0?r:1-r;return u(t==="yy"?n%100:n,t.length)},M(e,t){let r=e.getMonth();return t==="M"?String(r+1):u(r+1,2)},d(e,t){return u(e.getDate(),t.length)},a(e,t){let r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return u(e.getHours()%12||12,t.length)},H(e,t){return u(e.getHours(),t.length)},m(e,t){return u(e.getMinutes(),t.length)},s(e,t){return u(e.getSeconds(),t.length)},S(e,t){let r=t.length,n=e.getMilliseconds(),o=Math.trunc(n*Math.pow(10,r-3));return u(o,t.length)}};var S={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},G={G:function(e,t,r){let n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){let n=e.getFullYear(),o=n>0?n:1-n;return r.ordinalNumber(o,{unit:"year"})}return O.y(e,t)},Y:function(e,t,r,n){let o=j(e,n),a=o>0?o:1-o;if(t==="YY"){let i=a%100;return u(i,2)}return t==="Yo"?r.ordinalNumber(a,{unit:"year"}):u(a,t.length)},R:function(e,t){let r=q(e);return u(r,t.length)},u:function(e,t){let r=e.getFullYear();return u(r,t.length)},Q:function(e,t,r){let n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return u(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){let n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return u(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){let n=e.getMonth();switch(t){case"M":case"MM":return O.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){let n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return u(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){let o=Re(e,n);return t==="wo"?r.ordinalNumber(o,{unit:"week"}):u(o,t.length)},I:function(e,t,r){let n=Fe(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):u(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):O.d(e,t)},D:function(e,t,r){let n=Ie(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):u(n,t.length)},E:function(e,t,r){let n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){let o=e.getDay(),a=(o-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return u(a,2);case"eo":return r.ordinalNumber(a,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){let o=e.getDay(),a=(o-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return u(a,t.length);case"co":return r.ordinalNumber(a,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,r){let n=e.getDay(),o=n===0?7:n;switch(t){case"i":return String(o);case"ii":return u(o,t.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){let o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,r){let n=e.getHours(),o;switch(n===12?o=S.noon:n===0?o=S.midnight:o=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,r){let n=e.getHours(),o;switch(n>=17?o=S.evening:n>=12?o=S.afternoon:n>=4?o=S.morning:o=S.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return O.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):O.H(e,t)},K:function(e,t,r){let n=e.getHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):u(n,t.length)},k:function(e,t,r){let n=e.getHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):u(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):O.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):O.s(e,t)},S:function(e,t){return O.S(e,t)},X:function(e,t,r){let n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return Le(n);case"XXXX":case"XX":return v(n);case"XXXXX":case"XXX":default:return v(n,":")}},x:function(e,t,r){let n=e.getTimezoneOffset();switch(t){case"x":return Le(n);case"xxxx":case"xx":return v(n);case"xxxxx":case"xxx":default:return v(n,":")}},O:function(e,t,r){let n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+qe(n,":");case"OOOO":default:return"GMT"+v(n,":")}},z:function(e,t,r){let n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+qe(n,":");case"zzzz":default:return"GMT"+v(n,":")}},t:function(e,t,r){let n=Math.trunc(e.getTime()/1e3);return u(n,t.length)},T:function(e,t,r){let n=e.getTime();return u(n,t.length)}};function qe(e,t=""){let r=e>0?"-":"+",n=Math.abs(e),o=Math.trunc(n/60),a=n%60;return a===0?r+String(o):r+String(o)+t+u(a,2)}function Le(e,t){return e%60===0?(e>0?"-":"+")+u(Math.abs(e)/60,2):v(e,t)}function v(e,t=""){let r=e>0?"-":"+",n=Math.abs(e),o=u(Math.trunc(n/60),2),a=u(n%60,2);return r+o+t+a}var je=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},He=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Ht=(e,t)=>{let r=e.match(/(P+)(p+)?/)||[],n=r[1],o=r[2];if(!o)return je(e,t);let a;switch(n){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",je(n,t)).replace("{{time}}",He(o,t))},Ve={p:He,P:Ht};var Vt=/^D+$/,Bt=/^Y+$/,Qt=["D","DD","YY","YYYY"];function Be(e){return Vt.test(e)}function Qe(e){return Bt.test(e)}function Ae(e,t,r){let n=At(e,t,r);if(console.warn(n),Qt.includes(e))throw new RangeError(n)}function At(e,t,r){let n=e[0]==="Y"?"years":"days of the month";return"Use `".concat(e.toLowerCase(),"` instead of `").concat(e,"` (in `").concat(t,"`) for formatting ").concat(n," to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md")}var Xt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_t=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Gt=/^'([^]*?)'?$/,$t=/''/g,zt=/[a-zA-Z]/;function Xe(e,t,r){var h,y,d,w,b,T,Y,E,U,K,Z,ee,te,re,ne,oe,ae,ie;let n=k(),o=(y=(h=r==null?void 0:r.locale)!=null?h:n.locale)!=null?y:_,a=(K=(U=(T=(b=r==null?void 0:r.firstWeekContainsDate)!=null?b:(w=(d=r==null?void 0:r.locale)==null?void 0:d.options)==null?void 0:w.firstWeekContainsDate)!=null?T:n.firstWeekContainsDate)!=null?U:(E=(Y=n.locale)==null?void 0:Y.options)==null?void 0:E.firstWeekContainsDate)!=null?K:1,i=(ie=(ae=(re=(te=r==null?void 0:r.weekStartsOn)!=null?te:(ee=(Z=r==null?void 0:r.locale)==null?void 0:Z.options)==null?void 0:ee.weekStartsOn)!=null?re:n.weekStartsOn)!=null?ae:(oe=(ne=n.locale)==null?void 0:ne.options)==null?void 0:oe.weekStartsOn)!=null?ie:0,c=m(e);if(!ve(c))throw new RangeError("Invalid time value");let s=t.match(_t).map(x=>{let p=x[0];if(p==="p"||p==="P"){let V=Ve[p];return V(x,o.formatLong)}return x}).join("").match(Xt).map(x=>{if(x==="''")return{isToken:!1,value:"'"};let p=x[0];if(p==="'")return{isToken:!1,value:Jt(x)};if(G[p])return{isToken:!0,value:x};if(p.match(zt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");return{isToken:!1,value:x}});o.localize.preprocessor&&(s=o.localize.preprocessor(c,s));let f={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return s.map(x=>{if(!x.isToken)return x.value;let p=x.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&Qe(p)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&Be(p))&&Ae(p,t,String(e));let V=G[p[0]];return V(c,p,o.localize,f)}).join("")}function Jt(e){let t=e.match(Gt);return t?t[1].replace($t,"'"):e}function H(e){return ke(e,Oe(e))}var $="usd",Ut=async()=>{try{let e="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/".concat($,".json");return l("loading currency rates",e),await(await fetch(e)).json()}catch(e){return l("loadCurrencyRates",e),null}},_e=async e=>{let t=me();if(t&&H(t.date))return l("found rates in cache",t),t[$][e];let r=await Ut();return r?(l("new rates",r),le(r),r[$][e]):(l("failed to download rates"),0)};var $e=it(Ge(),1),ze=async(e,t,r)=>{l("rate for",t,"is",r);let n=!1;switch(t){case"inr":case"php":{n=!0;break}case"jpy":break;case"zar":{e=e.replace(",",".");break}case"dkk":{e=e.replace("kr.","").replace(",",".");break}case"pen":{e=e.replace("S/.","");break}case"clp":case"cop":case"twd":break;default:e=e.replace(/[^\d,.-]/,"").replace(",",".")}let o=(0,$e.default)(e,{useVedic:n}).divide(r);return l("converted price for",t,o),{intValue:o.intValue,formatted:o.format()}};var Je=async e=>{l("looking price for",e.countryCode);let t=pe(e.countryCode),r=he(t);if(r&&H(r.cachedAt))return l("found book price in cache",r),r;let n=await ge(t),o;if(n){l("found price",n,t);let i=await _e(e.currencyCode);o=await ze(n,e.currencyCode,i)}let a=F(I({},e),{countryPrice:n,convertedPrice:o,url:t,cachedAt:Xe(new Date,"yyyy-MM-dd")});return ye(a,t),a};var Kt=()=>{let e=document.querySelector(".primary-right-container"),t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.border="1px solid black",t.style.padding="10px",e.parentNode.insertBefore(t,e)},Zt=async()=>{let e=[];for(let t of de)e.push(await Je(t));return e},er=e=>e.sort((t,r)=>{var n,o;return(((n=t==null?void 0:t.convertedPrice)==null?void 0:n.intValue)||1/0)-(((o=r==null?void 0:r.convertedPrice)==null?void 0:o.intValue)||1/0)}),tr=(e,t)=>{e.innerText=null,t.forEach(r=>{var i,c;let n=document.createElement("a");n.href=r.url,n.target="_blank",n.style.marginBottom="5px",n.style.display="flex",n.style.justifyContent="space-between";let o=document.createElement("p");o.innerText="".concat(r.countryCode.toUpperCase(),": ").concat((r==null?void 0:r.countryPrice)||"NO PRICE");let a=document.createElement("p");a.innerText=(c=(i=r==null?void 0:r.convertedPrice)==null?void 0:i.formatted)!=null?c:"NO PRICE",a.style.fontWeight="bold",n.appendChild(o),n.appendChild(a),e.appendChild(n)})};async function rr(){let e=Kt();e.innerText="LOADING PRICES...";try{fe();let t=await Zt();l("country prices",t),er(t),l("sorted prices",t),tr(e,t)}catch(t){l("error",t),e.innerText="FAILED TO LOAD PRICES. CHECK CONSOLE FOR MORE INFO"}finally{l("done")}}l("starting...");window.onload=()=>{l("page is fully loaded"),rr()};})();
//# sourceMappingURL=koboprice.js.map