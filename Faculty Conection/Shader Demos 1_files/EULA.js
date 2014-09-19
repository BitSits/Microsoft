function DownloadFilesForObjectID(ObjectIDs)
{
	//var options = "toolbar=0,status=0,menubar=0,scrollbars=1,resizable=1,width=480,height=550,titlebar=0,screenX=50,left=50,screenY=50,top=50";
    //window.open ("Eula.aspx?ObjectIDs=" + ObjectIDs, "_blank", options)
    if (isArray(ObjectIDs)) {
        window.location = ("Eula.aspx?ObjectIDs=" + ObjectIDs)
    } else {
    window.location = ("Eula.aspx?ObjectIDs=" + ObjectIDs)
    }
}


function isArray(obj) {
   if (obj.constructor.toString().indexOf("Array") == -1)
      return false;
   else
      return true;
}

function StreamFilesForObjectID(ObjectIDs)
{
	//var options = "toolbar=0,status=0,menubar=0,scrollbars=1,resizable=1,width=480,height=550,titlebar=0,screenX=50,left=50,screenY=50,top=50"; 
	//window.open ("Eula.aspx?Stream=True&ObjectIDs=" + ObjectIDs, "_blank", options)
	
	//window.location =  ("Eula.aspx?Stream=True&ObjectIDs=" + ObjectIDs)
	window.location =  ("vrcmain.aspx?objectid=" + ObjectIDs)
}




//
//
/* styles for drop down filter */
//
//
  function showfilter() {
            var l = document.getElementById('categories2');
            l.style.display = 'block';

    }
    function hidefilter() {
            var l = document.getElementById('categories2');
            l.style.display = 'none';
    }
    

function showBoxes(){
    var message=''
   //For each checkbox see if it has been checked, record the value.
   for (i = 0; i < document.forms[0].ckusage.length; i++) {
        if (document.forms[0].ckusage[i].checked){
             message = message + document.forms[0].ckusage[i].value + ","
        }
    }

    if (message !='') {
        show()
        filter(message) }
    else {show()}
    }

    function filter(message) {
        count = 0;

    var usagetype=message.split(',');
    var e=document.getElementsByTagName('tr');
    
    for(var i=0;i<e.length;i++){
    
        if (e[i].id.indexOf ('filter_') > -1) {
               var show=0
            	for (var num=0;   num<usagetype.length;   num++)
            	{	
		            if (e[i].id.indexOf(usagetype[num]) >0) {
		                show = 1
                        count++
                        break
		            }
	            }
	            	if (show==0) {
		                e[i].style.display='none';
		            }
		            
		          

        }
        
		    }

		    document.getElementById("filteredresultcount").innerHTML = '<span style="font-size:14px;margin-left:10px;font-weight:bold;">Showing ' + count + ' filtered results</span>';
}

function show() {
var e=document.getElementsByTagName("tr");
    for(var i=0;i<e.length;i++){
        if (e[i].id.indexOf ('filter_') > -1) {
            e[i].style.display='block';
        }
    }
}

