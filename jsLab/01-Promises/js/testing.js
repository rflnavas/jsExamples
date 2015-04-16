var counter = 0 ;

var events = {};

(function(){
    events = { correctExam: function(){
        "use strict";
        var random;
        //Perform a long task and get the score in the end.
        var promise = new Promise(function(resolve, reject){
            setTimeout(function(){
                random = Math.floor(Math.random() * 10);
                if(random < 5){
                    reject({"grade": "Fail", "mark":random});
                }else{
                    resolve({"grade" : "Pass", "mark":random});
                }
            }, Math.random() * 10 + 1000);
        });

        promise.then(function(jsonResult){
            if(jsonResult === undefined){
                console.error("Wooops! There's no value to retrieve");
                return;
            }
            var pResult = document.querySelector("#pResult");
            pResult.innerHTML += "|" + jsonResult['grade'] + ":" + jsonResult['mark'] + " :-D";

        }).catch(function(jsonResult){
            var pResult = document.querySelector("#pResult");
            pResult.innerHTML += "|" + jsonResult['grade'] + ":" + jsonResult['mark'] + " :-(";
        });  
        }
    };
    
}());

function corregir(){
    events.correctExam();
}