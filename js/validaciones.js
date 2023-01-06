 export function valida(input){
    const tipoInput = input.dataset.tipo;
    if(validadores[tipoInput])
    {
        validadores[tipoInput](input);
    }

    if(input.validity.valid)
    {
       input.parentElement.classList.remove("input-container--invalid");
       input.parentElement.querySelector(".input-message-error").innerHTM="";
        
    }
    else
    {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML=mostrarMensajeDeError(tipoInput,input);
    }
}

const tipoDeErrores = ["valueMissing","typeMismatch","patternMismatch","customError"];
const mensajesError ={
    nombre:{
        valueMissing: "Este campo no puede estar vacio"
    },
    email:{
        valueMissing:"Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"Al menos 6 caracter maximos 12, debe contener una letra minusculas, una mayuscula, un numero y no puede contener caracteres especiales",

    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad"
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es: xxxx xxxxxxx 10 numeros"
    },
    direccion: {
        	valueMissing:"Este campo no puede estar vacio",
            patternMismatch: "La direccion debe contener en 10 y 40 caracteres"
    },
    ciudad: {
            valueMissing:"Este campo no puede estar vacio",
            patternMismatch: "La ciudad debe contener en 10 y 40 caracteres"
    },
    provincia: {
            valueMissing:"Este campo no puede estar vacio",
            patternMismatch: "La provincia debe contener en 10 y 40 caracteres"

    }

}
const validadores={
    nacimiento:(input)=>validarNacimiento(input)
}

function mostrarMensajeDeError(tipoInput,input){
    let mensaje="";
    tipoDeErrores.forEach(error =>{
        if(input.validity[error])
        {
            console.log(error);
            console.log(input.validity[error]);
            console.log(mensajesError[tipoInput][error]);
            mensaje=mensajesError[tipoInput][error];
        }
    })
    return mensaje;
}
function validarNacimiento(input)
{
    const fecha=new Date(input.value);
    let mensaje="";
    if(!mayorDeEdad(fecha)){
        mensaje="Debes tener al menos 18 años de edad";
    }
    input.setCustomValidity(mensaje);
}
function mayorDeEdad(fecha)
{
    const fechaActual = new Date();
    if(fecha.value!=null){
        const diferenciasFecha = new Date(fecha.getUTCFullYear() + 18,fecha.getUTCMonth(),fecha.getUTCDate());
        return (diferenciasFecha<=fechaActual);
    }
    else
    {
        return true;
    }
}
