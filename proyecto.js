//Datos Generales

function Leermasdatosgenerales(){
    var puntos=document.getElementById("datosgenerales");
    var vermas=document.getElementById("columna1");
    var boton=document.getElementById("boton");
    if (puntos.style.display ==="none"){   
        puntos.style.display = "inline";
        vermas.style.display = "none";
        boton.innerHTML = "Datos Generales";
    }else{
        puntos.style.display = "none";
        vermas.style.display = "inline";
        boton.innerHTML = "Datos Generales";
    }
}
//Formacion Academica

function Leermasformacionacademica(){
    var puntos=document.getElementById("Formacionacademica");
    var vermas=document.getElementById("columna2");
    var boton=document.getElementById("boton2");
    if (puntos.style.display ==="none"){   
        puntos.style.display = "inline";
        vermas.style.display = "none";
        boton.innerHTML = "Formacion Academica";
    }else{
        puntos.style.display = "none";
        vermas.style.display = "inline";
        boton.innerHTML = "Formacion Academica";
    }
}
//Experiencia laboral 

function Leermasexperiencialaboral(){
    var puntos=document.getElementById("Experiencialaboral");
    var vermas=document.getElementById("columna3");
    var boton=document.getElementById("boton3");
    if (puntos.style.display ==="none"){   
        puntos.style.display = "inline";
        vermas.style.display = "none";
        boton.innerHTML = "Experiencia Laboral";
    }else{
        puntos.style.display = "none";
        vermas.style.display = "inline";
        boton.innerHTML = "Experiencia Laboral";
    }
}
// Video

function Vervideoinformativo(){
    var puntos=document.getElementById("videoinfo");
    var vermas=document.getElementById("columna4");
    var boton=document.getElementById("boton4");
    if (puntos.style.display ==="none"){   
        puntos.style.display = "inline";
        vermas.style.display = "none";
        boton.innerHTML = "Video CV";
    }else{
        puntos.style.display = "none";
        vermas.style.display = "inline";
        boton.innerHTML = " Video CV";
    }
}