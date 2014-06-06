/**
 * QUnit v1.5.0 - A JavaScript Unit Testing Framework
 *
 * http://docs.jquery.com/QUnit
 *
 * Copyright (c) 2012 John Resig, Jörn Zaefferer
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * or GPL (GPL-LICENSE.txt) licenses.
 */

/**
 * jsDump Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com |
 * http://flesler.blogspot.com Licensed under BSD
 * (http://www.opensource.org/licenses/bsd-license.php) Date: 5/15/2008
 *
 * @projectDescription Advanced and extensible data dumping for Javascript.
 * @version 1.0.0
 * @author Ariel Flesler
 * @link {http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html}
 */

/*
 * Javascript Diff Algorithm
 *  By John Resig (http://ejohn.org/)
 *  Modified by Chu Alan "sprite"
 *
 * Released under the MIT license.
 *
 * More Info:
 *  http://ejohn.org/projects/javascript-diff-algorithm/
 *
 * Usage: QUnit.diff(expected, actual)
 *
 * QUnit.diff("the quick brown fox jumped over", "the quick fox jumps over") == "the  quick <del>brown </del> fox <del>jumped </del><ins>jumps </ins> over"
 */

!function(e){function t(){x.autorun=!0,x.currentModule&&m("moduleDone",T,{name:x.currentModule,failed:x.moduleStats.bad,passed:x.moduleStats.all-x.moduleStats.bad,total:x.moduleStats.all});var e=f("qunit-banner"),t=f("qunit-tests"),n=+new Date-x.started,r=x.stats.all-x.stats.bad,s=["Tests completed in ",n," milliseconds.<br/>",'<span class="passed">',r,'</span> tests of <span class="total">',x.stats.all,'</span> passed, <span class="failed">',x.stats.bad,"</span> failed."].join("");if(e&&(e.className=x.stats.bad?"qunit-fail":"qunit-pass"),t&&(f("qunit-testresult").innerHTML=s),x.altertitle&&"undefined"!=typeof document&&document.title&&(document.title=[x.stats.bad?"✖":"✔",document.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),x.reorder&&b.sessionStorage&&0===x.stats.bad)for(var o,i=0;i<sessionStorage.length;i++)o=sessionStorage.key(i++),0===o.indexOf("qunit-test-")&&sessionStorage.removeItem(o);m("done",T,{failed:x.stats.bad,passed:r,total:x.stats.all,runtime:n})}function n(e){var t=x.filter,n=!1;if(!t)return!0;var r="!"===t.charAt(0);return r&&(t=t.slice(1)),-1!==e.indexOf(t)?!r:(r&&(n=!0),n)}function r(e,t){if(t=t||3,e.stacktrace)return e.stacktrace.split("\n")[t+3];if(e.stack){var n=e.stack.split("\n");return/^error$/i.test(n[0])&&n.shift(),n[t]}if(e.sourceURL){if(/qunit.js$/.test(e.sourceURL))return;return e.sourceURL+":"+e.line}}function s(e){try{throw new Error}catch(t){return r(t,e)}}function o(e){return e?(e+="",e.replace(/[\&<>]/g,function(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}})):""}function i(e,t){x.queue.push(e),x.autorun&&!x.blocking&&a(t)}function a(n){function r(){a(n)}var s=(new Date).getTime();for(x.depth=x.depth?x.depth+1:1;x.queue.length&&!x.blocking;){if(!(!b.setTimeout||x.updateRate<=0||(new Date).getTime()-s<x.updateRate)){e.setTimeout(r,13);break}x.queue.shift()()}x.depth--,!n||x.blocking||x.queue.length||0!==x.depth||t()}function u(){if(x.pollution=[],x.noglobals)for(var t in e)q.call(e,t)&&x.pollution.push(t)}function l(){var e=x.pollution;u();var t=c(x.pollution,e);t.length>0&&T.pushFailure("Introduced global variable(s): "+t.join(", "));var n=c(e,x.pollution);n.length>0&&T.pushFailure("Deleted global variable(s): "+n.join(", "))}function c(e,t){for(var n=e.slice(),r=0;r<n.length;r++)for(var s=0;s<t.length;s++)if(n[r]===t[s]){n.splice(r,1),r--;break}return n}function d(t,n){for(var r in n)void 0===n[r]?delete t[r]:("constructor"!==r||t!==e)&&(t[r]=n[r]);return t}function p(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):n()}function f(e){return!("undefined"==typeof document||!document||!document.getElementById)&&document.getElementById(e)}function h(e){return function(t){x[e].push(t)}}function m(e,t,n){var r;if(T.hasOwnProperty(e))T[e].call(t,n);else{r=x[e];for(var s=0;s<r.length;s++)r[s].call(t,n)}}function g(e){for(var t,n="",r=0;e[r];r++)t=e[r],3===t.nodeType||4===t.nodeType?n+=t.nodeValue:8!==t.nodeType&&(n+=g(t.childNodes));return n}function v(e,t){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1}var b={setTimeout:"undefined"!=typeof e.setTimeout,sessionStorage:function(){var e="qunit-test-string";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}()},y=0,w=Object.prototype.toString,q=Object.prototype.hasOwnProperty,E=function(e,t,n,r,s){this.name=e,this.testName=t,this.expected=n,this.async=r,this.callback=s,this.assertions=[]};E.prototype={init:function(){var e=f("qunit-tests");if(e){var t=document.createElement("strong");t.innerHTML="Running "+this.name;var n=document.createElement("li");n.appendChild(t),n.className="running",n.id=this.id="test-output"+y++,e.appendChild(n)}},setup:function(){if(this.module!=x.previousModule?(x.previousModule&&m("moduleDone",T,{name:x.previousModule,failed:x.moduleStats.bad,passed:x.moduleStats.all-x.moduleStats.bad,total:x.moduleStats.all}),x.previousModule=this.module,x.moduleStats={all:0,bad:0},m("moduleStart",T,{name:this.module})):x.autorun&&m("moduleStart",T,{name:this.module}),x.current=this,this.testEnvironment=d({setup:function(){},teardown:function(){}},this.moduleTestEnvironment),m("testStart",T,{name:this.testName,module:this.module}),T.current_testEnvironment=this.testEnvironment,x.pollution||u(),x.notrycatch)return void this.testEnvironment.setup.call(this.testEnvironment);try{this.testEnvironment.setup.call(this.testEnvironment)}catch(e){T.pushFailure("Setup failed on "+this.testName+": "+e.message,r(e,1))}},run:function(){x.current=this;var e=f("qunit-testresult");if(e&&(e.innerHTML="Running: <br/>"+this.name),this.async&&T.stop(),x.notrycatch)return void this.callback.call(this.testEnvironment);try{this.callback.call(this.testEnvironment)}catch(t){T.pushFailure("Died on test #"+(this.assertions.length+1)+": "+t.message,r(t,1)),u(),x.blocking&&T.start()}},teardown:function(){if(x.current=this,x.notrycatch)return void this.testEnvironment.teardown.call(this.testEnvironment);try{this.testEnvironment.teardown.call(this.testEnvironment)}catch(e){T.pushFailure("Teardown failed on "+this.testName+": "+e.message,r(e,1))}l()},finish:function(){x.current=this,null!=this.expected&&this.expected!=this.assertions.length?T.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run"):null!=this.expected||this.assertions.length||T.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.");var t,n,r=0,s=0,o=f("qunit-tests");if(x.stats.all+=this.assertions.length,x.moduleStats.all+=this.assertions.length,o){var i=document.createElement("ol");for(n=0;n<this.assertions.length;n++){var a=this.assertions[n];t=document.createElement("li"),t.className=a.result?"pass":"fail",t.innerHTML=a.message||(a.result?"okay":"failed"),i.appendChild(t),a.result?r++:(s++,x.stats.bad++,x.moduleStats.bad++)}T.config.reorder&&b.sessionStorage&&(s?sessionStorage.setItem("qunit-test-"+this.module+"-"+this.testName,s):sessionStorage.removeItem("qunit-test-"+this.module+"-"+this.testName)),0===s&&(i.style.display="none");var u=document.createElement("strong");u.innerHTML=this.name+" <b class='counts'>(<b class='failed'>"+s+"</b>, <b class='passed'>"+r+"</b>, "+this.assertions.length+")</b>";var l=document.createElement("a");l.innerHTML="Rerun",l.href=T.url({filter:g([u]).replace(/\([^)]+\)$/,"").replace(/(^\s*|\s*$)/g,"")}),p(u,"click",function(){var e=u.nextSibling.nextSibling,t=e.style.display;e.style.display="none"===t?"block":"none"}),p(u,"dblclick",function(t){var n=t&&t.target?t.target:e.event.srcElement;("span"==n.nodeName.toLowerCase()||"b"==n.nodeName.toLowerCase())&&(n=n.parentNode),e.location&&"strong"===n.nodeName.toLowerCase()&&(e.location=T.url({filter:g([n]).replace(/\([^)]+\)$/,"").replace(/(^\s*|\s*$)/g,"")}))}),t=f(this.id),t.className=s?"fail":"pass",t.removeChild(t.firstChild),t.appendChild(u),t.appendChild(l),t.appendChild(i)}else for(n=0;n<this.assertions.length;n++)this.assertions[n].result||(s++,x.stats.bad++,x.moduleStats.bad++);T.reset(),m("testDone",T,{name:this.testName,module:this.module,failed:s,passed:this.assertions.length-s,total:this.assertions.length})},queue:function(){function e(){i(function(){t.setup()}),i(function(){t.run()}),i(function(){t.teardown()}),i(function(){t.finish()})}var t=this;i(function(){t.init()});var n=T.config.reorder&&b.sessionStorage&&+sessionStorage.getItem("qunit-test-"+this.module+"-"+this.testName);n?e():i(e,!0)}};var T={module:function(e,t){x.currentModule=e,x.currentModuleTestEnviroment=t},asyncTest:function(e,t,n){2===arguments.length&&(n=t,t=null),T.test(e,t,n,!0)},test:function(e,t,r,s){var i='<span class="test-name">'+o(e)+"</span>";if(2===arguments.length&&(r=t,t=null),x.currentModule&&(i='<span class="module-name">'+x.currentModule+"</span>: "+i),n(x.currentModule+": "+e)){var a=new E(i,e,t,s,r);a.module=x.currentModule,a.moduleTestEnvironment=x.currentModuleTestEnviroment,a.queue()}},expect:function(e){x.current.expected=e},ok:function(e,t){if(!x.current)throw new Error("ok() assertion outside test context, was "+s(2));e=!!e;var n={result:e,message:t};if(t=o(t||(e?"okay":"failed")),!e){var r=s(2);r&&(n.source=r,t+='<table><tr class="test-source"><th>Source: </th><td><pre>'+o(r)+"</pre></td></tr></table>")}m("log",T,n),x.current.assertions.push({result:e,message:t})},equal:function(e,t,n){T.push(t==e,e,t,n)},notEqual:function(e,t,n){T.push(t!=e,e,t,n)},deepEqual:function(e,t,n){T.push(T.equiv(e,t),e,t,n)},notDeepEqual:function(e,t,n){T.push(!T.equiv(e,t),e,t,n)},strictEqual:function(e,t,n){T.push(t===e,e,t,n)},notStrictEqual:function(e,t,n){T.push(t!==e,e,t,n)},raises:function(e,t,n){var r,s=!1;"string"==typeof t&&(n=t,t=null);try{e.call(x.current.testEnvironment)}catch(o){r=o}r&&(t?"regexp"===T.objectType(t)?s=t.test(r):r instanceof t?s=!0:t.call({},r)===!0&&(s=!0):s=!0),T.ok(s,n)},start:function(t){x.semaphore-=t||1,x.semaphore>0||(x.semaphore<0&&(x.semaphore=0),b.setTimeout?e.setTimeout(function(){x.semaphore>0||(x.timeout&&clearTimeout(x.timeout),x.blocking=!1,a(!0))},13):(x.blocking=!1,a(!0)))},stop:function(t){x.semaphore+=t||1,x.blocking=!0,x.testTimeout&&b.setTimeout&&(clearTimeout(x.timeout),x.timeout=e.setTimeout(function(){T.ok(!1,"Test timed out"),x.semaphore=1,T.start()},x.testTimeout))}};!function(){function e(){}e.prototype=T,T=new e,T.constructor=e}(),T.equals=function(){T.push(!1,!1,!1,"QUnit.equals has been deprecated since 2009 (e88049a0), use QUnit.equal instead")},T.same=function(){T.push(!1,!1,!1,"QUnit.same has been deprecated since 2009 (e88049a0), use QUnit.deepEqual instead")};var x={queue:[],blocking:!0,hidepassed:!1,reorder:!0,altertitle:!0,urlConfig:["noglobals","notrycatch"],begin:[],done:[],log:[],testStart:[],testDone:[],moduleStart:[],moduleDone:[]};!function(){var t,n=e.location||{search:"",protocol:"file:"},r=n.search.slice(1).split("&"),s=r.length,o={};if(r[0])for(var i=0;s>i;i++)t=r[i].split("="),t[0]=decodeURIComponent(t[0]),t[1]=t[1]?decodeURIComponent(t[1]):!0,o[t[0]]=t[1];T.urlParams=o,x.filter=o.filter,T.isLocal="file:"===n.protocol}(),("undefined"==typeof exports||"undefined"==typeof require)&&(d(e,T),e.QUnit=T),d(T,{config:x,init:function(){d(x,{stats:{all:0,bad:0},moduleStats:{all:0,bad:0},started:+new Date,updateRate:1e3,blocking:!1,autostart:!0,autorun:!1,filter:"",queue:[],semaphore:0});var e=f("qunit");e&&(e.innerHTML='<h1 id="qunit-header">'+o(document.title)+'</h1><h2 id="qunit-banner"></h2><div id="qunit-testrunner-toolbar"></div><h2 id="qunit-userAgent"></h2><ol id="qunit-tests"></ol>');var t=f("qunit-tests"),n=f("qunit-banner"),r=f("qunit-testresult");t&&(t.innerHTML=""),n&&(n.className=""),r&&r.parentNode.removeChild(r),t&&(r=document.createElement("p"),r.id="qunit-testresult",r.className="result",t.parentNode.insertBefore(r,t),r.innerHTML="Running...<br/>&nbsp;")},reset:function(){if(e.jQuery)jQuery("#qunit-fixture").html(x.fixture);else{var t=f("qunit-fixture");t&&(t.innerHTML=x.fixture)}},triggerEvent:function(e,t,n){document.createEvent?(n=document.createEvent("MouseEvents"),n.initMouseEvent(t,!0,!0,e.ownerDocument.defaultView,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(n)):e.fireEvent&&e.fireEvent("on"+t)},is:function(e,t){return T.objectType(t)==e},objectType:function(e){if("undefined"==typeof e)return"undefined";if(null===e)return"null";var t=w.call(e).match(/^\[object\s(.*)\]$/)[1]||"";switch(t){case"Number":return isNaN(e)?"nan":"number";case"String":case"Boolean":case"Array":case"Date":case"RegExp":case"Function":return t.toLowerCase()}return"object"==typeof e?"object":void 0},push:function(e,t,n,r){if(!x.current)throw new Error("assertion outside test context, was "+s());var i={result:e,message:r,actual:t,expected:n};r=o(r)||(e?"okay":"failed"),r='<span class="test-message">'+r+"</span>";var a=r;if(!e){n=o(T.jsDump.parse(n)),t=o(T.jsDump.parse(t)),a+='<table><tr class="test-expected"><th>Expected: </th><td><pre>'+n+"</pre></td></tr>",t!=n&&(a+='<tr class="test-actual"><th>Result: </th><td><pre>'+t+"</pre></td></tr>",a+='<tr class="test-diff"><th>Diff: </th><td><pre>'+T.diff(n,t)+"</pre></td></tr>");var u=s();u&&(i.source=u,a+='<tr class="test-source"><th>Source: </th><td><pre>'+o(u)+"</pre></td></tr>"),a+="</table>"}m("log",T,i),x.current.assertions.push({result:!!e,message:a})},pushFailure:function(e,t){var n={result:!1,message:e},r=o(e);t&&(n.source=t,r+='<table><tr class="test-source"><th>Source: </th><td><pre>'+o(t)+"</pre></td></tr></table>"),m("log",T,n),x.current.assertions.push({result:!1,message:r})},url:function(t){t=d(d({},T.urlParams),t);var n,r="?";for(n in t)q.call(t,n)&&(r+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&");return e.location.pathname+r.slice(0,-1)},extend:d,id:f,addEvent:p}),d(T.constructor.prototype,{begin:h("begin"),done:h("done"),log:h("log"),testStart:h("testStart"),testDone:h("testDone"),moduleStart:h("moduleStart"),moduleDone:h("moduleDone")}),("undefined"==typeof document||"complete"===document.readyState)&&(x.autorun=!0),T.load=function(){m("begin",T,{});var t=d({},x);T.init(),d(x,t),x.blocking=!1;for(var n,r="",s=x.urlConfig.length,o=0;s>o;o++)n=x.urlConfig[o],x[n]=T.urlParams[n],r+='<label><input name="'+n+'" type="checkbox"'+(x[n]?' checked="checked"':"")+">"+n+"</label>";var i=f("qunit-userAgent");i&&(i.innerHTML=navigator.userAgent);var a=f("qunit-header");a&&(a.innerHTML='<a href="'+T.url({filter:void 0})+'"> '+a.innerHTML+"</a> "+r,p(a,"change",function(t){var n={};n[t.target.name]=t.target.checked?!0:void 0,e.location=T.url(n)}));var u=f("qunit-testrunner-toolbar");if(u){var l=document.createElement("input");if(l.type="checkbox",l.id="qunit-filter-pass",p(l,"click",function(){var e=document.getElementById("qunit-tests");if(l.checked)e.className=e.className+" hidepass";else{var t=" "+e.className.replace(/[\n\t\r]/g," ")+" ";e.className=t.replace(/ hidepass /," ")}b.sessionStorage&&(l.checked?sessionStorage.setItem("qunit-filter-passed-tests","true"):sessionStorage.removeItem("qunit-filter-passed-tests"))}),x.hidepassed||b.sessionStorage&&sessionStorage.getItem("qunit-filter-passed-tests")){l.checked=!0;var c=document.getElementById("qunit-tests");c.className=c.className+" hidepass"}u.appendChild(l);var h=document.createElement("label");h.setAttribute("for","qunit-filter-pass"),h.innerHTML="Hide passed tests",u.appendChild(h)}var g=f("qunit-fixture");g&&(x.fixture=g.innerHTML),x.autostart&&T.start()},p(e,"load",T.load),e.onerror=function(e,t,n){T.config.current?T.pushFailure(e,t+":"+n):T.test("global failure",function(){T.pushFailure(e,t+":"+n)})},T.equiv=function(){function e(e,t,n){var r=T.objectType(e);return r?"function"===T.objectType(t[r])?t[r].apply(t,n):t[r]:void 0}var t,n=[],r=[],s=Object.getPrototypeOf||function(e){return e.__proto__},o=function(){function e(e,t){return e instanceof t.constructor||t instanceof e.constructor?t==e:t===e}return{string:e,"boolean":e,number:e,"null":e,undefined:e,nan:function(e){return isNaN(e)},date:function(e,t){return"date"===T.objectType(e)&&t.valueOf()===e.valueOf()},regexp:function(e,t){return"regexp"===T.objectType(e)&&t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline},"function":function(){var e=n[n.length-1];return e!==Object&&"undefined"!=typeof e},array:function(e,n){var s,o,i,a;if("array"!==T.objectType(e))return!1;if(a=n.length,a!==e.length)return!1;for(r.push(n),s=0;a>s;s++){for(i=!1,o=0;o<r.length;o++)r[o]===n[s]&&(i=!0);if(!i&&!t(n[s],e[s]))return r.pop(),!1}return r.pop(),!0},object:function(e,o){var i,a,u,l=!0,c=[],d=[];if(o.constructor!==e.constructor&&!(null===s(o)&&s(e)===Object.prototype||null===s(e)&&s(o)===Object.prototype))return!1;n.push(o.constructor),r.push(o);for(i in o){for(u=!1,a=0;a<r.length;a++)r[a]===o[i]&&(u=!0);if(c.push(i),!u&&!t(o[i],e[i])){l=!1;break}}n.pop(),r.pop();for(i in e)d.push(i);return l&&t(c.sort(),d.sort())}}}();return t=function(){var t=Array.prototype.slice.apply(arguments);return t.length<2?!0:function(t,n){return t===n?!0:null===t||null===n||"undefined"==typeof t||"undefined"==typeof n||T.objectType(t)!==T.objectType(n)?!1:e(t,o,[n,t])}(t[0],t[1])&&arguments.callee.apply(this,t.splice(1,t.length-1))}}(),T.jsDump=function(){function e(e){return'"'+e.toString().replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=o.separator(),s=o.indent(),i=o.indent(1);return t.join&&(t=t.join(","+r+i)),t?[e,i+t,s+n].join(r):e+n}function r(e,t){var r=e.length,s=new Array(r);for(this.up();r--;)s[r]=this.parse(e[r],void 0,t);return this.down(),n("[",s,"]")}var s=/^function (\w+)/,o={parse:function(e,t,n){n=n||[];var r=this.parsers[t||this.typeOf(e)];t=typeof r;var s=v(e,n);if(-1!=s)return"recursion("+(s-n.length)+")";if("function"==t){n.push(e);var o=r.call(this,e,n);return n.pop(),o}return"string"==t?r:this.parsers.error},typeOf:function(e){var t;return t=null===e?"null":"undefined"==typeof e?"undefined":T.is("RegExp",e)?"regexp":T.is("Date",e)?"date":T.is("Function",e)?"function":void 0!==typeof e.setInterval&&"undefined"!=typeof e.document&&"undefined"==typeof e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":"[object Array]"===w.call(e)||"number"==typeof e.length&&"undefined"!=typeof e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&"undefined"==typeof e[0])?"array":typeof e},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&nbsp;":" "},indent:function(e){if(!this.multiline)return"";var t=this.indentChar;return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&nbsp;")),new Array(this._depth_+(e||0)).join(t)},up:function(e){this._depth_+=e||1},down:function(e){this._depth_-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,_depth_:1,parsers:{window:"[Window]",document:"[Document]",error:"[ERROR]",unknown:"[Unknown]","null":"null",undefined:"undefined","function":function(e){var t="function",r="name"in e?e.name:(s.exec(e)||[])[1];return r&&(t+=" "+r),t+="(",t=[t,T.jsDump.parse(e,"functionArgs"),"){"].join(""),n(t,T.jsDump.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r,s,o,i,a=[];if(T.jsDump.up(),Object.keys)r=Object.keys(e);else{r=[];for(s in e)r.push(s)}for(r.sort(),i=0;i<r.length;i++)s=r[i],o=e[s],a.push(T.jsDump.parse(s,"key")+": "+T.jsDump.parse(o,void 0,t));return T.jsDump.down(),n("{",a,"}")},node:function(e){var t=T.jsDump.HTML?"&lt;":"<",n=T.jsDump.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),s=t+r;for(var o in T.jsDump.DOMAttrs){var i=e[T.jsDump.DOMAttrs[o]];i&&(s+=" "+o+"="+T.jsDump.parse(i,"attribute"))}return s+n+t+"/"+r+n},functionArgs:function(e){var t=e.length;if(!t)return"";for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t);return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,"boolean":t},DOMAttrs:{id:"id",name:"name","class":"className"},HTML:!1,indentChar:"  ",multiline:!0};return o}(),T.diff=function(){function e(e,t){var n,r={},s={};for(n=0;n<t.length;n++)null==r[t[n]]&&(r[t[n]]={rows:[],o:null}),r[t[n]].rows.push(n);for(n=0;n<e.length;n++)null==s[e[n]]&&(s[e[n]]={rows:[],n:null}),s[e[n]].rows.push(n);for(n in r)q.call(r,n)&&1==r[n].rows.length&&"undefined"!=typeof s[n]&&1==s[n].rows.length&&(t[r[n].rows[0]]={text:t[r[n].rows[0]],row:s[n].rows[0]},e[s[n].rows[0]]={text:e[s[n].rows[0]],row:r[n].rows[0]});for(n=0;n<t.length-1;n++)null!=t[n].text&&null==t[n+1].text&&t[n].row+1<e.length&&null==e[t[n].row+1].text&&t[n+1]==e[t[n].row+1]&&(t[n+1]={text:t[n+1],row:t[n].row+1},e[t[n].row+1]={text:e[t[n].row+1],row:n+1});for(n=t.length-1;n>0;n--)null!=t[n].text&&null==t[n-1].text&&t[n].row>0&&null==e[t[n].row-1].text&&t[n-1]==e[t[n].row-1]&&(t[n-1]={text:t[n-1],row:t[n].row-1},e[t[n].row-1]={text:e[t[n].row-1],row:n-1});return{o:e,n:t}}return function(t,n){t=t.replace(/\s+$/,""),n=n.replace(/\s+$/,"");var r,s=e(""===t?[]:t.split(/\s+/),""===n?[]:n.split(/\s+/)),o="",i=t.match(/\s+/g);null==i?i=[" "]:i.push(" ");var a=n.match(/\s+/g);if(null==a?a=[" "]:a.push(" "),0===s.n.length)for(r=0;r<s.o.length;r++)o+="<del>"+s.o[r]+i[r]+"</del>";else{if(null==s.n[0].text)for(n=0;n<s.o.length&&null==s.o[n].text;n++)o+="<del>"+s.o[n]+i[n]+"</del>";for(r=0;r<s.n.length;r++)if(null==s.n[r].text)o+="<ins>"+s.n[r]+a[r]+"</ins>";else{var u="";for(n=s.n[r].row+1;n<s.o.length&&null==s.o[n].text;n++)u+="<del>"+s.o[n]+i[n]+"</del>";o+=" "+s.n[r].text+a[r]+u}}return o}}(),("undefined"!=typeof exports||"undefined"!=typeof require)&&d(exports,T)}(function(){return this}.call());