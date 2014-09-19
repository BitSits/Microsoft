///////////////////////////////////////////////////////////////////////////////
//
//  Silverlight.js   			version 1.0
//
//  This file is provided by Microsoft as a helper file for websites that
//  incorporate Silverlight Objects. This file is provided under the Silverlight 
//  SDK 1.0 license available at http://go.microsoft.com/fwlink/?linkid=94240.  
//  You may not use or distribute this file or the code in this file except as 
//  expressly permitted under that license.
// 
//  Copyright (c) 2007 Microsoft Corporation. All rights reserved.
//
///////////////////////////////////////////////////////////////////////////////

if(!window.Silverlight)window.Silverlight={};Silverlight._silverlightCount=0;Silverlight.ua=null;Silverlight.available=false;Silverlight.fwlinkRoot="http://go.microsoft.com/fwlink/?LinkID=";Silverlight.StatusText="Get Microsoft Silverlight";Silverlight.EmptyText="";Silverlight.detectUserAgent=function(){var a=window.navigator.userAgent;Silverlight.ua={OS:"Unsupported",Browser:"Unsupported"};if(a.indexOf("Windows NT")>=0)Silverlight.ua.OS="Windows";else if(a.indexOf("PPC Mac OS X")>=0)Silverlight.ua.OS="MacPPC";else if(a.indexOf("Intel Mac OS X")>=0)Silverlight.ua.OS="MacIntel";if(Silverlight.ua.OS!="Unsupported")if(a.indexOf("MSIE")>=0){if(navigator.userAgent.indexOf("Win64")==-1)if(parseInt(a.split("MSIE")[1])>=6)Silverlight.ua.Browser="MSIE"}else if(a.indexOf("Firefox")>=0){var b=a.split("Firefox/")[1].split("."),c=parseInt(b[0]);if(c>=2)Silverlight.ua.Browser="Firefox";else{var d=parseInt(b[1]);if(c==1&&d>=5)Silverlight.ua.Browser="Firefox"}}else if(a.indexOf("Safari")>=0)Silverlight.ua.Browser="Safari"};Silverlight.detectUserAgent();Silverlight.isInstalled=function(d){var c=false,a=null;try{var b=null;if(Silverlight.ua.Browser=="MSIE")b=new ActiveXObject("AgControl.AgControl");else if(navigator.plugins["Silverlight Plug-In"]){a=document.createElement("div");document.body.appendChild(a);a.innerHTML='<embed type="application/x-silverlight" />';b=a.childNodes[0]}if(b.IsVersionSupported(d))c=true;b=null;Silverlight.available=true}catch(e){c=false}if(a)document.body.removeChild(a);return c};Silverlight.createObject=function(l,g,m,j,k,i,h){var b={},a=j,c=k;a.source=l;b.parentElement=g;b.id=Silverlight.HtmlAttributeEncode(m);b.width=Silverlight.HtmlAttributeEncode(a.width);b.height=Silverlight.HtmlAttributeEncode(a.height);b.ignoreBrowserVer=Boolean(a.ignoreBrowserVer);b.inplaceInstallPrompt=Boolean(a.inplaceInstallPrompt);var e=a.version.split(".");b.shortVer=e[0]+"."+e[1];b.version=a.version;a.initParams=i;a.windowless=a.isWindowless;a.maxFramerate=a.framerate;for(var d in c)if(c[d]&&d!="onLoad"&&d!="onError"){a[d]=c[d];c[d]=null}delete a.width;delete a.height;delete a.id;delete a.onLoad;delete a.onError;delete a.ignoreBrowserVer;delete a.inplaceInstallPrompt;delete a.version;delete a.isWindowless;delete a.framerate;if(Silverlight.isInstalled(b.version)){if(Silverlight._silverlightCount==0)if(window.addEventListener)window.addEventListener("onunload",Silverlight.__cleanup,false);else window.attachEvent("onunload",Silverlight.__cleanup);var f=Silverlight._silverlightCount++;a.onLoad="__slLoad"+f;a.onError="__slError"+f;window[a.onLoad]=function(a){if(c.onLoad)c.onLoad(document.getElementById(b.id),h,a)};window[a.onError]=function(a,b){if(c.onError)c.onError(a,b);else Silverlight.default_error_handler(a,b)};slPluginHTML=Silverlight.buildHTML(b,a)}else slPluginHTML=Silverlight.buildPromptHTML(b);if(b.parentElement)b.parentElement.innerHTML=slPluginHTML;else return slPluginHTML};Silverlight.supportedUserAgent=function(){var a=Silverlight.ua,b=a.OS=="Unsupported"||a.Browser=="Unsupported"||a.OS=="Windows"&&a.Browser=="Safari"||a.OS.indexOf("Mac")>=0&&a.Browser=="IE";return !b};Silverlight.buildHTML=function(c,d){var a=[],e,i,g,f,h;if(Silverlight.ua.Browser=="Safari"){a.push("<embed ");e="";i=" ";g='="';f='"';h=' type="application/x-silverlight"/>'+"<iframe style='visibility:hidden;height:0;width:0'/>"}else{a.push('<object type="application/x-silverlight"');e=">";i=' <param name="';g='" value="';f='" />';h="</object>"}a.push(' id="'+c.id+'" width="'+c.width+'" height="'+c.height+'" '+e);for(var b in d)if(d[b])a.push(i+Silverlight.HtmlAttributeEncode(b)+g+Silverlight.HtmlAttributeEncode(d[b])+f);a.push(h);return a.join("")};Silverlight.default_error_handler=function(e,b){var d,c=b.ErrorType;d=b.ErrorCode;var a="\nSilverlight error message     \n";a+="ErrorCode: "+d+"\n";a+="ErrorType: "+c+"       \n";a+="Message: "+b.ErrorMessage+"     \n";if(c=="ParserError"){a+="XamlFile: "+b.xamlFile+"     \n";a+="Line: "+b.lineNumber+"     \n";a+="Position: "+b.charPosition+"     \n"}else if(c=="RuntimeError"){if(b.lineNumber!=0){a+="Line: "+b.lineNumber+"     \n";a+="Position: "+b.charPosition+"     \n"}a+="MethodName: "+b.methodName+"     \n"}alert(a)};Silverlight.createObjectEx=function(b){var a=b,c=Silverlight.createObject(a.source,a.parentElement,a.id,a.properties,a.events,a.initParams,a.context);if(a.parentElement==null)return c};Silverlight.buildPromptHTML=function(i){var a=null,f=Silverlight.fwlinkRoot,c=Silverlight.ua.OS,b="92822",d;if(i.inplaceInstallPrompt){var h;if(Silverlight.available){d="94376";h="94382"}else{d="92802";h="94381"}var g="93481",e="93483";if(c=="Windows"){b="92799";g="92803";e="92805"}else if(c=="MacIntel"){b="92808";g="92804";e="92806"}else if(c=="MacPPC"){b="92807";g="92815";e="92816"}a='<table border="0" cellpadding="0" cellspacing="0" width="205px"><tr><td><img title="Get Microsoft Silverlight" onclick="javascript:Silverlight.followFWLink({0});" style="border:0; cursor:pointer" src="{1}"/></td></tr><tr><td style="background:#C7C7BD; text-align: center; color: black; font-family: Verdana; font-size: 9px; padding-bottom: 0.05cm; ;padding-top: 0.05cm" >By clicking <b>Get Microsoft Silverlight</b> you accept the <a title="Silverlight License Agreement" href="{2}" target="_top" style="text-decoration: underline; color: #36A6C6"><b>Silverlight license agreement</b></a>.</td></tr><tr><td style="border-left-style: solid; border-right-style: solid; border-width: 2px; border-color:#c7c7bd; background: #817d77; color: #FFFFFF; text-align: center; font-family: Verdana; font-size: 9px">Silverlight updates automatically, <a title="Silverlight Privacy Statement" href="{3}" target="_top" style="text-decoration: underline; color: #36A6C6"><b>learn more</b></a>.</td></tr><tr><td><img src="{4}"/></td></tr></table>';a=a.replace("{2}",f+g);a=a.replace("{3}",f+e);a=a.replace("{4}",f+h)}else{if(Silverlight.available)d="94377";else d="92801";if(c=="Windows")b="92800";else if(c=="MacIntel")b="92812";else if(c=="MacPPC")b="92811";a='<div style="width: 205px; height: 67px; background-color: #FFFFFF"><img onclick="javascript:Silverlight.followFWLink({0});" style="border:0; cursor:pointer" src="{1}" alt="Get Microsoft Silverlight"/></div>'}a=a.replace("{0}",b);a=a.replace("{1}",f+d);return a};Silverlight.__cleanup=function(){for(var a=Silverlight._silverlightCount-1;a>=0;a--){window["__slLoad"+a]=null;window["__slError"+a]=null}if(window.removeEventListener)window.removeEventListener("unload",Silverlight.__cleanup,false);else window.detachEvent("onunload",Silverlight.__cleanup)};Silverlight.followFWLink=function(a){top.location=Silverlight.fwlinkRoot+String(a)};Silverlight.HtmlAttributeEncode=function(c){var a,b="";if(c==null)return null;for(var d=0;d<c.length;d++){a=c.charCodeAt(d);if(a>96&&a<123||a>64&&a<91||a>43&&a<58&&a!=47||a==95)b=b+String.fromCharCode(a);else b=b+"&#"+a+";"}return b}//
// bluelight-1.0.js
// Additional Bluelight launch code to be appended to Silverlight.js
// $Id: SL2.js#12 2007/06/12 10:40:07 $
//

