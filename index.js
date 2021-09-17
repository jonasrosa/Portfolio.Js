
const monstro = document.getElementById('monstro');
const inputUsuario = document.getElementById('input-usuario');
const inputChave = document.getElementById('input-chave')
const body = document.querySelector('body');
const alturaJanela= window.innerHeight/2
const larguraJanela = window.innerWidth/2
const cursor = document.querySelector(".cursor")


let seguirMouse= true;
var timeout;


body.addEventListener('mousemove',(movimento)=>{

    if(seguirMouse){
        if(movimento.clientX < larguraJanela && movimento.clientY< alturaJanela){
        monstro.src= "img/idle/2.png"
    }else   if(movimento.clientX > larguraJanela && movimento.clientY >alturaJanela ){
       monstro.src="img/idle/4.png"
   }else if(movimento.clientX > larguraJanela && movimento.clientY <alturaJanela){
       monstro.src="img/idle/5.png"

   }else{
       monstro.src="img/idle/3.png"
   }
    }
    let x = movimento.pageX
    let y = movimento.pageY
    cursor.style.top= y+ "px"
    cursor.style.left= x+"px"
    cursor.style.display= "block"

    function mouseStopped(){
        cursor.style.display="none"
    }
    timeout = setTimeout(mouseStopped,1000)
    

    
})

document.addEventListener("mouseout",()=>{
    cursor.style.display= "none";
})

inputUsuario.addEventListener('focus',()=>{
    seguirMouse=true
})
inputUsuario.addEventListener('blur',()=>{
    seguirMouse= false
})
inputUsuario.addEventListener('keyup',()=>{
    seguirMouse=false;
    let contadorLetras = inputUsuario.value.length;
    if(contadorLetras>= 0&& contadorLetras<=10){
        monstro.src="img/read/1.png"
    }else if(contadorLetras>=11 && contadorLetras<=20){
        monstro.src="img/read/2.png"
    }else if(contadorLetras>=21 && contadorLetras<=30){
        monstro.src="img/read/3.png"
    }else if(contadorLetras>=31 ){
        monstro.src="img/read/4.png"
    }
})

inputChave.addEventListener('focus',()=>{
   
    seguirMouse=true;
    let cont = 1;
    const esconderRosto= setInterval(()=>{
        monstro.src="img/cover/"+cont+".png"
        if(cont< 8){
            cont++;

        }else{
            clearInterval(esconderRosto)
        }
    },60);
    
})
inputChave.addEventListener('blur',()=>{
    seguirMouse=false;
    let cont = 7;
    const mostrarRosto= setInterval(()=>{
        monstro.src="img/cover/"+cont+".png"
        if(cont> 1){
            cont--;

        }else{
            clearInterval(monstro)
        }
    },60);
    
})




