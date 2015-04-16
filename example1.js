var maths = (function(){
	"use strict";
	var res;
	
	function sum(a, b){
		res = a + b;
		log("The result is " + res);
		return res;
	}
	
	function triangleArea(b, h){
		res = (b*h)/2.0;
		log("The area is " + res);
		return (b*h)/2.0;
	}
	
	function log(str){
		console.log(str);
	}
	
	log("Initializing the math module ...");
	
	return {
		suma : sum,
		areaTriangulo : triangleArea
	}
})();

var events = {
	onClickCalculate: function(){
		maths.suma(30, 75);
		maths.areaTriangulo (1, 3);
	}
}

