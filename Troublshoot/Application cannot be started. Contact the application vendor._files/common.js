function ReadCookie(cookieName,delimiter)
{
    if ( !delimiter )
    {
        delimiter = ';';
    }
    if ( document.cookie.length < 1 )
    {
        return '';
    }
    var start = document.cookie.indexOf(cookieName + "=");
    if ( start < 0 )
    {
        return '';
    }
    var end = document.cookie.indexOf(delimiter,start);
    return unescape(document.cookie.substring(start+cookieName.length+1,end < 0 ? document.cookie.length : end));
}
function ReadCommunityInfo ( key )
{
    var value;
    var list = document.getElementsByName('CommunityInfo');
    if (!list || list.length < 1) {
        value = '';
    }
    else {
        value = list[0].content;
    }
    var start = value.indexOf(key + "=");
    if ( start < 0 )
    {
        return '';
    }
    var end = value.indexOf(';',start);
    return unescape(value.substring(start+key.length+1,end < 0 ? value.length : end));    
}
function GetCurrentBrand() { return ReadCommunityInfo('B');}
function GetCurrentLocale() { return ReadCommunityInfo('L');}
function GetCurrentAppName() { return ReadCommunityInfo('A');}

var eventImgs = new Array();
var eventImgIdx = 0;

function TrackEvent(eventName,data,appName,brand,locale,userId)
{
    var maxRnd = 0x7FFFFFFF;
    var imgElement = "_TRK_U_8934";
    var baseUrl = "http://c.microsoft.com/trans_pixel.aspx?TYPE=SSPV&GUID=1F4FC18C-F71E-47fb-8FC9-612F8EE59C61";  // Read from config?
    
    if ( !appName )
    {
        appName = GetCurrentAppName();
    }
    if ( !brand )
    {
        brand = GetCurrentBrand();
    }
    
    var query = "&r=" + escape(window.location) + "&rnd=" + Math.floor(Math.random()*maxRnd+1) +"&URI="; 
    var trackQuery = "/eventtrack/?app=" + appName + "&event=" + eventName + "&brand=" + brand;
    trackQuery += "&locale=" + (locale ? locale : GetCurrentLocale());
    if ( userId )
    {
        trackQuery += "&userID=" + userId + "&signedIn=1";
    }
    else
    {
        userId = ReadCookie('muid','&');
        if ( userId )
        {
            trackQuery += "&userID=" + userId + "&signedIn=1";
        }
    }
    if ( data && typeof data == 'object' )
    {
        for ( var key in data )
        {
            trackQuery += "&" + key + "=" + data[key];
        }
    }

    var eventImgSrc = baseUrl + query + escape(trackQuery);

    if (document.images) {
        eventImgs[eventImgIdx] = new Image();
        eventImgs[eventImgIdx].src = eventImgSrc;
        eventImgIdx++;
    } else {
        document.write('<img border="0" width="1" height="1" src="' + eventImgSrc + '"/>');
    }
}
function IsNPUser() {
    return ReadCookie('npu', '&');    
};
function RedirectNPUser(url, cUrl) {
    
    if (!IsNPUser()) {
        return true;
    }

    if (!url) {
        url = window.location.href.toString();
    } 
    else {
        url = url.toString();
    }
    var redirectUrl = '/Profile/' + GetCurrentLocale() + '/Settings/?nonp=1&referrerurl=' + encodeURIComponent(removeQueryString(url, 'referrer'));
    if (cUrl) {
        redirectUrl += '&cancelUrl=' + encodeURIComponent(removeQueryString(removeQueryString(cUrl.toString(), 'referrer'),'nonp'));
    }
    window.location = (redirectUrl);
    return false;
};
function removeQueryString(url, param) {
    
    var re = new RegExp("([?|&])" + param + "=.*?(&|$)", "i");
    if (url.match(re))
        return url.replace(re, '$1');
    else
        return url;
}