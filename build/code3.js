gdjs.DeathCode = {};
gdjs.DeathCode.localVariables = [];
gdjs.DeathCode.GDLogoObjects1= [];
gdjs.DeathCode.GDLogoObjects2= [];
gdjs.DeathCode.GDStartButtonObjects1= [];
gdjs.DeathCode.GDStartButtonObjects2= [];
gdjs.DeathCode.GDNewSpriteObjects1= [];
gdjs.DeathCode.GDNewSpriteObjects2= [];
gdjs.DeathCode.GDhowtoplayObjects1= [];
gdjs.DeathCode.GDhowtoplayObjects2= [];
gdjs.DeathCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.DeathCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.DeathCode.GDMenuObjects1= [];
gdjs.DeathCode.GDMenuObjects2= [];


gdjs.DeathCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.DeathCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DeathCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.DeathCode.GDPurpleButtonWithStoneFrameObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DeathCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.DeathCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.DeathCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.DeathCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DeathCode.GDMenuObjects1.length;i<l;++i) {
    if ( gdjs.DeathCode.GDMenuObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DeathCode.GDMenuObjects1[k] = gdjs.DeathCode.GDMenuObjects1[i];
        ++k;
    }
}
gdjs.DeathCode.GDMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Wom", false);
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}}

}


};

gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDLogoObjects1.length = 0;
gdjs.DeathCode.GDLogoObjects2.length = 0;
gdjs.DeathCode.GDStartButtonObjects1.length = 0;
gdjs.DeathCode.GDStartButtonObjects2.length = 0;
gdjs.DeathCode.GDNewSpriteObjects1.length = 0;
gdjs.DeathCode.GDNewSpriteObjects2.length = 0;
gdjs.DeathCode.GDhowtoplayObjects1.length = 0;
gdjs.DeathCode.GDhowtoplayObjects2.length = 0;
gdjs.DeathCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.DeathCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.DeathCode.GDMenuObjects1.length = 0;
gdjs.DeathCode.GDMenuObjects2.length = 0;

gdjs.DeathCode.eventsList0(runtimeScene);
gdjs.DeathCode.GDLogoObjects1.length = 0;
gdjs.DeathCode.GDLogoObjects2.length = 0;
gdjs.DeathCode.GDStartButtonObjects1.length = 0;
gdjs.DeathCode.GDStartButtonObjects2.length = 0;
gdjs.DeathCode.GDNewSpriteObjects1.length = 0;
gdjs.DeathCode.GDNewSpriteObjects2.length = 0;
gdjs.DeathCode.GDhowtoplayObjects1.length = 0;
gdjs.DeathCode.GDhowtoplayObjects2.length = 0;
gdjs.DeathCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.DeathCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.DeathCode.GDMenuObjects1.length = 0;
gdjs.DeathCode.GDMenuObjects2.length = 0;


return;

}

gdjs['DeathCode'] = gdjs.DeathCode;
