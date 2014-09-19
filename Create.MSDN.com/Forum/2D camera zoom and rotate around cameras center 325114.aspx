<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head id="ctl00_ctl00_ctl00_ctl00">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">



<title>
	2D camera zoom and rotate around cameras center - App Hub Forums
</title><script src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/common.js" type="text/javascript">

</script><link type="text/css" rel="stylesheet" href="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/main_Default_FF.css"><link rel="shortcut icon" type="image/vnd.microsoft.icon" href="http://forums.create.msdn.com/favicon.ico"><meta name="keywords" value="XNA, XNA Game Studio, XNA Game Studio Express, XNA Framework, XNA partners, XACT, PIX, DirectX, Direct3D, XNA games, XNA gaming, XNA GSE, game studio, XNA articles, XNA tutorials, game tutorials, starter kit, game engine, game physics, XNA Creators Club Online, App Hub, creators club, C# express, C#, game creator, game development, game developer, game programming, game programmer, videogame, video game, ai, artificial intelligence, 3D animation, game design, 3D modeling, game development software, 3D technology, game audio, game animation, PC game, Windows game, Xbox game, new game, arcade development, Gamefest, game industry, game publishing, online games, casual games, Xbox Live Arcade, digital assets, game library, 3D models, shaders"><meta name="description" value="App Hub is the premier online resource for game developers on Microsoft Windows and Xbox 360."><link rel="alternate" type="application/rss+xml" title="App Hub - All Feeds" href="http://public.create.msdn.com/Feeds/AllFeeds.ashx">
    <meta name="GENERATOR" content="CommunityServer 2007.1 (Build: 0.0)">
<link rel="shortcut icon" type="image/ico" href="http://forums.create.msdn.com/favicon.ico">
<link rel="alternate" type="application/rss+xml" title="Forums RSS (RSS 2.0)" href="http://forums.create.msdn.com/forums/aggregaterss.aspx?Mode=0">
<link rel="alternate" type="application/rss+xml" title="XNA Framework (RSS 2.0)" href="http://forums.create.msdn.com/forums/rss.aspx?ForumID=56&amp;Mode=0">
<link rel="alternate" type="application/rss+xml" title="2D camera zoom and rotate around cameras center (RSS 2.0)" href="http://forums.create.msdn.com/forums/rss.aspx?ForumID=56&amp;PostID=323586">
<link rel="alternate" type="application/rss+xml" title="Search Forums (RSS 2.0)" href="http://forums.create.msdn.com/search/Searchrss.aspx?">

        <link rel="stylesheet" href="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/xnacommunityserver_Default_FF.css" type="text/css" media="screen">
        

    
    
    

    
</head><body>
    <div id="ctl00_ctl00_ctl00_xnaCgpShellBackground" class="XnaCgp_shell_wide_background">
	
        <div id="ctl00_ctl00_ctl00_xnaCgpShellHeaderContainer" class="XnaCgp_shell_header">
		
             
            <a href="http://create.msdn.com/en-US" class="XnaCgp_shell_header_logolink"><img src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_shell_default_header_xna_logo_print.png" alt="App Hub" class="XnaCgp_DisplayNone"></a><div class="XnaCgp_shell_header_TopLinks">
			<a class="XnaCgp_shell_header_MsdnLogo" href="http://msdn.microsoft.com/"><span></span></a><div id="cultureMenu" class="radmenu RadMenu_CultureMenu ">
				<!-- 4.4.5 --><script type="text/javascript" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/RadMenu.js"></script><span id="cultureMenuStyleSheetHolder" style="display: none;"></span><script type="text/javascript">RadControlsNamespace.AppendStyleSheet(false, 'cultureMenu', '/assets/RadControls/Menu/Scripts/4_4_5/menu.css');</script><link rel="stylesheet" type="text/css" href="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/menu.css"><ul class="horizontal rootGroup">
					<li class="item first last"><a href="javascript:void(0)" id="cultureMenu_m0" class="link "><span class="text expandTop">English                                                                                             </span></a><div style="z-index: 10;" class="slide">
						<ul style="z-index: 10;" class="vertical group level1">
							<li class="item first"><a href="http://create.msdn.com/en-US" id="cultureMenu_m0_m0" class="link"><span class="text">English                                                                                             </span></a></li><li class="item last"><a href="http://create.msdn.com/ja-JP" id="cultureMenu_m0_m1" class="link"><span class="text">日本語                                                                                                 </span></a></li>
						</ul>
					</div></li>
				</ul><input id="cultureMenu_Hidden" name="cultureMenu" type="hidden"><script type="text/javascript">window["cultureMenu"] = RadMenu.Create("cultureMenu");window["cultureMenu"].Initialize({"Skin":"CultureMenu","Enabled":true},{});</script>
			</div><a href="http://forums.create.msdn.com/forums/" testid="lnkForum">Forums</a><span class="XnaCgp_DisplayNone"> </span><span>Hi, </span><a class="XnaCgp_shell_header_profilelink" href="https://users.create.msdn.com/Register">Visitor</a><span class="XnaCgp_DisplayNone"> </span><a testid="lnkSignIn" href="https://login.live.com/login.srf?wa=wsignin1.0&amp;rpsnv=11&amp;ct=1290448425&amp;rver=6.1.6206.0&amp;wp=MBI&amp;wreply=https:%2F%2Fprofile.create.msdn.com%2F%2FLiveSignIn.aspx%3Fradr%3Dhttp:%2F%2Fforums.create.msdn.com%2Fforums%2Fp%2F53363%2F325114.aspx&amp;lc=1033&amp;id=256908" class="XnaCgp_shell_header_passportlink"><span>Sign In</span></a>
		</div><div class="XnaCgp_shell_header_LiveSearch">
			<form action="http://create.msdn.com/en-US/SearchResults.aspx" onsubmit="return ValidateSearchKeyword(this);">
				<input name="keyword" testid="txtKeyword" title="Enter search keywords" maxlength="100" type="text"><input src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_global_live_search_button.jpg" alt="Submit search" testid="btnSearch" type="image">
			</form><script type="text/javascript" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/shellHeader.js">

			</script>
		</div><div id="xnaMenu" class="radmenu RadMenu_MainMenu ">
			<!-- 4.4.5 --><span id="xnaMenuStyleSheetHolder" style="display: none;"></span><ul class="horizontal rootGroup">
				<li class="item first"><a href="http://create.msdn.com/en-US/" id="xnaMenu_m0" class="link "><span class="text expandTop">home</span></a><div style="z-index: 10;" class="slide">
					<ul style="z-index: 10;" class="vertical group level1">
						<li class="item first"><a href="http://create.msdn.com/en-us/home/getting_started" id="xnaMenu_m0_m0" class="link"><span class="text">getting started</span></a></li><li class="item"><a href="http://create.msdn.com/en-us/home/membership" id="xnaMenu_m0_m1" class="link"><span class="text">membership</span></a></li><li class="item"><a href="http://create.msdn.com/en-us/home/about/how_it_works" id="xnaMenu_m0_m2" class="link"><span class="text">how it works</span></a></li><li class="item"><a href="http://create.msdn.com/en-us/home/faq" id="xnaMenu_m0_m3" class="link"><span class="text">faq</span></a></li><li class="item last"><a href="http://create.msdn.com/en-US/community/news/" id="xnaMenu_m0_m4" class="link"><span class="text">news</span></a></li>
					</ul>
				</div></li><li class="item"><a href="#" id="xnaMenu_m1" class="link "><span class="text expandTop">my dashboard</span></a><div style="z-index: 16;" class="slide">
					<ul style="z-index: 16;" class="vertical group level1">
						<li class="item first"><a href="http://windowsphone.create.msdn.com/app" id="xnaMenu_m1_m0" class="link"><span class="text">Windows Phone</span></a></li><li class="item"><a href="http://catalog.create.msdn.com/en-US/myprojects.aspx" id="xnaMenu_m1_m1" class="link"><span class="text">Xbox 360</span></a></li><li class="item last"><a href="https://users.create.msdn.com/account" id="xnaMenu_m1_m2" class="link"><span class="text">profile</span></a></li>
					</ul>
				</div></li><li class="item"><a href="http://create.msdn.com/en-us/community/community_resources" id="xnaMenu_m2" class="link current"><span class="text expandTop">community</span></a><div style="z-index: 20;" class="slide">
					<ul style="z-index: 20;" class="vertical group level1">
						<li class="item first"><a href="http://forums.create.msdn.com/forums/" id="xnaMenu_m2_m0" class="link"><span class="text">forums</span></a></li><li class="item"><a href="http://catalog.create.msdn.com/en-US/gamescatalog.aspx" id="xnaMenu_m2_m1" class="link"><span class="text">games catalog</span></a></li><li class="item"><a href="http://create.msdn.com/en-US/ReviewAGame.aspx" id="xnaMenu_m2_m2" class="link"><span class="text">review Xbox games</span></a></li><li class="item last"><a href="http://create.msdn.com/en-US/PlaytestAGame.aspx" id="xnaMenu_m2_m3" class="link"><span class="text">playtest Xbox games</span></a></li>
					</ul>
				</div></li><li class="item"><a href="http://create.msdn.com/en-US/education/" id="xnaMenu_m3" class="link "><span class="text expandTop">education</span></a><div style="z-index: 25;" class="slide">
					<ul style="z-index: 25;" class="vertical group level1">
						<li class="item first"><a href="http://create.msdn.com/en-US/education/catalog/" id="xnaMenu_m3_m0" class="link"><span class="text">education catalog</span></a></li><li class="item"><a href="http://create.msdn.com/en-us/education/roadmap" id="xnaMenu_m3_m1" class="link"><span class="text">roadmap</span></a></li><li class="item"><a href="http://create.msdn.com/en-us/education/documentation" id="xnaMenu_m3_m2" class="link"><span class="text">library documentation</span></a></li><li class="item"><a href="http://create.msdn.com/en-us/education/talks" id="xnaMenu_m3_m3" class="link"><span class="text">developer talks</span></a></li><li class="item last"><a href="http://create.msdn.com/en-US/education/academia" id="xnaMenu_m3_m4" class="link"><span class="text">academia</span></a></li>
					</ul>
				</div></li><li class="item last"><a href="http://create.msdn.com/en-US/resources" id="xnaMenu_m4" class="link "><span class="text expandTop">resources</span></a><div style="z-index: 31;" class="slide">
					<ul style="z-index: 31;" class="vertical group level1">
						<li class="item first"><a href="http://create.msdn.com/en-us/home/feedback" id="xnaMenu_m4_m0" class="link"><span class="text">support and feedback</span></a></li><li class="item"><a href="http://create.msdn.com/en-us/resources/downloads" id="xnaMenu_m4_m1" class="link"><span class="text">downloads</span></a></li><li class="item last"><a href="http://create.msdn.com/en-us/resources/partners" id="xnaMenu_m4_m2" class="link"><span class="text">partner offerings</span></a></li>
					</ul>
				</div></li>
			</ul><input id="xnaMenu_Hidden" name="xnaMenu" type="hidden"><script type="text/javascript">window["xnaMenu"] = RadMenu.Create("xnaMenu");window["xnaMenu"].Initialize({"Skin":"MainMenu","Enabled":true},{"xnaMenu_m1":{"NavigateAfterClick":false},"xnaMenu_m2":{"CssClass":"current"}});</script>
		</div>
        
	</div>
        <div id="ctl00_ctl00_ctl00_xnaCgpShellBodyShadow" class="XnaCgp_shell_wide_body_shadow">
		
            <div id="ctl00_ctl00_ctl00_xnaCgpShellBody" class="XnaCgp_shell_wide_body">
			
                
		<form name="aspnetForm" method="post" action="/forums/p/53363/325114.aspx" id="aspnetForm">
