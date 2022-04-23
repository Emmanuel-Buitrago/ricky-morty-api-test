let cerrar = document.querySelectorAll(".close")[0];
let abrir  = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

let cerrar2 = document.querySelectorAll(".close2")[1];
let abrir2  = document.querySelectorAll("#cta1")[1];
let modal2 = document.querySelectorAll(".modal2")[1];
let modalC2 = document.querySelectorAll(".modal_container2")[1];




/* modal de morthy */


abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");

});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },1000);
});


window.addEventListener("click", function (e){
   this.console.log(e.target) 
   if(e.target == modalC){
    modal.classList.toggle("modal-close");
    
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },1000)
   }
});

/*modal de rick*/

abrir2.addEventListener("click", function(a){
    a.preventDefault();
    modalC2.style.opacity="1";
    modalC2.style.visibility ="visible";
    modal2.classList.toggle("modal_close2");
});

cerrar2.addEventListener("click", function(){
    modal2.classList.toggle("modal_close2");

    setTimeout(function(){ 
        modalC2.style.opacity = "0";
        modalC2.style.visibility ="hidden";
    },700);
});

window.addEventListener("click", function(a){
    this.console.log(a.target)
    if(a.target == modalC2){
        modal2.classList.toggle("modal_close2");

        this.setTimeout(function(){
            modalC2.style.opacity = "0";
            modalC2.style.visibility="hidden";
        },700);
    }
})
