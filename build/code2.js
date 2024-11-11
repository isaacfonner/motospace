gdjs.WomCode = {};
gdjs.WomCode.localVariables = [];
gdjs.WomCode.GDLogoObjects1= [];
gdjs.WomCode.GDLogoObjects2= [];
gdjs.WomCode.GDStartButtonObjects1= [];
gdjs.WomCode.GDStartButtonObjects2= [];
gdjs.WomCode.GDNewSpriteObjects1= [];
gdjs.WomCode.GDNewSpriteObjects2= [];
gdjs.WomCode.GDhowtoplayObjects1= [];
gdjs.WomCode.GDhowtoplayObjects2= [];
gdjs.WomCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.WomCode.GDPurpleButtonWithStoneFrameObjects2= [];


gdjs.WomCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.WomCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WomCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.WomCode.GDPurpleButtonWithStoneFrameObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WomCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.WomCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.WomCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};

gdjs.WomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WomCode.GDLogoObjects1.length = 0;
gdjs.WomCode.GDLogoObjects2.length = 0;
gdjs.WomCode.GDStartButtonObjects1.length = 0;
gdjs.WomCode.GDStartButtonObjects2.length = 0;
gdjs.WomCode.GDNewSpriteObjects1.length = 0;
gdjs.WomCode.GDNewSpriteObjects2.length = 0;
gdjs.WomCode.GDhowtoplayObjects1.length = 0;
gdjs.WomCode.GDhowtoplayObjects2.length = 0;
gdjs.WomCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.WomCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;

gdjs.WomCode.eventsList0(runtimeScene);
gdjs.WomCode.GDLogoObjects1.length = 0;
gdjs.WomCode.GDLogoObjects2.length = 0;
gdjs.WomCode.GDStartButtonObjects1.length = 0;
gdjs.WomCode.GDStartButtonObjects2.length = 0;
gdjs.WomCode.GDNewSpriteObjects1.length = 0;
gdjs.WomCode.GDNewSpriteObjects2.length = 0;
gdjs.WomCode.GDhowtoplayObjects1.length = 0;
gdjs.WomCode.GDhowtoplayObjects2.length = 0;
gdjs.WomCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.WomCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;


return;

}

gdjs['WomCode'] = gdjs.WomCode;
