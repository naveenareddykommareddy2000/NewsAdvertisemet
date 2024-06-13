function CChooseDifficultyPanel(){
    var _aButtons;
    var _pStartPosExit;
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    var _oButExit;
    var _oContainer;
    var _oAudioToggle;
    var _oButFullscreen;
    var _oContainer;

    this._init = function(){
       _oContainer = new createjs.Container();
       s_oStage.addChild(_oContainer);

       var oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
       _oContainer.addChild(oBg);

       var oText = new createjs.Text(TEXT_CHOOSE_DIFFICULTY," 80px "+PRIMARY_FONT, "#ffffff");
        oText.x = CANVAS_WIDTH/2;
        oText.y = 130;
        oText.textAlign = "center";
        oText.textBaseline = "middle";
        oText.lineWidth = 1000;
        _oContainer.addChild(oText);

        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
	_pStartPosExit = {x:CANVAS_WIDTH - (oSprite.width/2) - 10,y:(oSprite.height/2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x,_pStartPosExit.y,oSprite,_oContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _pStartPosAudio = {x:_oButExit.getX() - oSprite.width ,y:(oSprite.height/2) + 10 }
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,s_oSpriteLibrary.getSprite('audio_icon'),s_bAudioActive,_oContainer);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.enabled){
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {x: oSprite.width/4 + 10,y:(oSprite.height/2)+4};

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,_oContainer);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }


        //PLACE DIFFICULTY BUTTON
        _aButtons = new Array();

        var oSprite = s_oSpriteLibrary.getSprite("difficulty_0");
        var oButton = new CGfxButton(CANVAS_WIDTH/2 - 250,CANVAS_HEIGHT/2 - 130,oSprite,_oContainer);
        oButton.addEventListenerWithParams(ON_MOUSE_UP,this._onSelectDifficulty,this,0);
        _aButtons.push(oButton);

        var oText = new createjs.Text("16 " + TEXT_PIECES," 40px "+PRIMARY_FONT, "#fff");
        oText.x = oButton.getX();
        oText.y = oButton.getY() + oSprite.height/2 + 24;
        oText.textAlign = "center";
        oText.textBaseline = "middle";
        _oContainer.addChild(oText);

        var oButton = new CGfxButton(CANVAS_WIDTH/2 + 250,CANVAS_HEIGHT/2 - 130,s_oSpriteLibrary.getSprite("difficulty_1"),_oContainer);
        oButton.addEventListenerWithParams(ON_MOUSE_UP,this._onSelectDifficulty,this,1);
        _aButtons.push(oButton);

        var oText = new createjs.Text("36 " + TEXT_PIECES," 40px "+PRIMARY_FONT, "#fff");
        oText.x = oButton.getX();
        oText.y = oButton.getY() + oSprite.height/2 + 24;
        oText.textAlign = "center";
        oText.textBaseline = "middle";
        _oContainer.addChild(oText);

        var oButton = new CGfxButton(CANVAS_WIDTH/2,CANVAS_HEIGHT/2 + 230,s_oSpriteLibrary.getSprite("difficulty_2"),_oContainer);
        oButton.addEventListenerWithParams(ON_MOUSE_UP,this._onSelectDifficulty,this,2);
        _aButtons.push(oButton);

        var oText = new createjs.Text("64 " + TEXT_PIECES," 40px "+PRIMARY_FONT, "#fff");
        oText.x = oButton.getX();
        oText.y = oButton.getY() + oSprite.height/2 + 24;
        oText.textAlign = "center";
        oText.textBaseline = "middle";
        _oContainer.addChild(oText);

        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };

    this.unload = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
        }

        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.unload();
        }

        _oButExit.unload();

        for(var i=0;i<_aButtons.length;i++){
            _aButtons[i].unload();
        }
        s_oStage.removeAllChildren();

        s_oChooseDifficultyPanel = null;
    };

    this.refreshButtonPos = function(iNewX,iNewY){
        _oButExit.setPosition(_pStartPosExit.x - iNewX,_pStartPosExit.y + iNewY);
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + iNewX,_pStartPosFullscreen.y + iNewY);
        }
    };

    this.resetFullscreenBut = function(){
	if (_fRequestFullScreen && screenfull.enabled){
		_oButFullscreen.setActive(s_bFullscreen);
	}
    };

    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
	s_bAudioActive = !s_bAudioActive;
    };

    this._onFullscreenRelease = function(){
	if(s_bFullscreen) {
		_fCancelFullScreen.call(window.document);
	}else{
		_fRequestFullScreen.call(window.document.documentElement);
	}

	sizeHandler();
    };

    this._onExit = function(){
        s_oMain.gotoChooseImage();
    };

    this._onSelectDifficulty = function(iDifficulty){
        s_oChooseDifficultyPanel.unload();
        s_oMain.gotoGame(iDifficulty);
    };

    s_oChooseDifficultyPanel = this;
    this._init();
}

var s_oChooseDifficultyPanel = null;
