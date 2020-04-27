

function clearCalc(){
    document.getElementById('console').innerHTML = "";
    document.getElementById('res').innerHTML = 0;
}

function setVal(par){
    document.getElementById('console').innerHTML += par;
}


function calculate(){
    var expresion = document.getElementById('console').innerHTML;
    var res = eval(expresion);
    document.getElementById('res').innerHTML = res;
}
