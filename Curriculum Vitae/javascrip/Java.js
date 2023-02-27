let elementosAcordeon= document.getElementsByClassName("acordeon");
    for (let i=0 ; i< elementosAcordeon.length; i++)(
        elementosAcordeon[i].addEventListener("click",function(){
            let panel = this.nextElementSibling;
            if (panel.style.display == "block") {
                panel.style.display = "none" ; 
            } else{
                panel.style.display = "block";
            }
        })
    )