// for sites using analytics.aspx, update omniGuidPath with the path to the analytics.aspx file, omitting the protocol

var _om_gbls = {
	omniGuidPath : "", 
	version:"1.2 090710",
	s_account : "",  market : "", app : "",center : "", library : "", subdom : "", catpath : "", site:"", wtspparam:"",
	host : "", path : "", href : "", extraRsids : "", gAnalyticsId : "", gAnalyticsIdStatus : "",
	patharr : "", rsidprefix : "mssto", apl : "", split : "", addrsid : "",
	pathHelper : function(arr,start) {
			var catpath = "";
			if (arr.length > start) {
			for (var i = start; i < arr.length; i++) {
				catpath += arr[i];
				if (i < (arr.length - 1)) catpath += "/";
			}
			return catpath;
		}
		return "";
	},
	cleanupPath : function(txt) { return txt.replace(/\([^\)]*\)/g,""); }
}
var _om_tn_centers = {
biztalk	: "msstotnctbiztalk", dpm	: "msstotnctdpm", desktopdeployment : "msstotnctdeskdep", exchange : "msstotnctexch",
forefront : "msstotnctforefrnt", hpc : "msstotncthpc", magazine : "msstotnctmag", msonline : "msstotnctmson",
network : "msstotnctnetwork", office : "msstotnctoffice", sbs : "msstotnctsbs", appvirtualization : "msstotnctappvir",
solutionaccelerators : "msstotnctsolacc", sqlserver : "msstotnctsql", subscriptions : "msstotnctsubs", sysinternals : "msstotnctsysint",
systemcenter : "msstotnctsyscent", configmgr : "msstotnctconfig", sce : "msstotnctsce", opsmgr : "msstotnctopsmgr",
scvmm : "msstotnctscvmm", updatemanagement : "msstotnctupdmg", virtualization : "msstotnctvirt", windows : "msstotnctwin",
windowsmobile : "msstotnctwinmob", windowsserver : "msstotnctwinserv"
}

var _om_msdn_centers = {
netframework :"msstoctnetfx",academic :"msstoctacad",architecture :"msstoctarch",azure :"msstoctazure",
beginner :"msstoctbegin",biztalk :"msstoctbiztalk",data :"msstoctdata",devlabs :"msstoctdevlabs",
directx :"msstoctdx",evalcenter :"msstocteval",exchange :"msstoctexch",fsharp :"msstoctfsharp",
goglobal :"msstoctgoglob",healthvault :"msstocthealth",ie :"msstoctie",magazine :"msstoctmag",
office :"msstoctoffice",openspecifications :"msstoctopen",oslo :"msstoctoslo",practices :"msstoctpandp",
rampup :"msstoctrampup",robotics :"msstoctrobotics",security :"msstoctsecurity",sharepoint :"msstoctshare",
sqlserver :"msstoctsql",subscriptions :"msstoctsubs",sync :"msstoctsync",testing :"msstocttesting",
vbasic :"msstoctvb",vcsharp :"msstoctvcsharp",visualc :"msstoctvsplus",vstudio :"msstoctvs",
vsx	:"msstoctvsx",teamsystem :"msstoctvsts",vsto :"msstoctvsto",windows :"msstoctwin",
embedded :"msstoctembed",windowsmobile :"msstoctwinmob",windowsserver :"msstoctwinserv",xml	:"msstoctxml"
}
var _om_tn_split_params = {
_technet_library_desktopdeployment_	: "msstotnlibdeskdep", _technet_library_exchangeserver_ : "msstotnlibexch",
_sto_technet_msonline_library_ : "msstotnlibmsonline", _technet_library_sqlserver_  : "msstotnlibsql",
_sto_technet_systemcenter_library_ : "msstotnlibconfigmgr", _technet_library_opsmanager_ : "msstotnlibopsmgr",
_technet_library_updatemgmt_ : "msstotnlibupdmgmt", _sto_technet_windowsclient_library_ : "msstotnlibwinclient",
_technet_library_winxp_ : "msstotnlibwinclient", _technet_library_windowsserver_ClusterSvr_2008_ : "msstotnlibhpc",
_technet_library_windowsserver_HPCSvr_2006_ : "msstotnlibhpc", _technet_library_windowsserver_HPCSvr_2008_ : "msstotnlibhpc",
_technet_library_forefront_client : "msstotnlib4front", _technet_library_forefront_edge : "msstotnlib4front",
_technet_library_forefront_server : "msstotnlib4front", _technet_library_forefront_stirling : "msstotnlib4front"
}

var _om_msdn_split_params = {
 msdnlib_dotnet : "msstolibdotnet",  msdnlib_devtools_lang : "msstolibdevtools",
 msdnlib_es_dev : "msstolibesdev",  msdnlib_mobile : "msstolibmobile",
 msdnlib_office : "msstoliboffice",  _sto_msdn_sql_library : "msstolibsql",
 msdnlib_webdev : "msstolibwebdev",  msdnlib_w32_com : "msstolibw32com"
}
// added ptpt on 6/23/09
var _om_markets = {
enus:1,zhcn:1,zhtw:1,frfr:1,dede:1,itit:1,jajp:1,kokr:1,ptbr:1,ruru:1,eses:1,enau:1,deat:1,nlbe:1,frbe:1,bgbg:1,cscz:1,	
dadk:1,fifi:1,elgr:1,idid:1,enie:1,ruru:1,enmy:1,nlnl:1,ennz:1,nbno:1,plpl:1,roro:1,ensg:1,sksk:1,enza:1,svse:1,frch:1,	
dech:1,thth:1,trtr:1,ukua:1,vivn:1,hiin:1,heil:1,arsa:1,ptpt:1
}
var _om_mscom_hosts = {
answers_microsoft_com:1,blogs_msdn_com:1,blogs_technet_com:1,code_msdn_microsoft_com:1,connect_microsoft_com:1,expression_microsoft_com:1,
gallery_expression_microsoft_com:1,msdn_microsoft_com:1,social_answers_microsoft_com:1,social_expression_microsoft_com:1,
social_microsoft_com:1,social_msdn_microsoft_com:1,social_technet_microsoft_com:1,technet_microsoft_com:1,
visualstudiogallery_msdn_microsoft_com:1,www_microsoft_com:1,help_outlook_com:1
}

_om_gbls.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=_om_gbls.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");

_om_gbls.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

_om_gbls.addrsid= function(matchType,str,rsid) {
	if (matchType=='h' && _om_gbls.host.indexOf(str) > -1) {
		_om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,rsid,",",2);
	} else if (matchType=='f' && _om_gbls.href.indexOf(str) > -1) { 
		_om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,rsid,",",2);
	}
}

_om_gbls.host = window.location.hostname.toLowerCase();
_om_gbls.path = window.location.pathname.toLowerCase();

// add test values for host, path, and wtsp here

_om_gbls.href = _om_gbls.host + _om_gbls.path;

try { if (typeof(wtsp) !== 'undefined') _om_gbls.wtspparam = wtsp; } catch(err) {}

(function () {

// globals and rollups
if (_om_gbls.host.indexOf('technet') > -1 || _om_gbls.path.indexOf('/technet') == 0) { 
	_om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,"msstotn",",",2); 
	_om_gbls.site="technet"; 
}
if (_om_gbls.host == 'technet.microsoft.com') _om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,"msstotnonly",",",2);
if (_om_gbls.host.indexOf('msdn')>-1) { 
	_om_gbls.site="msdn"; 
	_om_gbls.addrsid('h','msdn','msstomsdn');
}
if (_om_gbls.host == 'msdn.microsoft.com') _om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,"msstomsdnonly",",",2);  

_om_gbls.addrsid('h','connect.microsoft.com','msstoconnect');
_om_gbls.addrsid('h','answers.microsoft.com','msstoanswer');
_om_gbls.addrsid('h','blogs.msdn.com','msstomsdnblogs');
_om_gbls.addrsid('h','blogs.technet.com','msstotnblogs');
_om_gbls.addrsid('h','code.msdn.microsoft.com','msstomsdncode');

