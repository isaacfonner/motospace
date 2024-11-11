gdjs.LevelCode = {};
gdjs.LevelCode.localVariables = [];
gdjs.LevelCode.GDBikeObjects1= [];
gdjs.LevelCode.GDBikeObjects2= [];
gdjs.LevelCode.GDMetalFenceObjects1= [];
gdjs.LevelCode.GDMetalFenceObjects2= [];
gdjs.LevelCode.GDNoCameraObjects1= [];
gdjs.LevelCode.GDNoCameraObjects2= [];
gdjs.LevelCode.GDDistanceObjects1= [];
gdjs.LevelCode.GDDistanceObjects2= [];
gdjs.LevelCode.GDIndustrialSpikesObjects1= [];
gdjs.LevelCode.GDIndustrialSpikesObjects2= [];
gdjs.LevelCode.GDSmallSignObjects1= [];
gdjs.LevelCode.GDSmallSignObjects2= [];
gdjs.LevelCode.GDLeapObjects1= [];
gdjs.LevelCode.GDLeapObjects2= [];


gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDBikeObjects1Objects = Hashtable.newFrom({"Bike": gdjs.LevelCode.GDBikeObjects1});
gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDNoCameraObjects1Objects = Hashtable.newFrom({"NoCamera": gdjs.LevelCode.GDNoCameraObjects1});
gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDBikeObjects1Objects = Hashtable.newFrom({"Bike": gdjs.LevelCode.GDBikeObjects1});
gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDIndustrialSpikesObjects1Objects = Hashtable.newFrom({"IndustrialSpikes": gdjs.LevelCode.GDIndustrialSpikesObjects1});
gdjs.LevelCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bike"), gdjs.LevelCode.GDBikeObjects1);
gdjs.copyArray(runtimeScene.getObjects("NoCamera"), gdjs.LevelCode.GDNoCameraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDBikeObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDNoCameraObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LevelCode.GDBikeObjects1 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.LevelCode.GDBikeObjects1.length === 0 ) ? 0 :gdjs.LevelCode.GDBikeObjects1[0].getPointX("")) + 275, "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NoCamera"), gdjs.LevelCode.GDNoCameraObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDNoCameraObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDNoCameraObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bike"), gdjs.LevelCode.GDBikeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Distance"), gdjs.LevelCode.GDDistanceObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDDistanceObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDDistanceObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.floor(((( gdjs.LevelCode.GDBikeObjects1.length === 0 ) ? 0 :gdjs.LevelCode.GDBikeObjects1[0].getPointX("")) / 25)) - 24) + "FT");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bike"), gdjs.LevelCode.GDBikeObjects1);
gdjs.copyArray(runtimeScene.getObjects("IndustrialSpikes"), gdjs.LevelCode.GDIndustrialSpikesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDBikeObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDIndustrialSpikesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bike"), gdjs.LevelCode.GDBikeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(((( gdjs.LevelCode.GDBikeObjects1.length === 0 ) ? 0 :gdjs.LevelCode.GDBikeObjects1[0].getPointX("")) / 25)) - 24 >= 1000);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Wom", false);
}}

}


};

gdjs.LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelCode.GDBikeObjects1.length = 0;
gdjs.LevelCode.GDBikeObjects2.length = 0;
gdjs.LevelCode.GDMetalFenceObjects1.length = 0;
gdjs.LevelCode.GDMetalFenceObjects2.length = 0;
gdjs.LevelCode.GDNoCameraObjects1.length = 0;
gdjs.LevelCode.GDNoCameraObjects2.length = 0;
gdjs.LevelCode.GDDistanceObjects1.length = 0;
gdjs.LevelCode.GDDistanceObjects2.length = 0;
gdjs.LevelCode.GDIndustrialSpikesObjects1.length = 0;
gdjs.LevelCode.GDIndustrialSpikesObjects2.length = 0;
gdjs.LevelCode.GDSmallSignObjects1.length = 0;
gdjs.LevelCode.GDSmallSignObjects2.length = 0;
gdjs.LevelCode.GDLeapObjects1.length = 0;
gdjs.LevelCode.GDLeapObjects2.length = 0;

gdjs.LevelCode.eventsList0(runtimeScene);
gdjs.LevelCode.GDBikeObjects1.length = 0;
gdjs.LevelCode.GDBikeObjects2.length = 0;
gdjs.LevelCode.GDMetalFenceObjects1.length = 0;
gdjs.LevelCode.GDMetalFenceObjects2.length = 0;
gdjs.LevelCode.GDNoCameraObjects1.length = 0;
gdjs.LevelCode.GDNoCameraObjects2.length = 0;
gdjs.LevelCode.GDDistanceObjects1.length = 0;
gdjs.LevelCode.GDDistanceObjects2.length = 0;
gdjs.LevelCode.GDIndustrialSpikesObjects1.length = 0;
gdjs.LevelCode.GDIndustrialSpikesObjects2.length = 0;
gdjs.LevelCode.GDSmallSignObjects1.length = 0;
gdjs.LevelCode.GDSmallSignObjects2.length = 0;
gdjs.LevelCode.GDLeapObjects1.length = 0;
gdjs.LevelCode.GDLeapObjects2.length = 0;


return;

}

gdjs['LevelCode'] = gdjs.LevelCode;
