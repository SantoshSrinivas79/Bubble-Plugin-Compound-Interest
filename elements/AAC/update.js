function(instance, properties, context) {

	instance.data.calculationResult = compound(properties.initial, properties.amount, properties.years, properties.interest, properties.period);
    instance.data.calculationRan(instance.data.calculationResult)

}