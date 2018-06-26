$(function() {
    var canvas=document.getElementById('MyCanvas');
    var context=canvas.getContext('2d');
    var x=0;
    var y=150;
    var w=225;
    var v=300;
    var z=450;
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(z,y);
    context.strokeStyle="red";
    context.stroke();
    context.beginPath();
    context.moveTo(w,x);
    context.lineTo(w,v);
    context.strokeStyle="green";
    context.stroke();
    
  });