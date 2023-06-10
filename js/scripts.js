function gerarCor(){
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    var opt = document.getElementById("opt").value;

    if(opt < 10){
      opt = "0."+opt;
    }else{
      opt = 10
    }
   
   var cor = "rgba("+red+","+green+","+blue+","+opt+")";

   document.getElementById("cor").style.background = cor;

   document.getElementById("txtRed").innerHTML = "R: "+red;
   document.getElementById("txtGreen").innerHTML = "G: "+green;
   document.getElementById("txtBlue").innerHTML = "B: "+blue;
   document.getElementById("txtOpt").innerHTML = "Opacidade: "+opt;

    setTimeout("gerarCor()", 10);
}