Silverlight.ua=null;
Silverlight.detectUserAgent=function(){var a=window.navigator.userAgent;Silverlight.ua={OS:"Unsupported",Browser:"Unsupported"};if(a.indexOf("Windows NT")>=0)Silverlight.ua.OS="Windows";else if(a.indexOf("PPC Mac OS X")>=0)Silverlight.ua.OS="MacPPC";else if(a.indexOf("Intel Mac OS X")>=0)Silverlight.ua.OS="MacIntel";if(Silverlight.ua.OS!="Unsupported")if(a.indexOf("MSIE")>=0){if(navigator.userAgent.indexOf("Win64")==-1)if(parseInt(a.split("MSIE")[1])>=6)Silverlight.ua.Browser="MSIE"}else if(a.indexOf("Firefox")>=0){var b=a.split("Firefox/")[1].split("."),c=parseInt(b[0]);if(c>=2)Silverlight.ua.Browser="Firefox";else{var d=parseInt(b[1]);if(c==1&&d>=5)Silverlight.ua.Browser="Firefox"}}else if(a.indexOf("Safari")>=0)Silverlight.ua.Browser="Safari"};
Silverlight.detectUserAgent();

if (!window.SLStreaming) {
    window.SLStreaming = {};
}

if (!SLStreaming.invocationService) {
    SLStreaming.invocationService = "http://silverlight.services.live.com/invoke";

    SLStreaming.afterLoadFns = [];
    SLStreaming.pageLoaded   = false;
    SLStreaming.provided     = {};
    SLStreaming.requests     = [];
    SLStreaming.appInfo      = {};
    SLStreaming.nextSym      = 1;
    SLStreaming.loadQueue    = [];
    SLStreaming.evalDelay    = 0;
    SLStreaming.isSafari     = /WebKit/i.test(navigator.userAgent);
    SLStreaming.log          = [];
    SLStreaming.debugAlert   = false;
}

