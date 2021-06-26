//length
var miles = document.querySelector('#mileInput');
var km = document.querySelector('#kilomeInput');


document.getElementById('mileInput').addEventListener('input', function(e){
  let miles = e.target.value;
  km.value = miles/0.621371;
  })


document.getElementById('kilomeInput').addEventListener('input', function(e){
  let km = e.target.value;
  miles.value = km/1.60934;
})



//temp
var cel = document.querySelector('#celcInput');
var far = document.querySelector('#farnInput');

document.getElementById('celcInput').addEventListener('input', function(e){
  let cel = e.target.value;
  far.value = cel * 9/5 + 32;
})

document.getElementById('farnInput').addEventListener('input', function(e){
  let far = e.target.value;
  cel.value = (far-32) * (5/9);
})



//volume

var kgs = document.querySelector('#kgInput');
var pounds = document.querySelector('#poundInput');

document.getElementById('kgInput').addEventListener('input', function(e){
  let kgs = e.target.value;
  pounds.value = kgs*2.2046;
})

document.getElementById('poundInput').addEventListener('input', function(e){
  let pounds = e.target.value;
  kgs.value = pounds/2.2046;
})