<div>
<input name="__EVENTTARGET" id="__EVENTTARGET" value="" type="hidden">
<input name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" type="hidden">
<input name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUILTgxMTI0ODlkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYBBUJjdGwwMCRjdGwwMCRjdGwwMCRCb2R5Q29udGVudCRiYmNyJFNlYXJjaEZvcm0xJGN0bDAwJFNlYXJjaFRleHRUb3CxaEYreGh1HFxV10K6Eyv6iUO1Gg==" type="hidden">
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['aspnetForm'];
if (!theForm) {
    theForm = document.aspnetForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>



<script src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/WebResource.axd" type="text/javascript"></script>
<script src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/WebResource_002.axd" type="text/javascript"></script>
						

			
			<div class="XnaCgp_PageHead_Box">
	<div class="XnaCgp_PageHead_LeftBorder">
		<div class="XnaCgp_PageHead_RightBorder">
			<div class="XnaCgp_PageHead_Content">
				<div class="XnaCgp_Forums_PageTitle">
					community forums
				</div><div class="XnaCgp_PageHead_BreadCrumbDiv">
					<div class="CommonBreadCrumbArea"><a href="http://forums.create.msdn.com/forums/">App Hub Forums</a> » <a href="http://forums.create.msdn.com/forums/default.aspx?GroupID=6">XNA Game Studio</a> » <a href="http://forums.create.msdn.com/forums/56.aspx">XNA Framework</a> » <a href="http://forums.create.msdn.com/forums/t/53363.aspx">2D camera zoom and rotate around cameras center</a></div>
				</div>
			</div>
		</div>
	</div>
</div>
			
        
        
        <div class="XnaCgp_Search_ContainerTop">
                    <div id="SearchTexbox" class="CommonFormField">
                        <div class="XnaCgp_Forums_Search_LeftColumn">
                            <a href="http://forums.create.msdn.com/forums/MyForums.aspx">My Discussions</a>                        
                            <a href="http://forums.create.msdn.com/forums/TopicsActive.aspx?ForumID=">Active Discussions</a>                        
                            <a href="http://forums.create.msdn.com/forums/TopicsNotRead.aspx?ForumID=">Not Read</a>
                        </div>      
                        <div class="XnaCgp_Forums_Search_RightColumn">
                            <a href="http://forums.create.msdn.com/search/default.aspx">Advanced</a>
                            <input name="ctl00$ctl00$ctl00$BodyContent$bbcr$SearchForm1$ctl00$SearchTextTop" size="55" id="ctl00_ctl00_ctl00_BodyContent_bbcr_SearchForm1_ctl00_SearchTextTop" class="XnaCgp_Search_InputText" onclick="if(this.defaultValue==this.value) this.value='';" onblur="if(this.value=='') this.value=this.defaultValue;" onkeydown="return KeyDownHandlerctl00_ctl00_ctl00_BodyContent_bbcr_SearchForm1_ctl00_SearchButtonTop(event);" type="text">                        
                            <div class="XnaCgp_Global_Button_Small XnaCgp_Forums_Button">
                                <input name="ctl00$ctl00$ctl00$BodyContent$bbcr$SearchForm1$ctl00$SearchButtonTop" value="Search Forums" id="ctl00_ctl00_ctl00_BodyContent_bbcr_SearchForm1_ctl00_SearchButtonTop" type="submit">
                            </div>   
                               
                        </div>                  
                    </div>
                </div>
    
			
            <!--removed all user or navigation content from here-->
		    
		    
                        
			    	
			    
                
        
    

<div class="CommonContentArea">
    
    <div class="CommonContent">
        <div class="CommonFormArea">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">                
                <tbody><tr>
                    <td class="CommonFormField CommonPrintHidden" align="left">
                        
                        
                        
                    </td>
                    <td class="CommonFormField CommonPrintHidden" align="right">
                        
                                Sort Discussions:
                                <select name="ctl00$ctl00$ctl00$BodyContent$bcr$bcr$ctl00$ctl03$ctl00$SortOrder" id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_ctl03_ctl00_SortOrder" onchange="window.setTimeout('__doPostBack(\'ctl00$ctl00$ctl00$BodyContent$bcr$bcr$ctl00$ctl03\',\'\')',0)">
	<option selected="selected" value="0">Oldest to newest</option>
	<option value="1">Newest to oldest</option>

</select>
                            
                        <a class="CommonImageTextButton CommonPreviousButton" href="http://forums.create.msdn.com/forums/ThreadNavigation.aspx?PostID=323586&amp;NavType=Previous">Previous Discussion</a>
                        <a class="CommonImageTextButton CommonNextButton" href="http://forums.create.msdn.com/forums/ThreadNavigation.aspx?PostID=323586&amp;NavType=Next">Next Discussion</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="CommonFormField CommonPrintHidden" align="right">
                        <div class="CommonPagingArea" align="right">Page 1 of 1 (12 posts) </div>
                    </td>
                </tr>
            </tbody></table>
        </div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody><tr>
                <td class="XnaCgp_CSCommonTitle" colspan="4">
                    <h2 class="CommonTitle">2D camera zoom and rotate around cameras center</h2>
                    <div class="CommonDescription">Last post 6/1/2010 6:38 AM by <a href="https://users.create.msdn.com/Profile/noey699">noey699</a>. 11 replies.</div>
                </td>
            </tr>
            <tr>
                <td>
                    
                            <ul class="ForumPostList">
                        
                            <li><a name="323586"></a>
                                <div class="ForumPostArea">
                                    <div class="ForumPostHeader">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody><tr valign="middle">
                                                <td class="XnaCgp_Forum_PostPermaLinkAndDateTime" align="left">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323586.aspx#323586">
                                                            <img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl02_ctl00_ctl01_ctl00" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon_post_show.gif" alt="" style="border-width: 0px;" align="texttop"></a>
                                                    5/12/2010 7:08 AM
                                                </td>
                                                <td align="right">
                                                    
                                                    
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr valign="top">
                                            <td rowspan="3" class="ForumPostUserArea">
                                                <div class="ForumPostUserContent">
                                                    <ul class="ForumPostUserPropertyList">
                                                        <li class="ForumPostUserName">
                                                            
                                                            <div class="XnaCgp_ForumsCard_CreatorName"><a href="https://users.create.msdn.com/Profile/noey699">noey699</a></div>
                                                        </li>
                                                        <div class="XnaCgp_small_CreatorRollUp_Container XnaCgp_small_CreatorRollUp_Forums">
                                                            <a href="https://users.create.msdn.com/Profile/noey699">
                                                                <span class="XnaCgp_Creator"><img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl02_ForumUserAvatar1_ctl00_ctl01" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_CC_CT_icon_001.png" style="border-width: 0px;"></span>
                                                            </a>
                                                        </div>
                                                        
                                                                
                                                                <li class="XnaCgp_Forum_ReputationLevel1"></li>
                                                                
                                                                
                                                                
                                                                

                                                                <li class="XnaCgp_small_CreatorRollUp_ReputationScore">(0)</li>
                                                                
                                                                <li>
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </li>
                                                                
                                                                <li class="ForumPostUserAttribute">
                                                                        Posts 
                                                                    <a href="http://forums.create.msdn.com/search/SearchResults.aspx?u=193838&amp;o=DateDescending">16</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ForumPostTitleArea">
                                                    <h4 class="ForumPostTitle XnaCgp_ForumPostTitleContainer">
                                                        
                                                        2D camera zoom and rotate around cameras center
                                                    </h4>
                                                    
                                                    <div class="XnaCgp_ForumPostButtonsContainer ForumPostButtons">
                                                    <div class="ForumPostThreadStatus">
                                                        
                                                        
                                                        
                                                        
                                                                                                                
                                                    </div>
                                                        
                                                        
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323586&amp;Quote=False">Reply</a>
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323586&amp;Quote=True">Quote</a>
                                                            
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>
                                                        <div class="XnaCgp_Global_ClearFloat"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign="top">
                                            <td class="ForumPostContentArea">
                                                <table style="table-layout: fixed;" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                    <tbody><tr>
                                                        <td>
                                                            <div class="ForumPostBodyArea">
                                                                <div class="ForumPostContentText">
                                                                    I am
 writing a 2d game engine, and I am slightly new to matrix 
transformations so I need a little help making something work right. It 
currently rotates, scales, and moves&nbsp;correctly only it rotates and 
scales about the world orgin which is unwanted. I want the camera to 
rotate and scale&nbsp;around the cameras center. I am using the 
SpriteBatch.Begin() overload which contations a transformation matrix 
argument to apply the transformations to every texture that is being 
drawn and this is what the Matrix calculation looks like so far<br>
<br>
<div style="border: 1px solid rgb(127, 157, 185); background-color: white; font-family: courier new; font-size: 11px; overflow: auto;">
<table style="border-width: 0px; border-bottom: 0px solid rgb(238, 238, 238); background-color: rgb(255, 255, 255); margin: 2px 0px; width: 99%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
    
    
        <tbody><tr>
            <td><span style="font-size: 11px;">Matrix.CreateTranslation(</span><span style="color: blue;">new</span><span style="font-size: 11px;">&nbsp;Vector3(position,0))&nbsp;*&nbsp;Matrix.CreateRotationZ(rotation)&nbsp;*&nbsp;Matrix.CreateScale(scale);&nbsp;</span></td>
        </tr>
    
</tbody></table>
</div>
<br>
<span style="font-size: 13px;"><span style="background-color: rgb(244, 247, 245);">I
 have done plenty of research on this site but could not find an answer 
to this questions, hopefully you guys can help me figure this out.</span><br>
<br>
<p>&nbsp;</p>
<p>&nbsp;</p>
</span>
<p>&nbsp;</p>
<p>&nbsp;</p>
<br>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                        <tr valign="bottom">
                                            <td class="ForumPostFooterArea">
                                                
                                                <ul class="ForumPostStatistics CommonPrintHidden" style="clear: both;">
                                                    <li></li>
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="XnaCgp_CSTableFooter">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </li>
                        
                            <li><a name="323588"></a>
                                <div class="ForumPostArea">
                                    <div class="ForumPostHeader">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody><tr valign="middle">
                                                <td class="XnaCgp_Forum_PostPermaLinkAndDateTime" align="left">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323588.aspx#323588">
                                                            <img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl03_ctl00_ctl01_ctl00" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon_post_show.gif" alt="" style="border-width: 0px;" align="texttop"></a>
                                                    5/12/2010 7:25 AM
                                                </td>
                                                <td align="right">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323586.aspx#323586">In reply to</a>
                                                    
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr valign="top">
                                            <td rowspan="3" class="ForumPostUserArea">
                                                <div class="ForumPostUserContent">
                                                    <ul class="ForumPostUserPropertyList">
                                                        <li class="ForumPostUserName">
                                                            
                                                            <div class="XnaCgp_ForumsCard_CreatorName"><a href="https://users.create.msdn.com/Profile/gojo62">gojo62</a></div>
                                                        </li>
                                                        <div class="XnaCgp_small_CreatorRollUp_Container XnaCgp_small_CreatorRollUp_Forums">
                                                            <a href="https://users.create.msdn.com/Profile/gojo62">
                                                                <span class="XnaCgp_Creator"><img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl03_ForumUserAvatar1_ctl00_ctl01" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_CC_CT_icon_020.png" style="border-width: 0px;"></span>
                                                            </a>
                                                        </div>
                                                        
                                                                
                                                                <li class="XnaCgp_Forum_ReputationLevel1"></li>
                                                                
                                                                
                                                                
                                                                

                                                                <li class="XnaCgp_small_CreatorRollUp_ReputationScore">(0)</li>
                                                                
                                                                <li>
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </li>
                                                                
                                                                <li class="ForumPostUserAttribute">
                                                                        Posts 
                                                                    <a href="http://forums.create.msdn.com/search/SearchResults.aspx?u=112662&amp;o=DateDescending">39</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ForumPostTitleArea">
                                                    <h4 class="ForumPostTitle XnaCgp_ForumPostTitleContainer">
                                                        
                                                        Re: 2D camera zoom and rotate around cameras center
                                                    </h4>
                                                    
                                                    <div class="XnaCgp_ForumPostButtonsContainer ForumPostButtons">
                                                    <div class="ForumPostThreadStatus">
                                                        
                                                        
                                                        
                                                        
                                                                                                                
                                                    </div>
                                                        
                                                        
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323588&amp;Quote=False">Reply</a>
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323588&amp;Quote=True">Quote</a>
                                                            
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>
                                                        <div class="XnaCgp_Global_ClearFloat"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign="top">
                                            <td class="ForumPostContentArea">
                                                <table style="table-layout: fixed;" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                    <tbody><tr>
                                                        <td>
                                                            <div class="ForumPostBodyArea">
                                                                <div class="ForumPostContentText">
                                                                    Have you tried going through the code code in this example.<br>
<a href="http://creators.xna.com/en-US/sample/tiledsprites">http://creators.xna.com/en-US/sample/tiledsprites</a><br>
This has a 2d camera that zooms and rotates around the camera's center.<br>
Hope it helps
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                        <tr valign="bottom">
                                            <td class="ForumPostFooterArea">
                                                
                                                <ul class="ForumPostStatistics CommonPrintHidden" style="clear: both;">
                                                    <li></li>
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="XnaCgp_CSTableFooter">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </li>
                        
                            <li><a name="323595"></a>
                                <div class="ForumPostArea">
                                    <div class="ForumPostHeader">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody><tr valign="middle">
                                                <td class="XnaCgp_Forum_PostPermaLinkAndDateTime" align="left">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323595.aspx#323595">
                                                            <img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl04_ctl00_ctl01_ctl00" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon_post_show.gif" alt="" style="border-width: 0px;" align="texttop"></a>
                                                    5/12/2010 7:56 AM
                                                </td>
                                                <td align="right">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323588.aspx#323588">In reply to</a>
                                                    
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr valign="top">
                                            <td rowspan="3" class="ForumPostUserArea">
                                                <div class="ForumPostUserContent">
                                                    <ul class="ForumPostUserPropertyList">
                                                        <li class="ForumPostUserName">
                                                            
                                                            <div class="XnaCgp_ForumsCard_CreatorName"><a href="https://users.create.msdn.com/Profile/noey699">noey699</a></div>
                                                        </li>
                                                        <div class="XnaCgp_small_CreatorRollUp_Container XnaCgp_small_CreatorRollUp_Forums">
                                                            <a href="https://users.create.msdn.com/Profile/noey699">
                                                                <span class="XnaCgp_Creator"><img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl04_ForumUserAvatar1_ctl00_ctl01" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_CC_CT_icon_001.png" style="border-width: 0px;"></span>
                                                            </a>
                                                        </div>
                                                        
                                                                
                                                                <li class="XnaCgp_Forum_ReputationLevel1"></li>
                                                                
                                                                
                                                                
                                                                

                                                                <li class="XnaCgp_small_CreatorRollUp_ReputationScore">(0)</li>
                                                                
                                                                <li>
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </li>
                                                                
                                                                <li class="ForumPostUserAttribute">
                                                                        Posts 
                                                                    <a href="http://forums.create.msdn.com/search/SearchResults.aspx?u=193838&amp;o=DateDescending">16</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ForumPostTitleArea">
                                                    <h4 class="ForumPostTitle XnaCgp_ForumPostTitleContainer">
                                                        
                                                        Re: 2D camera zoom and rotate around cameras center
                                                    </h4>
                                                    
                                                    <div class="XnaCgp_ForumPostButtonsContainer ForumPostButtons">
                                                    <div class="ForumPostThreadStatus">
                                                        
                                                        
                                                        
                                                        
                                                                                                                
                                                    </div>
                                                        
                                                        
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323595&amp;Quote=False">Reply</a>
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323595&amp;Quote=True">Quote</a>
                                                            
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>
                                                        <div class="XnaCgp_Global_ClearFloat"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign="top">
                                            <td class="ForumPostContentArea">
                                                <table style="table-layout: fixed;" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                    <tbody><tr>
                                                        <td>
                                                            <div class="ForumPostBodyArea">
                                                                <div class="ForumPostContentText">
                                                                    
Thanks, I will look over it tomorrow becuase I really gotta get to bed 
right now. I will update you as soon as I either figure it out or cant 
figure it out. Any more help is welcomed, if any one has any other links
 or etc. that might be helpful please post! Thanks in advanced.
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                        <tr valign="bottom">
                                            <td class="ForumPostFooterArea">
                                                
                                                <ul class="ForumPostStatistics CommonPrintHidden" style="clear: both;">
                                                    <li></li>
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="XnaCgp_CSTableFooter">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </li>
                        
                            <li><a name="323768"></a>
                                <div class="ForumPostArea">
                                    <div class="ForumPostHeader">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody><tr valign="middle">
                                                <td class="XnaCgp_Forum_PostPermaLinkAndDateTime" align="left">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323768.aspx#323768">
                                                            <img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl05_ctl00_ctl01_ctl00" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon_post_show.gif" alt="" style="border-width: 0px;" align="texttop"></a>
                                                    5/12/2010 5:57 PM
                                                </td>
                                                <td align="right">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323588.aspx#323588">In reply to</a>
                                                    
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr valign="top">
                                            <td rowspan="3" class="ForumPostUserArea">
                                                <div class="ForumPostUserContent">
                                                    <ul class="ForumPostUserPropertyList">
                                                        <li class="ForumPostUserName">
                                                            
                                                            <div class="XnaCgp_ForumsCard_CreatorName"><a href="https://users.create.msdn.com/Profile/noey699">noey699</a></div>
                                                        </li>
                                                        <div class="XnaCgp_small_CreatorRollUp_Container XnaCgp_small_CreatorRollUp_Forums">
                                                            <a href="https://users.create.msdn.com/Profile/noey699">
                                                                <span class="XnaCgp_Creator"><img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl05_ForumUserAvatar1_ctl00_ctl01" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_CC_CT_icon_001.png" style="border-width: 0px;"></span>
                                                            </a>
                                                        </div>
                                                        
                                                                
                                                                <li class="XnaCgp_Forum_ReputationLevel1"></li>
                                                                
                                                                
                                                                
                                                                

                                                                <li class="XnaCgp_small_CreatorRollUp_ReputationScore">(0)</li>
                                                                
                                                                <li>
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </li>
                                                                
                                                                <li class="ForumPostUserAttribute">
                                                                        Posts 
                                                                    <a href="http://forums.create.msdn.com/search/SearchResults.aspx?u=193838&amp;o=DateDescending">16</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ForumPostTitleArea">
                                                    <h4 class="ForumPostTitle XnaCgp_ForumPostTitleContainer">
                                                        
                                                        Re: 2D camera zoom and rotate around cameras center
                                                    </h4>
                                                    
                                                    <div class="XnaCgp_ForumPostButtonsContainer ForumPostButtons">
                                                    <div class="ForumPostThreadStatus">
                                                        
                                                        
                                                        
                                                        
                                                                                                                
                                                    </div>
                                                        
                                                        
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323768&amp;Quote=False">Reply</a>
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323768&amp;Quote=True">Quote</a>
                                                            
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>
                                                        <div class="XnaCgp_Global_ClearFloat"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign="top">
                                            <td class="ForumPostContentArea">
                                                <table style="table-layout: fixed;" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                    <tbody><tr>
                                                        <td>
                                                            <div class="ForumPostBodyArea">
                                                                <div class="ForumPostContentText">
                                                                    
Alright I checked out the sample you gave me and It's not done how I 
want to set it up, what it does is rotates and scales each sprite 
individually inside the spriteBatch.Draw() calls instead of having the 
matrix do it for you inside the spriteBatch.Begin() call. I have already
 set up a sprite exactly the way I want it and I would not like to 
recode it so it works with the camera, the camera should be stand alone 
so it is easier to use. I did like how they set up their camera 
though,not much different from mine, but a little better.&nbsp;However I
 still need&nbsp;to add the&nbsp;functionality that I wanted before. <br>
<br>
I have the simple values for a camera the position, rotation, and zoom 
and would like to turn that information into a matrix that will 
transform all sprites at the cameras center as the orgin. Or maybe that 
is just too much to ask?
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                        <tr valign="bottom">
                                            <td class="ForumPostFooterArea">
                                                
                                                <ul class="ForumPostStatistics CommonPrintHidden" style="clear: both;">
                                                    <li></li>
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="XnaCgp_CSTableFooter">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </li>
                        
                            <li><a name="323774"></a>
                                <div class="ForumPostArea">
                                    <div class="ForumPostHeader">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody><tr valign="middle">
                                                <td class="XnaCgp_Forum_PostPermaLinkAndDateTime" align="left">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323774.aspx#323774">
                                                            <img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl06_ctl00_ctl01_ctl00" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon_post_show.gif" alt="" style="border-width: 0px;" align="texttop"></a>
                                                    5/12/2010 6:07 PM
                                                </td>
                                                <td align="right">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323586.aspx#323586">In reply to</a>
                                                    
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr valign="top">
                                            <td rowspan="3" class="ForumPostUserArea">
                                                <div class="ForumPostUserContent">
                                                    <ul class="ForumPostUserPropertyList">
                                                        <li class="ForumPostUserName">
                                                            
                                                            <div class="XnaCgp_ForumsCard_CreatorName"><a href="https://users.create.msdn.com/Profile/Spyn+Doctor">Spyn Doctor</a></div>
                                                        </li>
                                                        <div class="XnaCgp_small_CreatorRollUp_Container XnaCgp_small_CreatorRollUp_Forums">
                                                            <a href="https://users.create.msdn.com/Profile/Spyn+Doctor">
                                                                <span class="XnaCgp_Creator"><img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl06_ForumUserAvatar1_ctl00_ctl01" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_CC_CT_icon_048.png" style="border-width: 0px;"></span>
                                                            </a>
                                                        </div>
                                                        
                                                                
                                                                
                                                                
                                                                
                                                                <li class="XnaCgp_Forum_ReputationLevel4"></li>
                                                                

                                                                <li class="XnaCgp_small_CreatorRollUp_ReputationScore">(7719)</li>
                                                                
                                                                <li>
                                                                    
                                                                            <span class="XnaCgp_Forum_CreatorCard_Badge_Premium" title="Member"><span>
                                                                                Member
                                                                            </span></span>
                                                                        
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </li>
                                                                
                                                                <li class="ForumPostUserAttribute">
                                                                        Posts 
                                                                    <a href="http://forums.create.msdn.com/search/SearchResults.aspx?u=11218&amp;o=DateDescending">1,595</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ForumPostTitleArea">
                                                    <h4 class="ForumPostTitle XnaCgp_ForumPostTitleContainer">
                                                        
                                                        Re: 2D camera zoom and rotate around cameras center
                                                    </h4>
                                                    
                                                    <div class="XnaCgp_ForumPostButtonsContainer ForumPostButtons">
                                                    <div class="ForumPostThreadStatus">
                                                        
                                                        
                                                        
                                                        
                                                                                                                
                                                    </div>
                                                        
                                                        
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323774&amp;Quote=False">Reply</a>
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323774&amp;Quote=True">Quote</a>
                                                            
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>
                                                        <div class="XnaCgp_Global_ClearFloat"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign="top">
                                            <td class="ForumPostContentArea">
                                                <table style="table-layout: fixed;" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                    <tbody><tr>
                                                        <td>
                                                            <div class="ForumPostBodyArea">
                                                                <div class="ForumPostContentText">
                                                                    
Scaling and rotating is always around the world origin. So if you want 
to scale/rotate in respect to a different origin, you <em>first</em> scale/rotate around the world origin,<em>&nbsp; then</em>
 you translate to your own origin. This order is defined by the order in
 which you multiply the matrices: In your example you seem to have this 
order wrong (translating first). You need to do ScaleMatrix * 
RotateMatrix * TranslateMatrix instead.<br>
<br>
Doc
                                                                    
                                                                </div>
                                                                <div class="ForumPostSignature"><b>Forum Tip</b>: If someone answers your question, don't forget to click <b>Mark as Answer</b>!<br><br><a href="http://twitter.com/SpynDoctorGames">Twitter</a> - <a href="http://spyn-doctor.blogspot.com/">Blog</a> - <a href="http://www.youtube.com/user/SpynDoctorGames">My Game Trailers</a> - <a href="http://www.spyn-doctor.de/">www.spyn-doctor.de</a> - Games: <a href="http://catalog.xna.com/GameDetails.aspx?catalogEntryId=75023e49-28d9-4ce7-a688-edc8db444e46&amp;type=2">Your Doodles Are Bugged!</a> - <a href="http://catalog.xna.com/GameDetails.aspx?catalogEntryId=82952538-e280-4818-a647-b29fe05d79be&amp;type=2">Kuchibi</a> - <a href="http://catalog.xna.com/GameDetails.aspx?catalogEntryId=265653d9-7093-4bc6-a08c-d140154d6ef8&amp;type=2">Golden Tangram</a><br><br><a href="http://bit.ly/cUbLYU">My Global Scoreboards Implementation</a><br><br>Useful for peer reviews and testing your own game: <a href="http://forums.xna.com/forums/t/19525.aspx">My little "evil" checklist for peer review stress testing</a></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                        <tr valign="bottom">
                                            <td class="ForumPostFooterArea">
                                                
                                                <ul class="ForumPostStatistics CommonPrintHidden" style="clear: both;">
                                                    <li></li>
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="XnaCgp_CSTableFooter">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </li>
                        
                            <li><a name="323785"></a>
                                <div class="ForumPostArea">
                                    <div class="ForumPostHeader">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody><tr valign="middle">
                                                <td class="XnaCgp_Forum_PostPermaLinkAndDateTime" align="left">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323785.aspx#323785">
                                                            <img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl07_ctl00_ctl01_ctl00" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon_post_show.gif" alt="" style="border-width: 0px;" align="texttop"></a>
                                                    5/12/2010 6:31 PM
                                                </td>
                                                <td align="right">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323774.aspx#323774">In reply to</a>
                                                    
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr valign="top">
                                            <td rowspan="3" class="ForumPostUserArea">
                                                <div class="ForumPostUserContent">
                                                    <ul class="ForumPostUserPropertyList">
                                                        <li class="ForumPostUserName">
                                                            
                                                            <div class="XnaCgp_ForumsCard_CreatorName"><a href="https://users.create.msdn.com/Profile/noey699">noey699</a></div>
                                                        </li>
                                                        <div class="XnaCgp_small_CreatorRollUp_Container XnaCgp_small_CreatorRollUp_Forums">
                                                            <a href="https://users.create.msdn.com/Profile/noey699">
                                                                <span class="XnaCgp_Creator"><img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl07_ForumUserAvatar1_ctl00_ctl01" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_CC_CT_icon_001.png" style="border-width: 0px;"></span>
                                                            </a>
                                                        </div>
                                                        
                                                                
                                                                <li class="XnaCgp_Forum_ReputationLevel1"></li>
                                                                
                                                                
                                                                
                                                                

                                                                <li class="XnaCgp_small_CreatorRollUp_ReputationScore">(0)</li>
                                                                
                                                                <li>
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </li>
                                                                
                                                                <li class="ForumPostUserAttribute">
                                                                        Posts 
                                                                    <a href="http://forums.create.msdn.com/search/SearchResults.aspx?u=193838&amp;o=DateDescending">16</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ForumPostTitleArea">
                                                    <h4 class="ForumPostTitle XnaCgp_ForumPostTitleContainer">
                                                        
                                                        Re: 2D camera zoom and rotate around cameras center
                                                    </h4>
                                                    
                                                    <div class="XnaCgp_ForumPostButtonsContainer ForumPostButtons">
                                                    <div class="ForumPostThreadStatus">
                                                        
                                                        
                                                        
                                                        
                                                                                                                
                                                    </div>
                                                        
                                                        
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323785&amp;Quote=False">Reply</a>
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323785&amp;Quote=True">Quote</a>
                                                            
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>
                                                        <div class="XnaCgp_Global_ClearFloat"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign="top">
                                            <td class="ForumPostContentArea">
                                                <table style="table-layout: fixed;" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                    <tbody><tr>
                                                        <td>
                                                            <div class="ForumPostBodyArea">
                                                                <div class="ForumPostContentText">
                                                                    That
 makes it work a little better but still not quite what I want, still is
 not rotating around the cameras orgin. The only difference is the world
 orgin moves. Instead of being stationary. Is there way to make sure the
 world orgin is always at the center of the camera? That might fix the 
problem.<br>
<br>
*edit*<br>
now that I think about it, that would not work because then the position of the camera would not matter
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                        <tr valign="bottom">
                                            <td class="ForumPostFooterArea">
                                                
                                                <ul class="ForumPostStatistics CommonPrintHidden" style="clear: both;">
                                                    <li></li>
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="XnaCgp_CSTableFooter">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </li>
                        
                            <li><a name="323789"></a>
                                <div class="ForumPostArea">
                                    <div class="ForumPostHeader">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody><tr valign="middle">
                                                <td class="XnaCgp_Forum_PostPermaLinkAndDateTime" align="left">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323789.aspx#323789">
                                                            <img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl08_ctl00_ctl01_ctl00" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon_post_show.gif" alt="" style="border-width: 0px;" align="texttop"></a>
                                                    5/12/2010 6:40 PM
                                                </td>
                                                <td align="right">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323774.aspx#323774">In reply to</a>
                                                    
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr valign="top">
                                            <td rowspan="3" class="ForumPostUserArea">
                                                <div class="ForumPostUserContent">
                                                    <ul class="ForumPostUserPropertyList">
                                                        <li class="ForumPostUserName">
                                                            
                                                            <div class="XnaCgp_ForumsCard_CreatorName"><a href="https://users.create.msdn.com/Profile/Blau">Blau</a></div>
                                                        </li>
                                                        <div class="XnaCgp_small_CreatorRollUp_Container XnaCgp_small_CreatorRollUp_Forums">
                                                            <a href="https://users.create.msdn.com/Profile/Blau">
                                                                <span class="XnaCgp_Creator"><img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl08_ForumUserAvatar1_ctl00_ctl01" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_CC_CT_icon_003.png" style="border-width: 0px;"></span>
                                                            </a>
                                                        </div>
                                                        
                                                                
                                                                <li class="XnaCgp_Forum_ReputationLevel1"></li>
                                                                
                                                                
                                                                
                                                                

                                                                <li class="XnaCgp_small_CreatorRollUp_ReputationScore">(488)</li>
                                                                
                                                                <li>
                                                                    
                                                                            <span class="XnaCgp_Forum_CreatorCard_Badge_Premium" title="Member"><span>
                                                                                Member
                                                                            </span></span>
                                                                        
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </li>
                                                                
                                                                <li class="ForumPostUserAttribute">
                                                                        Posts 
                                                                    <a href="http://forums.create.msdn.com/search/SearchResults.aspx?u=17789&amp;o=DateDescending">126</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ForumPostTitleArea">
                                                    <h4 class="ForumPostTitle XnaCgp_ForumPostTitleContainer">
                                                        
                                                        Re: 2D camera zoom and rotate around cameras center
                                                    </h4>
                                                    
                                                    <div class="XnaCgp_ForumPostButtonsContainer ForumPostButtons">
                                                    <div class="ForumPostThreadStatus">
                                                        
                                                        
                                                        
                                                        
                                                                                                                
                                                    </div>
                                                        
                                                        
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323789&amp;Quote=False">Reply</a>
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323789&amp;Quote=True">Quote</a>
                                                            
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>
                                                        <div class="XnaCgp_Global_ClearFloat"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign="top">
                                            <td class="ForumPostContentArea">
                                                <table style="table-layout: fixed;" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                    <tbody><tr>
                                                        <td>
                                                            <div class="ForumPostBodyArea">
                                                                <div class="ForumPostContentText">
                                                                    
Transform = Matrix.CreateTranslation(-pos.x, -pos.y, 0) * 
Matrix.CreateRotationZ(angle_in_radians) * Matrix.CreateScale(zoom, 
zoom, 0) * Matrix.CreateTranslation(center_screen.x, center_screen.y, 
0);<div><br></div><div><br></div><div>pos is a position in your world 
coordinates, so if should be the coords of the point you want to be in 
the middle of screen. ( the pos of a starship that u want to be in the 
center of screen, and rotate around it ),&nbsp;</div><div>center_screen is in screen coordinates, usualyy is Vector2(1280/2, 720/2);</div><div><br></div><div>the transform process is:</div><div><br></div><div>1. Translate to the new origin, this way (pos.x, pos.y) is the new world origin at (0,0)</div><div>2. Rotate around the new origin</div><div>3. Scale relative to the new origin</div><div>4. Move origin to the center of screen</div>
                                                                    
                                                                </div>
                                                                <div class="ForumPostSignature">Now <a href="http://catalog.create.msdn.com/en-US/GameDetails.aspx?catalogEntryId=6e8cf4e3-7591-4ce9-ac0c-f54aa781425b&amp;type=1" target="_blank" title="http://catalog.create.msdn.com/en-US/GameDetails.aspx?catalogEntryId=6e8cf4e3-7591-4ce9-ac0c-f54aa781425b&amp;type=1"> Spermatozoon </a> in playtest. <a href="http://www.youtube.com/malditis" target="_blank" title="http://www.youtube.com/malditis"> My Youtube channel </a></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                        <tr valign="bottom">
                                            <td class="ForumPostFooterArea">
                                                
                                                <ul class="ForumPostStatistics CommonPrintHidden" style="clear: both;">
                                                    <li></li>
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="XnaCgp_CSTableFooter">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </li>
                        
                            <li><a name="323790"></a>
                                <div class="ForumPostArea">
                                    <div class="ForumPostHeader">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody><tr valign="middle">
                                                <td class="XnaCgp_Forum_PostPermaLinkAndDateTime" align="left">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323790.aspx#323790">
                                                            <img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl09_ctl00_ctl01_ctl00" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon_post_show.gif" alt="" style="border-width: 0px;" align="texttop"></a>
                                                    5/12/2010 6:41 PM
                                                </td>
                                                <td align="right">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323785.aspx#323785">In reply to</a>
                                                    
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr valign="top">
                                            <td rowspan="3" class="ForumPostUserArea">
                                                <div class="ForumPostUserContent">
                                                    <ul class="ForumPostUserPropertyList">
                                                        <li class="ForumPostUserName">
                                                            
                                                            <div class="XnaCgp_ForumsCard_CreatorName"><a href="https://users.create.msdn.com/Profile/Matt+Sams">Matt Sams</a></div>
                                                        </li>
                                                        <div class="XnaCgp_small_CreatorRollUp_Container XnaCgp_small_CreatorRollUp_Forums">
                                                            <a href="https://users.create.msdn.com/Profile/Matt+Sams">
                                                                <span class="XnaCgp_Creator"><img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl09_ForumUserAvatar1_ctl00_ctl01" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_CC_CT_icon_050.png" style="border-width: 0px;"></span>
                                                            </a>
                                                        </div>
                                                        
                                                                
                                                                
                                                                <li class="XnaCgp_Forum_ReputationLevel2"></li>
                                                                
                                                                
                                                                

                                                                <li class="XnaCgp_small_CreatorRollUp_ReputationScore">(1093)</li>
                                                                
                                                                <li>
                                                                    
                                                                            <span class="XnaCgp_Forum_CreatorCard_Badge_Premium" title="Member"><span>
                                                                                Member
                                                                            </span></span>
                                                                        
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </li>
                                                                
                                                                <li class="ForumPostUserAttribute">
                                                                        Posts 
                                                                    <a href="http://forums.create.msdn.com/search/SearchResults.aspx?u=55873&amp;o=DateDescending">355</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ForumPostTitleArea">
                                                    <h4 class="ForumPostTitle XnaCgp_ForumPostTitleContainer">
                                                        
                                                        Re: 2D camera zoom and rotate around cameras center
                                                    </h4>
                                                    
                                                    <div class="XnaCgp_ForumPostButtonsContainer ForumPostButtons">
                                                    <div class="ForumPostThreadStatus">
                                                        
                                                        
                                                        
                                                        
                                                                                                                
                                                    </div>
                                                        
                                                        
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323790&amp;Quote=False">Reply</a>
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323790&amp;Quote=True">Quote</a>
                                                            
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>
                                                        <div class="XnaCgp_Global_ClearFloat"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign="top">
                                            <td class="ForumPostContentArea">
                                                <table style="table-layout: fixed;" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                    <tbody><tr>
                                                        <td>
                                                            <div class="ForumPostBodyArea">
                                                                <div class="ForumPostContentText">
                                                                    <blockquote><div><img src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon-quote.gif"> <strong>noey699:</strong></div><div>That
 makes it work a little better but still not quite what I want, still is
 not rotating around the cameras orgin. The only difference is the world
 orgin moves. Instead of being stationary. Is there way to make sure the
 world orgin is always at the center of the camera? That might fix the 
problem.</div></blockquote><br>
<br>
Try this:<br>
<br>
<div style="border: 1px solid rgb(127, 157, 185); font-size: 11px; overflow: auto; font-family: courier new; background-color: white;">
<table style="border-width: 0px; margin: 2px 0px; width: 99%; border-bottom: 0px solid rgb(238, 238, 238); border-collapse: collapse; background-color: rgb(255, 255, 255);" cellpadding="0" cellspacing="0">
    
    
        <tbody><tr>
            <td><span style="font-size: 11px;"></span><span style="color: green;">//&nbsp;Get&nbsp;to&nbsp;origin&nbsp;from&nbsp;camera&nbsp;position. </span><span style="font-size: 11px;">&nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">Matrix&nbsp;toOrigin&nbsp;=&nbsp;Matrix.CreateTranslation(<span style="color: blue;">new</span><span style="font-size: 11px;">&nbsp;Vector3(-position,&nbsp;0f)); &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);"><span style="color: green;">//&nbsp;Scale. </span><span style="font-size: 11px;">&nbsp;</span></td>
        </tr>
        <tr>
            <td>Matrix&nbsp;s&nbsp;=&nbsp;Matrix.CreateScale(scale); &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;</td>
        </tr>
        <tr>
            <td><span style="color: green;">//&nbsp;Rotate. </span><span style="font-size: 11px;">&nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">Matrix&nbsp;r&nbsp;=&nbsp;Matrix.CreateRotationZ(rotation); &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);"><span style="color: green;">//&nbsp;Back&nbsp;to&nbsp;camera&nbsp;position,&nbsp;offset&nbsp;to&nbsp;the&nbsp;screen&nbsp;center. </span><span style="font-size: 11px;">&nbsp;</span></td>
        </tr>
        <tr>
            <td>Vector2&nbsp;screenCenter&nbsp;=&nbsp;<span style="color: blue;">new</span><span style="font-size: 11px;">&nbsp;Vector2(graphicsDevice.Viewport.Width&nbsp;/&nbsp;2f,&nbsp;graphicsDevice.Viewport.Height&nbsp;/&nbsp;2f); &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">Matrix&nbsp;toCenter&nbsp;=&nbsp;Matrix.CreateTranslation(<span style="color: blue;">new</span><span style="font-size: 11px;">&nbsp;Vector3(screenCenter&nbsp;-&nbsp;position,&nbsp;0f)); &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);"><span style="color: green;">//&nbsp;Bake&nbsp;the&nbsp;cake. </span><span style="font-size: 11px;">&nbsp;</span></td>
        </tr>
        <tr>
            <td>Matrix&nbsp;transform&nbsp;=&nbsp;toOrigin&nbsp;*&nbsp;s&nbsp;*&nbsp;r&nbsp;*&nbsp;toCenter;&nbsp;</td>
        </tr>
    
</tbody></table>
</div>
<br>
Not at home.&nbsp; Can't verify this for you first hand, so I may be off somewhere.&nbsp; Should work, though.
                                                                    
                                                                </div>
                                                                <div class="ForumPostSignature">Matt Sams<br>:: <a href="http://thedeadpixelsociety.com/">The Dead Pixel Society</a><br>:: <a href="http://youarethecastle.com/">You Are The Castle</a> - <a href="http://forums.xna.com/forums/t/53868.aspx">Gameplay Playtest (09/07/10)</a><br>:: <a href="http://ogmoxna.codeplex.com/">OgmoXNA</a> for <a href="http://ogmoeditor.com/">Ogmo Editor</a><br>:: <a href="http://twitter.com/deadpxlsociety">Twitter</a></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                        <tr valign="bottom">
                                            <td class="ForumPostFooterArea">
                                                
                                                <ul class="ForumPostStatistics CommonPrintHidden" style="clear: both;">
                                                    <li></li>
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="XnaCgp_CSTableFooter">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </li>
                        
                            <li><a name="323794"></a>
                                <div class="ForumPostArea">
                                    <div class="ForumPostHeader">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody><tr valign="middle">
                                                <td class="XnaCgp_Forum_PostPermaLinkAndDateTime" align="left">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323794.aspx#323794">
                                                            <img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl10_ctl00_ctl01_ctl00" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon_post_show.gif" alt="" style="border-width: 0px;" align="texttop"></a>
                                                    5/12/2010 6:45 PM
                                                </td>
                                                <td align="right">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323789.aspx#323789">In reply to</a>
                                                    
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr valign="top">
                                            <td rowspan="3" class="ForumPostUserArea">
                                                <div class="ForumPostUserContent">
                                                    <ul class="ForumPostUserPropertyList">
                                                        <li class="ForumPostUserName">
                                                            
                                                            <div class="XnaCgp_ForumsCard_CreatorName"><a href="https://users.create.msdn.com/Profile/noey699">noey699</a></div>
                                                        </li>
                                                        <div class="XnaCgp_small_CreatorRollUp_Container XnaCgp_small_CreatorRollUp_Forums">
                                                            <a href="https://users.create.msdn.com/Profile/noey699">
                                                                <span class="XnaCgp_Creator"><img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl10_ForumUserAvatar1_ctl00_ctl01" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_CC_CT_icon_001.png" style="border-width: 0px;"></span>
                                                            </a>
                                                        </div>
                                                        
                                                                
                                                                <li class="XnaCgp_Forum_ReputationLevel1"></li>
                                                                
                                                                
                                                                
                                                                

                                                                <li class="XnaCgp_small_CreatorRollUp_ReputationScore">(0)</li>
                                                                
                                                                <li>
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </li>
                                                                
                                                                <li class="ForumPostUserAttribute">
                                                                        Posts 
                                                                    <a href="http://forums.create.msdn.com/search/SearchResults.aspx?u=193838&amp;o=DateDescending">16</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ForumPostTitleArea">
                                                    <h4 class="ForumPostTitle XnaCgp_ForumPostTitleContainer">
                                                        
                                                        Re: 2D camera zoom and rotate around cameras center
                                                    </h4>
                                                    
                                                    <div class="XnaCgp_ForumPostButtonsContainer ForumPostButtons">
                                                    <div class="ForumPostThreadStatus">
                                                        
                                                        
                                                        
                                                        
                                                                                                                
                                                    </div>
                                                        
                                                        
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323794&amp;Quote=False">Reply</a>
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=323794&amp;Quote=True">Quote</a>
                                                            
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>
                                                        <div class="XnaCgp_Global_ClearFloat"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign="top">
                                            <td class="ForumPostContentArea">
                                                <table style="table-layout: fixed;" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                    <tbody><tr>
                                                        <td>
                                                            <div class="ForumPostBodyArea">
                                                                <div class="ForumPostContentText">
                                                                    Tyvm
 for the help, does exactly what I ask for but unfortunately what I 
asked for is not what I wanted as I said in the edit if I do this the 
position of the camera does not matter, it will always be at 0,0, or in 
this case the center of the camera.
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                        <tr valign="bottom">
                                            <td class="ForumPostFooterArea">
                                                
                                                <ul class="ForumPostStatistics CommonPrintHidden" style="clear: both;">
                                                    <li></li>
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="XnaCgp_CSTableFooter">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </li>
                        
                            <li><a name="325105"></a>
                                <div class="ForumPostArea">
                                    <div class="ForumPostHeader">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody><tr valign="middle">
                                                <td class="XnaCgp_Forum_PostPermaLinkAndDateTime" align="left">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/325105.aspx#325105">
                                                            <img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl11_ctl00_ctl01_ctl00" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon_post_show.gif" alt="" style="border-width: 0px;" align="texttop"></a>
                                                    5/15/2010 7:45 PM
                                                </td>
                                                <td align="right">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323794.aspx#323794">In reply to</a>
                                                    
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr valign="top">
                                            <td rowspan="3" class="ForumPostUserArea">
                                                <div class="ForumPostUserContent">
                                                    <ul class="ForumPostUserPropertyList">
                                                        <li class="ForumPostUserName">
                                                            
                                                            <div class="XnaCgp_ForumsCard_CreatorName"><a href="https://users.create.msdn.com/Profile/Gregs">Gregs</a></div>
                                                        </li>
                                                        <div class="XnaCgp_small_CreatorRollUp_Container XnaCgp_small_CreatorRollUp_Forums">
                                                            <a href="https://users.create.msdn.com/Profile/Gregs">
                                                                <span class="XnaCgp_Creator"><img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl11_ForumUserAvatar1_ctl00_ctl01" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_CC_CT_icon_006.png" style="border-width: 0px;"></span>
                                                            </a>
                                                        </div>
                                                        
                                                                
                                                                <li class="XnaCgp_Forum_ReputationLevel1"></li>
                                                                
                                                                
                                                                
                                                                

                                                                <li class="XnaCgp_small_CreatorRollUp_ReputationScore">(0)</li>
                                                                
                                                                <li>
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </li>
                                                                
                                                                <li class="ForumPostUserAttribute">
                                                                        Posts 
                                                                    <a href="http://forums.create.msdn.com/search/SearchResults.aspx?u=10739&amp;o=DateDescending">13</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ForumPostTitleArea">
                                                    <h4 class="ForumPostTitle XnaCgp_ForumPostTitleContainer">
                                                        
                                                        Re: 2D camera zoom and rotate around cameras center
                                                    </h4>
                                                    
                                                    <div class="XnaCgp_ForumPostButtonsContainer ForumPostButtons">
                                                    <div class="ForumPostThreadStatus">
                                                        
                                                        
                                                        
                                                        
                                                                                                                
                                                    </div>
                                                        
                                                        
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=325105&amp;Quote=False">Reply</a>
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=325105&amp;Quote=True">Quote</a>
                                                            
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>
                                                        <div class="XnaCgp_Global_ClearFloat"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign="top">
                                            <td class="ForumPostContentArea">
                                                <table style="table-layout: fixed;" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                    <tbody><tr>
                                                        <td>
                                                            <div class="ForumPostBodyArea">
                                                                <div class="ForumPostContentText">
                                                                    All 
matrices where you multiply with translation and scale must use 
an&nbsp;identity matrix: ISROT for easy:<div><br></div><div>ObjectWorldMatrix = Identiymatrix * ScaleMatrix * RotationMatrix * OrbitMatrix * Translation</div><div><br></div><div>The orbit matrix is used for translation and rotation&nbsp;relative&nbsp;to origin.</div><div><br></div><div>EDIT:
 Sorry Im abit unclear about your problem, re-reading your question im 
assuming that you cant&nbsp;rotate&nbsp;the camera? or is it you cant 
rotate a Sprite&nbsp;relative&nbsp;to the camera?</div>
                                                                    
                                                                </div>
                                                                <div class="ForumPostSignature"><a href="http://www.ldroom13.co.uk/" target="_blank" title="http://www.ldroom13.co.uk">http://www.ldroom13.co.uk</a></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                        <tr valign="bottom">
                                            <td class="ForumPostFooterArea">
                                                
                                                <ul class="ForumPostStatistics CommonPrintHidden" style="clear: both;">
                                                    <li></li>
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="XnaCgp_CSTableFooter">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </li>
                        
                            <li><a name="325114"></a>
                                <div class="ForumPostArea">
                                    <div class="ForumPostHeader">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody><tr valign="middle">
                                                <td class="XnaCgp_Forum_PostPermaLinkAndDateTime" align="left">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/325114.aspx#325114">
                                                            <img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl12_ctl00_ctl01_ctl00" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon_post_show.gif" alt="" style="border-width: 0px;" align="texttop"></a>
                                                    5/15/2010 8:11 PM
                                                </td>
                                                <td align="right">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/325105.aspx#325105">In reply to</a>
                                                    
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr valign="top">
                                            <td rowspan="3" class="ForumPostUserArea">
                                                <div class="ForumPostUserContent">
                                                    <ul class="ForumPostUserPropertyList">
                                                        <li class="ForumPostUserName">
                                                            
                                                            <div class="XnaCgp_ForumsCard_CreatorName"><a href="https://users.create.msdn.com/Profile/Gregs">Gregs</a></div>
                                                        </li>
                                                        <div class="XnaCgp_small_CreatorRollUp_Container XnaCgp_small_CreatorRollUp_Forums">
                                                            <a href="https://users.create.msdn.com/Profile/Gregs">
                                                                <span class="XnaCgp_Creator"><img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl12_ForumUserAvatar1_ctl00_ctl01" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_CC_CT_icon_006.png" style="border-width: 0px;"></span>
                                                            </a>
                                                        </div>
                                                        
                                                                
                                                                <li class="XnaCgp_Forum_ReputationLevel1"></li>
                                                                
                                                                
                                                                
                                                                

                                                                <li class="XnaCgp_small_CreatorRollUp_ReputationScore">(0)</li>
                                                                
                                                                <li>
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </li>
                                                                
                                                                <li class="ForumPostUserAttribute">
                                                                        Posts 
                                                                    <a href="http://forums.create.msdn.com/search/SearchResults.aspx?u=10739&amp;o=DateDescending">13</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ForumPostTitleArea">
                                                    <h4 class="ForumPostTitle XnaCgp_ForumPostTitleContainer">
                                                        
                                                        Re: 2D camera zoom and rotate around cameras center
                                                    </h4>
                                                    
                                                    <div class="XnaCgp_ForumPostButtonsContainer ForumPostButtons">
                                                    <div class="ForumPostThreadStatus">
                                                        
                                                        
                                                        
                                                        
                                                                                                                
                                                    </div>
                                                        
                                                        
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=325114&amp;Quote=False">Reply</a>
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=325114&amp;Quote=True">Quote</a>
                                                            
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>
                                                        <div class="XnaCgp_Global_ClearFloat"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign="top">
                                            <td class="ForumPostContentArea">
                                                <table style="table-layout: fixed;" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                    <tbody><tr>
                                                        <td>
                                                            <div class="ForumPostBodyArea">
                                                                <div class="ForumPostContentText">
                                                                    Ok, Im assuming you just need to rotate the camera?<div>&nbsp;</div><div>In your camera&nbsp;implementation there&nbsp;should be a 2&nbsp;matrices:</div><div><div style="overflow: auto; background-color: white; border: 1px solid rgb(127, 157, 185); font-family: 'courier new'; font-size: 11px;"><table style="width: 99%; margin: 2px 0px; border-collapse: collapse; border-bottom: 0px solid rgb(238, 238, 238); background-color: rgb(255, 255, 255); border-width: 0px;" cellpadding="0" cellspacing="0">                <tbody><tr>            <td><span style="font-size: 11px;">&nbsp;</span><span style="color: blue;">public</span><span style="font-size: 11px;">&nbsp;Camera(GraphicsDevice&nbsp;graphics)&nbsp;</span></td>        </tr>        <tr>            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;</td>        </tr>        <tr>            <td>&nbsp;</td>        </tr>        <tr>            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cameraPosition&nbsp;=&nbsp;<span style="color: blue;">new</span><span style="font-size: 11px;">&nbsp;Vector3(-1200.0f,&nbsp;1300.0f,&nbsp;-5000.0f);&nbsp;</span></td>        </tr>        <tr>            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;up&nbsp;=&nbsp;<span style="color: blue;">new</span><span style="font-size: 11px;">&nbsp;Vector3(0.0f,&nbsp;1.0f,&nbsp;0.0f);&nbsp;</span></td>        </tr>        <tr>            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cameraViewMatrix&nbsp;=&nbsp;Matrix.CreateLookAt(&nbsp;</td>        </tr>        <tr>            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cameraPosition,&nbsp;</td>        </tr>        <tr>            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cameraLookAt,&nbsp;</td>        </tr>        <tr>            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;up);&nbsp;</td>        </tr>        <tr>            <td style="background-color: rgb(247, 247, 247);">&nbsp;</td>        </tr>        <tr>            <td>&nbsp;</td>        </tr>        <tr>            <td style="background-color: rgb(247, 247, 247);">&nbsp;</td>        </tr>        <tr>            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cameraProjectionMatrix&nbsp;=&nbsp;Matrix.CreatePerspectiveFieldOfView(&nbsp;</td>        </tr>        <tr>            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MathHelper.ToRadians(45.0f),&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: green;">//This&nbsp;value&nbsp;if&nbsp;reduced&nbsp;creates&nbsp;a&nbsp;'Zoom'&nbsp;effect</span><span style="font-size: 11px;">&nbsp;</span></td>        </tr>        <tr>            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;graphics.Viewport.AspectRatio,&nbsp;</td>        </tr>        <tr>            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.0f,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: green;">//Near&nbsp;clipping&nbsp;plane&nbsp;N.B.&nbsp;If&nbsp;modeling/texture&nbsp;tearing&nbsp;occurs,&nbsp;increas&nbsp;number!</span><span style="font-size: 11px;">&nbsp;</span></td>        </tr>        <tr>            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000000.0f);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: green;">//Far&nbsp;Clipping&nbsp;plane</span><span style="font-size: 11px;">&nbsp;</span></td>        </tr>        <tr>            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</td>        </tr>    </tbody></table></div><br></div><div>The matrix you need to&nbsp;manipulate for rotating the Camera is the <strong>cameraViewMatrix</strong>&nbsp;</div><div><br></div><div>To add the camera movement on the right thumbstick you need to have a value called:</div><div><div style="overflow: auto; background-color: white; border: 1px solid rgb(127, 157, 185); font-family: 'courier new'; font-size: 11px;"><table style="width: 99%; margin: 2px 0px; border-collapse: collapse; border-bottom: 0px solid rgb(238, 238, 238); background-color: rgb(255, 255, 255); border-width: 0px;" cellpadding="0" cellspacing="0">                <tbody><tr>            <td><span style="font-size: 11px;"></span><span style="color: green;">//This&nbsp;is&nbsp;the&nbsp;direction&nbsp;the&nbsp;camera&nbsp;is&nbsp;rotated&nbsp;before&nbsp;any&nbsp;user&nbsp;rotation</span><span style="font-size: 11px;">&nbsp;</span></td>        </tr>        <tr>            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: blue;">public</span><span style="font-size: 11px;">&nbsp;Vector3&nbsp;cameraReference&nbsp;=&nbsp;</span><span style="color: blue;">new</span><span style="font-size: 11px;">&nbsp;Vector3(0.0f,&nbsp;0.0f,&nbsp;1.0f);&nbsp;</span></td>        </tr>    </tbody></table></div><br></div><div>As
 it says, this is the direction the camera should be pointing at game 
startup before any user rotation has occured. In this example it is 
looking straight down the Z-Axis</div><div><br></div><div>Next what you need to do is create a floating value called "cameraRoll" - it can be called anything! but thats what i would use</div><div><br></div><div>You can get this value from the rightthumb stick or any of the analogue contoller inputs via:</div><div><br></div><div><div style="overflow: auto; background-color: white; border: 1px solid rgb(127, 157, 185); font-family: 'courier new'; font-size: 11px;"><table style="width: 99%; margin: 2px 0px; border-collapse: collapse; border-bottom: 0px solid rgb(238, 238, 238); background-color: rgb(255, 255, 255); border-width: 0px;" cellpadding="0" cellspacing="0">                <tbody><tr>            <td><span style="font-size: 11px;">cameraRoll&nbsp;-=&nbsp;gamePadState.ThumbSticks.Right.X&nbsp;*&nbsp;0.0175f;&nbsp;</span><span style="color: green;">//The&nbsp;0.0175&nbsp;affects&nbsp;sensitivity&nbsp;of&nbsp;responce</span><span style="font-size: 11px;">&nbsp;</span></td>        </tr>    </tbody></table></div><br></div><div>Create a Rotation Matrix from this value:</div><div><br></div><div><div style="overflow: auto; background-color: white; border: 1px solid rgb(127, 157, 185); font-family: 'courier new'; font-size: 11px;"><table style="width: 99%; margin: 2px 0px; border-collapse: collapse; border-bottom: 0px solid rgb(238, 238, 238); background-color: rgb(255, 255, 255); border-width: 0px;" cellpadding="0" cellspacing="0">                <tbody><tr>            <td><span style="font-size: 11px;">Matrix&nbsp;cameraViewRotaionMatrix&nbsp;=&nbsp;Matrix.CreateRotationZ(cameraRoll);&nbsp;</span></td>        </tr>    </tbody></table></div><br></div><div>You
 now need to create a vector which stores how much the camera should be 
moved by, compared to where it would be pointing normally, this is where
 the camera reference comes into play:</div><div><div style="overflow: auto; background-color: white; border: 1px solid rgb(127, 157, 185); font-family: 'courier new'; font-size: 11px;"><table style="width: 99%; margin: 2px 0px; border-collapse: collapse; border-bottom: 0px solid rgb(238, 238, 238); background-color: rgb(255, 255, 255); border-width: 0px;" cellpadding="0" cellspacing="0">                <tbody><tr>            <td><span style="font-size: 11px;">Vector3&nbsp;cameraViewTransform&nbsp;=&nbsp;Vector3.Transform(cameraReference,&nbsp;cameraViewRotaionMatrix);&nbsp;</span></td>        </tr>    </tbody></table></div><br></div><div>Now set your cameraLookAt:</div><div><div style="overflow: auto; background-color: white; border: 1px solid rgb(127, 157, 185); font-family: 'courier new'; font-size: 11px;"><table style="width: 99%; margin: 2px 0px; border-collapse: collapse; border-bottom: 0px solid rgb(238, 238, 238); background-color: rgb(255, 255, 255); border-width: 0px;" cellpadding="0" cellspacing="0">                <tbody><tr>            <td><span style="font-size: 11px;">cameraLookAt&nbsp;=&nbsp;cameraPosition&nbsp;+&nbsp;cameraViewTransform;&nbsp;</span></td>        </tr>    </tbody></table></div></div><div><br></div><div><br></div><div>That should be it!</div><div>An i think i gave you a clue on how to zoom in the comments above.</div><div><br></div><div><br></div>
                                                                    
                                                                </div>
                                                                <div class="ForumPostSignature"><a href="http://www.ldroom13.co.uk/" target="_blank" title="http://www.ldroom13.co.uk">http://www.ldroom13.co.uk</a></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                        <tr valign="bottom">
                                            <td class="ForumPostFooterArea">
                                                
                                                <ul class="ForumPostStatistics CommonPrintHidden" style="clear: both;">
                                                    <li></li>
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="XnaCgp_CSTableFooter">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </li>
                        
                            <li><a name="331539"></a>
                                <div class="ForumPostArea">
                                    <div class="ForumPostHeader">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tbody><tr valign="middle">
                                                <td class="XnaCgp_Forum_PostPermaLinkAndDateTime" align="left">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/331539.aspx#331539">
                                                            <img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl13_ctl00_ctl01_ctl00" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/icon_post_show.gif" alt="" style="border-width: 0px;" align="texttop"></a>
                                                    6/1/2010 6:38 AM
                                                </td>
                                                <td align="right">
                                                    <a href="http://forums.create.msdn.com/forums/p/53363/323586.aspx#323586">In reply to</a>
                                                    
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr valign="top">
                                            <td rowspan="3" class="ForumPostUserArea">
                                                <div class="ForumPostUserContent">
                                                    <ul class="ForumPostUserPropertyList">
                                                        <li class="ForumPostUserName">
                                                            
                                                            <div class="XnaCgp_ForumsCard_CreatorName"><a href="https://users.create.msdn.com/Profile/noey699">noey699</a></div>
                                                        </li>
                                                        <div class="XnaCgp_small_CreatorRollUp_Container XnaCgp_small_CreatorRollUp_Forums">
                                                            <a href="https://users.create.msdn.com/Profile/noey699">
                                                                <span class="XnaCgp_Creator"><img id="ctl00_ctl00_ctl00_BodyContent_bcr_bcr_ctl00_PostList_ctl13_ForumUserAvatar1_ctl00_ctl01" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/cco_CC_CT_icon_001.png" style="border-width: 0px;"></span>
                                                            </a>
                                                        </div>
                                                        
                                                                
                                                                <li class="XnaCgp_Forum_ReputationLevel1"></li>
                                                                
                                                                
                                                                
                                                                

                                                                <li class="XnaCgp_small_CreatorRollUp_ReputationScore">(0)</li>
                                                                
                                                                <li>
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    
                                                                </li>
                                                                
                                                                <li class="ForumPostUserAttribute">
                                                                        Posts 
                                                                    <a href="http://forums.create.msdn.com/search/SearchResults.aspx?u=193838&amp;o=DateDescending">16</a></li>
                                                                
                                                            
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ForumPostTitleArea">
                                                    <h4 class="ForumPostTitle XnaCgp_ForumPostTitleContainer">
                                                        
                                                        Re: 2D camera zoom and rotate around cameras center
                                                    </h4>
                                                    
                                                    <div class="XnaCgp_ForumPostButtonsContainer ForumPostButtons">
                                                    <div class="ForumPostThreadStatus">
                                                        
                                                        
                                                        
                                                        <span class="XnaCgp_ForumPost_AnswerMark">Answer</span>
                                                                                                                
                                                    </div>
                                                        
                                                        
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=331539&amp;Quote=False">Reply</a>
                                                                <a class="CommonImageTextButton CommonReplyButton" href="http://forums.create.msdn.com/forums/AddPost.aspx?ReplyToPostID=331539&amp;Quote=True">Quote</a>
                                                            
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>
                                                        <div class="XnaCgp_Global_ClearFloat"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr valign="top">
                                            <td class="ForumPostContentArea">
                                                <table style="table-layout: fixed;" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                                                    <tbody><tr>
                                                        <td>
                                                            <div class="ForumPostBodyArea">
                                                                <div class="ForumPostContentText">
                                                                    <p><span style="background-color: rgb(244, 247, 245);">Thank
 you everyone for your responses&nbsp;but I have found the answer on my 
own while messing with the matrices. Here is the code that fixed my 
problem.<br>
<br>
<p>&nbsp;</p>
<div style="border: 1px solid rgb(127, 157, 185); background-color: white; font-family: courier new; font-size: 11px; overflow: auto;">
<table style="border-width: 0px; border-bottom: 0px solid rgb(238, 238, 238); background-color: rgb(255, 255, 255); margin: 2px 0px; width: 99%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
    
    
        <tbody><tr>
            <td><span style="font-size: 11px;">translationMatrix&nbsp;=&nbsp; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matrix.CreateTranslation(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector3(position,0))&nbsp;* &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matrix.CreateRotationZ(rotation)&nbsp;*
 &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matrix.CreateScale(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector3(zoom,zoom,0))&nbsp;* &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matrix.CreateTranslation(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector3(screenWidth&nbsp;/&nbsp;2,screenHeight&nbsp;/&nbsp;2,0));&nbsp;</span></td>
        </tr>
    
</tbody></table>
</div>
<p>If anyone wants to use my camera class for there own use, please fell
 free, but do not use it commercially, or say that you created it 
yourself.</p>
<div style="border: 1px solid rgb(127, 157, 185); background-color: white; font-family: courier new; font-size: 11px; overflow: auto;">
<table style="border-width: 0px; border-bottom: 0px solid rgb(238, 238, 238); background-color: rgb(255, 255, 255); margin: 2px 0px; width: 99%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
    
    
        <tbody><tr>
            <td><span style="font-size: 11px;"></span><span style="color: rgb(0, 0, 255);">using</span><span style="font-size: 11px;">&nbsp;System; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);"><span style="color: rgb(0, 0, 255);">using</span><span style="font-size: 11px;">&nbsp;System.Collections.Generic; &nbsp;</span></td>
        </tr>
        <tr>
            <td><span style="color: rgb(0, 0, 255);">using</span><span style="font-size: 11px;">&nbsp;System.Linq; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);"><span style="color: rgb(0, 0, 255);">using</span><span style="font-size: 11px;">&nbsp;System.Text; &nbsp;</span></td>
        </tr>
        <tr>
            <td><span style="color: rgb(0, 0, 255);">using</span><span style="font-size: 11px;">&nbsp;Microsoft.Xna.Framework; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);"><span style="font-size: 11px;">&nbsp;</span></td>
        </tr>
        <tr>
            <td><span style="color: rgb(0, 0, 255);">namespace</span><span style="font-size: 11px;">&nbsp;XnaTiledGameLib.Graphics&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">class</span><span style="font-size: 11px;">&nbsp;Camera&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">private</span><span style="font-size: 11px;">&nbsp;&nbsp;</span><span style="color: rgb(0, 0, 255);">bool</span><span style="font-size: 11px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isChanged&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;</span><span style="color: rgb(0, 0, 255);">false</span><span style="font-size: 11px;">; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">private</span><span style="font-size: 11px;">&nbsp;&nbsp;Vector2&nbsp;&nbsp;&nbsp;position&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;Vector2.Zero;
 &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">private</span><span style="font-size: 11px;">&nbsp;&nbsp;</span><span style="color: rgb(0, 0, 255);">float</span><span style="font-size: 11px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rotation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;0.0f;
 &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">private</span><span style="font-size: 11px;">&nbsp;&nbsp;</span><span style="color: rgb(0, 0, 255);">float</span><span style="font-size: 11px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zoom&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;1.0f;
 &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">private</span><span style="font-size: 11px;">&nbsp;&nbsp;</span><span style="color: rgb(0, 0, 255);">bool</span><span style="font-size: 11px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isMovingUsingScreenAxis&nbsp;&nbsp;=&nbsp;</span><span style="color: rgb(0, 0, 255);">false</span><span style="font-size: 11px;">; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">private</span><span style="font-size: 11px;">&nbsp;&nbsp;Matrix&nbsp;&nbsp;&nbsp;&nbsp;translationMatrix&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;Matrix.Identity;
 &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">private</span><span style="font-size: 11px;">&nbsp;&nbsp;</span><span style="color: rgb(0, 0, 255);">float</span><span style="font-size: 11px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zoomOutClip&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;0.2f;
 &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">private</span><span style="font-size: 11px;">&nbsp;&nbsp;</span><span style="color: rgb(0, 0, 255);">float</span><span style="font-size: 11px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zoomInClip&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 =&nbsp;5f; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 128, 0);">//screen&nbsp;info </span><span style="font-size: 11px;">&nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">private</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">int</span><span style="font-size: 11px;">&nbsp;screenWidth; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">private</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">int</span><span style="font-size: 11px;">&nbsp;screenHeight; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;Vector2&nbsp;Position&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">get</span><span style="font-size: 11px;">&nbsp;{&nbsp;</span><span style="color: rgb(0, 0, 255);">return</span><span style="font-size: 11px;">&nbsp;position;&nbsp;} &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">set</span><span style="font-size: 11px;">&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">if</span><span style="font-size: 11px;">(position&nbsp;!=&nbsp;value)&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isChanged&nbsp;=&nbsp;<span style="color: rgb(0, 0, 255);">true</span><span style="font-size: 11px;">; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&nbsp;=&nbsp;value;
 &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">float</span><span style="font-size: 11px;">&nbsp;Rotation&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">get</span><span style="font-size: 11px;">&nbsp;{&nbsp;</span><span style="color: rgb(0, 0, 255);">return</span><span style="font-size: 11px;">&nbsp;rotation;&nbsp;} &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">set</span><span style="font-size: 11px;">&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">if</span><span style="font-size: 11px;">(rotation&nbsp;!=&nbsp;value)&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isChanged&nbsp;=&nbsp;<span style="color: rgb(0, 0, 255);">true</span><span style="font-size: 11px;">; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rotation&nbsp;=&nbsp;value;
 &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">float</span><span style="font-size: 11px;">&nbsp;Zoom&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">get</span><span style="font-size: 11px;">&nbsp;{&nbsp;</span><span style="color: rgb(0, 0, 255);">return</span><span style="font-size: 11px;">&nbsp;zoom;&nbsp;} &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">set</span><span style="font-size: 11px;">&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">if</span><span style="font-size: 11px;">(zoom&nbsp;!=&nbsp;value)&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isChanged&nbsp;=&nbsp;<span style="color: rgb(0, 0, 255);">true</span><span style="font-size: 11px;">; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zoom&nbsp;=&nbsp;value;
 &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zoom&nbsp;=&nbsp;MathHelper.Clamp(zoom,zoomOutClip,zoomInClip);
 &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;Vector2&nbsp;CameraCenter&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">get</span><span style="font-size: 11px;">&nbsp;{&nbsp;</span><span style="color: rgb(0, 0, 255);">return</span><span style="font-size: 11px;">&nbsp;Position&nbsp;+&nbsp;</span><span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector2(screenWidth&nbsp;/&nbsp;2,screenHeight&nbsp;/&nbsp;2);&nbsp;} &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">bool</span><span style="font-size: 11px;">&nbsp;IsChanged&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">get</span><span style="font-size: 11px;">&nbsp;{&nbsp;</span><span style="color: rgb(0, 0, 255);">return</span><span style="font-size: 11px;">&nbsp;isChanged;&nbsp;} &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">bool</span><span style="font-size: 11px;">&nbsp;MovingUsingScreenAxis&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">get</span><span style="font-size: 11px;">&nbsp;{&nbsp;</span><span style="color: rgb(0, 0, 255);">return</span><span style="font-size: 11px;">&nbsp;isMovingUsingScreenAxis;&nbsp;} &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">set</span><span style="font-size: 11px;">&nbsp;{&nbsp;isMovingUsingScreenAxis&nbsp;=&nbsp;value;&nbsp;} &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">float</span><span style="font-size: 11px;">&nbsp;ZoomInClip&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">get</span><span style="font-size: 11px;">&nbsp;{&nbsp;</span><span style="color: rgb(0, 0, 255);">return</span><span style="font-size: 11px;">&nbsp;zoomInClip;&nbsp;} &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">set</span><span style="font-size: 11px;">&nbsp;{&nbsp;zoomInClip&nbsp;=&nbsp;value;&nbsp;} &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">float</span><span style="font-size: 11px;">&nbsp;ZoomOutClip&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">get</span><span style="font-size: 11px;">&nbsp;{&nbsp;</span><span style="color: rgb(0, 0, 255);">return</span><span style="font-size: 11px;">&nbsp;zoomOutClip;&nbsp;} &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">set</span><span style="font-size: 11px;">&nbsp;{&nbsp;zoomOutClip&nbsp;=&nbsp;value;&nbsp;} &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;Matrix&nbsp;CameraTranslationMatrix&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">get</span><span style="font-size: 11px;">&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">if</span><span style="font-size: 11px;">(isChanged){ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;translationMatrix&nbsp;=&nbsp;
 &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matrix.CreateTranslation(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector3(position,0))&nbsp;* &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matrix.CreateRotationZ(rotation)&nbsp;*
 &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matrix.CreateScale(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector3(zoom,zoom,0))&nbsp;* &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matrix.CreateTranslation(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector3(screenWidth&nbsp;/&nbsp;2,screenHeight&nbsp;/&nbsp;2,0)); &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isChanged&nbsp;=&nbsp;<span style="color: rgb(0, 0, 255);">false</span><span style="font-size: 11px;">; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">return</span><span style="font-size: 11px;">&nbsp;translationMatrix; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">else</span><span style="font-size: 11px;">&nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">return</span><span style="font-size: 11px;">&nbsp;translationMatrix; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;Camera(</span><span style="color: rgb(0, 0, 255);">int</span><span style="font-size: 11px;">&nbsp;screenWidth,</span><span style="color: rgb(0, 0, 255);">int</span><span style="font-size: 11px;">&nbsp;screenHeight)&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">this</span><span style="font-size: 11px;">.screenWidth&nbsp;=&nbsp;screenWidth; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">this</span><span style="font-size: 11px;">.screenHeight&nbsp;=&nbsp;screenHeight; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;translationMatrix&nbsp;=&nbsp;Matrix.CreateTranslation(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector3(position,0))&nbsp;* &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matrix.CreateRotationZ(rotation)&nbsp;*
 &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matrix.CreateScale(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector3(zoom,zoom,0))&nbsp;* &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matrix.CreateTranslation(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector3(screenWidth&nbsp;* 0.5f,screenHeight&nbsp;* 0.5f,0)); &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">void</span><span style="font-size: 11px;">&nbsp;MoveLeft(</span><span style="color: rgb(0, 0, 255);">float</span><span style="font-size: 11px;">&nbsp;distance)&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">if</span><span style="font-size: 11px;">(distance&nbsp;!=&nbsp;0)&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isChanged&nbsp;=&nbsp;<span style="color: rgb(0, 0, 255);">true</span><span style="font-size: 11px;">; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">if</span><span style="font-size: 11px;">(isMovingUsingScreenAxis)&nbsp; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&nbsp;-=&nbsp;Vector2.Transform(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector2(-1,0),Matrix.CreateRotationZ(-rotation))&nbsp;*&nbsp;distance; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">else</span><span style="font-size: 11px;">&nbsp; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position.X&nbsp;-=&nbsp;distance;
 &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">void</span><span style="font-size: 11px;">&nbsp;MoveRight(</span><span style="color: rgb(0, 0, 255);">float</span><span style="font-size: 11px;">&nbsp;distance){ &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">if</span><span style="font-size: 11px;">(distance&nbsp;!=&nbsp;0)&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isChanged&nbsp;=&nbsp;<span style="color: rgb(0, 0, 255);">true</span><span style="font-size: 11px;">; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">if</span><span style="font-size: 11px;">(isMovingUsingScreenAxis)&nbsp; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&nbsp;-=&nbsp;Vector2.Transform(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector2(1,0),Matrix.CreateRotationZ(-rotation))&nbsp;*&nbsp;distance; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">else</span><span style="font-size: 11px;">&nbsp; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position.X&nbsp;+=&nbsp;distance;
 &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">void</span><span style="font-size: 11px;">&nbsp;MoveUp(</span><span style="color: rgb(0, 0, 255);">float</span><span style="font-size: 11px;">&nbsp;distance)&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">if</span><span style="font-size: 11px;">(distance&nbsp;!=&nbsp;0)&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isChanged&nbsp;=&nbsp;<span style="color: rgb(0, 0, 255);">true</span><span style="font-size: 11px;">; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">if</span><span style="font-size: 11px;">(isMovingUsingScreenAxis) &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&nbsp;-=&nbsp;Vector2.Transform(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector2(0,-1),Matrix.CreateRotationZ(-rotation))&nbsp;*&nbsp;distance; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">else</span><span style="font-size: 11px;">&nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position.Y&nbsp;-=&nbsp;distance;
 &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">void</span><span style="font-size: 11px;">&nbsp;MoveDown(</span><span style="color: rgb(0, 0, 255);">float</span><span style="font-size: 11px;">&nbsp;distance)&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">if</span><span style="font-size: 11px;">(distance&nbsp;!=&nbsp;0)&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isChanged&nbsp;=&nbsp;<span style="color: rgb(0, 0, 255);">true</span><span style="font-size: 11px;">; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">if</span><span style="font-size: 11px;">(isMovingUsingScreenAxis) &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&nbsp;-=&nbsp;Vector2.Transform(<span style="color: rgb(0, 0, 255);">new</span><span style="font-size: 11px;">&nbsp;Vector2(0,1),Matrix.CreateRotationZ(-rotation))&nbsp;*&nbsp;distance; &nbsp;</span></td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">else</span><span style="font-size: 11px;">&nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position.Y&nbsp;+=&nbsp;distance;
 &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 0, 255);">public</span><span style="font-size: 11px;">&nbsp;</span><span style="color: rgb(0, 0, 255);">void</span><span style="font-size: 11px;">&nbsp;ResetToDefaultView()&nbsp;{ &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&nbsp;=&nbsp;Vector2.Zero; &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rotation&nbsp;=&nbsp;0.0f; &nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zoom&nbsp;=&nbsp;1.0f; &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isChanged&nbsp;=&nbsp;<span style="color: rgb(0, 0, 255);">true</span><span style="font-size: 11px;">; &nbsp;</span></td>
        </tr>
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td style="background-color: rgb(247, 247, 247);">&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;</td>
        </tr>
        <tr>
            <td>}&nbsp;</td>
        </tr>
    
