// recordando que DOMCONTENTLOADED nos servira para ejecutar alguna funcion cuando todo el codigo html este cargado
// alert('hola');
document.addEventListener('DOMContentLoaded',function()
{
    crearGaleria();
});


function crearGaleria()
{
    const galeria=document.querySelector('.galeria-imagenes');
    

    for(let i=1;i<=12;i++)
    
    {
        //primero generamos la imagen
        const imagen=document.createElement('IMG');
        // podemos recorrer varios elementos de una carpeta con esta sintaxis
        imagen.src=`src/img/thumb/${i}.jpg`;
        // con dataset podemos crear atributos a elemetentos html
        imagen.dataset.imagenId=i;
        
        //añadir la funcion de mostrar imagen
        imagen.onclick=mostrarImagen;
        const lista=document.createElement('LI');
        //en los li agreamos las imagent
        lista.appendChild(imagen);
        //y en la lista o ul agremos los LI
        galeria.appendChild(lista);
    }
};


function mostrarImagen(e)
{
    // con parseInt podemos parsear un elemento para ser un numero siempre y cuando tenga la forma de u numero ejemplo 12=12 
   
    const id = parseInt(e.target.dataset.imagenId);
    console.log(id);

    //con esto generamos la imagen
    const imagen=document.createElement('IMG');
    imagen.src=`src/img/grande/${id}.jpg`;

    // recordemos que cuando creamos un elemento  adentro de esa funcion colocaremos lo que querramos crear en Mayusculas
    const overlay =document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');


    //boton para cerrar las fotos

    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');   


    // cuando se da click cerrar la imagen
    overlay.onclick= function()
    {
        overlay.remove();
    }
    // cuando se preciona la X se cerrara la imagen

    cerrarImagen.onclick = function()
    {
        overlay.remove();
    }


overlay.appendChild(cerrarImagen);




    //mostrar en el html

    const body = document.querySelector('body');
    // con appendChild es la manera de agregar el codigo de js en el html

    body.appendChild(overlay);
    body.classList.add('fijar-body');

}


// Function != function

document.addEventListener('DOMContentLoaded', function()
{
 scrollNav();
 navegacionFija();

});


function navegacionFija()
{
const barra=document.querySelector('.header');
{
    //elemento a observar
    const observer = new IntersectionObserver(function (entries)
    {
        if(entries[0].isIntersecting)
        {
            barra.classList.remove('fijo');
            console.log("si estos");
        }
        
        else
        {
            barra.classList.add('fijo');
            console.log("nop estos");
        }
    })
    //que hara el elemento a observar
    observer.observe(document.querySelector('.sobre-festival'))

}}




function scrollNav()
{
const enlaces =document.querySelectorAll('.navegacion-principal a');

//no puedes agregar un addeventlistener a un elemento debe de ser solo un elemento

 enlaces.forEach(function(enlace)
 {
     enlace.addEventListener('click',function(e)
     {
        e.preventDefault();
        //  de esta manera podemos acceder al valor que tenga el atributo de href
        const seccion =document.querySelector(e.target.attributes.href.value);
        seccion.scrollIntoView(
            {
                // con behavior podemos hacer la animacion del scroll pero de manerca mas lenta y vistoza
                behavior:'smooth',
            }
        );
     });
 })



};