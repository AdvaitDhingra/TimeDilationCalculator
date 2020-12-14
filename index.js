function dilate(){
    var c = 299792458;
    var v = document.getElementById("velocity").value;
    var t = document.getElementById("movement-time").value;
    //var t0 = document.getElementById("stationary").innerHTML;

    document.getElementById("stationary").innerHTML = String("Time observed by stationary observer:" + formula(t, v, c) + "s");
}
function formula(t, v, c){
    return t/(Math.sqrt(1 - ((v**2)/(c**2))))
}