if (_om_gbls.host.indexOf('expression.microsoft.com')>-1) {  
	_om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,"msstoexpall",",",2); 	// will include social.expression
	_om_gbls.site="expression"; 
	if (_om_gbls.path.indexOf('library') > -1) _om_gbls.apl(_om_gbls.s_account,"msstoexplib",",",2); 
}
if (_om_gbls.host == 'expression.microsoft.com') _om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,"msstoexp",",",2); // expression proper only

if (_om_gbls.host.indexOf('social') > -1) {
_om_gbls.addrsid('f','social.expression.microsoft.com/forums','msstoexpforums');
_om_gbls.addrsid('f','social.expression.microsoft.com/search','msstoexpsearch');
_om_gbls.addrsid('f','social.msdn.microsoft.com/forums','msstomsdnforums');
_om_gbls.addrsid('f','social.msdn.microsoft.com/search','msstomsdnsearch');
_om_gbls.addrsid('f','social.msdn.microsoft.com/profile','msstomsdnprofile');
_om_gbls.addrsid('f','social.technet.microsoft.com/forums','msstotnforums');
_om_gbls.addrsid('f','social.technet.microsoft.com/search','msstotnsearch');
_om_gbls.addrsid('f','social.technet.microsoft.com/profile','msstotnprofile');
_om_gbls.addrsid('f','social.microsoft.com/forums','msstomscomforums');
}
// added 7/10/2009
if (_om_gbls.host.indexOf('social') > -1 && _om_gbls.path.indexOf('/profile') == 0) _om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,"msstoprofileroll",",",2); // profile rollup


if (_om_gbls.host.indexOf('.net') > -1) {
_om_gbls.addrsid('h','iis.net','msstoiisnet');
_om_gbls.addrsid('h','asp.net','msstoaspnet');
_om_gbls.addrsid('h','silverlight.net','msstoslvnet');
_om_gbls.addrsid('h','windowsclient.net','msstowinnet');
}
_om_gbls.addrsid('h','codeplex.com','msstocodeplex');
_om_gbls.addrsid('h','help.outlook.com','msstooutlook');

if (_om_gbls.s_account.indexOf('forums') > -1) _om_gbls.app="forums";
if (_om_gbls.s_account.indexOf('search') > -1) _om_gbls.app="search";
if (_om_gbls.s_account.indexOf('profile') > -1) _om_gbls.app="profile";

_om_gbls.patharr = _om_gbls.path.substring(1).split('\/');	

// determine additional report suites and variables for app, center, etc.

switch (_om_gbls.host)
{
	case "msdn.microsoft.com":
		_om_gbls.subdom = "msdn";
		_om_gbls.market = (_om_gbls.patharr.length > 0) ? _om_gbls.patharr[0] : ""; 
		// market specific report suites
		if (_om_gbls.market) { 
			try {
				if (_om_markets[_om_gbls.market.replace(/\-/,"")]) _om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,"msstomsdnmkt"+_om_gbls.market.replace(/\-/,""),",",2);
			} catch(err) {}
		}
		_om_gbls.center = (_om_gbls.patharr.length>1 &&_om_gbls.patharr[1].indexOf('.')== -1 && _om_gbls.patharr[1]) ? _om_gbls.patharr[1] : "";
		_om_gbls.center = _om_gbls.cleanupPath(_om_gbls.center);
		if (_om_gbls.center == "library") { 
			_om_gbls.center=""; 
			_om_gbls.library="1"; 
			_om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,"msstolibrollup",",",2);
		}
		if (_om_gbls.center) { 
			// center specific report suites
			try {
				if (_om_msdn_centers[_om_gbls.center]) _om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,_om_msdn_centers[_om_gbls.center],",",2);
			} catch(err) {}
		}
		// wtsp defined report suites
		try { if (wtsp) { 
				if (_om_msdn_split_params[wtsp]) _om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,_om_msdn_split_params[wtsp],",",2);
			} 
		} catch(err) {}
		
		_om_gbls.catpath = _om_gbls.pathHelper(_om_gbls.patharr,1);
	  break;
	case "technet.microsoft.com":
		_om_gbls.subdom = "technet"; // deprecated
		_om_gbls.market = (_om_gbls.patharr.length > 0) ? _om_gbls.patharr[0] : ""; 
		// market specific report suites
		if (_om_gbls.market) { 
			try {
				if (_om_markets[_om_gbls.market.replace(/\-/,"")]) _om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,"msstotnmkt"+_om_gbls.market.replace(/\-/,""),",",2);
			} catch(err) {}
		}
		_om_gbls.center = (_om_gbls.patharr.length>1 &&_om_gbls.patharr[1].indexOf('.')== -1 && _om_gbls.patharr[1]) ? _om_gbls.patharr[1] : "";
		_om_gbls.center = _om_gbls.cleanupPath(_om_gbls.center);
		if (_om_gbls.center == "library") { 
			_om_gbls.center=""; 
			_om_gbls.library="1"; 
			_om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,"msstotnlibrollup",",",2);
		}
		if (_om_gbls.center) { 
			// center specific report suites
			try {
				if (_om_tn_centers[_om_gbls.center]) _om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,_om_tn_centers[_om_gbls.center],",",2);
			} catch(err) {}
		}
		// wtsp defined report suites
		try { if (wtsp) { 
				if (_om_tn_split_params[wtsp]) _om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,_om_tn_split_params[wtsp],",",2);
			} 
		} catch(err) {}

		_om_gbls.catpath = _om_gbls.pathHelper(_om_gbls.patharr,1);
	  break;
}

// add special-cased centers
_om_gbls.addrsid('f','www.microsoft.com/technet/scriptcenter','msstotnctscript');	
_om_gbls.addrsid('f','www.microsoft.com/technet/security','msstotnctsec');	
if (_om_gbls.host == "technet.microsoft.com" && _om_gbls.center=="security") _om_gbls.s_account =_om_gbls.apl(_om_gbls.s_account,"msstotnctsec",",",2);
if (_om_gbls.wtspparam.indexOf("_technet_library_windowsserver_") > -1) _om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,"msstotnlibwinserv",",",2);
if (_om_gbls.wtspparam == "_technet_dpm_" && _om_gbls.host == "technet.microsoft.com" && _om_gbls.library) _om_gbls.s_account = _om_gbls.apl(_om_gbls.s_account,"msstotnlibdpm",",",2);


if (_om_gbls.host.indexOf('social') > -1) _om_gbls.market = (_om_gbls.patharr.length > 1) ? _om_gbls.patharr[1] : ""; 
if (_om_gbls.host =='expression.microsoft.com') _om_gbls.market = (_om_gbls.patharr.length > 0) ? _om_gbls.patharr[0] : ""; 


// filter out dashes etc
_om_gbls.s_account = _om_gbls.s_account.replace(/[\-\.]/g,"");

// check if production, else append dev to rsid
var _isprod=false;
var temphost=_om_gbls.host.replace(/\./g,"_");
try {
	if (_om_mscom_hosts[temphost]) _isprod=true;
} catch(err) {}

var _om_nonmscom_hosts = ["asp.net","codeplex.com","iis.net","silverlight.net","windowsclient.net"];
if (!_isprod) {
	for(var i=0; i < _om_nonmscom_hosts.length; i++) {
		if (_om_gbls.host.indexOf(_om_nonmscom_hosts[i]) > -1) _isprod=true;
	}
}

// extra check while testing
//if (window.location.hostname.toLowerCase().indexOf(".net") < 0 && window.location.hostname.toLowerCase().indexOf(".com") < 0) _isprod=false;

if (!_isprod) {
	// make sure all rsids end in dev. if not, append dev
	var s2 = _om_gbls.s_account.split(",");
	for (var i=0; i < s2.length; i++) {
		if (s2[i].search(/dev$/) == -1) s2[i] +="dev";
	}
	_om_gbls.s_account = s2.join(",");
}

