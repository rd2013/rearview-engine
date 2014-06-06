/* =========================================================
 * bootstrap-datepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

!function(t){function e(){return new Date(Date.UTC.apply(Date,arguments))}var a=function(e,a){var n=this;switch(this.element=t(e),this.language=a.language||this.element.data("date-language")||"en",this.language=this.language in i?this.language:"en",this.format=s.parseFormat(a.format||this.element.data("date-format")||"mm/dd/yyyy"),this.picker=t(s.template).appendTo("body").on({click:t.proxy(this.click,this)}),this.isInput=this.element.is("input"),this.component=this.element.is(".date")?this.element.find(".add-on"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.isInput?this.element.on({focus:t.proxy(this.show,this),keyup:t.proxy(this.update,this),keydown:t.proxy(this.keydown,this)}):this.component&&this.hasInput?(this.element.find("input").on({focus:t.proxy(this.show,this),keyup:t.proxy(this.update,this),keydown:t.proxy(this.keydown,this)}),this.component.on("click",t.proxy(this.show,this))):this.element.on("click",t.proxy(this.show,this)),t(document).on("mousedown",function(e){0==t(e.target).closest(".datepicker").length&&n.hide()}),this.autoclose=!1,"autoclose"in a?this.autoclose=a.autoclose:"dateAutoclose"in this.element.data()&&(this.autoclose=this.element.data("date-autoclose")),this.keyboardNavigation=!0,"keyboardNavigation"in a?this.keyboardNavigation=a.keyboardNavigation:"dateKeyboardNavigation"in this.element.data()&&(this.keyboardNavigation=this.element.data("date-keyboard-navigation")),a.startView||this.element.data("date-start-view")){case 2:case"decade":this.viewMode=this.startViewMode=2;break;case 1:case"year":this.viewMode=this.startViewMode=1;break;case 0:case"month":default:this.viewMode=this.startViewMode=0}this.todayBtn=a.todayBtn||this.element.data("date-today-btn")||!1,this.todayHighlight=a.todayHighlight||this.element.data("date-today-highlight")||!1,this.weekStart=(a.weekStart||this.element.data("date-weekstart")||i[this.language].weekStart||0)%7,this.weekEnd=(this.weekStart+6)%7,this.startDate=-1/0,this.endDate=1/0,this.setStartDate(a.startDate||this.element.data("date-startdate")),this.setEndDate(a.endDate||this.element.data("date-enddate")),this.fillDow(),this.fillMonths(),this.update(),this.showMode()};a.prototype={constructor:a,show:function(e){this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.update(),this.place(),t(window).on("resize",t.proxy(this.place,this)),e&&(e.stopPropagation(),e.preventDefault()),this.element.trigger({type:"show",date:this.date})},hide:function(e){this.picker.hide(),t(window).off("resize",this.place),this.viewMode=this.startViewMode,this.showMode(),this.isInput||t(document).off("mousedown",this.hide),e&&e.currentTarget.value&&this.setValue(),this.element.trigger({type:"hide",date:this.date})},getDate:function(){var t=this.getUTCDate();return new Date(t.getTime()+6e4*t.getTimezoneOffset())},getUTCDate:function(){return this.date},setDate:function(t){this.setUTCDate(new Date(t.getTime()-6e4*t.getTimezoneOffset()))},setUTCDate:function(t){this.date=t,this.setValue()},setValue:function(){var t=s.formatDate(this.date,this.format,this.language);this.isInput?this.element.prop("value",t):(this.component&&this.element.find("input").prop("value",t),this.element.data("date",t))},setNow:function(){this.element.prop("value","now")},setStartDate:function(t){this.startDate=t||-1/0,this.startDate!==-1/0&&(this.startDate=s.parseDate(this.startDate,this.format,this.language)),this.update(),this.updateNavArrows()},setEndDate:function(t){this.endDate=t||1/0,1/0!==this.endDate&&(this.endDate=s.parseDate(this.endDate,this.format,this.language)),this.update(),this.updateNavArrows()},place:function(){var e=parseInt(this.element.parents().filter(function(){return"auto"!=t(this).css("z-index")}).first().css("z-index"))+10,a=this.component?this.component.offset():this.element.offset();this.picker.css({top:a.top+this.height,left:a.left,zIndex:e})},update:function(){this.date=s.parseDate(this.isInput?this.element.prop("value"):this.element.data("date")||this.element.find("input").prop("value"),this.format,this.language),this.viewDate=new Date(this.date<this.startDate?this.startDate:this.date>this.endDate?this.endDate:this.date),this.fill()},fillDow:function(){for(var t=this.weekStart,e="<tr>";t<this.weekStart+7;)e+='<th class="dow">'+i[this.language].daysMin[t++%7]+"</th>";e+="</tr>",this.picker.find(".datepicker-days thead").append(e)},fillMonths:function(){for(var t="",e=0;12>e;)t+='<span class="month">'+i[this.language].monthsShort[e++]+"</span>";this.picker.find(".datepicker-months td").html(t)},fill:function(){var t=new Date(this.viewDate),a=t.getUTCFullYear(),n=t.getUTCMonth(),h=this.startDate!==-1/0?this.startDate.getUTCFullYear():-1/0,o=this.startDate!==-1/0?this.startDate.getUTCMonth():-1/0,r=1/0!==this.endDate?this.endDate.getUTCFullYear():1/0,d=1/0!==this.endDate?this.endDate.getUTCMonth():1/0,l=this.date.valueOf(),c=new Date;this.picker.find(".datepicker-days thead th:eq(1)").text(i[this.language].months[n]+" "+a),this.picker.find("tfoot th.today").text(i[this.language].today).toggle(this.todayBtn),this.updateNavArrows(),this.fillMonths();var u=e(a,n-1,28,0,0,0,0),p=s.getDaysInMonth(u.getUTCFullYear(),u.getUTCMonth());u.setUTCDate(p),u.setUTCDate(p-(u.getUTCDay()-this.weekStart+7)%7);var g=new Date(u);g.setUTCDate(g.getUTCDate()+42),g=g.valueOf();for(var f,v=[];u.valueOf()<g;)u.getUTCDay()==this.weekStart&&v.push("<tr>"),f="",u.getUTCFullYear()<a||u.getUTCFullYear()==a&&u.getUTCMonth()<n?f+=" old":(u.getUTCFullYear()>a||u.getUTCFullYear()==a&&u.getUTCMonth()>n)&&(f+=" new"),this.todayHighlight&&u.getUTCFullYear()==c.getFullYear()&&u.getUTCMonth()==c.getMonth()&&u.getUTCDate()==c.getDate()&&(f+=" today"),u.valueOf()==l&&(f+=" active"),(u.valueOf()<this.startDate||u.valueOf()>this.endDate)&&(f+=" disabled"),v.push('<td class="day'+f+'">'+u.getUTCDate()+"</td>"),u.getUTCDay()==this.weekEnd&&v.push("</tr>"),u.setUTCDate(u.getUTCDate()+1);this.picker.find(".datepicker-days tbody").empty().append(v.join(""));var m=this.date.getUTCFullYear(),y=this.picker.find(".datepicker-months").find("th:eq(1)").text(a).end().find("span").removeClass("active");m==a&&y.eq(this.date.getUTCMonth()).addClass("active"),(h>a||a>r)&&y.addClass("disabled"),a==h&&y.slice(0,o).addClass("disabled"),a==r&&y.slice(d+1).addClass("disabled"),v="",a=10*parseInt(a/10,10);var D=this.picker.find(".datepicker-years").find("th:eq(1)").text(a+"-"+(a+9)).end().find("td");a-=1;for(var w=-1;11>w;w++)v+='<span class="year'+(-1==w||10==w?" old":"")+(m==a?" active":"")+(h>a||a>r?" disabled":"")+'">'+a+"</span>",a+=1;D.html(v)},updateNavArrows:function(){var t=new Date(this.viewDate),e=t.getUTCFullYear(),a=t.getUTCMonth();switch(this.viewMode){case 0:this.picker.find(".prev").css(this.startDate!==-1/0&&e<=this.startDate.getUTCFullYear()&&a<=this.startDate.getUTCMonth()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.endDate&&e>=this.endDate.getUTCFullYear()&&a>=this.endDate.getUTCMonth()?{visibility:"hidden"}:{visibility:"visible"});break;case 1:case 2:this.picker.find(".prev").css(this.startDate!==-1/0&&e<=this.startDate.getUTCFullYear()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.endDate&&e>=this.endDate.getUTCFullYear()?{visibility:"hidden"}:{visibility:"visible"})}},click:function(a){a.stopPropagation(),a.preventDefault();var i=t(a.target).closest("span, td, th");if(1==i.length)switch(i[0].nodeName.toLowerCase()){case"th":switch(i[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var n=s.modes[this.viewMode].navStep*("prev"==i[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,n);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,n)}this.fill();break;case"today":var h=new Date;this.showMode(-2);var o="linked"==this.todayBtn?null:"view";this._setDate(h,o),this.setNow()}break;case"span":if(!i.is(".disabled")){if(this.viewDate.setUTCDate(1),i.is(".month")){var r=i.parent().find("span").index(i);this.viewDate.setUTCMonth(r),this.element.trigger({type:"changeMonth",date:this.viewDate})}else{var d=parseInt(i.text(),10)||0;this.viewDate.setUTCFullYear(d),this.element.trigger({type:"changeYear",date:this.viewDate})}this.showMode(-1),this.fill()}break;case"td":if(i.is(".day")&&!i.is(".disabled")){var l=parseInt(i.text(),10)||1,d=this.viewDate.getUTCFullYear(),r=this.viewDate.getUTCMonth();i.is(".old")?0==r?(r=11,d-=1):r-=1:i.is(".new")&&(11==r?(r=0,d+=1):r+=1),this._setDate(e(d,r,l,0,0,0,0))}}},_setDate:function(t,e){e&&"date"!=e||(this.date=t),e&&"view"!=e||(this.viewDate=t),this.fill(),this.setValue(),this.element.trigger({type:"changeDate",date:this.date});var a;this.isInput?a=this.element:this.component&&(a=this.element.find("input")),a&&(a.change(),this.autoclose&&this.hide())},moveMonth:function(t,e){if(!e)return t;var a,i,s=new Date(t.valueOf()),n=s.getUTCDate(),h=s.getUTCMonth(),o=Math.abs(e);if(e=e>0?1:-1,1==o)i=-1==e?function(){return s.getUTCMonth()==h}:function(){return s.getUTCMonth()!=a},a=h+e,s.setUTCMonth(a),(0>a||a>11)&&(a=(a+12)%12);else{for(var r=0;o>r;r++)s=this.moveMonth(s,e);a=s.getUTCMonth(),s.setUTCDate(n),i=function(){return a!=s.getUTCMonth()}}for(;i();)s.setUTCDate(--n),s.setUTCMonth(a);return s},moveYear:function(t,e){return this.moveMonth(t,12*e)},dateWithinRange:function(t){return t>=this.startDate&&t<=this.endDate},keydown:function(t){if(this.picker.is(":not(:visible)"))return void(27==t.keyCode&&this.show());var e,a,i,s=!1;switch(t.keyCode){case 27:this.hide(),t.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation)break;e=37==t.keyCode?-1:1,t.ctrlKey?(a=this.moveYear(this.date,e),i=this.moveYear(this.viewDate,e)):t.shiftKey?(a=this.moveMonth(this.date,e),i=this.moveMonth(this.viewDate,e)):(a=new Date(this.date),a.setUTCDate(this.date.getUTCDate()+e),i=new Date(this.viewDate),i.setUTCDate(this.viewDate.getUTCDate()+e)),this.dateWithinRange(a)&&(this.date=a,this.viewDate=i,this.setValue(),this.update(),t.preventDefault(),s=!0);break;case 38:case 40:if(!this.keyboardNavigation)break;e=38==t.keyCode?-1:1,t.ctrlKey?(a=this.moveYear(this.date,e),i=this.moveYear(this.viewDate,e)):t.shiftKey?(a=this.moveMonth(this.date,e),i=this.moveMonth(this.viewDate,e)):(a=new Date(this.date),a.setUTCDate(this.date.getUTCDate()+7*e),i=new Date(this.viewDate),i.setUTCDate(this.viewDate.getUTCDate()+7*e)),this.dateWithinRange(a)&&(this.date=a,this.viewDate=i,this.setValue(),this.update(),t.preventDefault(),s=!0);break;case 13:this.hide(),t.preventDefault();break;case 9:this.hide()}if(s){this.element.trigger({type:"changeDate",date:this.date});var n;this.isInput?n=this.element:this.component&&(n=this.element.find("input")),n&&n.change()}},showMode:function(t){t&&(this.viewMode=Math.max(0,Math.min(2,this.viewMode+t))),this.picker.find(">div").hide().filter(".datepicker-"+s.modes[this.viewMode].clsName).show(),this.updateNavArrows()}},t.fn.datepicker=function(e){var i=Array.apply(null,arguments);return i.shift(),this.each(function(){var s=t(this),n=s.data("datepicker"),h="object"==typeof e&&e;n||s.data("datepicker",n=new a(this,t.extend({},t.fn.datepicker.defaults,h))),"string"==typeof e&&"function"==typeof n[e]&&n[e].apply(n,i)})},t.fn.datepicker.defaults={},t.fn.datepicker.Constructor=a;var i=t.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Now"}},s={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(t){return t%4===0&&t%100!==0||t%400===0},getDaysInMonth:function(t,e){return[31,s.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},validParts:/dd?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\r]+/g,parseFormat:function(t){var e=t.replace(this.validParts,"\x00").split("\x00"),a=t.match(this.validParts);if(!e||!e.length||!a||0==a.length)throw new Error("Invalid date format.");return{separators:e,parts:a}},parseDate:function(s,n,h){if(s instanceof Date)return s;if(/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(s)){var o,r,d=/([-+]\d+)([dmwy])/,l=s.match(/([-+]\d+)([dmwy])/g);s=new Date;for(var c=0;c<l.length;c++)switch(o=d.exec(l[c]),r=parseInt(o[1]),o[2]){case"d":s.setUTCDate(s.getUTCDate()+r);break;case"m":s=a.prototype.moveMonth.call(a.prototype,s,r);break;case"w":s.setUTCDate(s.getUTCDate()+7*r);break;case"y":s=a.prototype.moveYear.call(a.prototype,s,r)}return e(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate(),0,0,0)}var u,p,o,l=s&&s.match(this.nonpunctuation)||[],s=new Date,g={},f=["yyyy","yy","M","MM","m","mm","d","dd"],v={yyyy:function(t,e){return t.setUTCFullYear(e)},yy:function(t,e){return t.setUTCFullYear(2e3+e)},m:function(t,e){for(e-=1;0>e;)e+=12;for(e%=12,t.setUTCMonth(e);t.getUTCMonth()!=e;)t.setUTCDate(t.getUTCDate()-1);return t},d:function(t,e){return t.setUTCDate(e)}};if(v.M=v.MM=v.mm=v.m,v.dd=v.d,s=e(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate(),0,0,0),l.length==n.parts.length){for(var c=0,m=n.parts.length;m>c;c++){if(u=parseInt(l[c],10),o=n.parts[c],isNaN(u))switch(o){case"MM":p=t(i[h].months).filter(function(){var t=this.slice(0,l[c].length),e=l[c].slice(0,t.length);return t==e}),u=t.inArray(p[0],i[h].months)+1;break;case"M":p=t(i[h].monthsShort).filter(function(){var t=this.slice(0,l[c].length),e=l[c].slice(0,t.length);return t==e}),u=t.inArray(p[0],i[h].monthsShort)+1}g[o]=u}for(var y,c=0;c<f.length;c++)y=f[c],y in g&&v[y](s,g[y])}return s},formatDate:function(e,a,s){var n={d:e.getUTCDate(),m:e.getUTCMonth()+1,M:i[s].monthsShort[e.getUTCMonth()],MM:i[s].months[e.getUTCMonth()],yy:e.getUTCFullYear().toString().substring(2),yyyy:e.getUTCFullYear()};n.dd=(n.d<10?"0":"")+n.d,n.mm=(n.m<10?"0":"")+n.m;for(var e=[],h=t.extend([],a.separators),o=0,r=a.parts.length;r>o;o++)h.length&&e.push(h.shift()),e.push(n[a.parts[o]]);return e.join("")},headTemplate:'<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};s.template='<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">'+s.headTemplate+"<tbody></tbody>"+s.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+s.headTemplate+s.contTemplate+s.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+s.headTemplate+s.contTemplate+s.footTemplate+"</table></div></div>"}(window.jQuery);