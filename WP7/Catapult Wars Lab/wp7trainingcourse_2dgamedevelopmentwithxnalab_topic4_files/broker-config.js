var _msdn = [ ["default.aspx",'1175',0.0119],["library",'1176',0.00205],["ie",'1177',0.157],["netframework",'1178',0.0119],["windowsazure",'1179',0.006],["magazine",'1180',0.0119], ["office",'1181',0.006],["scriptjunkie",'1182',0.006],["sharepoint",'1183',0.006],["sqlserver",'1184',0.006],["subscriptions",'1185',0.0119],["vbasic",'1186',0.157], ["vcsharp",'1187',0.157],["visualc",'1188',0.157],["vstudio",'1189',0.157],["windowsphone",'1191',0.006],["windows",'1190',0.157]  ];
var _technet = [ ["default.aspx",'1219',0.0139],["library",'1192',0.0042],["windowsserver",'1194',0.0139],["forefront",'1011',0.5],["office",'1195',0.0139], ["sharepoint",'1196',0.5],["sqlserver",'1197',0.5],["systemcenter",'1198',0.0139],["windows",'1199',0.01],["scriptcenter",'1200',0.0139],["security",'1202',0.0139], ["sysinternals",'1203',0.01],["virtualization",'1205',0.5],["subscriptions",'1206',0.0139],["magazine",'623',0.0139],["ie",'1220',0.5],["exchange",'1221',0.5],["edge",'1222',0.5]  ];
var _SC_msdn = [ ["Forums/en-US/category",'1207',0.00205],["Forums/en-US/categories",'632',0.006],["Forums/en-US",'1207',0.006] ];
var _SC_technet = [ ["Forums/en-US/category",'1208',0.01],["Forums/en-US/categories",'1193',0.01],["Forums/en/itcg/threads",'1201',0.0139],["Forums/en/",'1224',0.01] ];
var _Freq,_Site,srchMSForumIroot="",_wtsp="";
if(typeof(wtsp)&& typeof(wtsp)!='undefined'){ _wtsp=wtsp; if(/_technet_library_windowsserver/i.test(_wtsp)){_wtsp="_technet_library_windowsserver_";} };
var SR_url = window.location.toString().toLowerCase();
var SR_url_stripped = SR_url.split("?");
function setSiteFreq(_url, _array){
	for(i=0; i< _array.length; i++){
		if(SR_url.search(_url + _array[i][0].toString().toLowerCase()) != -1){	
			_Site = _array[i][1];
			_Freq = _array[i][2];
			break;
		}
	}
}
if(SR_url_stripped[0].search('social.msdn.microsoft.com') != -1){
	_Site = 1207;
	setSiteFreq("http://social.msdn.microsoft.com/", _SC_msdn);//Social MSDN center survey check
	getIroot_resetFreq();
}else if(SR_url_stripped[0].search('social.technet.microsoft.com') != -1){
	_Site = 1208;
	setSiteFreq("http://social.technet.microsoft.com/", _SC_technet);//Social TechNet center survey check*/
	getIroot_resetFreq();
}else if(SR_url_stripped[0].search('msdn.microsoft.com') != -1){
	setSiteFreq("http://msdn.microsoft.com/en-us/", _msdn);//MSDN center survey check
	getIroot_resetFreq();
}else if(SR_url_stripped[0].search('technet.microsoft.com') != -1){
	setSiteFreq("http://technet.microsoft.com/en-us/", _technet);//TechNet center survey check
	getIroot_resetFreq();
}
function getIroot_resetFreq(){
	if(document.getElementsByName('Search.MSForums.Iroot')[0] && document.getElementsByName('Search.MSForums.Iroot')[0].getAttribute('content') != null){
			srchMSForumIroot = document.getElementsByName('Search.MSForums.Iroot')[0].getAttribute('content');
			if(/systemcenter/i.test(srchMSForumIroot)){srchMSForumIroot="systemcenter";}
			if(_Site == '1207'){
			if(/windowsazure|office|scriptjunkie|sharepoint|sqlserver|windowsphone/i.test(srchMSForumIroot)){
					_Freq=0.006;
			}else if(/ie|vbasic|vcsharp|visualc|vstudio|windows/i.test(srchMSForumIroot)){	
				_Freq=0.157;	
			}else if(/netframework/i.test(srchMSForumIroot)){	
				_Freq=0.0119;	
			}else{	
				_Freq=0.00205;	
			}
		}else if(_Site == '1208'){
			if(/windowsserver|office|systemcenter|scriptcenter/i.test(srchMSForumIroot)){	
				_Freq=0.0139;	
			}else if(/forefront|sharepoint|sqlserver/i.test(srchMSForumIroot)){	
				_Freq=0.5;	
			}else{	
				_Freq=0.01;	
			}
		}
	}
}
var _raw_params = 'Search.MSForums.Iroot='+srchMSForumIroot+"&wtsp="+ _wtsp;
COMSCORE.SiteRecruit.Broker.config={version:"4.6.3",testMode:false,cookie:{name:"msresearch",path:"/",domain:".microsoft.com",duration:90,rapidDuration:0,expireDate:""},prefixUrl:"",mapping:[{m:"//careers\\.microsoft\\.com/careers/en/fr/",c:"inv_c_p37116158-EN-FR-995.js",f:1,p:0},{m:"//[\\w\\.-]+/careers/en/ru/",c:"inv_c_p37116158-EN-RU.js",f:0.5,p:0},{m:"//careers\\.microsoft\\.com/careers/fr/fr/",c:"inv_c_p37116158-FR-997.js",f:1,p:0},{m:"//[\\w\\.-]+/careers/ru/ru/",c:"inv_c_p37116158-RU-RU-983.js",f:0.5,p:0},{m:"//[\\w\\.-]+/careers/en/in/",c:"inv_c_p37116158-EN-IN-964.js",f:0.379,p:0},{m:"//[\\w\\.-]+/careers/en/it/",c:"inv_c_p37116158-EN-IT-962.js",f:0.5,p:0},{m:"//careers\\.microsoft\\.com/careers/en/us/home\\.aspx",c:"inv_c_p37116158-EN-US-899.js",f:0.5,p:1},{m:"//[\\w\\.-]+/careers/it/it/",c:"inv_c_p37116158-IT-IT-960.js",f:0.5,p:0},{m:"//careers.microsoft\\.com/search\\.aspx\\?.*gl=fra&lang=fr",c:"inv_c_p37116158-FR-998.js",f:1,p:0},{m:"//[\\w\\.-]+/search\\.aspx.*\\?gl=rus&lang=en",c:"inv_c_p37116158-EN-RU-982.js",f:0.5,p:0},{m:"careers\\.microsoft\\.com/careers/en/jp/",c:"inv_c_p37116158-EN-JP-521.js",f:1,p:1},{m:"//careers\\.microsoft\\.com/careers/ja/jp/",c:"inv_c_p37116158-JA-JP-519.js",f:1,p:1},{m:"//careers\\.microsoft\\.com/search\\.aspx\\?.*gl=fra&lang=en",c:"inv_c_p37116158-EN-FR-996.js",f:1,p:0},{m:"//[\\w\\.-]+/search\\.aspx\\?gl=IND",c:"inv_c_p37116158-EN-IN.js",f:0.5,p:0},{m:"careers.microsoft.com/search\\.aspx\\?.*gl=ita&lang=en",c:"inv_c_p37116158-EN-IT-963.js",f:0.5,p:0},{m:"careers.microsoft.com/search\\.aspx\\?.*gl=ita&lang=it",c:"inv_c_p37116158-IT-IT-961.js",f:0.5,p:0},{m:"//careers\\.microsoft\\.com/search\\.aspx\\?gl=jpn&lang=en",c:"inv_c_p37116158-EN-JP-522.js",f:1,p:0},{m:"//careers\\.microsoft\\.com/search\\.aspx\\?gl=jpn&lang=ja",c:"inv_c_p37116158-JA-JP-520.js",f:1,p:0},{m:"//[\\w\\.-]+/search\\.aspx.*\\?gl=rus&lang=ru",c:"inv_c_p37116158-RU-RU-984.js",f:0.5,p:0},{m:"//careers\\.microsoft\\.com/search\\.aspx\\?.*gl=usa",c:"inv_c_p37116158-EN-US-890.js",f:0.5,p:1},{m:"(code\\.msdn\\.microsoft\\.com|cpapp02)",c:"inv_c_CODE-p26386365_661-p15808382mt.js",f:0.0027,p:0},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/de-de/",c:"inv_c_MSDN-p15466742-DE-DE.js",f:0.0096,p:1},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/en-au/",c:"inv_c_MSDN-p15466742-en-au.js",f:0.2953,p:1},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/en-us/",c:"inv_c_MSDN-p15808382-p26386365_TIER4.js",f:0.0027,p:0},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/en-us/((default\\.aspx)|(windows/)|(library|ie|netframework|windowsazure|magazine|office|scriptjunkie|sharepoint|sqlserver|subscriptions|vbasic|vcsharp|visualc|vstudio|windowsphone))",c:"inv_c_MSDN-p77596864_TIER5.js",f:_Freq,p:2},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/fr-fr/",c:"inv_c_MSDN-p15466742-fr-fr.js",f:0.01,p:0},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/ja-jp/",c:"inv_c_MSDN-p15466742-JA.js",f:0.0012,p:0},{m:"(.*?social\\.msdn\\.microsoft)[\\w\\.-/]+/en-us/",c:"inv_c_MSDN-p15808382-p26386365_659.js",f:0.002,p:0},{m:"(.*?social\\.msdn\\.microsoft)[\\w\\.-/]+/Forums/en-US/",c:"inv_c_SC-MSDN-p77596864.js",f:_Freq,p:2},{m:"(.*?social\\.technet\\.microsoft)[\\w\\.-/]+/en-us/",c:"inv_c_TN-p15808382-p26386365_663.js",f:0.0025,p:1},{m:"(.*?social\\.technet\\.microsoft|sr-technet)[\\w\\.-]+/forums/((en-us/)|(en/(ITCG|itcg)/threads)|en/)",c:"inv_c_SC-TechNet-p77596864.js",f:_Freq,p:3},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/de-de/",c:"inv_c_TN-p15466742-DE-DE.js",f:0.01,p:0},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/en-au/",c:"inv_c_TN-p15466742-en-au.js",f:0.1,p:1},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/en-us/",c:"inv_c_TN-p15808382-p26386365_74-TIER4.js",f:0.0047,p:0},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/en-us/((default\\.aspx)|(windows/)|(library|windowsserver|forefront|office|sharepoint|sqlserver|systemcenter|scriptcenter|security|sysinternals|virtualization|subscriptions|magazine|ie|exchange|edge))",c:"inv_c_TechNet-p77596864.js",f:_Freq,p:2},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/fr-fr/",c:"inv_c_TN-p15466742-FR-FR.js",f:0.008,p:1},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/ja-jp/",c:"inv_c_TECHNET-p15466742-JA.js",f:0.0012,p:0}]};
COMSCORE.SiteRecruit.Broker.run();