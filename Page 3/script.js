document.querySelector(".main",addEventListener("wheel",(e)=>{
    
    if(e.deltaY>0){
        document.querySelector(".header").style.backgroundColor="black";
        
    }
    else if(e.deltaY<0){
        document.querySelector(".header").style.backgroundColor="transparent";
        
    }
}))