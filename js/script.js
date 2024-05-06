function index(dir) {
    window.location.assign(dir)
}
// funciones relacionadas con el menú de navegación
function openMenu() {
    //funcion para que aparezca el menu emergente
    var aside = document.getElementById('menuLateral');
    var opaco = document.getElementById('capaOpaca');

    //capaOpaca

    aside.style.display = 'block';
    opaco.style.display = 'block'

}
function closeMenu() {
    //funcion para que desaparezca el menu emergente
    var aside = document.getElementById('menuLateral');
    var opaco = document.getElementById('capaOpaca');

    //capaOpaca

    aside.style.display = 'none';
    opaco.style.display = 'none'

}
function desplegarSubmenu(n) {
    var men = document.getElementsByClassName('subMenu')[n];
    var arrow = document.getElementsByClassName('menuArrow')[n];

    if (men.style.display == 'none' || men.style.display == '') {
        men.style.display = 'block';
        arrow.style.rotate = '-90deg';

    } else {
        men.style.display = 'none';
        arrow.style.rotate = '0deg';
    }
}

//funciones del contenido
// Galeria
let slideIndex = 1;
showSlides(slideIndex);

let run = setInterval(imgChange, 5000);
function imgChange() {
    if (slideIndex == 6) {
        slideIndex = 1;
    } else slideIndex++;
    showSlides(slideIndex);

}
// Next/previous controls
function plusSlides(n) {
    clearInterval(run);
    run = setInterval(imgChange, 5000);
    showSlides(slideIndex += n);
}

function showSlides(n) {
    try {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        //let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    } catch {
        console.log('no es la pagina de inicio');
        try{
            clearInterval(run);
        }catch{}
    }
}

//funciones del formulario de inicio/registo

function validar() {

    //primero tomar los valores introducidos
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('birthDate').value.split('-');
    //var dni = document.getElementById('dni').value;
    var pass = document.getElementById('pass').value;
    var pass2 = document.getElementById('pass2').value;

    var send = true;

    var error = null;

    vaciarError();

    /* de aqui en adelante se llama a la validacion de los campos 
     y se imprime el mensaje de error en caso de que lo haya */
    error = validarName(name);
    if (error != null) {
        document.getElementById('errorN').innerHTML = error;
        console.log(error);
        error = null;
        console.log(error);
        send = false;
    }

    error = validarName(lastName);
    if (error != null) {
        document.getElementById('errorLN').innerHTML = error;
        console.log(error);
        error = null;
        console.log(error);
        send = false;
    }

    error = validarDate(date);
    if (error != null) {
        document.getElementById('errorBD').innerHTML = error;
        console.log(error);
        error = null;
        console.log(error);
        send = false;
    }

    error = validarEmail(email);
    if (error != null) {
        document.getElementById('errorE').innerHTML = error;
        console.log(error);
        error = null;
        console.log(error);
        send = false;
    }

    /*
    error = validarDNI(dni);
    if (error != null) {
        document.getElementById('errorDNI').innerHTML = error;
        console.log(error);
        error = null;
        console.log(error);
        send=false;
    }
    */
    error = validarPassword(pass, pass2);



    if (send) {

        //funcion de envio
        console.log('se envia');

    }
}

function vaciarError() {
    //funcion que vacia los mensajes de error en caso de ser necesaria

    var errores = document.getElementsByClassName('error');

    for (i = 0; i < errores.length; i++) {
        errores[i].innerHTML = '';
    }

}

function validarName(name) {
    //funcion que comprueba que nombre y apellido son cadenas solo de texto
    var respuesta = null;
    var testName = /^[A-Za-z]+$/;//expresion regular para solo letras mayusculas o minusculas

    if (name.length != 0) {
        if (!testName.test(name)) {
            respuesta = 'El campo solo puede contener letras';
        }
    } else respuesta = 'El campo es obligatorio';

    return respuesta;
}

function validarPassword(pass, pass2) {
    //funcion que valida la contraseña
    var respuesta = null;


    if (pass.length > 6) {
        if (pass != pass2) respuesta = 'las contraseñas no coinciden';
    } else respuesta = 'El campo tiene que tener mas de 6 caracteres';

    return respuesta;
}

function validarEmail(email) {
    //funcion que comprueba que el email temga la forma correcta
    var respuesta = null;
    var testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.length != 0) {
        if (!testEmail.test(email)) {
            respuesta = 'El email ntroducido no es correcto';
        }
    } else respuesta = 'El campo es obligatorio';

    return respuesta;

}

