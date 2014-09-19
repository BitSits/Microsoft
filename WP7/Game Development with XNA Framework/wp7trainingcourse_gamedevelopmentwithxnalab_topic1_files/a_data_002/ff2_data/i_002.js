

var zxpixie = new Image();
var zzpx2 = ";x=3593;g=78,0;c=929000286,929000286;i=1;n=929;" + zzStr;
var zxa,zxi,zxv,zxp,zxx,zxc,zxt,zxf,zxq,pTotal,zxran,zxl,zxpos,zxiid,zxPat,zxcdn,pObj,zxbr,zxlang;
var zxchp,zxchs,zxnw,zxch1,zxch2=-1;zxpos=0;zxbr=0;zxlang=0;zxiid=3593;zxcdn="";
var ainfo='', spcinfo='', profRate='';
var zzSSetId;function ri(){
zxa=-1;zxi=-1;zxv=1;zxp="r=1";zxx=0;zxc=1;zxt="";zxf=0;zxq=0;zxd=0;zft=-1;zxl=-1;zcxq=0;zcxd=0;zcft=-1;zcxf=0;
}
var bl=new Array();
var v=new Array();
var zxDate = new Date();
zxPat='';
pTotal=0;zxran=Math.random()*1000000000002;
if (typeof zzPos  != 'undefined') {
	zxpos  = zzPos ;
}
if (typeof zzBr != 'undefined') {
	zxbr  = zzBr ;
}
if (typeof zzLang != 'undefined') {
	zxlang  = zzLang ;
}
ri();
zxcdn="http://d2.zedo.com/";
zxchp=929000286, zxchs=929000286;
zxch1=zxchp, zxch2=zxchs;function dFC(ad,cpid,cval,cdur,ct,cmpid,cmval,cmdur,cmt,impr,ptot,pi,g,idx,xv,lvl,xc,blist){
if((zxa<0||zxl<lvl) && !blist ){
var px=impr;
if (ct==1 || ct==2)px=zzIsCapReached(zzNwId,cpid,cval,cdur)?0:impr;
else if (ct==3)px=zzIsChanCapReached(zzNwId,zzChanId,ad,cval,cdur)?0:impr;
if (px>0 && cmt==1)px=zzIsCapReached(zzNwId,cmpid,cmval,cmdur)?0:impr;
pTotal=ptot;
zzRand=Math.floor(zxran%pTotal);
if(idx==-1){idx =3593;}
if(zzRand<px){ri();zxt=pi;zxp=g;zxx=idx;zxa=ad;zxv=xv;zxl=lvl;zxf=cpid;zxq=cval;zxd=cdur;zft=ct;zcxf=cmpid;zcxq=cmval;zcxd=cmdur;zcft=cmt;zxc=xc;}}}

function ibl(ad){
return((typeof bl!='undefined')&&((typeof bl[ad]!='undefined')||((typeof zzChanId!='undefined')&&(typeof bl[ad+'_'+zzChanId]!='undefined'))))?true:false;}
function getV(ad,ver){
var nver=0;if ((typeof v!='undefined')&&(typeof v[ad]!='undefined')){ nver=v[ad];}
if(nver>ver){ver=nver;}
return ver;
}
var zzNwId = 929;
var zzChanId = 286;
var zzDim = 14;
var zzDp = new Array();
zxnw = zzNwId;
function runIdx() {




if (typeof zzStr  != 'undefined') {
	zxStr  = zzStr ;
}
zzInclude('http://d2.zedo.com/ads2/e/929/eli.js');

if(zxa<0 || zxl<2211000) {
if(!ibl(850605)){
ri();zxx=3584;zxa=850605;zxv=1000002;zxl=2211000;}
}





if (zxa>0) {if (zxc>0) {var zzEnd = new Date();var zd_time_taken='';if (typeof (zzStart) != 'undefined' ) { zd_time_taken = "q=" + (zzEnd.getTime() - zzStart.getTime()) + ";";}zxpixie.src = "http://m4.zedo.com/log/p.gif?a=" + zxa + ";" + zxt + ";" + zxp + ";x=3593;g=78,0;c=929000286,929000286;i=1;n=929;" + zd_time_taken + ainfo + zzStr + Math.random();}if(zxi>0){var zz_domain=document.domain;var zd_exp_src =zxcdn +"/ads2/k/" + zxa + "/3593/78/0/929000286/929000286//0/929/"  + zzSection + "/"  + "/" + getV(zxa,zxv) + "/i.js";var zd_user_agent = navigator.userAgent.toLowerCase();var zd_exp_iframe = "zd_frm_"+zzChanId+"_"+zzDim;var zd_ref_url = document.referrer;var zd_ref_domain = zd_ref_url.match("(.+?://)(www\.)?([^/:]+)");zd_ref_domain = zd_ref_domain[0];var zd_stub_path = zd_ref_domain + "/expandables/zd_stub.html";document.write('<iframe SRC='+zd_stub_path+'?q='+zd_exp_src+'&frmid='+zd_exp_iframe+'&qn=1&docvar=iframe&zzStr='+escape(zzStr)+'&zxa='+escape(zxa)+'&zxnw='+escape(zxnw)+'&zxx='+escape(zxx)+'&zxch1='+zxch1+'&zxch2='+zxch2+'&zzCountry='+escape(zzCountry)+'&zxpos='+escape(zxpos)+' width=0 height=0></iframe>');}else {document.write("<SCRIPT LANGUAGE='JavaScript' SRC='" + zxcdn + "/ads2/k/" + zxa + "/3593/78/0/929000286/929000286//0/929/"  + zzSection + "/"  + "/" + getV(zxa,zxv) + "/i.js'><\/SCRIPT>");
}
}
else {document.write("<SCR"+"IPT LANGUAGE='JavaScript' SRC='http://d13.zedo.com//ads3/i/3593/78/929000286/b.js'><\/SCR"+"IPT>");
}if (zft == 1) {
	if ((zxf > 0) && (zxd > 0)) {
		zzIncrementCapForId(zzNwId, zxf,zxd);
	}
}else if (zft == 3) {
	if ((zxa > 0) && (zxd > 0)) {
		zzIncrementChanCapForId(zzNwId, zzChanId, zxa,zxd);
	}
}
 if (zcft == 1) {
	if ((zcxf > 0) && (zcxd > 0)) {
		zzIncrementCapForId(zzNwId, zcxf,zcxd);
	}
}
}
document.write('<SCRIPT LANGUAGE="JavaScript" SRC="http://d2.zedo.com/OzoDB/cutils/R52_5/jsc/929/zmpfc.js?v=2-110"><\/script>');


