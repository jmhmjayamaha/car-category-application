angular.module("carList").
component("carList", {
	templateUrl:"car-list/car-list.template.html",
	controller: function CarListController() {
		this.cars = [
			{model:'212V', name:'axia', img_url:"img/axia_1.jpg"},
			{model:'212V', name:'Maruti', img_url:"img/axia_2.jpg"},
			{model:'212V', name:'Honda', img_url:"img/axiyo_1.jpg"}
		]
	}
});