function validarDate(date) {
    //funcion que comprueba si el usuario es mayor de edad
    var respuesta = null;
    var today = new Date();
    var edad = today.getFullYear() - parseInt(date[0]);
    if (date.length == 3) {
        if (edad > 17) {
            if (edad == 18) {
                if (today.getMonth() < parseInt(date[1])) {
                    respuesta = 'no eres mayor de 18 años';
                    if (today.getMonth() == parseInt(date[1])) {
                        if (today.getDay() > parseInt(date[2])) {
                            respuesta = null;
                        }
                    }
                }
            }
        } else respuesta = 'no eres mayor de 18 años';
    } else respuesta = 'El campo es obligatorio';

    return respuesta;

}

function changeForm() {
    var inicio = document.getElementById('id_inicio');
    var registro = document.getElementById('id_registro');
    if (registro.style.display == 'none' || registro.style.display == '') {
        inicio.style.display = 'none';
        registro.style.display = 'flex';
    } else {
        inicio.style.display = 'flex';
        registro.style.display = 'none';
    }
}

function login() {
    console.log('sin BD no hay validacion de inicio de sesion');
}

//funciones de la tienda de merchan
document.onkeydown = function (e) {
    //console.log(e.key);
  if (e.key === "Escape") {
    // La tecla Enter/Return
    try{
        let element = document.querySelector('.capaOpaca');
        removeElement(element);
    }catch{ 
        console.log('nada que eliminar');
        
    }
  }
};
function cargarTienda() {
    mensajeAleatorio();
    let imagenes = document.querySelectorAll('.producto img');
    imagenes.forEach(imagen => {
        imagen.addEventListener('click', () => {
            //console.log(imagen.src);
            changeImg(imagen.src);
        });
    });
}
function changeImg(imgSrc) {
    let capaOpaca = document.createElement('div');
    let imgArticulo = document.createElement('img');
    let cierre = document.createElement('span');

    let body = document.querySelector('body');
    let atrClick = document.createAttribute('onClick');

    atrClick.value='removeElement(this.parentElement)'
    capaOpaca.setAttribute('class', 'capaOpaca');
    cierre.innerHTML='X';
    cierre.setAttribute('class', 'cierre');
    cierre.setAttributeNode(atrClick);
    imgArticulo.setAttribute('src',imgSrc);

    //console.log(imgArticulo);

    capaOpaca.appendChild(imgArticulo);
    capaOpaca.appendChild(cierre);


    //console.log(capaOpaca);

    body.appendChild(capaOpaca)


}
function removeElement(element){
    element.remove();

}
function mensajeAleatorio() {
    const mensajes = [
        '¡Bienvenido a la tienda de comics más increíble del muchiverso!',
        '¡Prepárate para sumergirte en el mundo de los superhéroes y las aventuras!',
        '¿Listo para encontrar los cómics más épicos y los coleccionables más buscados?',
        '¡Explora nuestro catálogo y descrubre un nuevo universo de emociones!',
        'Aquí encontrás todo lo que necesitas para convertirte en un verdadero fan de los cómics'
    ];
    let n = Math.floor(Math.random() * mensajes.length);
    let h2 = document.createElement('h2');
    h2.innerHTML = mensajes[n];
    console.log(mensajes[n]);
}
//funciones de la tienda de Comic
function cargarComic(){
    let imagenes = document.querySelectorAll('.mini');
    imagenes.forEach(imagen => {
        imagen.addEventListener('click', () => {
            //console.log(imagen.src);
            verImg(imagen.src);
        });
    });
    let portada = document.querySelectorAll('.maximizada');
    portada.forEach(imagen => {
        imagen.addEventListener('click', () => {
            //console.log(imagen.src);
            changeImg(imagen.src);
        });
    });
    
}
function verImg(source){


    let portada = document.getElementById('port');
    let direccion = source.split('/');
    if(direccion.length == 10){
        //console.log(direccion[direccion.length-1]);
        portada.src='../img/Clasicos/'+direccion[direccion.length-1];
    }else{
        //console.log(direccion.length);
        //console.log(direccion[direccion.length]);
        portada.src='../img/Clasicos/ComandosEnAccion2/'+direccion[direccion.length-1];
    }
}

//funciones de la pagina de obras
function obras(){
    let n = Math.floor(Math.random()*4)+1;
    console.log(n);
    document.getElementById('obras').src='img/workInProgress/'+n+'.jpg';
}