SLStreaming.GetLog = function() {
    return SLStreaming.log;
}
SLStreaming.ShowLog = function() {
    alert(SLStreaming.log.join('\n'));
}

SLStreaming.Log = function(msg) {
    if (SLStreaming.debugAlert) {
        alert(msg);
    }
    SLStreaming.log.push(msg);
    if (window.console) {
        window.console.log(msg);
    }
}

SLStreaming.DebugStr = function(o) {
    if (o == undefined) {
        return "undefined";
    } else if (o == null) {
        return "null";
    } else if (typeof(o) == "object" && typeof(o.length) == "undefined") {
        var s = o.toString();
        for (var x in o) {
           s += "," + x + "=" + o[x];
        }
        return s;
    } else {
        return o.toString();
    }
}

SLStreaming._OnPageLoad = function() {
   SLStreaming.pageLoaded = true;
   for (var i = 0; i < SLStreaming.afterLoadFns.length; ++i) {
       SLStreaming.afterLoadFns[i]();
   }
   SLStreaming.afterLoadFns = [];
}

SLStreaming._SetupOnLoadHandler = function() {
    if (window.addEventListener) {
        window.addEventListener("load", SLStreaming._OnPageLoad, true);
    } else if (window.attachEvent) {
        window.attachEvent("onload", SLStreaming._OnPageLoad);
    } else {
        window.onload = SLStreaming._OnPageLoad;
    }
}
SLStreaming._SetupOnLoadHandler();

