/*
Copyright (c) 2010, comScore Inc. All rights reserved.
version: 4.6.3
*/

COMSCORE.SiteRecruit.Broker.config = {
	version: "4.6.3",
	//TODO:Karl extend cookie enhancements to ie userdata
		testMode: false,
	// cookie settings
	cookie:{
		name: 'msresearch',
		path: '/',
		domain:  '.microsoft.com' ,
		duration: 90,
		rapidDuration: 0,
		expireDate: ''
	},
	
	// optional prefix for pagemapping's pageconfig file
	prefixUrl: "",

		mapping:[
	// m=regex match, c=page config file (prefixed with configUrl), f=frequency
	{m: '//[\\w\\.-]+/athome/(default\\.aspx)?$', c: 'inv_c_3331mt3-Static.js', f: 0.0087, p: 1 	}
	,{m: '//[\\w\\.-]+/athome/', c: 'inv_c_3331mt3.js', f: 0.0174, p: 0 	}
	,{m: '//[\\w\\.-]+/atwork', c: 'inv_c_3331mt5.js', f: 0.0223, p: 0 	}
	,{m: '//[\\w\\.-]+/australia/business/', c: 'inv_c_p15466742-au-373.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/australia/business/(default\\.aspx)?$', c: 'inv_c_p15466742-au-373-SB-FIXED.js', f: 0.3, p: 1 	}
	,{m: '//[\\w\\.-]+/australia/licensing/howtobuy/', c: 'inv_c_p15466742-AU-977.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/australia/windows/', c: 'inv_c_p15466742-AU-826-p37131508-AU.js', f: 0.2813, p: 0 	}
	,{m: '//[\\w\\.-]+/brasil/windows', c: 'inv_c_p37131508-Brazil.js', f: 0.028, p: 0 	}
	,{m: '//[\\w\\.-]+/canada/windows/', c: 'inv_c_p37131508-Canada.js', f: 0.309, p: 0 	}
	,{m: '//[\\w\\.-]+/china/windows/', c: 'inv_c_p37131508-China.js', f: 0.00757, p: 1 	}
	,{m: '//[\\w\\.-]+/de/de/(default\\.aspx)?$', c: 'inv_c_p15466742-Germany-HP.js', f: 0.019, p: 0 	}
	,{m: '//[\\w\\.-]+/downloads/(en/|.*?displaylang=en)', c: 'inv_c_3331mt13_NEW_751-753.js', f: 0.00068, p: 0 	}
	,{m: '//[\\w\\.-]+/dynamics/en/us(/(?!dynamicsresearch.mspx|everyonegetsit|partner-login\\.aspx|customersource\\.aspx|solution-finder\\.aspx)|$)', c: 'inv_c_3331mt14_NEW-750.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/dynamics/asmartmove/default\\.mspx', c: 'inv_c_3331mt14-SL-fix_NEW-750.js', f: 0.5, p: 3 	}
	,{m: '//[\\w\\.-]+/dynamics/en/us/default\\.mspx$', c: 'inv_c_3331mt14_flashfix_NEW-750.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/en/au/', c: 'inv_c_p15466742-AU-HP-369.js', f: 0.077, p: 0 	}
	,{m: '//[\\w\\.-]+/en/us/default\\.aspx', c: 'inv_c_p15394611-US-HP.js', f: 0.0137, p: 0 	}
	,{m: '//[\\w\\.-]+/fr/fr/(default\\.aspx)?$', c: 'inv_c_p15466742-France-HP.js', f: 0.047, p: 0 	}
	,{m: '//[\\w\\.-]+/france/windows/', c: 'inv_c_FR-p15466742_p37131508-Windows.js', f: 0.107, p: 0 	}
	,{m: '//[\\w\\.-]+/germany/branchen/', c: 'inv_c_DE-p15466742-Branchen.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/germany/server(/|$)', c: 'inv_c_DE-wss-p12038685.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/germany/windows(/|$)', c: 'inv_c_DE-p12038685-p37131508-Windows.js', f: 0.0586, p: 0 	}
	,{m: '//[\\w\\.-]+/ja/jp/', c: 'inv_c_p15466742-Japan-HP.js', f: 0.0146, p: 0 	}
	,{m: '//[\\w\\.-]+/japan/athome/', c: 'inv_c_JA-p15466742-athome.js', f: 0.0009, p: 0 	}
	,{m: '//[\\w\\.-]+/japan/atwork/', c: 'inv_c_JA-p15466742-atwork.js', f: 0.035, p: 0 	}
	,{m: '//[\\w\\.-]+/japan/business/', c: 'inv_c_JA-p15466742-business.js', f: 0.107, p: 0 	}
	,{m: '//[\\w\\.-]+/japan/servers/', c: 'inv_c_JA-p15466742-servers.js', f: 0.001, p: 0 	}
	,{m: '//[\\w\\.-]+/japan/technet/', c: 'inv_c_JA-p12038685-technet.js', f: 0.002, p: 0 	}
	,{m: '//[\\w\\.-]+/japan/windows(/(?!(downloads/ie/au\\.mspx)|(downloads/ie/iedelete\\.mspx))|$)', c: 'inv_c_JA-p15466742-p37131508-windows.js', f: 0.00859, p: 0 	}
	,{m: '//[\\w\\.-]+/korea/windows', c: 'inv_c_p37131508-Korea.js', f: 0.0319, p: 0 	}
	,{m: '//[\\w\\.-]+/learning/en/us', c: 'inv_c_3331mt42.js', f: 0.106, p: 0 	}
	,{m: '//[\\w\\.-]+/licensing(/(?!(servicecenter)|(licensewise/product\\.aspx)|(licensewise/program\\.aspx)|(mla/select\\.aspx)))', c: 'inv_c_3331mt43.js', f: 0.1, p: 0 	}
	,{m: 's://[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC.js', f: 0.0057, p: 1 	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-China.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
						{
					'element':'meta'
										,'attrib':'content'					,'attribValue':'zh-CN'
}
			]
			,cookie: [
				]
						}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter/', c: 'inv_c_p40652279-VLSC-China.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'zh-CN' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter/', c: 'inv_c_p40652279-VLSC-France.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'fr' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter/', c: 'inv_c_p40652279-VLSC-Germany.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'de' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-HongKong.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
						{
					'element':'meta'
										,'attrib':'content'					,'attribValue':'zh-HK'
}
			]
			,cookie: [
				]
						}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter/', c: 'inv_c_p40652279-VLSC-HongKong.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'zh-HK' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter/', c: 'inv_c_p40652279-VLSC-Japan.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'ja' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-Portugal.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
						{
					'element':'meta'
										,'attrib':'content'					,'attribValue':'pt-PT'
}
			]
			,cookie: [
				]
						}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-Portugal.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'pt-PT' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-Russia.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
						{
					'element':'meta'
										,'attrib':'content'					,'attribValue':'ru'
}
			]
			,cookie: [
				]
						}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-Russia.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'ru' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-ES.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
						{
					'element':'meta'
										,'attrib':'content'					,'attribValue':'es-ES'
}
			]
			,cookie: [
				]
						}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-ES.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'es-ES' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-TW.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
						{
					'element':'meta'
										,'attrib':'content'					,'attribValue':'zh-TW'
}
			]
			,cookie: [
				]
						}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-TW.js', f: 0.0057, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'zh-TW' 			}
	}
	,{m: '//[\\w\\.-]+/office/make-it-great/de-de/', c: 'inv_c_p56363720-Germany.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/office/make-it-great/en-us', c: 'inv_c_p56363720.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/protect(/(?!computer/updates/bulletins)|$)', c: 'inv_c_3331mt4.js', f: 0.047, p: 0 	}
	,{m: '//[\\w\\.-]+/rus/windows', c: 'inv_c_p37131508-Russia.js', f: 0.063, p: 0 	}
	,{m: '//[\\w\\.-]+/security', c: 'inv_c_3331mt49.js', f: 0.0187, p: 0 	}
	,{m: '//[\\w\\.-]+/showcase/en/us/', c: 'inv_c_p23275586.js', f: 0.1144, p: 0 	}
	,{m: '//[\\w\\.-]+/sql/experience/(Default\\.aspx\\?loc=en)|(html/Default\\.aspx\\?loc=en)|(html/Events\\.aspx\\?loc=en)|(LearnSQL\\.aspx\\?h=t&loc=en)|(LearnSQL\\.aspx\\?loc=en)|(Events\\.aspx\\?loc=en)|(.*\\.wmv)', c: 'inv_c_blank.js', f: 0, p: 2 	}
	,{m: '//[\\w\\.-]+/sqlserver/2008/en/us/', c: 'inv_c_p43045451-SQL08-qInvite.js', f: 0.083, p: 1 	}
	,{m: '//[\\w\\.-]+/student/en/au/', c: 'inv_c_p40683318-987-p15466742-AU-987.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/student/en/us/', c: 'inv_c_p40683318-p55291816.js', f: 0.092, p: 0 	}
	,{m: '//[\\w\\.-]+/studentstobusiness/', c: 'inv_c_p40683318-936.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/technet/(?!mnp_utility\\.mspx/(framesmenu|quicksearch|masthead)\\?url)', c: 'inv_c_p15808382-p26386365.js', f: 0.0047, p: 0 	}
	,{m: '//[\\w\\.-]+/technet/scriptcenter/', c: 'inv_c_p15808382-p26386365-TIER3.js', f: 0.0047, p: 1 	}
	,{m: '//[\\w\\.-]+/technet/security/', c: 'inv_c_p15808382-p26386365-TIER2.js', f: 0.0047, p: 1 	}
	,{m: '//[\\w\\.-]+/technet/(.*/subscriptions|support|community)/', c: 'inv_c_p15808382mt-technet.js', f: 0.0047, p: 1 	}
	,{m: '//[\\w\\.-]+/uk/windows/', c: 'inv_c_p37131508-UK.js', f: 0.0467, p: 0 	}
	,{m: '//(sr-www|wwwstaging|www\\.microsoft)[\\w\\.-]+/windows/(?!enterprise)', c: 'inv_c_p25328149-p44121997-652.js', f: 0.00279, p: 0 	}
	,{m: '//[\\w\\.-]+/windows/business/', c: 'inv_c_p53368869-p25328149.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/buy/', c: 'inv_c_p25328149-Buy-WLS-p38104477-BUY-p44121997.js', f: 0.129, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/compatibility/windows-7/en-us', c: 'inv_c_p43579784-p44121997-p25328149.js', f: 0.0137, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/(default\\.aspx)?$', c: 'inv_c_p25328149-HP_882-p44121997.js', f: 0.0387, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/downloads/', c: 'inv_c_p25328149-downloads-p34934647.js', f: 0.023, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/enterprise/(?!(default\\.(aspx|html|mspx))|$)', c: 'inv_c_p38361073-DDS.js', f: 0.175, p: 0 	}
	,{m: '//[\\w\\.-]+/windows/internet-explorer/(?!welcome\\.aspx)', c: 'inv_c_3331mt62-p25328149-p44121997-62.js', f: 0.0031, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/offers/', c: 'inv_c_p44121997-p25328149-942.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/pc-scout/(default\\.aspx)?$', c: 'inv_c_p25328149-Buy-p44121997.js', f: 0.1714, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/social', c: 'inv_c_p44121997-p25328149-940.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/windows-7/', c: 'inv_c_p34934887-p25328149-p44121997.js', f: 0.0217, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/windows-7/compare/pc-vs-mac\\.aspx$', c: 'inv_c_p44121997-p34934887-p25328149-1128.js', f: 0.5, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/windows-7/get/anytime-upgrade/find-your-edition\\.aspx', c: 'inv_c_p34934887-p25328149-p44121997-1053.js', f: 0.5, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/windows-7/get/anytime-upgrade/home-premium\\.aspx', c: 'inv_c_p34934887-p25328149-p44121997-1051.js', f: 0.5, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/windows-7/get/anytime-upgrade/professional\\.aspx', c: 'inv_c_p34934887-p25328149-p44121997-1052.js', f: 0.5, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/windows-7/get/anytime-upgrade/starter\\.aspx', c: 'inv_c_p34934887-p25328149-p44121997-1050.js', f: 0.5, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/windows-7/videos-tours\\.aspx$', c: 'inv_c_p44121997-p34934887-p25328149-939.js', f: 0.5, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/windows-7/what-is-windows-7\\.aspx$', c: 'inv_c_p44121997-p34934887-p25328149-941.js', f: 0.1225, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/windows-vista(/|$)', c: 'inv_c_3331mt64-p25328149-p44121997.js', f: 0.051, p: 1 	}
	,{m: '//[\\w\\.-]+/windowsembedded/en-us/', c: 'inv_c_3331mt174.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/windowsmobile/en-us/', c: 'inv_c_3331mt173.js', f: 0.0048, p: 0 	}
	,{m: '//[\\w\\.-]+/windowsmobile/en-us/totalaccess/', c: 'inv_c_p30393194_3331mt173.js', f: 0.0048, p: 1 	}
]
};
COMSCORE.SiteRecruit.Broker.run();