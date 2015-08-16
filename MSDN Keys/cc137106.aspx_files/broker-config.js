var _msdn = [ ["default.aspx",'1175',0.179],["library",'1176',0.173],["ie",'1177',0.072],["netframework",'1178',0.179],["windowsazure",'1179',0.173],["magazine",'1180',0.179], ["office",'1181',0.173],["sharepoint",'1183',0.173],["sqlserver",'1184',0.173],["subscriptions",'1185',0.179],["vbasic",'1186',0.072], ["vcsharp",'1187',0.072],["visualc",'1188',0.072],["vstudio",'1189',0.072],["windowsphone",'1191',0.3],["windows",'1190',0.072]  ];
var _technet = [ ["default.aspx",'1219',0.108],["library",'1192',0.108],["windowsserver",'1194',0.108],["forefront",'1011',0.3],["office",'1195',0.108], ["sharepoint",'1196',0.3],["sqlserver",'1197',0.3],["systemcenter",'1198',0.108],["windows",'1199',0.042],["scriptcenter",'1200',0.108],["security",'1202',0.108], ["sysinternals",'1203',0.042],["virtualization",'1205',0.3],["subscriptions",'1206',0.108],["magazine",'623',0.108],["ie",'1220',0.3],["exchange",'1221',0.3],["edge",'1222',0.108]  ];
var _SC_msdn = [ ["Forums/en-US",'1207',0.179] ];
var _SC_technet = [ ["Forums/en-US",'1208',0.108] ]; 
var _Freq,_Site,srchMSForumIroot="",_wtsp="",_centerW=95,_networkW=20,_spyglassW=5,_halt=false;
if(typeof(wtsp)&& typeof(wtsp)!='undefined'){ _wtsp=wtsp.toLowerCase(); if(/_technet_library_windowsserver/i.test(_wtsp)){_wtsp="_technet_library_windowsserver_";} };
var SR_url = window.location.toString().toLowerCase();
var SR_url_stripped = SR_url.split("?");
if(SR_url_stripped[0].search('social.msdn.microsoft.com') != -1){
	_Site = 1207;
	setSiteFreq("http://social.msdn.microsoft.com/", _SC_msdn);//Social MSDN center survey check
	getIroot_resetFreq();
}else if(SR_url_stripped[0].search('social.technet.microsoft.com/forums/') != -1){
	_Site = 1208;
	setSiteFreq("http://social.technet.microsoft.com/", _SC_technet);//Social TechNet center survey check*/
	getIroot_resetFreq();
}else if(SR_url_stripped[0].search('msdn.microsoft.com') != -1){
	setSiteFreq("http://msdn.microsoft.com/en-us/", _msdn);//MSDN center survey check
	checkWTSP();
}else if(SR_url_stripped[0].search('technet.microsoft.com') != -1){
	setSiteFreq("http://technet.microsoft.com/en-us/", _technet);//TechNet center survey check
	_networkW=10;
	checkWTSP();
}
function setSiteFreq(_url, _array){
	for(i=0; i< _array.length; i++){
		if(SR_url.search(_url + _array[i][0].toString().toLowerCase()) != -1){	
			_Site = _array[i][1];
			_Freq = _array[i][2];
			break;
		}
	}
}

