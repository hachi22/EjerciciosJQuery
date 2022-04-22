const btn = document.getElementById("interruptor");
var help=0;
btn.onclick = () => {
    document.getElementById("body").classList.toggle("bodyy");
    if (help == 0){
        btn.src = "bon.jpg";
        help++;
        startConfetti();
        document.getElementById("containerId").style.display = "block";
    }else{
        btn.src = "boff.jpg";
        help--;
        stopConfetti();
        document.getElementById("containerId").style.display = "none";
    }
        
    }