SLStreaming._RunAfterLoad = function(fn) {
    if (SLStreaming.pageLoaded) {
        fn();
    } else {
        SLStreaming.afterLoadFns.push(fn);
    }
}

// Facility for keeping track of which files we've loaded.
SLStreaming._Provide = function(filename) {
    SLStreaming.provided[filename] = true;
    for (var i = SLStreaming.requests.length - 1; i >= 0; --i) {
        if (SLStreaming._CheckRequire(SLStreaming.requests[i])) {
            SLStreaming.requests.splice(i, 1);   // remove it
        }
    }
}

SLStreaming._Require = function(appId, files, fn) {
    var req = {files: files, fn: fn};
    var allHere = true;
    for (var i = 0; i < req.files.length; ++i) {
        if (!SLStreaming.provided[req.files[i]]) {
            allHere = false;
        }
    }
    if (allHere) {
        fn();
    } else {
        SLStreaming.requests.push(req);
    }
}

SLStreaming._CheckRequire = function(req) {
    var Log = SLStreaming.Log;
    Log("Check require");
    for (var i = 0; i < req.files.length; ++i) {
        Log("  " + i + ": " + req.files[i]);
        if (!SLStreaming.provided[req.files[i]]) {
            Log("  " + i + " not found");
            return false;
        }
    }
    // found them all; do the function
    req.fn();
    return true;
}

SLStreaming._DumbLoadScript = function(url) {
    var tag = document.createElement("script");
    tag.src = url;
    document.body.appendChild(tag);
}

SLStreaming._LoadScript = function(url) {
    if (SLStreaming.loadQueue.length > 0) {
        // We're already waiting for some script.
        SLStreaming.loadQueue.push(url);
    } else {
        SLStreaming.loadQueue.push(url);
        SLStreaming._AddScriptTag(url);
    }
}

SLStreaming._SignalLoadDone = function(url) {
    var Log = SLStreaming.Log;
    if (SLStreaming.loadQueue[0] != url) {
        Log("done twice with " + url);
        return; // already did this one
    }
    Log("Done with " + url);
    SLStreaming.loadQueue.shift();
    if (SLStreaming.loadQueue.length > 0) {
        SLStreaming._AddScriptTag(
            SLStreaming.loadQueue[0]);
    }
}

// Add a tag and remember that we're working on things.
SLStreaming._AddScriptTag = function(url) {
    var HandleReadyChange = function() {
        SLStreaming.Log("ready change " + tag.readyState + " " + url);
        if (tag.readyState == "loaded" || tag.readyState == "complete") {
            SLStreaming._SignalLoadDone(url);
            SLStreaming._Provide(url);
        }
    }
    var HandleLoad = function() {
        SLStreaming._SignalLoadDone(url);
        SLStreaming._Provide(url);
    }
    SLStreaming.Log("Adding script for " + url);
    var tag = document.createElement("script");
    tag.type               = "text/javascript";
    tag.src                = url;
    tag.onreadystatechange = HandleReadyChange;
    tag.onload             = HandleLoad;
    document.body.appendChild(tag);
}

if (SLStreaming.isSafari) {
    SLStreaming._AddScriptTag = function(url) {
        var Log = SLStreaming.Log;
        var HandleReadyChange = function() {
            var req = xml;
            Log("ready change " + url + " " + req.readyState);
            if (req.readyState == 4) {
                var provide = function() {
                    SLStreaming._Provide(url);
                }
                var text = req.responseText;
                Log("Got " + text.length + " chars");
                window.setTimeout(text, SLStreaming.evalDelay);
                window.setTimeout(provide, SLStreaming.evalDelay);
                SLStreaming._SignalLoadDone(url);
            }
        }
        var xml = new XMLHttpRequest();
        xml.open("GET", url, true);
        xml.onreadystatechange = HandleReadyChange;
        xml.send();
    }
}

SLStreaming.ParseInitParams = function(origParams) {
    // Match the way the plug parses this.
    var initParams = ("" + origParams).split(',');
    var result = [];
    for (var i = 0; i < initParams.length; ++i) {
        var idx = initParams[i].indexOf('=');
        if (idx < 0) {
            result[i] = {key: "", value: initParams[i]};
        } else {
            result[i] = {
                key:   initParams[i].substring(0, idx),
                value: initParams[i].substring(idx + 1)
            };
        }
    }
    return result;
}