</tbody></table>
</div>
<p>&nbsp;</p>
</span></p>
<p>&nbsp;</p>
<p>&nbsp;btw greg my problem wasn't rotating the camera it was getting 
the camera to rotate around the cameras center instead of around the 
world orgin. For example if a sprite was directly in the middle of the 
camera, then it should not move at all but just rotate but if it was 
alittle off the cameras center it should go in a circle around the 
cameras center, basically 'orbit' the cameras center. Thank you anyways 
for your input though.</p>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                        <tr valign="bottom">
                                            <td class="ForumPostFooterArea">
                                                
                                                <ul class="ForumPostStatistics CommonPrintHidden" style="clear: both;">
                                                    <li></li>
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="XnaCgp_CSTableFooter">
                                            <td>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </li>
                        
                            </ul>
                        
                </td>
            </tr>
            <tr>
                <td align="right">
                    
                    <span class="CommonPagingArea">Page 1 of 1 (12 posts) </span>
                    <a class="CommonImageTextButton CommonPreviousButton" href="http://forums.create.msdn.com/forums/ThreadNavigation.aspx?PostID=323586&amp;NavType=Previous">Previous Discussion</a>
                    <a class="CommonImageTextButton CommonNextButton" href="http://forums.create.msdn.com/forums/ThreadNavigation.aspx?PostID=323586&amp;NavType=Next">Next Discussion</a>
                </td>
            </tr>
            <tr>
                <td align="right">
                </td>
            </tr>
        </tbody></table>
        
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody><tr>
                        <td colspan="2" align="right">
                            <div class="CommonWebFeedArea CommonPrintHidden">
            <a href="http://forums.create.msdn.com/forums/rss.aspx?ForumID=56&amp;PostID=323586">
                <img src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/rss.gif" alt="" style="border-width: 0px;"></a>
                </div> </td> </tr> </tbody></table>
            
    </div>
    
