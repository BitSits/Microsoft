
function get_mediainfo(videoUrl, mediainfoIndex) {
	//alert(player.get_element().initParams);
    switch (mediainfoIndex) {        
        case 0:
            return  { "mediaUrl": videoUrl,
                      "placeholderImage": null,
                      "chapters": [] };                                                                
        default:
             throw Error.invalidOperation("No such mediainfo");
     }
}

function StartWithParent(parentId, appId, initParams) {
    new StartPlayer_0(parentId, initParams);
}

function StartPlayer_0(parentId, initParams) {
	this._videoUrl = initParams[0].substring(initParams[0].indexOf('=') + 1);
    this._hostname = EePlayer.Player._getUniqueName("xamlHost");
    Silverlight.createObjectEx( {   source: 'player.xaml', 
                                        parentElement: $get(parentId ||"divPlayer_0"), 
                                        id:this._hostname, 
                                        properties:{ width:'100%', height:'100%', version:'1.0', background:document.body.style.backgroundColor, isWindowless:'false' }, 
                                        events:{ onLoad:Function.createDelegate(this, this._handleLoad) } } );
    this._currentMediainfo = 0;      
}
StartPlayer_0.prototype= {
    _handleLoad: function() {
        this._player = $create(   ExtendedPlayer.Player, 
                                  { // properties
                                    autoPlay    : false, 
                                    volume      : 1.0,
                                    muted       : false
                                  }, 
                                  { // event handlers
                                    mediaEnded: Function.createDelegate(this, this._onMediaEnded),
                                    mediaFailed: Function.createDelegate(this, this._onMediaFailed)
                                  },
                                  null, $get(this._hostname)  ); 
        this._playNextVideo();     
    },    
    _onMediaEnded: function(sender, eventArgs) {
        window.setTimeout( Function.createDelegate(this, this._playNextVideo), 1000);
    },
    _onMediaFailed: function(sender, eventArgs) {
        alert(String.format( Ee.UI.Xaml.Media.Res.mediaFailed, this._player.get_mediaUrl() ) );
    },
    _playNextVideo: function() {
        var cVideos = 1;
        if (this._currentMediainfo<cVideos)
            this._player.set_mediainfo( get_mediainfo(this._videoUrl, this._currentMediainfo++ ) );    
    }        
}
