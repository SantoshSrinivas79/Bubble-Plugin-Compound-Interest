function(instance, context) {
  
  instance.data.calculationRan = function (result) {
  instance.publishStat  instance.data.calculationResult = 0;
e("result", result);
  instance.triggerEvent("calculated");
  }

}