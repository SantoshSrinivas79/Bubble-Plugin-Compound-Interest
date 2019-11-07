function(properties, context) {

  if (properties.initial, properties.amount, properties.years, properties.interest, properties.period) {
    instance.data.calculationResult = compound(properties.initial, properties.amount, properties.years, properties.interest, properties.period);
    return instance.data.calculationResult;
  } else {
    return null;
  }

}