</div>


    
            <!--removed footer content from here-->
		
<script type="text/javascript">
// <![CDATA[
Telligent_Modal.Configure('/utility/loading.htm',['CommonModal','CommonModal1','CommonModal2','CommonModal3','CommonModal4','CommonModal5'],['CommonModalTitle'],['CommonModalClose'],['CommonModalContent'],['CommonModalFooter'],['CommonModalResize'],['CommonModalMask'],100);
// ]]>
</script><script type="text/javascript">
<!--
function KeyDownHandlerctl00_ctl00_ctl00_BodyContent_bbcr_SearchForm1_ctl00_SearchButtonTop(event)
{
	if (event.keyCode == 13)
	{
		event.returnValue = false;
		event.cancel = true;
     __doPostBack('ctl00$ctl00$ctl00$BodyContent$bbcr$SearchForm1$ctl00$SearchButtonTop','')
   return false;
	}
}

//-->
</script>
</form>
		

            
		</div>
        
	</div>
        <div id="ctl00_ctl00_ctl00_xnaCgpShellFooterContainer" class="XnaCgp_shell_footer XnaCgp_shell_footer_wide_bg">
		
            <div>
			© 2010 Microsoft Corporation. All rights reserved.
		</div><div class="XnaCgp_Shell_Footer_Links">
			<ul>
				<li class="XnaCgp_Shell_Footer_li_First"><a testid="lnkTermsOfUse" target="_blank" href="http://create.msdn.com/en-US/help/termsofuse">Terms of Use</a></li><li><a target="_blank" href="http://create.msdn.com/downloads/?id=638">Application Provider Agreement</a></li><li><a testid="lnkPrivacyStatement" target="_blank" href="http://create.msdn.com/en-US/w3c/policy">Privacy Statement</a></li><li><a testid="lnkCodeOfConduct" target="_blank" href="http://create.msdn.com/en-US/help/conduct">Code of Conduct</a></li><li><a testid="lnkFeedback" href="http://create.msdn.com/en-US/feedback">Feedback</a></li>
			</ul>
		</div>
            
        
	</div>        
    