if(_om_gbls.s_account == "dev") _om_gbls.s_account = "msstodev";
	
})();

//----------------
// s_code.js file
//----------------

var t_omni_utils = {
	omniGetCookie : function(name){
		var pos=document.cookie.indexOf(name+"=");
		if (pos!=-1){
			var start=pos+name.length+1;
			var end=document.cookie.indexOf(";",start);
			if (end==-1){
				end=document.cookie.length;
			}
			return unescape(document.cookie.substring(start,end));
		}
		return null;
	}
	, cleanupPath : function(txt) {
		return txt.replace(/\([^\)]*\)/g,"");
	}
	, logError : function(e,txt) {
		var sourceURL="http://mssto.112.2o7.net/b/ss/msstoerrors/1/H.20.2--NS/0";
		sourceURL += "?c1="+escape(txt)+"&c2="+escape(e.name)+"&c3="+escape(e.message)+"&events=event1&v47=D%3DUser-Agent";
		var debugImage = new Image();
		debugImage.src = sourceURL;
	}
	, normalizePagename :	function(pval) {	
		if (pval == "" || pval == "default.aspx" || pval == "default.mspx") { pval = "homepage";  }
		return pval;
	}

	, getOmniMetaTagData : function(val) {
	  var metas = document.getElementsByTagName('META');
	  var i;
	  for (i = 0; i < metas.length; i++) {
		var strX = metas[i].getAttribute('NAME');
		if(strX) 
			{
			if(strX.toLowerCase() == val) {
				return metas[i].getAttribute('CONTENT');
			} 
		}
	   }
	   if (window[val]) return window[val];
	   
	   return false;
	}

	, getOmniPath : function(pval,skipBeginning,skipEnd) {
		if (skipEnd > 0 && (pval.substring(pval.length - 1) == "/")) pval += "o"; // handle URLs ending in just /
		if (skipEnd > 0 && (pval.substring(pval.length - 1) == "/")) pval += "o"; // handle URLs ending in just /
		var pathArray = pval.split( '/' );
		var len = pathArray.length - skipEnd;
		var path = "";
		for (var i = skipBeginning; i < len; i++ ) {
		path += pathArray[i];
		(i < (len - 1)) ? path += ": " : ""
		}
		return path;
	}

	, omniAddPVEvent : function() {
		 if (!s.linkType) { 
			 s.eVar17 = "D=pageName";  
			 s.events=s.apl(s.events,"event1",",",2);
		}
	}
	, omni_S4 : function() {
		return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	}
	, createRandomOmniId : function(e) {
		return (e+"_"+t_omni_utils.omni_S4()+"_"+t_omni_utils.omni_S4()+"_"+t_omni_utils.omni_S4()+"_"+t_omni_utils.omni_S4()+t_omni_utils.omni_S4()+t_omni_utils.omni_S4());
	}

	, setOmniID : function() { 
		if (!_om_gbls.gAnalyticsId) {
			_om_gbls.gAnalyticsIdStatus="fallback";
		}
		else {
			_om_gbls.gAnalyticsId = _om_gbls.gAnalyticsId.replace(/\-/g,"_");
		}
		var e=new Date(); 
		var eTime = e.getTime();
		tempID = (_om_gbls.gAnalyticsId) ? _om_gbls.gAnalyticsId : t_omni_utils.createRandomOmniId(eTime);
		e.setTime(eTime+366*24*60*60*1000);
		s.c_w('omniID',tempID,e);
		return tempID;
	}
}

_om_gbls.gAnalyticsId = t_omni_utils.omniGetCookie('omniID');
_om_gbls.gAnalyticsIdStatus = (_om_gbls.gAnalyticsId) ? "fpc" : "";

if (!_om_gbls.gAnalyticsId) {
	try { 
		_om_gbls.gAnalyticsId = omni_guid; 
		_om_gbls.gAnalyticsIdStatus = (_om_gbls.gAnalyticsId) ? "jsvar" : "";		
	} catch(err) {}; 
}
if (_om_gbls.omniGuidPath && !_om_gbls.gAnalyticsId) {
	try { 
		_om_gbls.gAnalyticsIdStatus = "aspx";	
		document.write("<SCR"+"IPT TYPE='text/javascript' SRC='"+"http"+(window.location.protocol.indexOf('https:')==0?'s':'')+_om_gbls.omniGuidPath+"'><\/SCR"+"IPT>");
	} catch(e) {
		t_omni_utils.logError(e,"error in omniGuidPath call");
	}; 
}

//_om_gbls.extraRsids = t_omni_utils.getOmniMetaTagData("t_omni_rsids");
//if (_om_gbls.extraRsids) _om_gbls.s_account = _om_gbls.s_account + "," + _om_gbls.extraRsids;

var s=s_gi(_om_gbls.s_account);

s.events='';
s.eVar47="D=User-Agent";

//Call Helper Functions if needed (checkMeta() findsprops() findevars() findqueryparams() findevents())


/************************** CONFIG SECTION **************************/
s.currencyCode="USD"; s.trackDownloadLinks=false; s.trackExternalLinks=false; s.trackInlineStats=true;
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,asx";

// linkInternalFilters can get overridden on the page
s.linkInternalFilters="javascript:,msdn.microsoft.com/,technet.microsoft.com/"; 
s.linkLeaveQueryString=false; s.linkTrackVars="None"; s.linkTrackEvents="None";

/* Page Name Plugin Config */
s.siteID=""; s.defaultPage=""; s.queryVarsList="";s.pathExcludeDelim=";";s.pathConcatDelim="";s.pathExcludeList=""; 

/* Plugin Config */
s.usePlugins=true;

function s_doPlugins(s) {
	// check for page metadata overrides
	if (t_omni_utils.getOmniMetaTagData("t_omni_errorpage")) { s.pageType = "errorPage"; }
	var tvar="";
	tvar=t_omni_utils.getOmniMetaTagData("t_omni_pagename");  if (tvar) { s.pageName = tvar; }
	tvar=t_omni_utils.getOmniMetaTagData("t_omni_channel");  if (tvar) { s.channel = tvar; }
	tvar=t_omni_utils.getOmniMetaTagData("t_omni_pagetitle");  if (tvar) { s.prop3 = tvar; }

	t_omni_utils.omniAddPVEvent();
	
	// External Campaigns 
	if(!s.campaign)
		s.campaign=s.getQueryParam('mc_id'); // reuse webtrends
	if(!s.campaign)
		s.campaign=s.getQueryParam('cmxid'); // used due to comscore
	if(!s.campaign)
		s.campaign=s.getQueryParam('ocid');  // common tracking code at Microsoft
	
	s.campaign=s.getValOnce(s.campaign,"s_campaign",0);

	s.prop31=s.eVar31=s.getQueryParam('query');
	s.prop32=s.eVar32=s.getQueryParam('ac');
	s.prop33=s.eVar33=s.getQueryParam('refinement');
	
	s.prop50=_om_gbls.version;

	// removed icid, trid, plugins for detslv, getnewrepeat, getvisitnum since not needed
	
	/* Plugin Example: getPagename v2.1 */
	if(!s.pageType && !s.pageName)
		s.pageName=s.getPageName();

	// removed exitLinkHandler adn downloadLinkHandler since not needed

	if (_om_gbls.gAnalyticsIdStatus =="fallback") {
		 s.events=s.apl(s.events,"event10",",",2);
	}

	/* Copy Props to eVars */
	if(s.prop1){s.eVar1="D=c1"}
	if(s.prop2){s.eVar2="D=c2"}
	if(s.prop3){s.eVar3="D=c3"}
	if(s.prop4){s.eVar4="D=c4"}
	if(s.prop5){s.eVar5="D=c5"}
	if(s.prop6){s.eVar6="D=c6"}
	if(s.prop7){s.eVar7="D=c7"}
	
	s.eVar45 = s.prop45 = _om_gbls.gAnalyticsIdStatus;
	s.linkTrackVars=s.apl(s.linkTrackVars,"visitorID",",",2);
	s.linkTrackVars=s.apl(s.linkTrackVars,"eVar45",",",2);
	s.linkTrackVars=s.apl(s.linkTrackVars,"prop45",",",2);
}
s.doPlugins=s_doPlugins
/************************** PLUGINS SECTION *************************/

