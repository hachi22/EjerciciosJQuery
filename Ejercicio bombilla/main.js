const btn = document.getElementById("interruptor");
var help=0;
btn.onclick = () => {
    if (help == 0){
        btn.src = "bon.jpg";
        help++;
    }else{
        btn.src = "boff.jpg";
        help--;
    }
        
    }