Silverlight.createHostedObjectEx = function(params)
{
    var streamingApp = false;
    var app = "/local";
    if (params.source.substring(0, 10) == "streaming:") {
        streamingApp = true;
        app = params.source.substring(10);
    }
    var invParams = '';
    if (params.initParams) {
        var pp = SLStreaming.ParseInitParams(params.initParams);
        var idx = 0;
        for (var k = 0; k < pp.length; ++k) {
            if (pp[k].value.substring(0, 10) == "streaming:") {
                invParams += '&p' + (idx++) + '=' + pp[k].value.substring(10);
            }
        }
    }
    if (streamingApp || invParams) {
        var id = "bl" + (++SLStreaming.nextSym);
        var url = SLStreaming.invocationService +
                  app + "/starth.js?id=" + id + 
                  "&u=" + (new Date().valueOf()) +
                  invParams;
        SLStreaming.appInfo[id] = params;
        params.onTranslate = null;
        var fn = function() {
            SLStreaming._DumbLoadScript(url);
        }
        SLStreaming._RunAfterLoad(fn);
    } else {
        Silverlight.createObjectEx(params);
    }
}

SLStreaming.translateUrls = function(urls, onTranslate) {
    if (onTranslate == null) return;

    var info = {};

    var streamingApp = false;
    var app = "/local";
    var invParams = '';

    var pp = SLStreaming.ParseInitParams(urls);
    var idx = 0;
    for (var k = 0; k < pp.length; ++k) {
        if (pp[k].value.substring(0, 10) == "streaming:") {
            invParams += '&p' + (idx++) + '=' + pp[k].value.substring(10);
        }
    }
    var id = "bl" + (++SLStreaming.nextSym);
    var url = SLStreaming.invocationService +
                  app + "/starth.js?id=" + id + 
                  "&u=" + (new Date().valueOf()) +
                  invParams;
    SLStreaming.appInfo[id] = {initParams: urls, onTranslate: onTranslate}
    var fn = function() {
        SLStreaming._DumbLoadScript(url);
    }
    SLStreaming._RunAfterLoad(fn);
}

// Called in containing page
SLStreaming._StartApp = function(appId, appUrl, manifest, jsFiles, params) {
    var info = SLStreaming.appInfo[appId];
    var ifn = manifest.loadFunction         || "";
    var stx = manifest.source               || "";
    var w   = manifest.width                || "100%";
    var h   = manifest.height               || "100%";
    var bg  = manifest.background           || "";
    var wl  = manifest.isWindowless         || "";
    var fr  = manifest.framerate            || "";
    var onl = manifest.onLoad               || "";
    var one = manifest.onError              || "";
    var eha = manifest.enableHtmlAccess     || "";
    var ipi = manifest.inPlaceInstallPrompt || "";
    var ver = manifest.version              || "1.0";

    if (appUrl == null) {
        SLStreaming._StartLocalApp(info, params);
        return;
    }

    var hash = "/" + encodeURIComponent(ifn);
    hash += "/" + encodeURIComponent(appId);
    hash += "/" + encodeURIComponent(stx);
    hash += "/" + encodeURIComponent(bg);
    hash += "/" + encodeURIComponent(wl);
    hash += "/" + encodeURIComponent(fr);
    hash += "/" + encodeURIComponent(onl);
    hash += "/" + encodeURIComponent(one);
    hash += "/" + encodeURIComponent(eha);
    hash += "/" + encodeURIComponent(ipi);
    hash += "/" + encodeURIComponent(ver);

    hash += "/" + jsFiles.length;
    for (var i = 0; i < jsFiles.length; ++i) {
        hash += "/" + encodeURIComponent(jsFiles[i]);
    }
    var iParams = 0;
    if (info.initParams) {
        var pp = SLStreaming.ParseInitParams(info.initParams);
        for (var i = 0; i < pp.length; ++i) {
            if (pp[i].value.substring(0, 10) == "streaming:") {
                pp[i].value = params[iParams++];
            }
            if (pp[i].key) {
                hash += "/" + encodeURIComponent(pp[i].key + '=' + pp[i].value);
            } else {
                hash += "/" + encodeURIComponent(pp[i].value);
            }
        }
    }
    // Double encode for Firefox
    hash = encodeURIComponent(hash);
    //alert("host element: " + info.hostElement);
    var text = "<iframe " +
               "src='" + appUrl + (ver == "2.0" ? "/zziframehtml2zz.html#" : "/zziframehtml1zz.html#") + hash + "' " +
               "height='" + h + "' width='" + w + "' " +
               "scrolling='no' " +
               "frameborder='0' " +
               "></iframe>";
    info.parentElement.innerHTML = text;
}