/*
 * Plugin: getQueryParam 2.1 - return query string parameter(s)
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.subs"
+"tring(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");

/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

// removed Plugin: exitLinkHandler 0.5
// removed Plugin: downloadLinkHandler 0.5
// removed Plugin: getSilverlightVersion

/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");


/*
 * Custom Plugin:  getSilverlightVersion
// removed getSilverlightVersion
 */
 


/********************************************************************
 *
 * Supporting functions that may be shared between plug-ins
 *
 *******************************************************************/
/*
 * Utility Function: p_gh
 */
s.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

s.p_gh_windows_new=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o:'';");


// removed getNewRepeat 1.0 

/*
 * Plugin: getPageName v2.1 - parse URL and return
 */
s.getPageName=new Function("u",""
+"var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"
+"x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
+"queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
+"string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
+"ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"
+"efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"
+"z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."
+"substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"
+";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"
+"ubstring(x+1)}return n");


/* 
 * Utility Function: p_c
 */
s.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");

s.visitorNamespace="microsoftsto";
s.dc=112;

// include media module here as necessary in future

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="=fun`o(~.substring(~){`Ps=^O~.indexOf(~#2 ~;$2~`b$2~=new Fun`o(~.length~.toLowerCase()~`Ps#8c_#k^an+'],~=new Object~};s.~`YMigrationServer~.toU"
+"pperCase~){$2~','~s.wd~);s.~')q='~=new Array~ookieDomainPeriods~.location~^LingServer~dynamicAccount~var ~link~s.m_~=='~s.apv~BufferedRequests~Element~)$2x^b!Object#WObject.prototype#WObject.protot"
+"ype[x])~etTime~visitor~$w@c(~referrer~else ~s.pt(~s.maxDelay~}c#E(e){~#i+~=''~.lastIndexOf(~^wc_i~}$2~.protocol~=new Date~^wobjectID=s.ppu=$I=$Iv1=$Iv2=$Iv3~for(i=~ction~javaEnabled~onclick~Name~te"
+"rnalFilters~javascript~s.dl~@6s.b.addBehavior(\"# default# ~=parseFloat(~typeof(v)==\"~window~cookie~while(~s.vl_g~Type~;i#U{~tfs~s.un~&&s.~o^woid~browser~.parent~document~colorDepth~String~.host~s"
+".fl(~s.rep(~s.eo~'+tm@S~s.sq~parseInt(~t=s.ot(o)~track~nload~j='1.~this~#PURL~}else{~s.vl_l~lugins~'){q='~dynamicVariablePrefix~');~;for(~Sampling~s.rc[un]~Event~._i~&&(~loadModule~resolution~s.c_r"
+"(~s.c_w(~s.eh~s.isie~\"m_\"+n~Secure~Height~tcf~isopera~ismac~escape(~'s_~.href~screen.~s#8gi(~Version~harCode~variableProvider~.s_~)s_sv(v,n[k],i)}~')>=~){s.~)?'Y':'N'~u=m[t+1](~i)clearTimeout(~e&"
+"&l$bSESSION'~name~home#P~;try{~,$m)~s.ssl~s.oun~s.rl[u~Width~o.type~s.vl_t~=s.sp(~Lifetime~s.gg('objectID~sEnabled~'+n+'~.mrq(@wun+'\"~ExternalLinks~charSet~lnk~onerror~http~currencyCode~.src~disab"
+"le~.get~MigrationKey~(''+~&&!~f',~){t=~r=s[f](~u=m[t](~Opera~Math.~s.ape~s.fsg~s.ns6~conne~InlineStats~&&l$bNONE'~Track~'0123456789~true~+\"_c\"]~s.epa(~t.m_nl~s.va_t~m._d~n=s.oid(o)~,'sqs',q);~Lea"
+"veQuery~?'&~'=')~n){~\"'+~){n=~'_'+~'+n;~\",''),~,255)}~if(~vo)~s.sampled~=s.oh(o);~+(y<1900?~n]=~1);~&&o~:'';h=h?h~;'+(n?'o.~sess~campaign~lif~ in ~s.co(~ffset~s.pe~m._l~s.c_d~s.brl~s.nrs~s[mn]~,'"
+"vo~s.pl~=(apn~space~\"s_gs(\")~vo._t~b.attach~2o7.net'~Listener~Year(~d.create~=s.n.app~)}}}~!='~'||t~)+'/~s()+'~){p=~():''~a['!'+t]~&&c){~://')i+=~){v=s.n.~channel~100~rs,~.target~o.value~s_si(t)~"
+"')dc='1~\".tl(\")~etscape~s_')t=t~omePage~='+~&&t~[b](e);~\"){n[k]~';s.va_~a+1,b):~return~mobile~height~events~random~code~=s_~=un~,pev~'MSIE ~'fun~floor(~atch~transa~s.num(~m._e~s.c_gd~,'lt~tm.g~."
+"inner~;s.gl(~,f1,f2~',s.bc~page~Group,~.fromC~sByTag~')<~++)~)){~||!~+';'~i);~y+=~l&&~''+x~[t]=~[i]=~[n];~' '+~'+v]~>=5)~:'')~+1))~il['+s~!a[t])~~s._c=^pc';`H=`y`5!`H`i@v`H`il`K;`H`in=0;}s^al=`H`il"
+";s^an=`H`in;s^al[s^a$7s;`H`in++;s.an#8an;s.cls`0x,c){`Pi,y`g`5!c)c=^O.an;`n0;i<x`8^3n=x`1i,i+1)`5c`3n)>=0)#Zn}`4y`Cfl`0x,l){`4x?@Ux)`10,l):x`Cco`0o`F!o)`4o;`Pn`B,x^Wx$Fo)$2x`3'select#T0&&x`3'filter"
+"#T0)n[x]=o[x];`4n`Cnum`0x){x`g+x^W`Pp=0;p<x`8;p#U$2(@j')`3x`1p,p#j<0)`40;`41`Crep#8rep;s.sp#8sp;s.jn#8jn;@c`0x`2,h=@jABCDEF',i,c=s.@L,n,l,e,y`g;c=c?c`E$g`5x){x`g+x`5c`SAUTO'^b'').c^uAt){`n0;i<x`8^3"
+"c=x`1i,i+$8n=x.c^uAt(i)`5n>127){l=0;e`g;^0n||l<4){e=h`1n%16,n%16+1)+e;n=(n-n%16)/16;l++}#Z'%u'+e}`6c`S+')#Z'%2B';`b#Z^oc)}x=y^Qx=x?^F^o#b),'+`G%2B'):x`5x&&c^6em==1&&x`3'%u#T0&&x`3'%U#T0){i=x`3'%^V^"
+"0i>=0){i++`5h`18)`3x`1i,i+1)`E())>=0)`4x`10,i)+'u00'+x`1#Yi=x`3'%',i$a}`4x`Cepa`0x`2;`4x?un^o^F#b,'+`G ')):x`Cpt`0x,d,f,a`2,t=x,z=0,y,r;^0t){y=t`3d);y=y<0?t`8:y;t=t`10,y);@Yt,a)`5r)`4r;z+=y+d`8;t=x"
+"`1z,x`8);t=z<x`8?t:''}`4''`Cisf`0t,a){`Pc=a`3':')`5c>=0)a=a`10,c)`5t`10,2)`S$u`12);`4(t!`g$x==a)`Cfsf`0t,a`2`5`ca,`G,'is@Wt))@d+=(@d!`g?`G`ft;`40`Cfs`0x,f`2;@d`g;`cx,`G,'fs@Wf);`4@d`Csi`0wd`2,c`g+s"
+"_gi,a=c`3\"{\"),b=c`h\"}\"),m;c#8fe(a>0&&b>0?c`1#10)`5wd&&wd.^A$iwd.s`Xout(#C`o s_sv(o,n,k){`Pv=o[k],i`5v`F`xstring\"||`xnumber\")n[k]=v;`bif (`xarray$z`K;`n0;i<v`8;i++^x`bif (`xobject$z`B^Wi$Fv^x}"
+"}fun`o $q{`Pwd=`y,s,i,j,c,a,b;wd^wgi`7\"un\",\"pg\",\"ss\",@wc+'\");wd.^s@w@9+'\");s=wd.s;s.sa(@w^5+'\"`I^4=wd;`c^1,\",\",\"vo1\",t`I@M=^G=s.`Q`r=s.`Q^2=`H`m=\\'\\'`5t.m_#a@n)`n0;i<@n`8^3n=@n[i]`5@"
+"vm=t#ec=t[^i]`5m$ic=\"\"+c`5c`3\"fun`o\")>=0){a=c`3\"{\");b=c`h\"}\");c=a>0&&b>0?c`1#10;s[^i@l=c`5#H)s.^c(n)`5s[n])for(j=0;j<$J`8;j#Us_sv(m,s[n],$J[j]$a}}`Pe,o,t@6o=`y.opener`5o$9^wgi@Xo^wgi(@w^5+'"
+"\")`5t)$q}`e}',1)}`Cc_d`g;#If`0t,a`2`5!#Gt))`41;`40`Cc_gd`0`2,d=`H`M^D@4,n=s.fpC`L,p`5!n)n=s.c`L`5d@V$K@xn?^Jn):2;n=n>2?n:2;p=d`h'.')`5p>=0){^0p>=0&&n>1$fd`h'.',p-$8n--}$K=p>0&&`cd,'.`Gc_gd@W0)?d`1"
+"p):d}}`4$K`Cc_r`0k`2;k=@c(k);`Pc=#fs.d.`z,i=c`3#fk+@u,e=i<0?i:c`3';',i),v=i<0?'':@mc`1i+2+k`8,e<0?c`8:e));`4v$b[[B]]'?v:''`Cc_w`0k,v,e`2,d=#I(),l=s.`z@F,t;v`g+v;l=l?@Ul)`E$g`5@3@h@X(v!`g?^Jl?l:0):-"
+"60)`5t){e`l;e.s`X(e.g`X()+(t*$m0))}`jk@h^zd.`z=k+'`Zv!`g?v:'[[B]]')+'; path=/;'+(@3?' expires$we.toGMT^C()#X`f(d?' domain$wd#X:'^V`4^ek)==v}`40`Ceh`0o,e,r,f`2,b=^p'+e+@ys^an,n=-1,l,i,x`5!^gl)^gl`K;"
+"l=^gl;`n0;i<l`8&&n<0;i++`Fl[i].o==o&&l[i].e==e)n=i`jn<0@xi;l[n]`B}x=l#ex.o=o;x.e=e;f=r?x.b:f`5r||f){x.b=r?0:o[e];x.o[e]=f`jx.b){x.o[b]=x.b;`4b}`40`Ccet`0f,a,t,o,b`2,r,^l`5`T>=5^b!s.^m||`T>=7#V^l`7'"
+"s`Gf`Ga`Gt`G`Pe,r@6@Ya)`er=s[t](e)}`4r^Vr=^l(s,f,a,t)^Q$2s.^n^6u`3#B4^y0)r=s[b](a);else{^g(`H,'@N',0,o);@Ya`Ieh(`H,'@N',1)}}`4r`Cg^4et`0e`2;`4s.^4`Cg^4oe`7'e`G`Ac;^g(`y,\"@N\",1`Ie^4=1;c=s.t()`5c)s"
+".d.write(c`Ie^4=0;`4@k'`Ig^4fb`0a){`4`y`Cg^4f`0w`2,p=w^9,l=w`M;s.^4=w`5p&&p`M!=#ap`M^D==l^D^z^4=p;`4s.g^4f(s.^4)}`4s.^4`Cg^4`0`2`5!s.^4^z^4=`H`5!s.e^4)s.^4=s.cet('g^4@Ws.^4,'g^4et',s.g^4oe,'g^4fb')"
+"}`4s.^4`Cmrq`0u`2,l=@A],n,r;@A]=0`5l)for(n=0;n<l`8;n#U{r=l#es.mr(0,0,r.r,0,r.t,r.u)}`Cbr`0id,rs`2`5s.@R`U#W^f^pbr',rs))$L=rs`Cflush`U`0){^O.fbr(0)`Cfbr`0id`2,br=^e^pbr')`5!br)br=$L`5br`F!s.@R`U)^f^"
+"pbr`G'`Imr(0,0,br)}$L=0`Cmr`0$C,q,$nid,ta,u`2,dc=s.dc,t1=s.`N,t2=s.`N^j,tb=s.`NBase,p='.sc',ns=s.`Y`r$R,un=s.cls(u?u:(ns?ns:s.fun)),r`B,l,imn=^pi_'+(un),im,b,e`5!rs`Ft1`Ft2^6ssl)t1=t2^Q$2!tb)tb='$V"
+"`5dc)dc=@Udc)`9;`bdc='d1'`5tb`S$V`Fdc`Sd1$r12';`6dc`Sd2$r22';p`g}t1#9+'.'+dc+'.'+p+tb}rs='@O'+(@8?'s'`f'://'+t1+'/b/ss/'+^5+'/'+(s.#3?'5.1':'1'$dH.20.3/'+$C+'?AQB=1&ndh=1'+(q?q`f'&AQE=1'`5^h@Vs.^n`"
+"F`T>5.5)rs=^E$n4095);`brs=^E$n2047)`jid^zbr(id,rs);#2}`js.d.images&&`T>=3^b!s.^m||`T>=7)^b@e<0||`T>=6.1)`F!s.rc)s.rc`B`5!^Y){^Y=1`5!s.rl)s.rl`B;@An]`K;s`Xout('$2`y`il)`y`il['+s^an+']@J)',750)^Ql=@A"
+"n]`5l){r.t=ta;r.u#9;r.r=rs;l[l`8]=r;`4''}imn+=@y^Y;^Y++}im=`H[imn]`5!im)im=`H[im$7new Image;im^wl=0;im.o^M`7'e`G^O^wl=1;`Pwd=`y,s`5wd`il){s=wd`il['+s^an+'];s@J`Inrs--`5!$M)`Rm(\"rr\")}')`5!$M^znrs="
+"1;`Rm('rs')}`b$M++;im@Q=rs`5rs`3'&pe=^y0^b!ta||ta`S_self$ca`S_top'||(`H.@4$xa==`H.@4)#Vb=e`l;^0!im^w#ae.g`X()-b.g`X()<500)e`l}`4''}`4'<im'+'g sr'+'c=@wrs+'\" width=1 #4=1 border=0 alt=\"\">'`Cgg`0v"
+"`2`5!`H[^p#g)`H[^p#g`g;`4`H[^p#g`Cglf`0t,a`Ft`10,2)`S$u`12);`Ps=^O,v=s.gg(t)`5v)s#cv`Cgl`0v`2`5s.pg)`cv,`G,'gl@W0)`Crf`0x`2,y,i,j,h,l,a,b`g,c`g,t`5x){y`g+x;i=y`3'?')`5i>0){a=y`1i+$8y=y`10,#Yh=y`9;i"
+"=0`5h`10,7)`S@O$j7;`6h`10,8)`S@Os$j8;h=h`1#Yi=h`3\"/\")`5i>0){h=h`10,i)`5h`3'google^y0){a@Ea,'&')`5a`8>1){l=',q,ie,start,search_key,word,kw,cd,'^Wj=0;j<a`8;j++@Xa[j];i=t`3@u`5i>0&&l`3`G+t`10,i)+`G)"
+">=0)b+=(b@t'`ft;`bc+=(c@t'`ft`jb$i#Z'?'+b+'&'+c`5#b!=y)x=y}}}}}}`4x`Chav`0`2,qs`g,fv=s.`Q@iVa$nfe=s.`Q@i^Zs,mn,i`5$I){mn=$I`10,1)`E()+$I`11)`5$N){fv=$N.^LVars;fe=$N.^L^Zs}}fv=fv?fv+`G+^R+`G+^R2:'';"
+"`n0;i<@o`8^3`Pk=@o[i],v=s[k],b=k`10,4),x=k`14),n=^Jx),q=k`5v&&k$b`Q`r'&&k$b`Q^2'`F$I||s.@M||^G`Ffv^b`G+fv+`G)`3`G+k+`G)<0)v`g`5k`S#5'&&fe)v=s.fs(v,fe)`jv`Fk`S^U`JD';`6k`S`YID`Jvid';`6k`S^P^Tg';v=^E"
+"v$1`6k`S`a^Tr';v=^Es.rf(v)$1`6k`Svmk'||k`S`Y@T`Jvmt';`6k`S`D^Tvmf'`5@8^6`D^j)v`g}`6k`S`D^j^Tvmf'`5!@8^6`D)v`g}`6k`S@L^Tce'`5v`E()`SAUTO')v='ISO8859-1';`6s.em==2)v='UTF-8'}`6k`S`Y`r$R`Jns';`6k`Sc`L`"
+"Jcdp';`6k`S`z@F`Jcl';`6k`S^v`Jvvp';`6k`S@P`Jcc';`6k`S$l`Jch';`6k`S#F`oID`Jxact';`6k`S$D`Jv0';`6k`S^d`Js';`6k`S^B`Jc';`6k`S`t^t`Jj';`6k`S`p`Jv';`6k`S`z@H`Jk';`6k`S^8@B`Jbw';`6k`S^8^k`Jbh';`6k`S@f`o^"
+"2`Jct';`6k`S@5`Jhp';`6k`Sp^S`Jp';`6#Gx)`Fb`Sprop`Jc@z`6b`SeVar`Jv@z`6b`Slist`Jl@z`6b`Shier^Th@zv=^Ev$1`jv)qs+='&'+q+'$w(k`10,3)$bpev'?@c(v):v$a`4qs`Cltdf`0t,h@Xt?t`9$A`9:'';`Pqi=h`3'?^Vh=qi>=0?h`10"
+",qi):h`5t&&h`1h`8-(t`8#j`S.'+t)`41;`40`Cltef`0t,h@Xt?t`9$A`9:''`5t&&h`3t)>=0)`41;`40`Clt`0h`2,lft=s.`QDow^MFile^2s,lef=s.`QEx`s,$E=s.`QIn`s;$E=$E?$E:`H`M^D@4;h=h`9`5s.^LDow^MLinks&&lft&&`clft,`G#Jd"
+"@Wh))`4'd'`5s.^L@K&&h`10,1)$b# '^blef||$E)^b!lef||`clef,`G#Je@Wh))^b!$E#W`c$E,`G#Je@Wh)))`4'e';`4''`Clc`7'e`G`Ab=^g(^O,\"`q\"`I@M=$G^O`It(`I@M=0`5b)`4^O$y`4@k'`Ibc`7'e`G`Af,^l`5s.d^6d.all^6d.all.cp"
+"pXYctnr)#2;^G=e@Q`V?e@Q`V:e$o;^l`7\"s\",\"`Pe@6$2^G^b^G.tag`r||^G^9`V||^G^9Node))s.t()`e}\");^l(s`Ieo=0'`Ioh`0o`2,l=`H`M,h=o^q?o^q:'',i,j,k,p;i=h`3':^Vj=h`3'?^Vk=h`3'/')`5h^bi<0||(j>=0&&i>j)||(k>=0"
+"&&i>k))$fo`k$9`k`8>1?o`k:(l`k?l`k:'^Vi=l.path@4`h'/^Vh=(p?p+'//'`f(o^D?o^D:(l^D?l^D#i)+(h`10,1)$b/'?l.path@4`10,i<0?0:i$d'`fh}`4h`Cot`0o){`Pt=o.tag`r;t=t$x`E?t`E$g`5t`SSHAPE')t`g`5t`Ft`SINPUT'&&@C&"
+"&@C`E)t=@C`E();`6!t$9^q)t='A';}`4t`Coid`0o`2,^K,p,c,n`g,x=0`5t@V^7$fo`k;c=o.`q`5o^q^bt`SA$c`SAREA')^b!c#Wp||p`9`3'`t#T0))n$5`6c@x^Fs.rep(^Fs.rep@Uc,\"\\r$0\"\\n$0\"\\t$0' `G^Vx=2}`6$p^bt`SINPUT$c`S"
+"SUBMIT')@x$p;x=3}`6o@Q$x`SIMAGE')n=o@Q`5@v^7=^En@7;^7t=x}}`4^7`Crqf`0t,un`2,e=t`3@u,u=e>=0?`G+t`10,e)+`G:'';`4u&&u`3`G+un+`G)>=0?@mt`1e#j:''`Crq`0un`2,c#9`3`G),v=^e^psq'),q`g`5c<0)`4`cv,'&`Grq@Wun)"
+";`4`cun,`G,'rq',0)`Csqp`0t,a`2,e=t`3@u,q=e<0?'':@mt`1e+1)`Isqq[q]`g`5e>=0)`ct`10,e),`G@r`40`Csqs`0un,q`2;^Iu[u$7q;`40`Csq`0q`2,k=^psq',v=^ek),x,c=0;^Iq`B;^Iu`B;^Iq[q]`g;`cv,'&`Gsqp',0`Ipt(^5,`G@rv`"
+"g^Wx$F^Iu`W)^Iq[^Iu[x]]+=(^Iq[^Iu[x]]?`G`fx^Wx$F^Iq`W^6sqq[x]^bx==q||c<2#Vv+=(v@t'`f^Iq[x]+'`Zx);c++}`4^fk,v,0)`Cwdl`7'e`G`Ar=@k,b=^g(`H,\"o^M\"),i,o,oc`5b)r=^O$y`n0;i<s.d.`Qs`8^3o=s.d.`Qs[i];oc=o."
+"`q?\"\"+o.`q:\"\"`5(oc`3$S<0||oc`3\"^woc(\")>=0)$9c`3$s<0)^g(o,\"`q\",0,s.lc);}`4r^V`Hs`0`2`5`T>3^b!^h#Ws.^n||`T#h`Fs.b^6$U^Z)s.$U^Z('`q#O);`6s.b^6b.add^Z$W)s.b.add^Z$W('click#O,false);`b^g(`H,'o^M"
+"',0,`Hl)}`Cvs`0x`2,v=s.`Y^X,g=s.`Y^X#Qk=^pvsn_'+^5+(g?@yg#i,n=^ek),e`l,y=e@S$X);e.set$Xy+10$61900:0))`5v){v*=$m`5!n`F!^fk,x,e))`40;n=x`jn%$m00>v)`40}`41`Cdyasmf`0t,m`Ft&&m&&m`3t)>=0)`41;`40`Cdyasf`"
+"0t,m`2,i=t?t`3@u:-1,n,x`5i>=0&&m){`Pn=t`10,i),x=t`1i+1)`5`cx,`G,'dyasm@Wm))`4n}`40`Cuns`0`2,x=s.`OSele`o,l=s.`OList,m=s.`OM#E,n,i;^5=^5`9`5x&&l`F!m)m=`H`M^D`5!m.toLowerCase)m`g+m;l=l`9;m=m`9;n=`cl,"
+"';`Gdyas@Wm)`5n)^5=n}i=^5`3`G`Ifun=i<0?^5:^5`10,i)`Csa`0un`2;^5#9`5!@9)@9#9;`6(`G+@9+`G)`3`G+un+`G)<0)@9+=`G+un;^5s()`Cm_i`0n,a`2,m,f=n`10,1),r,l,i`5!`Rl)`Rl`B`5!`Rnl)`Rnl`K;m=`Rl[n]`5!a&&m&&#H@Vm^"
+"a)`Ra(n)`5!m){m`B,m._c=^pm';m^an=`H`in;m^al=s^al;m^al[m^a$7m;`H`in++;m.s=s;m._n=n;$J`K('_c`G_in`G_il`G_i`G_e`G_d`G_dl`Gs`Gn`G_r`G_g`G_g1`G_t`G_t1`G_x`G_x1`G_rs`G_rr`G_l'`Im_l[$7m;`Rnl[`Rnl`8]=n}`6m"
+"._r@Vm._m){r=m._r;r._m=m;l=$J;`n0;i<l`8;i#U$2m[l[i]])r[l[i]]=m[l[i]];r^al[r^a$7r;m=`Rl[$7r`jf==f`E())s[$7m;`4m`Cm_a`7'n`Gg`Ge`G$2!g)g=^i;`Ac=s[g@l,m,x,f=0`5!c)c=`H[\"s_\"+g@l`5c&&s_d)s[g]`7\"s\",s_"
+"ft(s_d(c)));x=s[g]`5!x)x=`H[\\'s_\\'+g]`5!x)x=`H[g];m=`Ri(n,1)`5x^b!m^a||g!=^i#Vm^a=f=1`5(\"\"+x)`3\"fun`o\")>=0)x(s);`b`Rm(\"x\",n,x,e)}m=`Ri(n,1)`5@pl)@pl=@p=0;`ut();`4f'`Im_m`0t,n,d,e@X@yt;`Ps=^"
+"O,i,x,m,f=@yt,r=0,u`5`R#a`Rnl)`n0;i<`Rnl`8^3x=`Rnl[i]`5!n||x==@vm=`Ri(x);u=m[t]`5u`F@Uu)`3#C`o^y0`Fd&&e)@Zd,e);`6d)@Zd);`b@Z)}`ju)r=1;u=m[t+1]`5u@Vm[f]`F@Uu)`3#C`o^y0`Fd&&e)@1d,e);`6d)@1d);`b@1)}}m"
+"[f]=1`5u)r=1}}`4r`Cm_ll`0`2,g=`Rdl,i,o`5g)`n0;i<g`8^3o=g[i]`5o)s.^c(o.n,o.u,o.d,o.l,o.e,$8g#d0}`C^c`0n,u,d,l,e,ln`2,m=0,i,g,o=0#N,c=s.h?s.h:s.b,b,^l`5@vi=n`3':')`5i>=0){g=n`1i+$8n=n`10,i)}`bg=^i;m="
+"`Ri(n)`j(l||(n@V`Ra(n,g)))&&u^6d&&c^6$Y`V`Fd){@p=1;@pl=1`jln`F@8)u=^Fu,'@O:`G@Os:^Vi=^ps:'+s^an+':@I:'+g;b='`Ao=s.d@S`VById(@wi+'\")`5s$9`F!o.#a`H.'+g+'){o.l=1`5o.@2o.#Yo.i=0;`Ra(\"@I\",@wg+'@w(e?'"
+",@we+'\"'`f')}';f2=b+'o.c++`5!`d)`d=250`5!o.l$9.c<(`d*2)/$m)o.i=s`Xout(o.f2@7}';f1`7'e',b+'}^V^l`7's`Gc`Gi`Gu`Gf1`Gf2`G`Pe,o=0@6o=s.$Y`V(\"script\")`5o){@C=\"text/`t\"$Bid=i;o.defer=@k;o.o^M=o.onre"
+"adystatechange=f1;o.f2=f2;o.l=0;'`f'o@Q=u;c.appendChild(o)$Bc=0;o.i=s`Xout(f2@7'`f'}`eo=0}`4o^Vo=^l(s,c,i,u#N)^Qo`B;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=`Rdl`5!g)g=`Rdl`K;i=0;^0i<g`8&&g[i])i++;g#d"
+"o}}`6@vm=`Ri(n);#H=1}`4m`Cvo1`0t,a`Fa[t]||$h)^O#ca[t]`Cvo2`0t,a`F#l{a#c^O[t]`5#l$h=1}`Cdlt`7'`Ad`l,i,vo,f=0`5`ul)`n0;i<`ul`8^3vo=`ul[i]`5vo`F!`Rm(\"d\")||d.g`X()-$T>=`d){`ul#d0;s.t($3}`bf=1}`j`u@2`"
+"ui`Idli=0`5f`F!`ui)`ui=s`Xout(`ut,`d)}`b`ul=0'`Idl`0vo`2,d`l`5!$3vo`B;`c^1,`G$O2',$3;$T=d.g`X()`5!`ul)`ul`K;`ul[`ul`8]=vo`5!`d)`d=250;`ut()`Ct`0vo,id`2,trk=1,tm`l,sed=Math&&@b#6?@b#D@b#6()*$m000000"
+"00000):#K`X(),$C='s'+@b#D#K`X()/10800000)%10+sed,y=tm@S$X),vt=tm@SDate($d^HMonth($d'$6y+1900:y)+' ^HHour$e:^HMinute$e:^HSecond$e ^HDay()+#f#K`XzoneO$H(),^l,^4=s.g^4(),ta`g,q`g,qs`g,#7`g,vb`B#M^1`Iu"
+"ns(`Im_ll()`5!s.td){`Ptl=^4`M,a,o,i,x`g,c`g,v`g,p`g,bw`g,bh`g,^N0',k=^f^pcc`G@k',0@0,hp`g,ct`g,pn=0,ps`5^C&&^C.prototype){^N1'`5j.m#E){^N2'`5tm.setUTCDate){^N3'`5^h^6^n&&`T#h^N4'`5pn.toPrecisio@v^N"
+"5';a`K`5a.forEach){^N6';i=0;o`B;^l`7'o`G`Pe,i=0@6i=new Iterator(o)`e}`4i^Vi=^l(o)`5i&&i.next)^N7'}}}}`j`T>=4)x=^rwidth+'x'+^r#4`5s.isns||s.^m`F`T>=3$k`p(@0`5`T>=4){c=^rpixelDepth;bw=`H#L@B;bh=`H#L^"
+"k}}$P=s.n.p^S}`6^h`F`T>=4$k`p(@0;c=^r^B`5`T#h{bw=s.d.^A`V.o$H@B;bh=s.d.^A`V.o$H^k`5!s.^n^6b){^l`7's`Gtl`G`Pe,hp=0`vh$v\");hp=s.b.isH$v(tl)?\"Y\":\"N\"`e}`4hp^Vhp=^l(s,tl);^l`7's`G`Pe,ct=0`vclientCa"
+"ps\");ct=s.b.@f`o^2`e}`4ct^Vct=^l(s$a`br`g`j$P)^0pn<$P`8&&pn<30){ps=^E$P[pn].@4@7#X`5p`3ps)<0)p+=ps;pn++}s.^d=x;s.^B=c;s.`t^t=j;s.`p=v;s.`z@H=k;s.^8@B=bw;s.^8^k=bh;s.@f`o^2=ct;s.@5=hp;s.p^S=p;s.td="
+"1`j$3{`c^1,`G$O2',vb`Ipt(^1,`G$O1',$3`js.useP^S)s.doP^S(s);`Pl=`H`M,r=^4.^A.`a`5!s.^P)s.^P=l^q?l^q:l`5!s.`a@Vs._1_`a^z`a=r;s._1_`a=1`j(vo&&$T)#W`Rm('d'#V`Rm('g')`5s.@M||^G){`Po=^G?^G:s.@M`5!o)`4'';"
+"`Pp=s.#P`r,w=1,^K,@q,x=^7t,h,l,i,oc`5^G$9==^G){^0o@Vn$x$bBODY'){o=o^9`V?o^9`V:o^9Node`5!o)`4'';^K;@q;x=^7t}oc=o.`q?''+o.`q:''`5(oc`3$S>=0$9c`3\"^woc(\")<0)||oc`3$s>=0)`4''}ta=n?o$o:1;h$5i=h`3'?^Vh="
+"s.`Q@s^C||i<0?h:h`10,#Yl=s.`Q`r;t=s.`Q^2?s.`Q^2`9:s.lt(h)`5t^bh||l))q+='&pe=@M_'+(t`Sd$c`Se'?@c(t):'o')+(h@tpev1`Zh)`f(l@tpev2`Zl):'^V`btrk=0`5s.^L@g`F!p$fs.^P;w=0}^K;i=o.sourceIndex`5@G')@x@G^Vx=1"
+";i=1`jp&&n$x)qs='&pid`Z^Ep,255))+(w@tpidt$ww`f'&oid`Z^En@7)+(x@toidt$wx`f'&ot`Zt)+(i@toi$wi#i}`j!trk@Vqs)`4'';$4=s.vs(sed)`5trk`F$4)#7=s.mr($C,(vt@tt`Zvt)`fs.hav()+q+(qs?qs:s.rq(^5)),0,id,ta);qs`g;"
+"`Rm('t')`5s.p_r)s.p_r(`I`a`g}^I(qs);^Q`u($3;`j$3`c^1,`G$O1',vb`I@M=^G=s.`Q`r=s.`Q^2=`H`m`g`5s.pg)`H^w@M=`H^weo=`H^w`Q`r=`H^w`Q^2`g`5!id@Vs.tc^ztc=1;s.flush`U()}`4#7`Ctl`0o,t,n,vo`2;s.@M=$Go`I`Q^2=t"
+";s.`Q`r=n;s.t($3}`5pg){`H^wco`0o){`P^s\"_\",1,$8`4$Go)`Cwd^wgs`0u@v`P^sun,1,$8`4s.t()`Cwd^wdc`0u@v`P^sun,$8`4s.t()}}@8=(`H`M`k`9`3'@Os^y0`Id=^A;s.b=s.d.body`5s.d@S`V#S`r^zh=s.d@S`V#S`r('HEAD')`5s.h"
+")s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;@e=s.u`3'N$t6/^V`Papn$Z`r,v$Z^t,ie=v`3#B'),o=s.u`3'@a '),i`5v`3'@a^y0||o>0)apn='@a';^h$Q`SMicrosoft Internet Explorer'`Iisns$Q`SN$t'`I^m$Q`S@a'`I^n=(s.u`"
+"3'Mac^y0)`5o>0)`T`ws.u`1o+6));`6ie>0){`T=^Ji=v`1ie+5))`5`T>3)`T`wi)}`6@e>0)`T`ws.u`1@e+10));`b`T`wv`Iem=0`5^C#R^u){i=^o^C#R^u(256))`E(`Iem=(i`S%C4%80'?2:(i`S%U0$m'?1:0))}s.sa(un`Ivl_l='^U,`YID,vmk,"
+"`Y@T,`D,`D^j,ppu,@L,`Y`r$R,c`L,`z@F,#P`r,^P,`a,@P#0l@E^R,`G`Ivl_t=^R+',^v,$l,server,#P^2,#F`oID,purchaseID,$D,state,zip,#5,products,`Q`r,`Q^2'^W`Pn=1;n<51;n#U@D+=',prop@I,eVar@I,hier@I,list@z^R2=',"
+"tnt,pe#A1#A2#A3,^d,^B,`t^t,`p,`z@H,^8@B,^8^k,@f`o^2,@5,p^S';@D+=^R2;@o@E@D,`G`Ivl_g=@D+',`N,`N^j,`NBase,fpC`L,@R`U,#3,`Y^X,`Y^X#Q`OSele`o,`OList,`OM#E,^LDow^MLinks,^L@K,^L@g,`Q@s^C,`QDow^MFile^2s,`"
+"QEx`s,`QIn`s,`Q@iVa$n`Q@i^Zs,`Q`rs,@M,eo,_1_`a#0g@E^1,`G`Ipg=pg#M^1)`5!ss)`Hs()",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(un){un=un.toLowerCase();if(l)for(i=0;i<l.length;i++){s=l[i];if(!s._c||s._c=='s_c'){if(s.oun==un)return s;else if(s.fs&&s.sa&&s.fs(s.oun,un)){s.sa(un);return s}}}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a>=5&&v.indexOf('Opera')<0&&u.indexOf('Opera')<0){w.s_c=new Function("un","pg","ss","var s=this;"+c);return new s_c(un,pg,ss)}else s=new Function("un","pg","ss","var s=new Object;"+s_ft(c)+";return s");return s(un,pg,ss)}

