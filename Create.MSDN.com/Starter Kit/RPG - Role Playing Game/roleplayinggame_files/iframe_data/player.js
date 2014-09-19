/// ******************************************************************************************************************
/// ExtendedPlayer - volume slider animates out when you hover over it

Type.registerNamespace('ExtendedPlayer');

ExtendedPlayer.Player = function(domElement) {
    ExtendedPlayer.Player.initializeBase(this, [domElement]);    
}
ExtendedPlayer.Player.prototype =  {
    xamlInitialize: function() {    
        ExtendedPlayer.Player.callBaseMethod(this, 'xamlInitialize');    
        this._volumeControl = new ExtendedPlayer.VolumeControl(this, "VolumeControl");            
        this._chapterControl = new ExtendedPlayer.VolumeControl(this, "ChapterArea");  
    },

	dispose: function() {
		this._volumeControl=null;
		this._chapterControl=null;
	        ExtendedPlayer.Player.callBaseMethod(this, 'dispose');    		
    	} 
}
ExtendedPlayer.Player.registerClass('ExtendedPlayer.Player', EePlayer.Player);


//
// Volume control, note: actual volume handling is done by the contained VolumeSlider, which is a child of VolumeControl
// this just makes it fade in/out when you hover over it.
//


ExtendedPlayer.VolumeControl = function(player, nameElement) {    
    ExtendedPlayer.VolumeControl.initializeBase(this, [player.get_element(), nameElement]);
}
ExtendedPlayer.VolumeControl.registerClass('ExtendedPlayer.VolumeControl', Ee.UI.Xaml.Media._Button);

