var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* Unsubscribe */

var divs = {
	'1' : 'playing' ,
	'2' : 'expensive' ,
	'3' : 'account' ,
	'4' : 'game' ,
	'5' : 'safety' ,
	'6' : 'tech',
	'7' : 'other'
}

function showhide(obj)
	{
	var el, v = obj.options[obj.selectedIndex].value;
	for (var opt in divs)
		if (el = document.getElementById(divs[opt]))
			el.style.display = (opt != v) ? 'none' : 'block';
}

window.onload = function()
{
	if (document.getElementById('reason')) {
		document.getElementById('reason').onchange();
	}
}

/* End Unsubscribe */

function editpassword(postURL)
{
	params = new Object();	
	if(document.getElementById('password')){
		params.password = document.getElementById('password').value;
		params.password1 = document.getElementById('password1').value;
		params.oldPassword = document.getElementById('oldPassword').value;
	}
	http( 'POST'  , postURL + '?', editpasswordCallback, params);
}

function editpasswordCallback(contents)
{
	document.getElementById('editpassword').innerHTML = contents.content;
}

function editnewsletter(postURL)
{
	params = new Object();	
	params.newsletter = document.getElementById('subscribe').value;
	http( 'POST'  , postURL + '?', editnewsletterCallback, params);
}

function editnewsletterCallback(contents)
{
	document.getElementById('editnewsletter').innerHTML = contents.content;
}

function submitOnEnter(event, form)
{

    if ((window.event && window.event.keyCode == 13) || (event.which && event.which == 13))
    {
    	form.submit();
    }
    else
    {
    	return true;
    }
}



/**
 * Used by the Diablo Flash to display a Games Arcade flash minigame over the top of Moshi.  This function is called by the 
 * Diablo Flash via an External Interface call.  The Flash will supply all the details required to display the game; these
 * are passed through to the arcade-wrapper.html.  When the minigame is closed another ExternalInterface call will be made
 * to the Flash which will cause Moshi to resume.
 *
 * This function makes use of FancyBox to display a custom iFrame (FunParkLauncher.jsp) which hosts the minigame's SWF file.
 * FancyBox uses jQuery which is only included inline in MyMonster.jsp - not ideal.
 *
 * @see FancyBox API: http://fancybox.net/api
 *
 * @param gameDetails (Object)	An arguments object which contains the following properties:
 *		- swf: 				The filename for the minigame's SWF, ie: "games/jungle-plunge.swf"
 *		- swfVersion: 		Minimum Flash Player Version required to play the SWF
 *		- width: 			Width of the minigame in pixels
 *		- height:			Height of the minigame in pixels.
 * 
 * @param controlsImageURL (String) The filepath for the minigame's controls image, 
 * 									ie: "controls/jungle-plunge-controls.jpg"
 */
function launchArcadeGame(gameDetails, controlsImageURL) 
{
	// Check to see if we have a Controls Image to display alongside the game.  If we do, the image gets
	// preloaded by jQuery and passed to showArcadeGamePopup() so we can know the image's height - failing to
	// do this results in the controls image being off when viewed.
	if (controlsImageURL && controlsImageURL.length) 
	{
		var img = new Image();
		$(img)
			.load(function() { showArcadeGamePopup(gameDetails, this); })
			.error(function() { showArcadeGamePopup(gameDetails); })
			.attr("src", controlsImageURL);
	}
	else {
		showArcadeGamePopup(gameDetails);
	}
}

/**
 * Calls through to FancyBox (an in-turn, the funparklauncher JSP) providing the gameDetails a pre-loadedControl Image 
 * HTML entity which will be displayed alongside the game.
 */
function showArcadeGamePopup(gameDetails, controlsImg)
{
	$.fancybox({
		"width": gameDetails.width,
		"height": gameDetails.height,
		"title": "Moshi FunPark Game",
		"type": "iframe",
		"href": gameDetails.siteRoot + "/funparklauncher?swf=" + gameDetails.swf + "&swfVersion=" + gameDetails.swfVersion + "&width=" + gameDetails.width + "&height=" + gameDetails.height,
		"padding": 0,
		"margin": 5,
		"overlayOpacity": 0.5,
		"overlayColor": "#000",
		"showNavArrows": false,
		"scrolling": "no",
		"autoScale": "false",
		"titleFormat": function() {
			if (controlsImg != null) 
			{
				return '<div id="controls-title" />'
						+ '<img id="controls-img" src="' + controlsImg.src + '" height="' + controlsImg.height + '" />';
			}
			return "";
		},
		"onStart": function() {
			disableHTMLScrollBars();
		},
		"onClosed" : function() {
			enableHTMLScrollBars();
			
			// Perform a callback to the Flash element, this is picked up by the SWF via a registered ExternalInterface 
			// callback
			$("#shell")[0]._jsDefrost();
		}
	});
}


/**
 * There is a bug affecting Internet Explorer browsers where the wmode of the Flash is set to transparent / opqaue which
 * causes the flash container to never gain focus.  This means that when the player presses the arrow keys the HTML page
 * will scroll.  By modifying the body element's overflow property we can make the scroll bars disappear.
 * Note that this does not work in Mozilla: https://bugzilla.mozilla.org/show_bug.cgi?id=90268
 */
function disableHTMLScrollBars()
{
	if ($.browser.msie) {
		$("body").css({"overflow": "hidden"});
	}	
} 

function enableHTMLScrollBars()
{
	if ($.browser.msie) {
		$("body").css({"overflow": "visible"});
	}
}


}
/*
     FILE ARCHIVED ON 15:39:20 Nov 13, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:10:36 Mar 08, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 69.836 (3)
  exclusion.robots.policy: 0.153
  captures_list: 92.809
  esindex: 0.012
  PetaboxLoader3.resolve: 25.652
  RedisCDXSource: 3.165
  PetaboxLoader3.datanode: 124.648 (4)
  CDXLines.iter: 16.737 (3)
  load_resource: 117.332
  exclusion.robots: 0.165
*/