function checkWTSP(){
	if(_Site == '1176'){
		if(!(_wtsp=="msdnlib_webdev" || _wtsp=="msdnlib_devtools_lang" || _wtsp=="windowsazure" || _wtsp=="_msdn_library_sqlserver_" || _wtsp=="_msdnlib_w32_com" || _wtsp=="msdnlib_w32_com")){
			_centerW = 0;		_halt=true;		//_networkW = 100;
		}
		if(_wtsp=="msdnlib_w32_com"){
			_Freq=0.072;
		}else if(_wtsp=="msdnlib_webdev" || _wtsp=="msdnlib_devtools_lang"){
			_Freq=0.0248;
		}else if(_wtsp=="_msdn_library_sqlserver_"){
			_Freq=0.173;		
		}
	}else if(_Site=='1192'){
		if(!(_wtsp=="_technet_library_windowsserver_" || _wtsp=="_technet_prodtechnol_office_" || _wtsp=="_technet_library_sqlserver_" || _wtsp=="_sto_technet_systemcenter_" || _wtsp=="_technet_library_win7_" || _wtsp=="scriptcenter_technet" || _wtsp=="_technet_library_security_" || _wtsp=="_technet_library_ie_")){	
				_halt=true;
		}
		if(_wtsp=="_technet_library_win7_"){
			_Freq=0.042;
		}else if(_wtsp=="_technet_library_ie_"){
			_Freq=0.3;
		}
	}else if(_Site=='1187'){
			_centerW = 100; _spyglassW=0;
	}
}
function getIroot_resetFreq(){
		
	if(document.getElementsByName('Search.MSForums.Iroot')[0] && document.getElementsByName('Search.MSForums.Iroot')[0].getAttribute('content') != null){
		srchMSForumIroot = document.getElementsByName('Search.MSForums.Iroot')[0].getAttribute('content');
		if(/systemcenter/i.test(srchMSForumIroot)){srchMSForumIroot="systemcenter";}
		if(_Site == '1207'){
			if(srchMSForumIroot=="windowsazure" || srchMSForumIroot=="office" || srchMSForumIroot=="sharepoint" || srchMSForumIroot=="sqlserver"){
				_Freq=0.173; _centerW = 100; 	_spyglassW=0;
			}else if(srchMSForumIroot=="ie" || srchMSForumIroot=="vbasic" || srchMSForumIroot=="vcsharp" || srchMSForumIroot=="visualc" || srchMSForumIroot=="vstudio" || srchMSForumIroot=="windows"){	
				_Freq=0.072;	_centerW = 100; _spyglassW=0;
			}else if(/netframework/i.test(srchMSForumIroot)){	
				_Freq=0.179;	_centerW = 100; _spyglassW=0;
			}else{	
				_halt=true;
			}
		}else if(_Site == '1208'){
			if(srchMSForumIroot=="windowsserver" || srchMSForumIroot=="office" || srchMSForumIroot=="systemcenter" || srchMSForumIroot=="scriptcenter"){	
				_Freq=0.108; 
			}else if(srchMSForumIroot=="exchange" || srchMSForumIroot=="forefront" || srchMSForumIroot=="sharepoint" || srchMSForumIroot=="sqlserver"){
				_Freq=0.3;
			}else{	
				_halt=true;
			}
		}
		
	}else{ _halt=true; }
}
function readCookie(name)
{
  var ca = document.cookie.split(';');
  var nameEQ = name + "=";
  for(var i=0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1, c.length); //delete spaces
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
  return null;
}
var _raw_params = 'Search.MSForums.Iroot='+srchMSForumIroot+"&wtsp="+ _wtsp;
var _Career_Freq = false;
if(qI_loaded==true){
	/* Career srTimer cookie check - set freq to 100 percent if exist */
	var SRtempCookie = document.cookie.toString();
	var _timer=0; var _newpage = false;
	if(SRtempCookie.indexOf("srtimer")!= -1){
		_Career_Freq = true;
		_timer = readCookie("srtimer");
	}
}
//alert("Site=" + _Site + "\n" +_raw_params + "\nFreq: " + _Freq);
COMSCORE.SiteRecruit.Broker.config={version:"4.6.3",testMode:false,cookie:{name:"msresearch",path:"/",domain:".microsoft.com",duration:90,rapidDuration:0,expireDate:""},prefixUrl:"",mapping:[{m:"//careers\\.microsoft\\.com/careers/en/us",c:"inv_c_MS-Careers-qInvite-US.js",f:(_Career_Freq)?1:0.5,p:0},{m:"//careers\\.microsoft\\.com/careers/en/gb",c:"inv_c_MS-Careers-qInvite-GB.js",f:(_Career_Freq)?1:0.5,p:0},{m:"//careers\\.microsoft\\.com/careers/en/gbl",c:"inv_c_MS-Careers-qInvite-GBL.js",f:(_Career_Freq)?1:0.5,p:1},{m:"//careers\\.microsoft\\.com/careers/en/ie",c:"inv_c_MS-Careers-qInvite-IE.js",f:(_Career_Freq)?1:0.5,p:0},{m:"//careers\\.microsoft\\.com/careers/en/in",c:"inv_c_MS-Careers-qInvite-IN.js",f:(_Career_Freq)?1:0.25,p:0},{m:"//careers\\.microsoft\\.com/careers/zh-cn/cn",c:"inv_c_MS-Careers-qInvite-ZH-CN.js",f:(_Career_Freq)?1:0.3,p:0},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/de-de/",c:"inv_c_MSDN-p15466742-DE-DE.js",f:0.0096,p:1},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/en-au",c:"inv_c_MSDN-p15466742-en-au.js",f:0.5,p:1},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/en-us/((default\\.aspx)|(windows/)|(library|ie|netframework|windowsazure|magazine|office|sharepoint|sqlserver|subscriptions|vbasic|vcsharp|visualc|vstudio|windowsphone))",c:"inv_c_MSDN-p77596864_TIER5.js",f:_Freq,p:2,halt:_halt},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/fr-fr/",c:"inv_c_MSDN-p15466742-fr-fr.js",f:0.017,p:0},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/ja-jp/",c:"inv_c_MSDN-p15466742-JA.js",f:0.0012,p:0},{m:"(.*?social\\.msdn\\.microsoft)[\\w\\.-/]+/Forums/en-(us|US)",c:"inv_c_SC-MSDN-p77596864.js",f:_Freq,p:2,halt:_halt},{m:"(.*?social\\.technet\\.microsoft|sr-technet)[\\w\\.-]+/Forums/en/",c:"inv_c_SC-TN-p77596864-1308.js",f:0.042,p:0,prereqs:{content:[{"element":"meta","attrib":"content","attribValue":"scriptcenter|windows|windowsserver"}],cookie:[]}},{m:"(.*?social\\.technet\\.microsoft|sr-technet)[\\w\\.-]+/forums/en-(us|US)",c:"inv_c_SC-TechNet-p77596864-1208.js",f:_Freq,p:2,halt:_halt},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/de-de/",c:"inv_c_TN-p15466742-p81712691-DE.js",f:0.00525,p:2},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/en-au",c:"inv_c_TN-p15466742-en-au.js",f:0.2,p:1},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/en-us/((default\\.aspx)|(windows/)|(library|windowsserver|forefront|office|sharepoint|sqlserver|systemcenter|scriptcenter|security|sysinternals|virtualization|subscriptions|magazine|ie|exchange|edge))",c:"inv_c_TechNet-p77596864.js",f:_Freq,p:2,halt:_halt},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/fr-fr/",c:"inv_c_TN-p15466742-p81712691-FR.js",f:0.0062,p:2},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/ja-jp",c:"inv_c_TECHNET-p15466742-p81712691-JA.js",f:0.0186,p:1}]};
COMSCORE.SiteRecruit.Broker.run();