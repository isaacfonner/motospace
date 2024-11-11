gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDLogoObjects1= [];
gdjs.MenuCode.GDLogoObjects2= [];
gdjs.MenuCode.GDStartButtonObjects1= [];
gdjs.MenuCode.GDStartButtonObjects2= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDhowtoplayObjects1= [];
gdjs.MenuCode.GDhowtoplayObjects2= [];
gdjs.MenuCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.MenuCode.GDPurpleButtonWithStoneFrameObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.MenuCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPurpleButtonWithStoneFrameObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.MenuCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDhowtoplayObjects1.length = 0;
gdjs.MenuCode.GDhowtoplayObjects2.length = 0;
gdjs.MenuCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.MenuCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDhowtoplayObjects1.length = 0;
gdjs.MenuCode.GDhowtoplayObjects2.length = 0;
gdjs.MenuCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.MenuCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
