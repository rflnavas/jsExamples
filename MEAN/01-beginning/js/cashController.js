//We are using the immediately-invoked function expression (or IIFE)
/* From wikipedia
Immediately-invoked function expressions can be used to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the function.

An IIFE protects a module’s scope from the environment in which it is placed
*/
(function () {
    /*This function is defined by the name of the controller and 
    contains the necessary code to make double-bind works.
    Moreover, the function itself is the ViewModel*/
    'use strict';
    function cashController() {
        //vm stands for ViewModel. It's strongly recommended that 'this' is referenced by a variable
        //This will let the code be easier to maintain
        var vm = this;
        //initialization
        vm.titulo = "Controla tu $$$";
        
        vm.total = {
            ingresos : 0,
            gastos : 0,
            balance : 0
        };
        
        vm.categorias = {
            gastos : ["Compras", "Facturas", "Hipoteca"],
            ingresos : ["Nómina", "Ventas", "Renta"]
        };
        vm.items = [{id : 1, name:'foo'}, 
                    {id : 2, name: 'bar'},
                    {id : 3, name: 'blah'}]; 
        vm.nuevoMovimiento = {
            importe : 0,
            fecha : new Date(),
            esIngreso : 1,
            esGasto : 0,
            categoria: ''
        };
        vm.movimientos = [];
        vm.setIngreso = function() {
            vm.nuevoMovimiento.esIngreso = 1; 
            vm.nuevoMovimiento.esGasto = 0;
        }
        vm.setGasto = function() {
            vm.nuevoMovimiento.esIngreso = 0; 
            vm.nuevoMovimiento.esGasto = 1;
        }
        vm.balance = function() {
            vm.total.balance = vm.total.ingresos - vm.total.gastos;
            //Don't forget to return the value if the view has something like {{cshCtrl.balance()}}
            return vm.total.balance;
        }
        
        vm.addMovimiento = function(){
            //alert("Añadiendo movimiento");
            if(vm.nuevoMovimiento.esGasto){
                vm.total.gastos += vm.nuevoMovimiento.importe;
            }
            if(vm.nuevoMovimiento.esIngreso){
                vm.total.ingresos += vm.nuevoMovimiento.importe;
            }
            vm.nuevoMovimiento.tipo = vm.tipo(vm.nuevoMovimiento);
            //Creates a deep copy of source, which should be an object or an array
            var auxCpyMov = angular.copy(vm.nuevoMovimiento);
            
            vm.movimientos.push(auxCpyMov);
            vm.nuevoMovimiento.importe = 0;
        }
        
        vm.tipo = function (movimiento){
           return movimiento.esIngreso && 'Ingreso' || 'Gasto';
        }
        //
    }
    //Retrieving the module instance
    var modulo = angular.module('cashManagerApp');
    //The cashController will be attached with the cash manager module
    modulo.controller('cashController', cashController);
    
}());