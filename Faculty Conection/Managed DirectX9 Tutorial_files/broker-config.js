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
		domain:  '.facultyresourcecenter.com' ,
		duration: 90,
		rapidDuration: 0,
		expireDate: ''
	},
	
	// optional prefix for pagemapping's pageconfig file
	prefixUrl: "",

		mapping:[
	// m=regex match, c=page config file (prefixed with configUrl), f=frequency
	{m: '//[\\w\\.-]+/', c: 'inv_c_p50829314-qInvite-500.js', f: 0.5, p: 0, halt:true 	}
]
};
COMSCORE.SiteRecruit.Broker.run();