//  Copyright (c) 2000-2010 ZEDO Inc. All Rights Reserved.
var r9=new Image();
function F8(r13){
var o9=r13.toString().match(/function\s+(\w*)/)[1];
if((o9==null)||(o9.length==0)){
return "anonymous();";
}
else{
return o9+"();";
}}
function U8(){
var z12="";
for(var a=arguments.caller;a!=null;a=a.caller){
z12+=F8(a.callee);
if(a.caller==a)break;
}
return z12;
}
function B8(){
var o4="";var o9="anonymous();";var a11=0;
window.onerror=null;
for(var i=0;i<arguments.length;i++){
o4+='a'+i+'='+arguments[i]+';';
if(i==2){
a11=escape(arguments[i]);
}}
o4=U8()+o4;
if(navigator.cookieEnabled){
o4=o4+'c='+navigator.cookieEnabled+';';
}
o4=o4+"C="+document.cookie+";";
if(document.cookie.indexOf('FFERROR')==-1){
var o13='ads5';
r9.src='http://r1.zedo.com/log/ERR.gif?v=bar/v16-400/d2;'+o4+'b='+navigator.userAgent;
document.cookie="FFERROR="+a11;
}
return true;
}
window.onerror=B8; 
var p9=new Array();var w10=0;
function F0(t2){
if(w10<1){
var r6=''+window.location.search;var v9=new Array();var y9=r6.indexOf(';l=')+1;
if(y9>1){
p9['l']=r6.substring(y9+2);
r6=r6.substring(0,y9);
}
r6=r6.replace(/^\?/,'');
v9=r6.split(';');
w10=v9.length;
for(var i=0;i<w10;i++){
if(v9[i].length>2){
var o12=v9[i].split('=');
p9[o12[0]]=o12[1];
}}}
if(p9[t2]){return p9[t2];}
else{return '';}
}
function F5(){
var n0=U0('ZEDOIDX',false);var z1=navigator.userAgent.toLowerCase();var z14=((z1.indexOf('mac')!=-1)&&(z1.indexOf('msie 4.')!=-1));var w3=navigator.javaEnabled();var i8=0;
n0=1;
if(z14){
return n0;
}
else if(navigator.mimeTypes&&
navigator.mimeTypes["application/x-shockwave-flash"]&&
navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){
var a2=navigator.plugins["Shockwave Flash"].description;
if(parseInt(a2.substring(a2.indexOf(".")-2))>=4){
i8=1;
}}}
if(w3){n0 |=4;}
if(i8){n0 |=8;}
if(!F3()){
n0 |=16;
}
else{
n2=new Date();
z2.src="http://simg.zedo.com/speed-test/10k.gif?"+zzRand;
z2.onload=F1;
if(n0<16){
B0('ZEDOIDX',n0,432000000);
}
else{
B0('ZEDOIDX',n0,2592000000);
}}
return n0;
}
var r1=0;var r0=0;var d3=0;var i14=new Image();
var z3=new Array();
function B0(y6,n6,a6){
var i1=new Date();
if(!a6){a6=31536000000;}
i1.setTime(i1.getTime()+a6);
document.cookie=y6+'='+n6+';expires='+i1.toGMTString()+';domain=.zedo.com;path=/;';
}
function U0(t2,t7){
if(!z3[t2]||t7){
var q8=document.cookie;var p1=new Array();var p6=new Array();
p1=q8.split(';');
var p7=(p1!=null)?p1.length:0;
for(var i=0;i<p7;i++){
p1[i]=p1[i].replace(/^\s/,'');
p6=p1[i].split('=');
z3[p6[0]]=p6[1];
}}
if(z3[t2]){return z3[t2];}
else{return '';}
}
function F2(){
var a1=new Date();var t0=new Date();
t0.setUTCHours(5);
t0.setUTCMinutes(0);
t0.setUTCSeconds(0);
var t4=t0.getTime()-a1.getTime();
if(t4<0){
t0.setUTCDate(t0.getUTCDate()+1);
t4=t0.getTime()-a1.getTime();
}
return t4;
}
var n2;var z2=new Image();
function F1(){
var i5=new Date();var d5=i5.getTime()-n2.getTime();var z5=10239/d5;
if(z5>6){
var n0=U0('ZEDOIDX',false);
n0 |=16;
if(F3()){
if(n0<16){
B0('ZEDOIDX',n0,432000000);
}
else{
B0('ZEDOIDX',n0,2592000000);
}}}}
function includeFile(src){
var xmlHttp;
try{
xmlHttp=new XMLHttpRequest();
}catch(e){
try{
xmlHttp=new ActiveXObject('Msxml2.XMLHTTP');
}catch(e){
try{
xmlHttp=new ActiveXObject('Microsoft.XMLHTTP');
}catch(e){
if(document.cookie.indexOf('FFERROR')==-1){
var a13=new Image();var o4='Your browser does not support AJAX!';
a13.src='http://r1.zedo.com/log/ERR.gif?v=bar/v16-400/d2;'+o4+'b='+navigator.userAgent;
document.cookie="FFERROR=0";
}
return false;
}}}
xmlHttp.open('GET',src,false);
xmlHttp.send(null);
if(xmlHttp.status==200){
eval(xmlHttp.responseText);
}}
function F3(){
if(document.cookie.indexOf('ZEDOIDX')!=-1){
return true;
}else{
return false;
}}
function U1(){
var n0=U0('ZEDOIDX',false);var z1=navigator.userAgent.toLowerCase();var d6=(z1.indexOf('mac')!=-1);var d4=(!d6&&(z1.indexOf('msie 5')!=-1)||(z1.indexOf('msie 6')!=-1));
document.writeln('<scri'+'pt language=VBS'+'cript>');
document.writeln('on error resume next');
document.writeln('r0=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))');
document.writeln('if(r0<=0)then r0=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))');
document.writeln('</scr'+'ipt>');
var w3=navigator.javaEnabled();
n0=1;
if(w3){n0 |=4;}
if(r0){n0 |=8;}
if(d4){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
n0 |=16;
}}
else{ 
if(F3()){
n2=new Date();
z2.src="http://simg.zedo.com/speed-test/10k.gif?"+zzRand;
z2.onload=F1;
}
else{
n0 |=16;
} 
}
if(F3()){
if(n0<16){
B0('ZEDOIDX',n0,432000000);
}
else{
B0('ZEDOIDX',n0,2592000000);
}}
return n0;
}
function F7(d7){
var n4=0;var i1=new Date();var c10=U0('FFcat',false);var v11=U0('FFad',false);
if(!c10){
c10=d7;
v11="-1";
c2=U0('FFSkp',false);
if(c2.length>0){
i1.setUTCDate(i1.getUTCDate()-1);
document.cookie='FFSkp=1;expires='+i1.toGMTString()+';domain='+document.domain+';path=/;';
}}
n4=B7(c10,v11,d7);
zzPos=n4;
return n4;
}
function B7(n7,d8,d7){
var i12=false;var o5=n7.split(":");var a5=d8.split(":");var n4=0;var p13=0;var i;
for(i=0;i<o5.length;i++){
if(o5[i]==d7){
p13=o5[i];
a5[i]++;
if(a5[i]>101){a5[i]=0;}
n4=a5[i];
if(isNaN(n4)){
i14.src='http://r1.zedo.com/ads3/p/'+zzRand+'/NaN.gif?v=bar/v16-400/d2;C='+document.cookie+';b='+navigator.userAgent;
n4=0;
a5[i]=0;
}
i12=true;
break;
}}
if(!i12&&o5.length<60){
n7=d7+":"+n7;
d8=0+":"+d8;
}
else{
if(i==o5.length){
i--;
}
for(var j=i;j>0;j--){
o5[j]=o5[j-1];
a5[j]=a5[j-1];
}
o5[0]=d7;
a5[0]=n4;
n7=o5.join(":");
d8=a5.join(":");
}
if(F3()){
var t4=F2();
B0('FFcat',n7,t4);
B0('FFad',d8,t4);
}
else{
n4=Math.floor((Math.random()* 1000000)% 20);
}
return n4;
}
function B4(p10,a12){
if(p10.length<1){
return 0;
}
if((p10==0)&&(a12>0)){
return 1;
}
if(p10>a12){
return 1;
}else{
return 0;
}}
function F4(q4){
if(q4>255){
q4=(q4 & 255);
}
return q4;
}
function B5(q4){
var v12=0;
if(q4>255){
v12=((q4>>16)& 4095);
}
return v12;
}
function U4(q4){
var q12=0;
if(q4>255){
q12=((q4>>8)& 255);
}
return q12;
}
function B2(){
var n12=10;var p12=new Date();var v6=p12.getUTCMinutes();var c11=p12.getUTCHours();
v6=v6+(n12-(v6 % n12));
if(v6==60){
c11++;
v6="00";
}
return U5(c11)+""+U5(v6);
}
function U5(n13){
var e9=""+n13
if(e9.length<2){
e9="0"+e9;
}
return e9;
}
function B0(y6,n6,a6){
if(n6.length>=3000){
U7(y6,n6);
}
var i1=new Date();
if(!a6){a6=31536000000;}
i1.setTime(i1.getTime()+a6);
document.cookie=y6+'='+n6+';expires='+i1.toGMTString()+';domain=.zedo.com;path=/;';
}
function U0(t2,t7){
if(!z3[t2]||t7){
var q8=document.cookie;var p1=new Array();var p6=new Array();
p1=q8.split(';');
var p7=(p1!=null)?p1.length:0;
for(var i=0;i<p7;i++){
p1[i]=p1[i].replace(/^\s/,'');
p6=p1[i].split('=');
z3[p6[0]]=p6[1];
}}
if(z3[t2]){return z3[t2];}
else{return '';}
}
function F2(){
var a1=new Date();var t0=new Date();
t0.setUTCHours(5);
t0.setUTCMinutes(0);
t0.setUTCSeconds(0);
var t4=t0.getTime()-a1.getTime();
if(t4<0){
t0.setUTCDate(t0.getUTCDate()+1);
t4=t0.getTime()-a1.getTime();
}
return t4;
}
function U6(){
var a1=new Date();var v3=a1.getDate();
if(v3>=0&&v3<=9)
v3="0"+v3;
var q3=a1.getMonth()+1;
if(q3>=0&&q3<=9)
q3="0"+q3;
var a10=(a1.getFullYear()).toString()+q3+v3;
return a10;
}
function U7(t13,w12){
var o11=w12.length / 4;var z10=w12;var y13=(U0('ZEDOIDA')=='')?'unknown':U0('ZEDOIDA');
for(var i=0;i<4;i++){
var a13=new Image();var w13=escape(z10.substring(0,o11-1));
z10=z10.substring(o11);
var o4=t13+'.length>3KB;'+'u='+y13+';'+'c'+i+'='+w13;
a13.src='http://r1.zedo.com/log/ERR.gif?'+o4+';b='+navigator.userAgent;
}}
function B6(){
var n5=new Array('d1','d2','d3','d4','d5','d6','d7','d8','d9','da','db','dc','dd','de','df');
return n5;
}
function B3(){
var t12=B6();var e12=new Array();
for(var i=0;i<t12.length;i++){
e12[i]=t12[i].substring(1);
}
return e12;
}
function F6(){
var d11=B6();var i7=new Array();var c13=new RegExp(",","g");
for(var i=0;i<d11.length;i++){
i7[i]=F0(d11[i]);
if(i7[i]!=""){
i7[i]=i7[i].replace(c13,"Z");
}}
return i7;
}
var d13=F0('ck');
if(d13==1){
var o0=F0('n');var w6=F0('e');
if(w6==1){
var t1=U0('ZFFdm',true);var a3='ZFFdm';
}else{
var t1=U0('FFdm',true);var a3='FFdm';}
var zzuid="unknown";
if(document.cookie.indexOf('FFgeo')==-1)
zzuid='blocked';
if(document.cookie.match(/ZEDOIDA=([^;]*)/)){
zzuid=RegExp.$1;
}
if(zzuid=="OPT_OUT"&&t1.length>0){
var i1=new Date('October 12,1988 13:14:00');
document.cookie=a3+'=1;expires='+i1.toGMTString()+';domain=.zedo.com;path=/;';
}
if(zzuid!="OPT_OUT"){
var w6=F0('e');
if(!o0){o0=0;}
if(w6.length==0){w6=0;}
var e7=new Array();var q11=new Array();var i9=new Array();var y8=new Array();var n9=new Array();
q11=B3();
y8=F6();
var t5=0;
for(var i=0;i<y8.length;i++){
if(y8[i]!=""){
e7[t5]=q11[i];
i9[t5++]=y8[i];
}}
var q0=o0+"-"+U6();
for(var p=0;p<t5;p++){
q0=q0+","+e7[p]+"|"+i9[p];
n9[p]=e7[p]+"|";
}
var c7=false;var v5=false;
if(t1.length>0){
var n1=t1.split(":");var i,k;
for(i=0;i<n1.length;i++){
if(n1[i].length>0&&n1[i].substring(0,n1[i].indexOf("-"))==o0){
var d1=n1[i].split(",");var c5=d1.length;
for(var q=0;q<t5;q++){
v5=false;
for(k=1;k<c5;k++){
if(d1[k].substring(0,d1[k].indexOf('|')+1)==n9[q]){
v5=true;
break;
}}
if(!v5&&c5<15){
d1[0]=d1[0]+","+n9[q]+i9[q];
}else{
if(k==c5){
k--;
}
for(var j=k;j>1;j--){
d1[j]=d1[j-1];
}
d1[1]=n9[q]+i9[q];
}}
q0=d1.join(",")
c7=true;
break;
}}
if(!c7&&n1.length<40){
t1=q0+":"+t1;
}else{
if(i==n1.length){
i--;
}
for(var j=i;j>0;j--){
n1[j]=n1[j-1];
}
n1[0]=q0;
t1=n1.join(":");
}
}else{
t1=q0;
}
B0(a3,t1,31536000000);
}}
var r2='http://yads.zedo.com/ads5/';var v10='http://d2.zedo.com/ads6/';var e10='http://d7.zedo.com/ads6/';var i0=U0('ZEDOIDX',false);var a0=254;var o6="";var p2=0;var ftn=0;var c0='';var t3="";
var q1=0;var z8=0;var w7='';var e5='';var c2='';var z11=0;var w1=new Date();var r8=new Date();var a7='';var p0=navigator.userAgent.toLowerCase();var i3=parseInt(navigator.appVersion);
var r5=((p0.indexOf('msie')!=-1)&&(p0.indexOf('opera')==-1)&&(p0.indexOf('webtv')==-1));var t9=(r5&&(i3>=4));var c4=(p0.indexOf('mac')!=-1);
var y4=((p0.indexOf('mac')!=-1)&&(p0.indexOf('msie 4.')!=-1));var q7=(p0.indexOf('webtv')!=-1);var t8=((p0.indexOf('gecko')!=-1)&&(i3==5));var q5=(p0.indexOf('opera')!=-1);var o0=F0('n');
var d2=F0('w');var e2=F0('h');var z0=F0('c');var e0=F0('d');var v0=F0('s');var c1=F0('q');var c3=F0('l');var p8=unescape(F0('t'));var i11=F0('y');var i13=F0('a');var o2="";var w2="";
var a9=new Array();var d9=new Array();var v8=new Array();var p11='';var p3="";var z7="";var c14=F2();var zd_$_value=F0('$');var e6=U0('FFpb',false);
p3=e6.match(eval('/'+o0+':[^\$]*/'));
if(!p3){p3='';}
if(zd_$_value||p3){
if(p3){
p3=p3[0].split(':')[1];
if(p3.match(zd_$_value)){
zd_$_value='';
}}
if(zd_$_value){
zd_$_value=zd_$_value+',';
}
z7=o0+':'+zd_$_value+p3;
z7=z7.replace(/^,+|,+$/g,'');
if(e6){
if(p3){
e6=e6.replace(eval('/'+o0+':[^\$]*/'),z7);
}else{
e6=e6+'$'+z7;
}
}else{
e6=z7;
}
c1=c1+','+zd_$_value+p3;
c1=c1.replace(/^,+|,+$/g,'');
B0('FFpb',e6,c14);
}
if(!o0){o0=0;}
if(!d2){d2=0;}
if(!e2){e2=0;}
if((!z0)||(z0<0)||(z0>999999)){z0=0;}
if(!e0){e0=0;}
if(e0<0||e0>95){
e0=0;
}
if(!v0){v0=0;}
if(isNaN(parseInt(i0)))i0=0;
var zzStr='';
if(typeof zzCountry=='undefined'){
var zzCountry=255;}
if(typeof zzMetro=='undefined'){
var zzMetro=0;}
if(typeof zzState=='undefined'){
var zzState=0;}var zzSection=v0;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzPat='';var zzSkip='';var zzExp='';var zzTrd='';var zzPos=0;
var zzNw=0;var zzCh=0;var zzDmCodes=new Array();var zzDmValues=new Array();var zzBr=99;var zzLang=99;var zzAGrp=0;var zzAct=new Array();var zzActVal=new Array();
var w0='';var i2='';
if(navigator.userAgent.match(/(Chrome)\/(\d+)\.\d+/)!=null){
w0=RegExp.$1+"_"+RegExp.$2;
}
else if(navigator.userAgent.match(/(Opera)\/(\d+)\.\d*/)!=null){
w0=RegExp.$1+"_"+RegExp.$2;
}
else if(navigator.userAgent.match(/.*(iPhone).*(Safari)\/(\d+)\.\d*/)!=null){
w0="Safari_iphone";
}
else if(navigator.userAgent.match(/(Safari)\/(\d+)\.\d*/)!=null){
w0=RegExp.$1+"_"+RegExp.$2;
}
else if(navigator.userAgent.match(/(Navigator)\/(\d+)\.\d*/)!=null){
w0="NNavigator_"+RegExp.$2;
}
else if(navigator.userAgent.match(/(Firefox)\/(\d+)\.\d*/)!=null){
w0=RegExp.$1+"_"+RegExp.$2;
}
else if(navigator.userAgent.match(/(Netscape6)\/(\d+)\.\d*/)!=null){
w0="NNavigator_"+RegExp.$2;
}
else if(navigator.userAgent.match(/(Netscape)\/(\d+)\.\d*/)!=null){
w0="NNavigator_"+RegExp.$2;
}
else if(navigator.userAgent.match(/.*(MSIE)\s+(\d+)\.\d*;/)){
w0=RegExp.$1+"_"+RegExp.$2;
}
if(typeof(zzblist['Others'])=="undefined"){
zzblist['Others']=99;
}
if(typeof w0!="undefined"){
if(typeof(zzblist[w0])=="undefined"){
w0=w0.substring(0,(w0.indexOf('_')+1));
}
if(typeof(zzblist[w0])!="undefined"){
zzBr=zzblist[w0];
}
else{
zzBr=zzblist['Others'];
}}
/*if(navigator.userAgent.match(/.*(MSIE)\s+(\d+)\.\d*;/)){
i2=navigator.systemLanguage;
}
else{
i2=navigator.language;
}*/
if(typeof(zzllist['ot'])=="undefined"){
zzllist['ot']=99;
}
i2=zzl;
if((i2.indexOf('zh'))!=0){
i2=i2.substring(0,2);
}
if(typeof(zzllist[i2])!="undefined"){
zzLang=zzllist[i2];
}
else{
zzLang=zzllist['ot'];
}
if(c4&&r5){
var z4=document.createElement("div");
z4.className="zd_src";
z4.id="zd_src";
document.body.appendChild(z4);
}
d9=B3();
v8=F6();
for(var i=0;i<v8.length;i++){
if(v8[i]!=""){
zzDmValues[d9[i]]=v8[i];
zzDmCodes[zzDmCodes.length]=d9[i];
a9[a9.length]=zzDmCodes[zzDmCodes.length-1]+":"+zzDmValues[d9[i]];
}}
if(a9.length!=0){
p11='&dm='+a9;
}
if(o0!=0){
zzNw=o0;
}
if(document.getElementById||document.all){
if(p8){
document.title=p8;
}}
if(c1!=""){
c1=unescape(c1);
var d10=c1.replace(/&/g,'zzazz');
a7='&q='+escape(d10);
c1=';q='+escape(c1);
zzPat=c1;
}
if(c3!=""){
zzTrd=escape(c3);
c3='&l='+escape(c3);
}
zzCustom=escape(F0('p'));
if(zzCustom.length>1)
w2='&p='+zzCustom;
var n8=z0.toString().indexOf('/');
if(n8!=-1){
q1=parseInt(z0.substr(0,n8));
}else{
q1=parseInt(z0);
}
zzCh=q1;
z8=parseInt(o0)+","+parseInt(q1);
q1=parseInt(q1)+(parseInt(o0)* 1000000);
if(i0<=0||i0>31){
if(document.all&&!c4&&!q5){
i0=U1();
}else{
i0=F5();
}}
if(i0<=0||i0>31){
i0=1;
}
i0=((e0<<8)|i0);
d3=z8+","+e0;
r1=F7(d3);
var r10=r1;var p5=U0(d3,false);
if(document.cookie.indexOf('FFcat')==-1&&document.cookie.indexOf('ZCBC')==-1){
i0=i0 | 2;
}
r8.setTime(r8.getTime()+F2());
w1.setUTCHours(w1.getUTCHours()+4);
w1.setUTCMinutes(w1.getUTCMinutes());
w1.setUTCSeconds(w1.getUTCSeconds());
zzSkip=';expires='+w1.toGMTString()+';domain='+document.domain+';path=/;';
zzExp=';expires='+w1.toGMTString()+';domain='+document.domain+';path=/;';
zzStr='i='+r1+';';
if(p5.length>0&&p5!=0){
w7=p5;
var c6=w7.split(',');
if(c6!=null&&c6.length>1){
r1=c6[0];
}}
else{
e5=p5;
if(parseInt(e5)==0){
if((F3())&&(r1==0)){
B0(d3,0,-2592000000);
}}
else{
c2=U0('FFSkp',false);
if(c2.length>0){
if(c2.indexOf(d3+",1:")>=0){
z11=1;
}
if((c2.indexOf(d3+":")>=0)||(c2.indexOf(d3+",1:")>=0)){
if(r1==0){
var i1=new Date("October 12,1988 13:14:00");
document.cookie='FFSkp='+c2+';expires='+i1.toGMTString()+';domain=.'+document.domain+';path=/;';
zzSkip=":"+zzSkip;
}
else{
e5=0;
}}
else{
zzSkip=':'+c2+zzSkip;
}}
else{
zzSkip=":"+zzSkip;
}}}
var zzsrand=Math.random();
if(i11!=''){
zzsrand=i11;
}
if((F0('gc')&&(typeof e13!='undefined')&&(e13=='demographic'))
||(!F0('gc')||isNaN(F0('gc')))){
if(zzGeo==254){
a0=U0('FFgeo',false);
}else{ 
a0=zzGeo; 
}
}else{
a0=F0('gc');
o2="&gc="+a0;
}
if(isNaN(parseInt(a0))){a0=254;o2="&gc="+a0;}
a0=parseInt(a0);
p2=parseInt(F4(a0));
zzCountry=p2;
if(a0>255){
zzState=U4(a0);
if(zzState!=0){
o6=";w="+zzState;
}
zzMetro=B5(a0);
if(zzMetro!=0){
o6+=";m="+zzMetro;
}}
if(document.cookie.match(/ZEDOIDA=([^;]*)/))
zzuid=RegExp.$1;
zzStr=zzStr+'u='+zzuid+';1='+zzBr+';2='+zzLang+';e=i;s='+v0+';g='+p2+o6+c1+';z='+Math.random();
if(B4(e5,r1)){
if(z11==1){
if(i13==1){
c0='http://d2.zedo.com/ads3/i/'+i0+'/'+a0+'/'+q1+'/b.js';
}}
else if(z11!=1){
c0='http://d2.zedo.com/ads3/i/'+i0+'/'+a0+'/'+q1+'/b.js';
}
}else{
includeFile('http://d2.zedo.com/ads2/e/'+o0+'/eli.js');
c0='http://d2.zedo.com/ads6/'+'d/'+i0+'/'+p2+'/'+o0+'/'+ftn+'/'+z0+'/i.js?z='+B2();
}
if(c0!=''){
if(c4&&r5){
document.getElementById("zd_src").innerHTML='<scr'+'ipt language="JavaScript" src="'+c0+'"></sc'+'ript>';
}else{
document.write('<scr'+'ipt language="JavaScript" src="'+c0+'"></sc'+'ript>');
}}
if(zzuid!="unknown"){
if(!(zzuid.match(/^[A-Za-z0-9@-~]*$/))){
var i1=new Date('October 12,1988 13:14:00');
document.cookie='ZEDOIDA=-1;expires='+i1.toGMTString()+';domain=.zedo.com;path=/;';
q2.src='http://h.zedo.com/init/'+Math.random()+'/g.gif';
}}