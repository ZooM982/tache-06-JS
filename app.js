function calc(){
    var n1=parseInt(document.getElementById('n1').value);
    var n2=parseInt(document.getElementById('n2').value);
    
    document.getElementById('result').value=n1*n2;
    
}

function calc2(){
    var n3=parseInt(document.getElementById('n3').value);
    var oper= n3/4;
    document.write("Si l'on divise\n",n3, "\npar\n",4 , ",\nle reste est de\n",oper);
}