SLStreaming._StartLocalApp = function(info, params) {
    var iParams = 0;
    var newIP = [];
    var translation = {};
    if (info.initParams) {
        var pp = SLStreaming.ParseInitParams(info.initParams);
        for (var i = 0; i < pp.length; ++i) {
            var val = pp[i].value;
            if (val.substring(0, 10) == "streaming:") {
                val = params[iParams++];
            }
            translation[pp[i].value] = val;
            if (pp[i].key) {
                newIP.push(pp[i].key + '=' + val);
            } else {
                newIP.push(val);
            }
        }
    }
    if (info.onTranslate) {
        info.onTranslate(translation);
    } else {
        info.initParams = newIP.toString();
        Silverlight.createObjectEx(info);
    }
}

// Called in the iframe
SLStreaming._FinishStartup = function() {
    var Log = SLStreaming.Log;
    Log("_FinishStartup");
    function Decode(s) {
        var x = decodeURIComponent(s);
        return x == "" ? undefined : x;
    }

    function DecodeProp(bag, name, value) {
        var v = decodeURIComponent(value);
        if (v != "") {
            bag[name] = v;
        }
    }

    //alert(this.location.hash);
    var eltName = "aghostDiv";
    var hash = location.hash.substring(1);
    SLStreaming.Log(hash);
    // See if we need to undo the double encode
    if (hash.charAt(0) != '/') {
        hash = decodeURIComponent(hash);
    }
    var data = hash.split('/');
    var idx = 1;    // first component is null
    var loadFunction = data[idx++];

    var params = {};    // general invocation parameters
    var props  = {width: "100%", height: "100%"};    // SL properties
    var events = {onError: null, onLoad: null};
    var initParams = [];
    params.properties = props;
    params.events     = events;
    params.initParams = initParams;

    DecodeProp(params, "id"              , data[idx++]);
    DecodeProp(params, "source"          , data[idx++]);
    DecodeProp(props , "background"      , data[idx++]);
    DecodeProp(props , "isWindowless"    , data[idx++]);
    DecodeProp(props , "framerate"       , data[idx++]);
    DecodeProp(events, "onLoad"          , data[idx++]);
    DecodeProp(events, "onError"         , data[idx++]);
    DecodeProp(props , "enableHtmlAccess", data[idx++]);
    DecodeProp(props , "inplaceInstallPrompt"  , data[idx++]);
    DecodeProp(props , "version"         , data[idx++]);
    var jsFilesLen = parseInt(decodeURIComponent(data[idx++]));
    var jsFiles = [];
    for (var i = 0; i < jsFilesLen; ++i) {
        jsFiles.push(decodeURIComponent(data[idx++]));
    }
    while (idx < data.length) {
        initParams.push(decodeURIComponent(data[idx++]));
    }

    for (var i = 0; i < jsFiles.length; ++i) {
        SLStreaming._LoadScript(jsFiles[i]);
    }

    params.parentElement = document.getElementById(eltName);
    params.context       = null;
    var startXaml = function() {
        Log("starting...");
        if (loadFunction) {
            Log("loadFunction=" + loadFunction);
            // app is handling object creation
            window[loadFunction](eltName, params.id, params.initParams);
        }
        if (params.source) {
            if (params.events.onLoad) {
                params.events.onLoad = window[params.events.onLoad];
            }
            if (params.events.onError) {
                params.events.onError = window[params.events.onError];
            }
            if (params.initParams) {
                params.initParams = params.initParams.toString();
            }
            //alert("eltName: " + eltName + ", appId: " + appId + ", appUrl: " + appUrl + ", rootXaml: " + rootXaml);
            Silverlight.createObjectEx(params);
        }
    };
    SLStreaming._Require("x", jsFiles, startXaml);
}
