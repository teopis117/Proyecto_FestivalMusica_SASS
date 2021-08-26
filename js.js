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
   
    const id = parseInt(e.target.dataset.imagenId)
    console.log(id);

    //con esto generamos la imagen
    const imagen=document.createElement('IMG');
    imagen.src=`src/img/grande/${id}.jpg`;
}