﻿var gTagVer="MSDN 1.6f/2-15-07",gService=true,gTimeZone=-8;function dcsCookie(){if(typeof dcsOther=="function")dcsOther();else if(typeof dcsPlugin=="function")dcsPlugin();else typeof dcsFPC=="function"&&dcsFPC(gTimeZone)}function dcsGetCookie(c){var d=document.cookie.indexOf(c+"=");if(d!=-1){var b=d+c.length+1,a=document.cookie.indexOf(";",b);if(a==-1)a=document.cookie.length;return unescape(document.cookie.substring(b,a))}return null}function dcsGetCrumb(e,d){for(var b=dcsGetCookie(e).split(":"),a=0;a<b.length;a++){var c=b[a].split("=");if(d==c[0])return c[1]}return null}function dcsGetIdCrumb(e,d){for(var b=dcsGetCookie(e),f=b.substring(0,b.indexOf(":lv=")),a=f.split("="),c=0;c<a.length;c++)if(d==a[0])return a[1];return null}function dcsFPC(g){if(typeof g=="undefined")return;if(document.cookie.indexOf("WTLOPTOUT=")!=-1)return;var c=gFpc,a=new Date,e=a.getTimezoneOffset()*6e4+g*3.6e6;a.setTime(a.getTime()+e);var m=new Date(a.getTime()+3.1536e11),b=new Date(a.getTime());if(document.cookie.indexOf(c+"=")==-1){if(typeof gWtId!="undefined"&&gWtId!="")WT.co_f=gWtId;else if(typeof gTempWtId!="undefined"&&gTempWtId!=""){WT.co_f=gTempWtId;WT.vt_f="1"}else{WT.co_f="2";for(var h=a.getTime().toString(),k=2;k<=32-h.length;k++)WT.co_f+=Math.floor(Math.random()*16).toString(16);WT.co_f+=h;WT.vt_f="1"}if(typeof gWtAccountRollup=="undefined")WT.vt_f_a="1";WT.vt_f_s="1";WT.vt_f_d="1";WT.vt_f_tlh=WT.vt_f_tlv="0"}else{var f=dcsGetIdCrumb(c,"id"),i=parseInt(dcsGetCrumb(c,"lv")),j=parseInt(dcsGetCrumb(c,"ss"));if(f==null||f=="null"||isNaN(i)||isNaN(j))return;WT.co_f=f;var d=new Date(i);WT.vt_f_tlh=Math.floor((d.getTime()-e)/1e3);b.setTime(j);if(a.getTime()>d.getTime()+1.8e6||a.getTime()>b.getTime()+2.88e7){WT.vt_f_tlv=Math.floor((b.getTime()-e)/1e3);b.setTime(a.getTime());WT.vt_f_s="1"}if(a.getDay()!=d.getDay()||a.getMonth()!=d.getMonth()||a.getYear()!=d.getYear())WT.vt_f_d="1"}WT.co_f=escape(WT.co_f);WT.vt_sid=WT.co_f+"."+(b.getTime()-e);var l="; expires="+m.toGMTString();document.cookie=c+"=id="+WT.co_f+":lv="+a.getTime().toString()+":ss="+b.getTime().toString()+l+"; path=/"+(typeof gFpcDom!="undefined"&&gFpcDom!=""?"; domain="+gFpcDom:"");if(document.cookie.indexOf(c+"=")==-1){WT.co_f=WT.vt_sid=WT.vt_f_s=WT.vt_f_d=WT.vt_f_tlh=WT.vt_f_tlv="";WT.vt_f=WT.vt_f_a="2"}}var gFpcDom=".microsoft.com";function dcsEvt(b,c){var a=b.target||b.srcElement;while(a.tagName&&a.tagName!=c)a=a.parentElement||a.parentNode;return a}function dcsBind(b,a){if(typeof window[a]=="function"&&document.body)if(document.body.addEventListener)document.body.addEventListener(b,window[a],true);else document.body.attachEvent&&document.body.attachEvent("on"+b,window[a])}function dcsET(){dcsBind("click","dcsDownload");dcsBind("click","dcsFormButton");dcsBind("keypress","dcsFormButton");dcsBind("click","dcsImageMap")}function dcsMultiTrack(){if(arguments.length%2==0){for(var a=0;a<arguments.length;a+=2)if(arguments[a].indexOf("WT.")==0)WT[arguments[a].substring(3)]=arguments[a+1];else if(arguments[a].indexOf("DCS.")==0)DCS[arguments[a].substring(4)]=arguments[a+1];else if(arguments[a].indexOf("DCSext.")==0)DCSext[arguments[a].substring(7)]=arguments[a+1];var b=new Date;DCS.dcsdat=b.getTime();dcsTag()}}function dcsDownload(b){b=b||(window.event||"");if(b){var a=dcsEvt(b,"A");if(a)if(a.hostname&&a.href&&a.protocol&&a.protocol.indexOf("http")!=-1){dcsNavigation(a);var d=a.pathname?a.pathname.indexOf("/")!=0?"/"+a.pathname:a.pathname:"/";if(document.all)var c=a.innerText||a.innerHTML||"";else var c=a.text||a.innerHTML||"";dcsMultiTrack("DCS.dcssip",a.hostname,"DCS.dcsuri",d,"DCS.dcsqry",a.search||"","WT.ti","Link:"+c,"WT.dl","1","WT.ad","","WT.mc_id","","WT.sp","");DCS.dcssip=DCS.dcsuri=DCS.dcsqry=WT.ti=WT.dl=c=d=""}}}function dcsNavigation(a){try{var b=0;while(b!=1){if(a.parentNode.tagName!="DIV")a=a.parentNode;if(a.parentNode.tagName=="DIV")if(a.parentNode.getAttribute("id")||a.parentNode.className){DCSext.wtNavigation=a.parentNode.getAttribute("id")||a.parentNode.className;b=1}else a=a.parentNode}}catch(c){}}function dcsImageMap(b){b=b||(window.event||"");if(b){var a=dcsEvt(b,"AREA");if(a)if(a.hostname&&a.href&&a.protocol&&a.protocol.indexOf("http")!=-1){var c=a.pathname?a.pathname.indexOf("/")!=0?"/"+a.pathname:a.pathname:"/";dcsMultiTrack("DCS.dcssip",a.hostname,"DCS.dcsuri",c,"DCS.dcsqry",a.search||"","WT.ti","Link:Image Map","WT.dl","1","WT.ad","","WT.mc_id","","WT.sp","");DCS.dcssip=DCS.dcsuri=DCS.dcsqry=WT.ti=WT.dl=""}}}function dcsFormButton(b){b=b||(window.event||"");if(b){var a=dcsEvt(b,"INPUT"),c=a.type||"";if(c&&(c=="submit"||c=="image"||c=="button"||c=="reset")||c=="text"&&(b.which||b.keyCode)==13){var d=gTitle=gMethod=qry="";if(a.form){for(var f=a.form.elements,e=0;e<f.length;e++){var g=f[e].type;if(g=="text")qry+=(qry==""?"":"&")+escape(f[e].name)+"="+escape(f[e].value)}d=a.form.action||window.location.pathname;gTitle=a.form.id||a.form.className||a.form.name||"Unknown";gMethod=a.form.method||"Unknown"}else{d=window.location.pathname;gTitle=a.name||a.id||"Unknown";gMethod="Input"}d!=""&&gTitle!=""&&gMethod!=""&&b.keyCode!=9&&dcsMultiTrack("DCS.dcsuri",d,"DCS.dcsqry",qry,"WT.ti","FormButton:"+gTitle,"WT.dl","2","WT.fm",gMethod,"WT.ad","","WT.mc_id","","WT.sp","");DCS.dcsuri=DCS.dcsqry=qry=WT.ti=WT.dl=WT.fm=d=gTitle=gMethod=""}}}function dcsAdSearch(){}function dcsContentRatings(a){a=a||(window.event||"");if(a){var c=dcsEvt(a,"A");if(c)if(c.hostname){if(document.all)var b=DCSext.wt_ratd2=c.innerText||c.innerHTML||"";else var b=DCSext.wt_ratd2=c.text||c.innerHTML||"";DCSext.wt_ratd1="Upper Ratings Options";dcsMultiTrack("DCS.dcssip",frmRatings.window.location.hostname,"DCS.dcsuri",frmRatings.window.location.pathname,"DCS.dcsqry","","WT.ti","Link:"+b,"WT.dl","9","WT.ad","","WT.mc_id","","WT.sp","");DCS.dcssip=DCS.dcsuri=DCS.dcsqry=WT.ti=WT.dl=b=DCSext.wt_ratd1=DCSext.wt_ratd2=""}var g=dcsEvt(a,"INPUT");if(g){var f=g.type||"";if(f&&(f=="submit"||f=="button"&&(a.which||a.keyCode)==13)){var d=b="";d=g.form.action||frmRatings.window.location.pathname;b="Content Ratings";var i=frmRatings.document.getElementById("txtFeedback");if(i.value!="")DCSext.wt_ratd2="Comment Submitted";else DCSext.wt_ratd2="No Comment Submitted";try{var e=1;while(frmRatings.document.getElementById("Rate"+e)!="undefined"){var h=frmRatings.document.getElementById("Rate"+e);if(h.checked)DCSext.wt_ratings=h.value.replace(/rate/gi,"");e++}}catch(j){}DCSext.wt_ratd1="Comment Fields";d!=""&&a.keyCode!=9&&dcsMultiTrack("DCS.dcsuri",d,"DCS.dcsqry","","WT.ti","FormButton:"+b,"WT.dl","cr","WT.ad","","WT.mc_id","","WT.sp","");DCS.dcsuri=DCS.dcsqry=qry=WT.ti=WT.dl=WT.fm=DCSext.wt_ratings=DCSext.wt_ratd1=DCSext.wt_ratd2=b=d=""}}}}function dcsAdv(){if(typeof gTrackEvents!="undefined"&&gTrackEvents){WT.wtsv=1;if(typeof WT.sp!="undefined")WT.sv_sp=WT.sp;dcsFunc("dcsET")}dcsFunc("dcsCookie");dcsFunc("dcsNvrRu");if(document.getElementById("frmRatings")){var a=document.getElementById("frmRatings").src;if(a.indexOf("ratings.aspx")!=-1)if(frmRatings.document.body.addEventListener){frmRatings.document.body.addEventListener("click",dcsContentRatings,true);frmRatings.document.body.addEventListener("keypress",dcsContentRatings,true)}else if(frmRatings.document.body.attachEvent){frmRatings.document.body.attachEvent("onclick",dcsContentRatings);frmRatings.document.body.attachEvent("keypress",dcsContentRatings)}}}var gImages=[],gIndex=0,DCS={},WT={},DCSext={},gQP=[],gI18n=false;if(window.RegExp)var RE={"%09":/\t/g,"%20":/ /g,"%23":/\#/g,"%26":/\&/g,"%2B":/\+/g,"%3F":/\?/g,"%5C":/\\/g},I18NRE={"%25":/\%/g};function dcsVar(){var d=new Date;WT.tz=d.getTimezoneOffset()/60*-1;if(WT.tz==0)WT.tz="0";WT.bh=d.getHours();WT.ul=navigator.appName=="Netscape"?navigator.language:navigator.userLanguage;if(typeof screen=="object"){WT.cd=navigator.appName=="Netscape"?screen.pixelDepth:screen.colorDepth;WT.sr=screen.width+"x"+screen.height}if(typeof navigator.javaEnabled()=="boolean")WT.jo=navigator.javaEnabled()?"Yes":"No";if(document.title)WT.ti=gI18n?dcsEscape(dcsEncode(document.title),I18NRE):document.title;WT.js="Yes";WT.jv=dcsJV();if(document.body&&document.body.addBehavior){document.body.addBehavior("#default#clientCaps");if(document.body.connectionType)WT.ct=document.body.connectionType;document.body.addBehavior("#default#homePage");WT.hp=document.body.isHomePage(location.href)?"1":"0"}if(parseInt(navigator.appVersion)>3)if(navigator.appName=="Microsoft Internet Explorer"&&document.body)WT.bs=document.body.offsetWidth+"x"+document.body.offsetHeight;else if(navigator.appName=="Netscape")WT.bs=window.innerWidth+"x"+window.innerHeight;WT.fi="No";if(window.ActiveXObject)for(var a=10;a>0;a--)try{var k=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+a);WT.fi="Yes";WT.fv=a+".0";break}catch(l){}else if(navigator.plugins&&navigator.plugins.length)for(var a=0;a<navigator.plugins.length;a++)if(navigator.plugins[a].name.indexOf("Shockwave Flash")!=-1){WT.fi="Yes";WT.fv=navigator.plugins[a].description.split(" ")[2];break}if(gI18n){WT.em=typeof encodeURIComponent=="function"?"uri":"esc";if(typeof document.defaultCharset=="string")WT.le=document.defaultCharset;else if(typeof document.characterSet=="string")WT.le=document.characterSet}if(typeof wtsp!="undefined")WT.sp=wtsp;WT.dl="0";WT.dcsvid=dcsGetCookie("MC1");DCS.dcsdat=WT.dcsdat=d.getTime();DCS.dcssip=window.location.hostname;DCS.dcsuri=window.location.pathname;var c=new Date;DCSext.wt_date=c.getFullYear()+"/"+(c.getMonth()+1)+"/"+c.getDate();DCSext.wt_dos=1;var h=5,b=window.location.pathname.substring(window.location.pathname.indexOf("/")+1,window.location.pathname.lastIndexOf("/")+1).toLowerCase();if(b=="")b="/";else{var e=b.split("/");b="";for(var a=1;a<e.length&&a<=h;a++){b+="/";for(var g=0;g<a;g++)b+=e[g]+"/";if(a!=h&&a!=e.length-1)b+=";"}}DCSext.wtDrillDir=b;DCSext.wtEvtSrc=window.location.hostname+window.location.pathname;if(window.location.search){DCS.dcsqry=window.location.search;if(gQP.length>0)for(var a=0;a<gQP.length;a++){var f=DCS.dcsqry.indexOf(gQP[a]);if(f!=-1){var i=DCS.dcsqry.substring(0,f),j=DCS.dcsqry.substring(f+gQP[a].length,DCS.dcsqry.length);DCS.dcsqry=i+j}}}if(window.document.referrer!=""&&window.document.referrer!="-")if(!(navigator.appName=="Microsoft Internet Explorer"&&parseInt(navigator.appVersion)<4))DCS.dcsref=gI18n?dcsEscape(window.document.referrer,I18NRE):window.document.referrer}function dcsA(a,b){return"&"+a+"="+dcsEscape(b,RE)}function dcsEscape(c,b){if(typeof b!="undefined"){var a=new String(c);for(R in b)a=a.replace(b[R],R);return a}else return escape(c)}function dcsEncode(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function dcsCreateImage(a){if(document.images){gImages[gIndex]=new Image;gImages[gIndex].src=a;gIndex++}else document.write('<IMG ALT="" BORDER="0" NAME="DCSIMG" WIDTH="1" HEIGHT="1" SRC="'+a+'">')}function dcsMeta(){var b;if(document.all)b=document.all.tags("meta");else if(document.documentElement)b=document.getElementsByTagName("meta");if(typeof b!="undefined")for(var c=1;c<=b.length;c++){var a=b.item(c-1);if(a.name)if(a.name.indexOf("WT.")==0)WT[a.name.substring(3)]=gI18n&&a.name.indexOf("WT.ti")==0?dcsEscape(dcsEncode(a.content),I18NRE):a.content;else if(a.name.indexOf("DCSext.")==0)DCSext[a.name.substring(7)]=a.content;else if(a.name.indexOf("DCS.")==0)DCS[a.name.substring(4)]=gI18n&&a.name.indexOf("DCS.dcsref")==0?dcsEscape(a.content,I18NRE):a.content}}function dcsTag(){if(document.cookie.indexOf("WTLOPTOUT=")!=-1)return;var a="http"+(window.location.protocol.indexOf("https:")==0?"s":"")+"://"+gDomain+(gDcsId==""?"":"/"+gDcsId)+"/dcs.gif?";for(N in DCS)if(DCS[N])a+=dcsA(N,DCS[N]);for(N in WT)if(WT[N])a+=dcsA("WT."+N,WT[N]);for(N in DCSext)if(DCSext[N])a+=dcsA(N,DCSext[N]);if(a.length>2048&&navigator.userAgent.indexOf("MSIE")>=0)a=a.substring(0,2040)+"&WT.tu=1";dcsCreateImage(a)}function dcsJV(){var a=navigator.userAgent.toLowerCase(),c=parseInt(navigator.appVersion),l=a.indexOf("mac")!=-1,i=a.indexOf("mozilla")!=-1&&a.indexOf("compatible")==-1,m=i&&c==4,j=i&&c>=5,h=a.indexOf("msie")!=-1&&a.indexOf("opera")==-1,e=h&&c==4&&a.indexOf("msie 4")!=-1,d=h&&!e,n=a.indexOf("opera")!=-1,f=a.indexOf("opera 5")!=-1||a.indexOf("opera/5")!=-1,g=a.indexOf("opera 6")!=-1||a.indexOf("opera/6")!=-1,k=n&&!f&&!g,b="1.1";if(j||k)b="1.5";else if(l&&d||g)b="1.4";else if(d||m||f)b="1.3";else if(e)b="1.2";return b}function dcsFunc(a){typeof window[a]=="function"&&window[a]()}function dcsNvrRu(){if(document.cookie.indexOf("WTLOPTOUT=")!=-1)return;var b=function(d){var b=document.cookie,e=b.indexOf(d+"="),c,a;if(e!=-1){c=e+d.length+1;a=b.indexOf(";",c);if(a==-1)a=b.length;return b.substring(c,a)}return null},d=new Date,a=new Date(d.getTime()+3.1536e11),c=new DcsNvrRu(b,a),e=new DcsNvr(b,a);c.run();e.run()}function DcsNvrRu(e,s){var b={fpcname:wt_nvr_ru,fpcdom:wt_fpcdom,domlist:wt_domlist,pathlist:wt_pathlist,paramlist:wt_paramlist,siteid:wt_siteid},a=[];this.run=function(){r();var a=q(),e,c,d;if(a){e=o();for(c=0;c<e.length;c++)document.cookie=e[c];d=document.cookie.indexOf(b.fpcname+"=")!=-1?"1":"2";if(a&1||a&2)WT.vt_nvr0=d;if(a&4)WT.vt_nvr1=d}};function r(){var j=0,i=e(b.fpcname),h,g,f,c,d;while(i){h=i.split(":");for(g=0;g<h.length;g++){f=h[g].split("=");c=f[0];d=[];if(f[1].length>0)d=f[1].split("|");if(typeof a[c]!="object")a[c]=d;else a[c]=a[c].concat(d)}j++;i=e(b.fpcname+j)}}function q(){var b=0,f=n(),e=l(),c=i();if(a.length>0){if(f.length>0&&d(0,f))b|=1;if(e.length>0&&d(1,e))b|=2;if(c.length>2&&g(2,c))b|=4}else{if(f.length>0){a[0]=[f];b|=1}else a[0]=[];if(e.length>0){a[1]=[e];b|=2}else a[1]=[];if(c.length>0){a[2]=[c];b|=4}else a[2]=[]}return b}function o(){for(var h=[],c={name:b.fpcname,value:"",expiry:"; expires="+s.toGMTString(),path:"; path=/",domain:"; domain="+b.fpcdom},d=0,i=4e3,e,g,f=0;f<a.length;f++){e=f+"=";for(g=0;g<a[f].length;g++)e+=(g===0?"":"|")+a[f][g];if((c.name+(d||"")).length+c.value.length+e.length+1<=i){if(c.value.length>0)c.value+=":";c.value+=e}else{h[d]=c.name+(d||"")+"="+c.value+c.expiry+c.path+c.domain;c.value=e;d++}}h[d]=c.name+(d||"")+"="+c.value+c.expiry+c.path+c.domain;return h}function n(){for(var c=j(),b=p(),a=0;a<b.length;a++)if(b[a]==c)return b[a];return""}function l(){for(var c=h(),b=m(),a=0;a<b.length;a++)if(c.indexOf(b[a])!=-1)return b[a];return""}function i(){for(var b=k(),d,h,a=0;a<b.length;a++){d=eval(b[a]);if(d&&d.length>0)return b[a]+"&"+d}var g=f(),c,e;for(a=0;a<g.length;a++){c=g[a].split("=");if(c.length==2)for(e=0;e<b.length;e++)if(b[e]==c[0])return c[0]+"&"+c[1]}return""}function d(b,e){for(var d=a[b],c=0;c<d.length;c++)if(d[c]==e)return false;a[b][a[b].length]=e;return true}function g(b,g){for(var c=g.split("&"),d,f,e=0;e<a[b].length;e++){d=a[b][e].split("&");if(d[0]==c[0]){for(f=1;f<d.length;f++)if(d[f]==c[1])return false;a[b][e]+="&"+c[1];return true}}a[b][a[b].length]=c[0]+"&"+c[1];return true}function c(a,c){var b=a?a.indexOf(c):-1;return b!=-1?a.substring(0,b):a}function j(){var a=c(window.location.hostname.toLowerCase(),b.fpcdom.toLowerCase());if(a.length===0)a="www";return a}function p(){for(var a=b.domlist.toLowerCase().split(","),d=0;d<a.length;d++){a[d]=c(a[d],b.fpcdom.toLowerCase());if(a[d].length===0)a[d]="www"}return a}function m(){for(var c=b.pathlist.toLowerCase().split(","),a,d=0;d<c.length;d++){a=c[d];if(a.length===0)a="/";else if(a.length>1){if(a.charAt(0)=="/")a=a.substr(1);if(a.charAt(a.length-1)=="/")a=a.substr(0,a.length-1)}if(a.length!=c[d].length)c[d]=a;if(b.siteid.length>0)c[d]=b.siteid+"&"+c[d]}return c}function h(){var a=window.location.pathname;a=a.substring(a.indexOf("/")+1,a.lastIndexOf("/")).toLowerCase();var c={"%09":/\t/g,"%20":/ /g,"%2C":/,/g,"%3B":/;/g};for(var d in c)a=a.replace(c[d],d);return b.siteid.length>0?b.siteid+"&"+a:a}function f(){return typeof DCS.dcsqry!="undefined"?DCS.dcsqry.substring(1).split("&"):[]}function k(){return b.paramlist.split(",")}}function DcsNvr(c,g){var b={fpcname:"WT_NVR",fpcdom:window.location.hostname,maxlevel:3},a=[];this.run=function(){f();var g,c,h;if(e()){g=d();for(c=0;c<g.length;c++)document.cookie=g[c];h=document.cookie.indexOf(b.fpcname+"=")!=-1?"1":"2";for(c=0;c<a.length;c++)if(a[c][1])WT["vt_nvr"+(c+2)]=h}};function f(){var j=0,k=/,/g,i=c(b.fpcname),g,e,f,d,h;while(i){g=i.split(":");for(e=0;e<g.length;e++){f=g[e].split("=");d=parseInt(f[0],10);h=f[1].replace(k,"|").split("|");if(typeof a[d]!="object")a[d]=[h,false];else a[d][0]=a[d][0].concat(h)}j++;i=c(b.fpcname+j)}}function e(){var g=false,d=0,f=[],h=window.location.pathname,e=h.substring(h.indexOf("/")+1,h.lastIndexOf("/")).toLowerCase(),i={"%09":/\t/g,"%20":/ /g,"%2C":/,/g,"%3B":/;/g};for(var k in i)e=e.replace(i[k],k);if(e.length>1){f=e.split("/",b.maxlevel);d=f.length;e=f.join("/")}var j=false,c;if(a.length>0)if(a.length>d){for(c=0;c<a[d][0].length;c++)if(a[d][0][c]==e){j=true;break}if(!j){a[d][0][a[d][0].length]=e;a[d][1]=true;g=true}}else{for(c=0;c<d+1;c++)if(typeof a[c]!="object")a[c]=[[c===0?"/":f.slice(0,c).join("/")],true];g=true}else{for(c=0;c<d+1;c++)a[c]=[[c===0?"/":f.slice(0,c).join("/")],true];g=true}return g}function d(){for(var k=[],c={name:b.fpcname,value:"",expiry:"; expires="+g.toGMTString(),path:"; path=/",domain:"; domain="+b.fpcdom},j=[],e=0,l=10,m=4e3,i=false,f,d,h=0;h<a.length&&!i;h++){j=a[h][0];f=h+"=";for(d=0;d<j.length&&!i;d++){f+=(d===0?"":"|")+j[d];if((c.name+e).length+c.value.length+f.length+1<=m){if(c.value.length>0&&d===0)c.value+=":";c.value+=f}else if(c.value.length>0){k[e]=c.name+(e||"")+"="+c.value+c.expiry+c.path+c.domain;c.value=h+"="+j[d];if(++e>l-1)i=true}f=""}}if(!i)k[e]=c.name+(e||"")+"="+c.value+c.expiry+c.path+c.domain;return k}}dcsVar();dcsMeta();dcsFunc("dcsAdv");dcsTag();