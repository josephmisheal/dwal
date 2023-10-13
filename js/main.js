function jo(){
    var y= parseFloat(document.getElementById("days").value) ;
    var x= parseFloat(document.getElementById("step").value );
    
    var sum = 0;
    for( var i=0 ; i <= y; i++){
        sum+=i;
    }
    
document.getElementById("result").innerHTML=sum*x;
return false;
}