//-----------------
// omniHelper file
// ----------------

(function () {
var tvar;

s.linkInternalFilters="javascript:,"+_om_gbls.host;
if(_om_gbls.host.indexOf("msdn") > -1) s.linkInternalFilters="javascript:,msdn.microsoft.com,blogs.msdn.com";
if(_om_gbls.href.indexOf("technet") > -1) s.linkInternalFilters="javascript:,technet.microsoft.com,blogs.technet.com,microsoft.com/technet/";

s.pageName = _om_gbls.host.replace(/.microsoft.com/,'') + ":"+ _om_gbls.cleanupPath(_om_gbls.path); // normalize pathname and strip out (.*)
s.server = _om_gbls.host;
s.channel = _om_gbls.host.replace(/.microsoft.com/,'');
s.prop1 = (_om_gbls.site) ? _om_gbls.site : s.channel;
s.prop2 = (_om_gbls.market) ? _om_gbls.market : "none"; 
s.prop3 = (_om_gbls.path.indexOf("search") == -1) ? document.title : s.pageName;
tvar = t_omni_utils.getOmniMetaTagData("t_omni_title"); if (tvar) s.prop3 = tvar;

var skipEnd = (_om_gbls.path.indexOf('\.') > -1) ? 1 : 0;
var temppath2 = t_omni_utils.getOmniPath(_om_gbls.cleanupPath(_om_gbls.path.substring(1)),0,skipEnd);
var temppatharr = temppath2.split('\:');
if (temppatharr.length > 0) s.prop4=s.channel+": "+temppatharr[0];
if (temppatharr.length > 1) s.prop5=s.prop4+": "+temppatharr[1];
if (temppatharr.length > 2) s.prop6=s.prop5+": "+temppatharr[2];
if (temppatharr.length > 3) s.prop7=s.prop6+": "+temppatharr[3];
s.prop8 = _om_gbls.center;
s.prop9 = _om_gbls.app;
s.prop10 = window.location.href.toLowerCase();
s.prop11 = (_om_gbls.library) ? 'library' : 'non-library';
s.prop12 = _om_gbls.host + _om_gbls.path;

try { tvar = t_omni_utils.getOmniMetaTagData("search.shortid"); if (tvar) s.prop13 = tvar; } catch(e) {}
try { tvar = t_omni_utils.getOmniMetaTagData("dcs.dcsuri"); if (tvar) s.prop15 = tvar; } catch(e) {}
try {
	if (typeof(wtsp) !== 'undefined') s.prop16 = wtsp;
	if (typeof(wt_sp) !== 'undefined' && !s.prop16) s.prop16 = wt_sp;
	tvar = t_omni_utils.getOmniMetaTagData("wt.sp"); if (tvar && !s.prop16) s.prop16 = tvar;
} catch(e) {}

if (s.prop13) s.prop19 = s.prop13 + ":	 " + s.prop3;

// blogs, shorten request
if(_om_gbls.host.indexOf("blogs") > -1) s.prop10=s.prop12=s.prop15="";

}
)();

try {
s.visitorID = t_omni_utils.setOmniID();
s.t();
} catch(e) {
	t_omni_utils.logError(e,"error in s.t call");
}

