var lala = document.querySelector("#body");
var seleccionado=0;

for(let i=1;i<=5; i++){
    var bi = document.querySelector(`#b${i}`);
};

function Reset(){
    b1.className="b";
    b2.className="b";
    b3.className="b";
    b4.className="b";
    b5.className="b";
}


lala.addEventListener("click", function(r){

    if(r.target.textContent==1){
        Reset();
        seleccionado= 1;  
        b1.className="bb";
    }
    else if(r.target.textContent==2){
        Reset();
        seleccionado=2;
        b2.className="bb";
    }
    else if(r.target.textContent==3){
        Reset();
        seleccionado=3;
        b3.className="bb";
    }
    else if(r.target.textContent==4){
        Reset();
        seleccionado=4;
        b4.className="bb";
    }
    else if(r.target.textContent==5){
        Reset();
        seleccionado=5;
        b5.className="bb";
    }
    else if(r.target.textContent=="Aceptar" && seleccionado>0){
        tar1.style="display:none";
        tar2.style="display:block";
        parrafo2.innerHTML=`Has elegido ${seleccionado} de 5`;

    }
    else if(r.target.textContent=="Aceptar" && seleccionado==0){
        alert("Escoja una opción por favor");

    }
    else if(r.target.textContent=="X"){
        location.reload();
    }

})


