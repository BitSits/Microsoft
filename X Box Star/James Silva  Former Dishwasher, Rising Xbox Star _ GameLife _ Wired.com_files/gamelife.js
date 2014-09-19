document.write('<!-- Template Id = 2,593 Template Name = Banner Creative (Flash) -  In Page --><!-- Copyright 2006 DoubleClick Inc., All rights reserved. --><script src=\"http://s0.2mdn.net/879366/flashwrite_1_2.js\"><\/script>');document.write('\n');

function DCFlash(id,pVM){
var swf = "http://s0.2mdn.net/1102014/ForCarat_300250.swf";
var gif = "http://s0.2mdn.net/1102014/300x250_flash_static_backup_v2.jpg";
var minV = 9;
var FWH = ' width="300" height="250" ';
var url = escape("http://ad.doubleclick.net/click%3Bh%3Dv8/3981/3/0/%2a/b%3B222745968%3B0-0%3B0%3B46101412%3B4307-300/250%3B35733731/35751572/1%3B%3B%7Eaopt%3D0/ff/5b/ff%3B%7Efdr%3D222914531%3B0-0%3B0%3B14926430%3B4307-300/250%3B35858924/35876778/1%3B%3B%7Eaopt%3D2/1/5b/0%3B%7Esscs%3D%3fhttp://www.facebook.com/ABSOLUT?v=app_11007063052&ref=ts");
var wmode = "opaque";
var bg = "same as SWF";
var dcallowscriptaccess = "always";

var openWindow = "false";
var winW = 600;
var winH = 400;
var winL = 0;
var winT = 0;

if(typeof(encodeURIComponent)=="function"){url=encodeURIComponent(unescape(url));}
var fv='"clickTag='+url+'&clickTAG='+url+'&clicktag='+url+'"';
var bgo=(bg=="same as SWF")?"":'<param name="bgcolor" value="#'+bg+'">';
var bge=(bg=="same as SWF")?"":' bgcolor="#'+bg+'"';
function FSWin(){if((openWindow=="false")&&(id=="DCF0"))alert('openWindow is wrong.');if((openWindow=="center")&&window.screen){winL=Math.floor((screen.availWidth-winW)/2);winT=Math.floor((screen.availHeight-winH)/2);}window.open(unescape(url),id,"width="+winW+",height="+winH+",top="+winT+",left="+winL+",status=no,toolbar=no,menubar=no,location=no");}this.FSWin = FSWin;
ua=navigator.userAgent;
if(minV<=pVM&&(openWindow=="false"||(ua.indexOf("Mac")<0&&ua.indexOf("Opera")<0))){
	var adcode='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+id+'"'+FWH+'>'+
		'<param name="movie" value="'+swf+'"><param name="flashvars" value='+fv+'><param name="quality" value="high"><param name="wmode" value="'+wmode+'"><param name="base" value="'+swf.substring(0,swf.lastIndexOf("/"))+'"><PARAM NAME="AllowScriptAccess" VALUE="'+dcallowscriptaccess+'">'+bgo+
		'<embed src="'+swf+'" flashvars='+fv+bge+FWH+' type="application/x-shockwave-flash" quality="high" swliveconnect="true" wmode="'+wmode+'" name="'+id+'" base="'+swf.substring(0,swf.lastIndexOf("/"))+'" AllowScriptAccess="'+dcallowscriptaccess+'"></embed></object>';
  if(('j'!="j")&&(typeof dclkFlashWrite!="undefined")){dclkFlashWrite(adcode);}else{document.write(adcode);}
}else{
	document.write('<a target="_blank" href="'+unescape(url)+'"><img src="'+gif+'"'+FWH+'border="0" alt="" galleryimg="no"></a>');
}}
var pVM=0;var DCid=(isNaN("222745968"))?"DCF0":"DCF222745968";
if(navigator.plugins && navigator.mimeTypes.length){
  var x=navigator.plugins["Shockwave Flash"];if(x && x.description){var pVF=x.description;var y=pVF.indexOf("Flash ")+6;pVM=pVF.substring(y,pVF.indexOf(".",y));}}
else if (window.ActiveXObject && window.execScript){
  window.execScript('on error resume next\npVM=2\ndo\npVM=pVM+1\nset swControl = CreateObject("ShockwaveFlash.ShockwaveFlash."&pVM)\nloop while Err = 0\nOn Error Resume Next\npVM=pVM-1\nSub '+DCid+'_FSCommand(ByVal command, ByVal args)\nCall '+DCid+'_DoFSCommand(command, args)\nEnd Sub\n',"VBScript");}
eval("function "+DCid+"_DoFSCommand(c,a){if(c=='openWindow')o"+DCid+".FSWin();}o"+DCid+"=new DCFlash('"+DCid+"',pVM);");
//-->

document.write('\n<noscript><a target=\"_blank\" href=\"http://ad.doubleclick.net/click%3Bh%3Dv8/3981/3/0/%2a/b%3B222745968%3B0-0%3B0%3B46101412%3B4307-300/250%3B35733731/35751572/1%3B%3B%7Eaopt%3D0/ff/5b/ff%3B%7Efdr%3D222914531%3B0-0%3B0%3B14926430%3B4307-300/250%3B35858924/35876778/1%3B%3B%7Eaopt%3D2/1/5b/0%3B%7Esscs%3D%3fhttp://www.facebook.com/ABSOLUT?v=app_11007063052&ref=ts\"><img src=\"http://s0.2mdn.net/1102014/300x250_flash_static_backup_v2.jpg\" width=\"300\" height=\"250\" border=\"0\" alt=\"\" galleryimg=\"no\"></a></noscript>\n');
