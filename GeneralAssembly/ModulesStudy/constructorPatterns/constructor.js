function ModuleFactory(args) {
	let variable = someTransformationOf(args);

	return {
		property: value,
		getterMethod: function () {
			// has access to `variable` above
			return variable;
		},
		setterMethod: function (value) {
			// has access to `variable` above
			variable = value;
		}
	};
}

const myModule = ModuleFactory(someArgs);
// How would you use the getter and setter methods? What would they do?
