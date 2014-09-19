

var zzDate = new Date(); 
 var zzWindow; 
 var zzURL; 
if (typeof zzCustom =='undefined'){var zzIdxCustom ='';}
else{var zzIdxCustom = zzCustom;}
if (typeof zzTrd =='undefined'){var zzIdxTrd ='';}
else{var zzIdxTrd = zzTrd;}
if (typeof zzIdxNw == 'undefined' || zzIdxNw.length == 0) { var zzIdxNw = ''; }
else { zzIdxNw = ';sn=' + zzIdxNw + ';';}
if (typeof zzIdxCh == 'undefined' || zzIdxCh.length == 0) { var zzIdxCh = ''; }
else { zzIdxCh = 'sc=' + zzIdxCh + ';';}
if (typeof zzIdxPub == 'undefined' || zzIdxPub.length == 0) { var zzIdxPub = ''; }
else { zzIdxPub = 'ss=' + zzIdxPub + ';';}
if (typeof zzIdxPos == 'undefined' || zzIdxPos.length == 0) { var zzIdxPos =''; }
else { zzIdxPos = 'si=' + zzIdxPos + ';';}
if (typeof zzIdxClk == 'undefined' || zzIdxClk.length == 0) { var zzIdxClk =''; }
else { zzIdxClk = 'se=' + zzIdxClk;}
if (typeof ainfo == 'undefined' || ainfo.length == 0) { var ainfo =''; }

var zzChId = -1;
var zzPbId = -1;

if (typeof zzChanId != 'undefined' && zzChanId.length != 0) {zzChId = zzChanId;}
if (typeof sChanId != 'undefined' && sChanId.length != 0 && (typeof zxz != 'undefined') && zxz.length != 0 && zxz > 0) {zzChId = sChanId;}

if (typeof zzSection != 'undefined' && zzSection.length != 0) {zzPbId = zzSection;}
if (typeof sPubId != 'undefined' && sPubId.length != 0 && (typeof zxz != 'undefined') && zxz.length != 0 && zxz > 0) {zzPbId = sPubId;}
var zzAdTagId = '850608_'+zzChId+'_'+zzPbId+'_300_250';
document.write("<span id='Zedo-Ad="+zzAdTagId+";Domain=.zedo.com'>");
document.write("</span>")
document.write("<A HREF=\"http://yads.zedo.com/ads2/c?a=850608;x=2329;g=78,0;c=929000286,929000286;i=0;n=929;s=123;" + zzStr + zzIdxNw + zzIdxCh + zzIdxPub + zzIdxPos + zzIdxClk + ainfo + ";k=" + zzIdxTrd + "http://www.reimage.com/includes/router_land.php?tracking=Neudesic&banner=300x250-2\" TARGET=\"_blank\" onMouseOver='window.status=\" Ad powered by ZEDO\"; return true;' onMouseOut='window.status=\"\"; return true;'><IMG WIDTH=\"300\" HEIGHT=\"250\" SRC=\"http://d13.zedo.com/OzoDB/a/m/850608/V1/banner_s_300x250_neudesicmediagroup.jpg\" BORDER=\"0\" ALT=\"Refresh your Windows OS with Reimage.com\" TITLE=\"Refresh your Windows OS with Reimage.com\" ></A>");








