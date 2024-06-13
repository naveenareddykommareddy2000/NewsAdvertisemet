function CEndPanel(oSpriteBg, iScore){
    var _iScore;

    var _oBg;
    var _oGroup;
    var _oMsgText;
    var _oScore;
    var _oButHome;
    var _oButRestart;
    var _oListener;

    this._init = function(oSpriteBg, iScore){
        _iScore = iScore;

        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;

        _oBg = createBitmap(oSpriteBg);
        _oGroup.addChild(_oBg);

        _oMsgText = new createjs.Text(TEXT_COMPLETED," 60px "+PRIMARY_FONT, "#fff");
        _oMsgText.x = CANVAS_WIDTH/2;
        _oMsgText.y = (CANVAS_HEIGHT/2)-202;
        _oMsgText.textAlign = "center";
        _oMsgText.textBaseline = "alphabetic";
        _oMsgText.lineWidth = 600;
        _oGroup.addChild( _oMsgText);

        _oScore = new createjs.Text(""," 30px "+SECONDARY_FONT, "#fff");
        _oScore.x = CANVAS_WIDTH/2;;
        _oScore.y = (CANVAS_HEIGHT/2) - 140;
        _oScore.textAlign = "center";
        _oScore.textBaseline = "alphabetic";
        _oScore.lineWidth = 500;
        _oGroup.addChild(_oScore);

        _oButHome = new CGfxButton(CANVAS_WIDTH/2 - 216,CANVAS_HEIGHT/2 + 180,s_oSpriteLibrary.getSprite("but_home"),_oGroup);
        _oButHome.addEventListener(ON_MOUSE_UP,this._onButHome,this);

        _oButRestart = new CGfxButton(CANVAS_WIDTH/2 + 216,CANVAS_HEIGHT/2 + 180,s_oSpriteLibrary.getSprite("but_restart"),_oGroup);
        _oButRestart.addEventListener(ON_MOUSE_UP,this._onButRestart,this);


        s_oStage.addChild(_oGroup);
    };

    this._initListener = function(){
        _oListener = _oGroup.on("mousedown",function(){});
    };

    this.show = function(){
        _oScore.text = TEXT_SCORE +" " +TEXT_CAPTION;

        _oGroup.visible = true;

        var oParent = this;
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {oParent._initListener();});


        $(s_oMain).trigger("save_score",_iScore);
        $(s_oMain).trigger("share_event",_iScore);
        $(s_oMain).trigger("show_interlevel_ad");
    };

    this._onButHome = function(){
        _oGroup.on("mousedown",_oListener);
        s_oStage.removeChild(_oGroup);

        $(s_oMain).trigger("end_session");

        s_oGame.onExit();
    };

    this._onButRestart = function(){
        _oGroup.on("mousedown",_oListener);
        s_oStage.removeChild(_oGroup);

        s_oGame.restart();
    };

    this._init(oSpriteBg, iScore);

    return this;
}
