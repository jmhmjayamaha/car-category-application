angular.module("carList").
component("carList", {
	templateUrl:"car-list/car-list.template.html",
	controller: function CarListController() {
		this.cars = [ 
			{model:'212V', name:'axia'},
			{model:'212V', name:'Maruti'},
			{model:'212V', name:'Honda'}
		]
	}
});