</div>
<div id="XnaCgp_DisablePage" class="XnaCgp_DisplayNone">
</div>

<!-- Machine: -66117109  ID: 201 -->

<script type="text/javascript">
	
var gDomain='m.webtrends.com';
var gDcsId='dcschd84w10000w4lw9hcqmsz_8n3x';
var gTrackEvents=1;
var gFpc='WT_FPC';
/*<![CDATA[*/
if(document.cookie.indexOf(gFpc+"=")==-1){document.write("<scr"+"ipt type='text/javascript' src='"+"http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+gDomain+"/"+gDcsId+"/wtid.js"+"'><\/scr"+"ipt>");}
/*]]>*/


</script><script type="text/javascript" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/wtid.js"></script><script src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/WebTrends.js" type="text/javascript">

</script><noscript>
	<div>
		<img alt="DCSIMG" id="DCSIMG" width="1" height="1" src="http://m.webtrends.com/dcschd84w10000w4lw9hcqmsz_8n3x/njs.gif?dcsuri=/nojavascript&amp;amp;WT.js=No" />
	</div>
</noscript>

            <!-- SiteCatalyst code version: H.1.
            Copyright 1997-2005 Omniture, Inc. More info available at
            http://www.omniture.com -->

            <script language="JavaScript" type="text/javascript">
            var s_account = 'msnportalmobileISV';
            </script>

            <script language="JavaScript" type="text/javascript" src="2D%20camera%20zoom%20and%20rotate%20around%20cameras%20center%20325114_files/s_code.js"></script>

            <script language="JavaScript" type="text/javascript">
            <!--
                s.pageName = 'CCO \x3a Base \x3a 2D camera zoom and rotate around cameras center - App Hub Forums'
                s.channel = 'CCO-Base'
                s.server = 'forums.create.msdn.com'
                s.g = 'http\x3a\x2f\x2fforums.create.msdn.com\x2fthemes\x2fdefault\x2fforums\x2fthread.aspx\x3fThreadID\x3d53363\x26PostID\x3d325114\x26PermaPostID\x3d325114'
                s.r = 'http\x3a\x2f\x2fwww.google.com\x2furl\x3fsa\x3dt\x26source\x3dweb\x26cd\x3d1\x26ved\x3d0CBIQFjAA\x26url\x3dhttp\x3a\x2f\x2fforums.xna.com\x2fforums\x2fp\x2f53363\x2f325114.aspx\x26rct\x3dj\x26q\x3dxna camera move rotate origin\x26ei\x3dFK7qTNXkMomasAPlmpCxCw\x26usg\x3dAFQjCNEedFOufVPbxRyxSi5J6GI66tK0Ww\x26sig2\x3dSeN6kbpISjIUGKx4cHchHg\x26cad\x3drja'
                s.linkInternalFilters = "javascript:,windowsphone.com";
                s.trackExternalLinks = true;
                s.pageType = ''
                s.prop8 = 'en-US'
                s.campaign = ''
                s.prop18 = ''
                s.prop23 = ''                
                s.linkExternalFilters = "";
                s.linkLeaveQueryString = false;
                /************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
                var s_code = s.t(); if (s_code) document.write(s_code)//--></script>

            <script language="JavaScript" type="text/javascript"><!--
                if (navigator.appVersion.indexOf('MSIE') >= 0) document.write(unescape('%3C') + '\!-' + '-')
            //--></script>

            <noscript>
                <img src="https://'msnportalmobileISV'.112.2O7.net/b/ss/'msnportalmobileISV'/1/H.1--NS/0"
                    height="1" width="1" border="0" alt="" /></noscript><!--/DO NOT REMOVE/-->
            <!-- End SiteCatalyst code version: H.1. -->
         
</body></html>