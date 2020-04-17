document.oncontextmenu=function(){return false;}
document.onselectstart=function(){return false;}
document.onmousedown=function(){return false;}
document.onkeydown = function(e) {
     if (e.ctrlKey && 
     (e.keyCode === 67 || 
     e.keyCode === 86 || 
     e.keyCode === 85 || 
     e.keyCode === 117)) {
     alert('не сегодня, братишка');
     return false;
     } else {
     return true;
     }
     };