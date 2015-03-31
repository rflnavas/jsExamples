

function init() {
    'use strict';
    var time = document.querySelector("#time1");
   // console.log(time.attributes.datetime.value);
    var date = new Date(time.attributes.datetime.value);
    console.log(date);
}